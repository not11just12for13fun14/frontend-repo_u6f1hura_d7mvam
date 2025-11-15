import { motion } from 'framer-motion'

export default function VideoSamples() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Featured Samples
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-4 text-sm text-white/80">Sample for Clipping</div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Clipping Sample"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
          >
            <div className="p-4 text-sm text-white/80">Sample for Long/Short Form</div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9bZkp7q19f0"
                title="Long/Short Form Sample"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Easter egg zones */}
      <div className="hidden md:block">
        <EasterEggZone position="top-10 left-10" message="You found a secret spark!"/>
        <EasterEggZone position="bottom-10 right-10" message="Hidden boost activated!"/>
      </div>
    </section>
  )
}

function EasterEggZone({ position = '', message = '' }) {
  return (
    <div className={`pointer-events-auto ${position} fixed z-20`}> 
      <button
        className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 backdrop-blur-md text-xs"
        onClick={() => alert(message)}
      >
        Hover me
        <span className="absolute -inset-2 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors" />
      </button>
    </div>
  )
}
