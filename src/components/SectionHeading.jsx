import Reveal from './Reveal'

export default function SectionHeading({ title, text, center = true }) {
  return (
    <Reveal className={`mb-14 max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <div className={`mt-5 h-px w-20 bg-gold-grad ${center ? 'mx-auto' : ''}`} />
      {text && <p className="mt-5 text-lg leading-relaxed text-white/60">{text}</p>}
    </Reveal>
  )
}
