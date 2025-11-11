import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', dark)
  },[dark])

  const links = [
    {href:'#work', label:'Work'},
    {href:'#services', label:'Services'},
    {href:'#about', label:'About'},
    {href:'#contact', label:'Contact'},
  ]

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#00FF94] to-[#00D1FF]" />
            <span className="font-semibold">Kiwi Creative</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white">{l.label}</a>
            ))}
            <button onClick={()=>setDark(!dark)} className="rounded-full border border-white/10 bg-white/5 p-2">
              {dark ? <Sun size={16}/> : <Moon size={16}/>}
            </button>
          </div>

          <button onClick={()=>setOpen(true)} className="md:hidden"><Menu/></button>
        </div>
      </div>

      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="fixed inset-0 z-50 bg-black/70 backdrop-blur">
          <motion.div initial={{y:-20,opacity:0}} animate={{y:0,opacity:1}} className="mx-auto mt-24 w-11/12 max-w-md rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 text-white">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button onClick={()=>setOpen(false)}><X/></button>
            </div>
            <div className="mt-4 grid gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">{l.label}</a>
              ))}
              <button onClick={()=>setDark(!dark)} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left">Toggle Theme</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
