import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiLoader,
} from 'react-icons/fi'

// Load credentials from environment variables (Vite uses import.meta.env)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

const CONTACT_CARDS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'vaishnavibhatakhande@gmail.com',
    href: 'mailto:vaishnavibhatakhande@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91-9353232139',
    href: 'tel:+919353232139',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Bengaluru, Karnataka',
    href: null,
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'vaishnavibhatakhande-cmd',
    href: 'https://github.com/vaishnavibhatakhande-cmd',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'vaishnavi-bhatakhande',
    href: 'https://linkedin.com/in/vaishnavi-bhatakhande-050150335',
  },
]


export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      // 1. Check if Web3Forms is configured
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.trim() !== '') {
        const formData = new FormData(formRef.current)
        formData.append('access_key', WEB3FORMS_ACCESS_KEY)

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
        })

        const data = await response.json()

        if (data.success) {
          setStatus('success')
          formRef.current?.reset()
        } else {
          console.error('Web3Forms Error:', data)
          setStatus('error')
        }
        return
      }

      // 2. Check if EmailJS is configured
      const hasEmailJs =
        EMAILJS_SERVICE_ID &&
        EMAILJS_TEMPLATE_ID &&
        EMAILJS_PUBLIC_KEY &&
        !EMAILJS_SERVICE_ID.startsWith('YOUR_') &&
        EMAILJS_SERVICE_ID.trim() !== ''

      if (hasEmailJs) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        )
        setStatus('success')
        formRef.current?.reset()
        return
      }

      // 3. Fallback: Submit to FormSubmit.co to vaishnavibhatakhande@gmail.com
      console.warn(
        'Neither Web3Forms nor EmailJS is configured. Submitting via FormSubmit.co.'
      )
      
      const name = formRef.current.user_name?.value || ''
      const email = formRef.current.user_email?.value || ''
      const subject = formRef.current.subject?.value || ''
      const message = formRef.current.message?.value || ''

      const response = await fetch('https://formsubmit.co/ajax/vaishnavibhatakhande@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Subject: subject,
          Message: message
        })
      })

      const data = await response.json()

      if (data.success === 'true' || data.success === true) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        console.error('FormSubmit Error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-section grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.p>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            Let's build &amp; test together
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ transformOrigin: 'left' }}
            className="h-1 w-20 rounded-full bg-gradient-to-r from-[#0071E3] to-[#40A9FF] my-4"
          />

          <motion.p
            className="section-subtitle !mt-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Open to Software Testing, QA Automation, and Full-Stack opportunities —
            feel free to reach out directly.
          </motion.p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href }, i) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 dark:bg-accent-sky/10 text-primary dark:text-accent-sky">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                      {value}
                    </p>
                  </div>
                </>
              )

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="glass-card flex items-center gap-3 p-4 hover:-translate-y-1 transition-transform"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass-card flex items-center gap-3 p-4">{content}</div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="glass-card p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-transparent px-4 py-2.5 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary dark:focus:border-accent-sky outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-transparent px-4 py-2.5 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary dark:focus:border-accent-sky outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="subject" className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="What's this about?"
              className="mt-1.5 w-full rounded-xl border border-slate-300 dark:border-white/15 bg-transparent px-4 py-2.5 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary dark:focus:border-accent-sky outline-none transition-colors"
            />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me a bit about the opportunity or project..."
              className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 dark:border-white/15 bg-transparent px-4 py-2.5 text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:border-primary dark:focus:border-accent-sky outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary mt-6 w-full disabled:opacity-70"
          >
            {status === 'sending' ? (
              <>
                <FiLoader className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="mt-4 text-center text-sm font-medium text-accent-teal">
              Thanks for reaching out! I'll reply as soon as I can.
            </p>
          )}
          {status === 'error' && (
            <p className="mt-4 text-center text-sm font-medium text-red-500">
              Something went wrong — please email me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
