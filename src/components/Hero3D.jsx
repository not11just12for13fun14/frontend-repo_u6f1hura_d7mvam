import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero3D() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene as the background layer */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          className="pointer-events-auto"
        />
      </div>

      {/* Content overlay - lets pointer events pass through so Spline stays interactive */}
      <div className="relative z-20 h-full flex items-center pointer-events-none">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              Hey, I’m Litecor, video editor and clipper
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              Bringing 3–4 years of hands-on experience, I’ve partnered with a wide range of creators and brands, helping shape content that stands out in competitive niches. From short-form highlights to long-form storytelling, I’ve worked with top YouTubers such as Inspector Mindblow, consistently delivering edits that keep audiences hooked.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay - visual only, does not block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-10" />
    </section>
  )
}
