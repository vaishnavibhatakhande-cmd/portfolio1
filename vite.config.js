import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'

function devEmailPlugin() {
  return {
    name: 'dev-email-endpoint',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          return res.end(JSON.stringify({ success: false, message: 'Method not allowed' }))
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
        })
        req.on('end', async () => {
          try {
            const { name, email, subject, message } = JSON.parse(body || '{}')
            const env = loadEnv('development', process.cwd(), '')
            const user = env.GMAIL_USER || 'vaishnavibhatakhande@gmail.com'
            const pass = (env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '')

            if (!pass) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              return res.end(
                JSON.stringify({
                  success: false,
                  message: 'GMAIL_APP_PASSWORD is not set in .env file',
                })
              )
            }

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: { user, pass },
            })

            await transporter.sendMail({
              from: `"${name || 'Portfolio Visitor'}" <${user}>`,
              to: user,
              replyTo: email,
              subject: `Portfolio Message: ${subject || 'New Contact Request'}`,
              text: `From: ${name} (${email})\nSubject: ${subject}\n\nMessage:\n${message}`,
            })

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: true, message: 'Email sent successfully via Gmail SMTP' }))
          } catch (err) {
            console.error('Local Gmail SMTP error:', err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ success: false, message: err.message }))
          }
        })
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), devEmailPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
})
