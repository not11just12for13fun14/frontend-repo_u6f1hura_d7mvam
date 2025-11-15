import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Contact
        </motion.h2>
        <p className="text-white/70 mb-8">Let's collaborate. Send a message and I'll get back to you.</p>

        <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <iframe
            src="https://formspree.io/f/mleqzqer"
            className="w-full h-[520px]"
            title="Contact Form"
          />
        </div>
      </div>
    </section>
  )
}
