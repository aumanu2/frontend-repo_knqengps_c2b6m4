import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Palette, Video, MonitorSmartphone, Box, Rocket, Star, Quote } from 'lucide-react'

const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`relative w-full py-24 md:py-32 ${className}`}>
    <div className="mx-auto w-full max-w-7xl px-6">{children}</div>
  </section>
)

export function About() {
  return (
    <Section id="about" className="bg-[#0b0b0b] text-white">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            We’re a collective of designers, thinkers, and storytellers shaping brands that inspire trust and desire.
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-6 text-white/80 max-w-prose">
            From identity systems to digital products, we partner with ambitious teams to build design that moves people and drives growth.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2,duration:0.6}} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {k:'120+ global clients'},
              {k:'5+ years experience'},
              {k:'Trusted by startups & enterprises'},
            ].map((i)=> (
              <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <p className="font-semibold">{i.k}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#00FF94]/30 to-[#00D1FF]/30 blur-xl" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center min-h-[320px] sm:min-h-[420px] shadow-2xl" />
        </motion.div>
      </div>
    </Section>
  )
}

const services = [
  { icon: Palette, title: 'Brand Identity Design', desc: 'Distinctive marks, systems, and guidelines that endure.' },
  { icon: Sparkles, title: 'Social Media Design', desc: 'Campaigns that convert with scroll-stopping visuals.' },
  { icon: Video, title: 'Motion Graphics & Video Ads', desc: 'Stories in motion—crafted for attention.' },
  { icon: MonitorSmartphone, title: 'UI/UX & Web Design', desc: 'Elegant, fast, and conversion-focused digital experiences.' },
  { icon: Box, title: 'Packaging Design', desc: 'Tactile systems that make products irresistible.' },
  { icon: Rocket, title: 'Campaign Strategy', desc: 'Creative concepts that align teams and drive growth.' },
]

export function Services(){
  return (
    <Section id="services" className="bg-[#0b0b0b] text-white">
      <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
        What we do
      </motion.h3>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({icon:Icon, title, desc}) => (
          <motion.div key={title} whileHover={{y:-6}} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg transition-shadow hover:shadow-[0_0_40px_rgba(0,255,148,0.15)]">
            <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="h-full w-full bg-gradient-to-br from-[#00FF94]/10 to-[#00D1FF]/10" />
            </div>
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#00FF94]">
                <Icon size={24} />
              </div>
              <h4 className="mt-4 text-lg font-bold">{title}</h4>
              <p className="mt-2 text-sm text-white/75">{desc}</p>
              <button className="mt-4 inline-flex items-center gap-1 text-sm text-[#00D1FF]">
                Learn more <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Portfolio(){
  const projects = [
    {img:'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1976&auto=format&fit=crop', name:'Bright Bean', tag:'Branding'},
    {img:'https://images.unsplash.com/photo-1520975922136-c9725e6f45d8?q=80&w=2069&auto=format&fit=crop', name:'Aeris UI', tag:'UI/UX'},
    {img:'https://images.unsplash.com/photo-1506086679524-493c64fdfaa6?q=80&w=2069&auto=format&fit=crop', name:'Motion Reel', tag:'Motion'},
    {img:'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2069&auto=format&fit=crop', name:'Social Wave', tag:'Social'},
    {img:'https://images.unsplash.com/photo-1541870798-82e95fb53051?q=80&w=1974&auto=format&fit=crop', name:'Aurora Pack', tag:'Packaging'},
    {img:'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=2070&auto=format&fit=crop', name:'Kinetik', tag:'Branding'},
  ]

  return (
    <Section id="work" className="bg-[#0b0b0b] text-white">
      <div className="flex items-end justify-between gap-6">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Selected work
        </motion.h3>
        <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur hover:bg-white/10">View all</button>
      </div>

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]"></div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p)=> (
          <motion.div key={p.name} whileHover={{y:-6}} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl">
            <div className="relative">
              <img src={p.img} alt={p.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 transition-all group-hover:opacity-100">
                <div>
                  <p className="text-sm text-white/80">{p.tag}</p>
                  <h4 className="font-bold">{p.name}</h4>
                </div>
                <button className="rounded-full bg-white/10 p-2 backdrop-blur">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Testimonials(){
  const quotes = [
    {q:'Kiwi Creative transformed our online presence with a bold and modern visual identity. Our engagement skyrocketed.', a:'Emily R., Marketing Director, Bright Bean'},
    {q:'A partner that blends strategy with artistry. The results spoke for themselves.', a:'Daniel K., Founder, Aeris'},
  ]
  return (
    <Section id="testimonials" className="bg-[#0b0b0b] text-white">
      <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
        Words from partners
      </motion.h3>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {quotes.map((t)=> (
          <motion.blockquote key={t.a} whileHover={{y:-4}} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <Quote className="absolute -right-2 -top-2 h-32 w-32 text-white/5" />
            <p className="text-white/90">“{t.q}”</p>
            <footer className="mt-4 text-sm text-white/60">— {t.a}</footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}

export function Contact(){
  return (
    <Section id="contact" className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h3 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Let’s Create Something Brilliant.
        </motion.h3>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1,duration:0.6}} className="mt-4 text-white/80">
          Tell us your story, and we’ll design it beautifully.
        </motion.p>
        <form className="mt-10 grid gap-4 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="Name" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/30" />
            <input type="email" placeholder="Email" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/30" />
          </div>
          <select className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none focus:border-white/30">
            <option>Project Type</option>
            <option>Brand Identity</option>
            <option>Social Media</option>
            <option>Motion Graphics</option>
            <option>UI/UX & Web</option>
            <option>Packaging</option>
            <option>Campaign</option>
          </select>
          <textarea rows="5" placeholder="Message" className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 outline-none placeholder:text-white/50 focus:border-white/30" />
          <button type="button" className="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-semibold text-black">
            <span className="absolute inset-0 bg-gradient-to-r from-[#00FF94] to-[#00D1FF]" />
            <span className="absolute inset-0 blur-lg bg-gradient-to-r from-[#00FF94] to-[#00D1FF] opacity-50" />
            <span className="relative">Send Message</span>
          </button>
        </form>
      </div>
    </Section>
  )
}

export function Footer(){
  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-10 border-t border-white/10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00FF94] to-[#00D1FF]" />
            <span className="font-semibold">Kiwi Creative</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
          <p className="text-xs text-white/50">© {new Date().getFullYear()} Kiwi Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
