import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body || {}

  const user = process.env.GMAIL_USER || 'vaishnavibhatakhande@gmail.com'
  const pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')

  if (!pass) {
    return res.status(500).json({
      success: false,
      message: 'GMAIL_APP_PASSWORD environment variable is not configured.',
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: user,
      pass: pass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${name || 'Portfolio Visitor'}" <${user}>`,
      to: user,
      replyTo: email,
      subject: `Portfolio Message: ${subject || 'New Contact Request'}`,
      text: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background: #ffffff;">
          <h2 style="color: #0071E3; margin-top: 0;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #6e6e73; width: 80px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; color: #1d1d1f;">${name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #1d1d1f;"><a href="mailto:${email}" style="color: #0071E3;">${email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6e6e73;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #1d1d1f;">${subject || 'N/A'}</td>
            </tr>
          </table>
          <div style="padding: 16px; background: #f5f5f7; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #1d1d1f; white-space: pre-wrap;">
${message || 'No message provided.'}
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #86868b; text-align: center;">
            Sent from Vaishnavi P Bhatakhande Portfolio Contact Form
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully via Gmail SMTP' })
  } catch (error) {
    console.error('Nodemailer error:', error)
    return res.status(500).json({ success: false, message: error.message })
  }
}
