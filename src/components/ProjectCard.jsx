import Reveal from './Reveal'

export default function ProjectCard({ project, index = 0 }) {
  const { name, type, text, tags, from, to } = project
  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group overflow-hidden rounded-2xl border border-white/10 bg-panel transition duration-300 hover:border-gold/60">
        <div className="relative flex h-56 items-end overflow-hidden p-6" style={{ background: `linear-gradient(135deg, ${to}, #080808)` }}>
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-50 blur-2xl transition duration-700 group-hover:scale-125" style={{ background: from }} />
          <span className="relative font-display text-4xl font-semibold text-white drop-shadow">{name}</span>
        </div>
        <div className="p-7">
          <p className="text-sm font-semibold text-gold">{type}</p>
          <p className="mt-3 leading-relaxed text-white/60">{text}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">{t}</li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}
