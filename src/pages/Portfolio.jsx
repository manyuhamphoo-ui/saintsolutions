import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import Button from '../components/Button'
import { projects } from '../data/content'

export default function Portfolio() {
  return (
    <>
      <PageHeader title="Our Portfolio" text="Marketplaces, fashion, beauty and education: brands we have helped bring online." />
      <section className="pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}
        </div>
        <Reveal className="mt-16 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Want results like these?</h2>
          <Button to="/contact" className="mt-6">Start your project</Button>
        </Reveal>
      </section>
    </>
  )
}
