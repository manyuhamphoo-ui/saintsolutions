import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Card from '../components/Card'
import Button from '../components/Button'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" text="Websites and digital solutions designed to attract customers and grow revenue." />
      <section className="pb-24">
        <div className="container-x space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.id}>
              <div id={s.id}>
                <Card>
                  <div className={`grid items-center gap-8 lg:grid-cols-2 ${i % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                    <div>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 text-xl text-gold">{s.icon}</div>
                      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{s.title}</h2>
                      <p className="mt-4 text-lg leading-relaxed text-white/60">{s.short}</p>
                      <Button to={s.id === 'audits' ? '/audit' : '/contact'} variant="ghost" className="mt-7">{s.id === 'audits' ? 'Request an audit' : 'Get a quote'}</Button>
                    </div>
                    <ul className="space-y-4 rounded-xl bg-ink/60 p-6">
                      {s.points.map((p) => <li key={p} className="flex gap-3 text-white/80"><span className="text-gold">✓</span>{p}</li>)}
                    </ul>
                  </div>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
