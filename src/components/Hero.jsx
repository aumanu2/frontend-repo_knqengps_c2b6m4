import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore, onContact }) {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#0b0b0b] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,148,0.25),rgba(0,0,0,0)_40%),radial-gradient(ellipse_at_70%_20%,rgba(0,209,255,0.2),rgba(0,0,0,0)_35%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mb-4 text-sm tracking-widest text-[#00FF94]/80 uppercase"
          >
            Kiwi Creative
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-[900] leading-[0.95] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-[Montserrat,Inter,var(--font-sans)]"
          >
            We Design Brands That Stand Out.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/80"
          >
            Kiwi Creative blends strategy, art, and emotion to craft powerful visuals that connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={onExplore}
              className="group rounded-full bg-[#00FF94] px-6 py-3 text-black font-semibold shadow-[0_0_0_0_rgba(0,255,148,0.6)] transition-all duration-300 hover:shadow-[0_0_40px_10px_rgba(0,255,148,0.25)]"
            >
              Explore Our Work
            </button>
            <button
              onClick={onContact}
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
            >
              Let's Collaborate
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="h-14 w-8 rounded-full border border-white/30 p-1">
          <motion.div
            animate={{ y: [0, 18, 0], opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto h-3 w-3 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}
