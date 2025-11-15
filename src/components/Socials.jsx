import { Twitter, MessageCircleMore } from 'lucide-react'

export default function Socials() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-xl font-semibold mb-6">Connect</h3>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://twitter.com/litecorx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
          >
            <Twitter size={18} />
            <span>@litecorx</span>
          </a>
          <a
            href="https://discord.com/users/0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            title="litecor"
          >
            <MessageCircleMore size={18} />
            <span>litecor</span>
          </a>
        </div>
      </div>
    </section>
  )
}
