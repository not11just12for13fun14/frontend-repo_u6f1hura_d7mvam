import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('https://formspree.io/f/mleqzqer', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch (err) {
      setError('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Let’s work together
        </motion.h2>
        <p className="text-white/70 mb-10 max-w-2xl">
          Tell me about your project. I’ll reply with ideas, timeline, and a tailored quote.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6"
          >
            <h3 className="text-xl font-semibold mb-2">Quick details</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              <li>• Typical turnaround: 24–72 hours depending on scope</li>
              <li>• Formats: YouTube, TikTok, Reels, Shorts, long-form</li>
              <li>• What helps: links, raw footage notes, deadline</li>
            </ul>
            <div className="mt-6 text-sm text-white/60">
              Prefer email? Reach me at <span className="text-white">litecor@contact.me</span>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
          >
            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-200">
                Thanks! Your message has been sent. I’ll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="What’s this about?"
                    className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Share scope, links, deadlines, vibes…"
                    className="w-full rounded-lg bg-zinc-900/70 border border-white/10 px-4 py-3 outline-none focus:border-white/30 resize-y"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-rose-300 text-sm">{error}</div>
                )}

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center rounded-lg bg-white text-black px-5 py-3 font-medium hover:bg-zinc-200 transition disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  <span className="text-xs text-white/50">Powered by Formspree</span>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
