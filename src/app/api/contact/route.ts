import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

type ContactPayload = {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  message: string
  timeline?: string
}

const REQUIRED_FIELDS: Array<keyof ContactPayload> = ['name', 'email', 'projectType', 'message']
const REQUIRED_ENV_VARS = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'] as const

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]/g, ' ').trim()
}

export async function POST(request: Request) {
  let payload: Partial<ContactPayload>

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 })
  }

  const missingFields = REQUIRED_FIELDS.filter((field) => {
    const value = payload?.[field]
    return !value || (typeof value === 'string' && value.trim().length === 0)
  })

  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(', ')}` },
      { status: 400 }
    )
  }

  const missingEnv = REQUIRED_ENV_VARS.filter((key) => !process.env[key])

  if (missingEnv.length > 0) {
    return NextResponse.json(
      { error: `Email service is not configured. Missing env vars: ${missingEnv.join(', ')}` },
      { status: 500 }
    )
  }

  const parsedPort = Number(process.env.SMTP_PORT)
  const port = Number.isNaN(parsedPort) ? 587 : parsedPort
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE === 'true' || port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const {
    name,
    email,
    company = '',
    projectType,
    budget = '',
    message,
    timeline = '',
  } = payload as ContactPayload

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || 'Not provided'}`,
    `Project Type: ${projectType}`,
    `Budget: ${budget || 'Not provided'}`,
    `Timeline: ${timeline || 'Not provided'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const htmlBody = [
    '<h2>New Contact Request</h2>',
    `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
    company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : '',
    `<p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>`,
    budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : '',
    timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : '',
    `<p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    const fromAddressRaw = process.env.CONTACT_EMAIL_FROM ?? process.env.SMTP_USER ?? 'no-reply@example.com'
    const fromAddress = sanitizeHeader(fromAddressRaw)

    await transporter.sendMail({
      from: `${sanitizeHeader(name)} via Portfolio <${fromAddress}>`,
      to: process.env.CONTACT_EMAIL_TO ?? 'jasurwebdev@gmail.com',
      replyTo: email,
      subject: `New contact form submission from ${sanitizeHeader(name)}`,
      text: textBody,
      html: htmlBody,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact form email', error)
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again later.' },
      { status: 500 }
    )
  }
}
