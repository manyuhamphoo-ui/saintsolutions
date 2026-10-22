import { motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { services, whyUs, industries, projects, process, pricing } from '../data/content'
import logo from '../assets/logo.png'


function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className="
        pointer-events-none absolute 
        left-1/2 top-1/3 
        h-[34rem] w-[34rem]
        -translate-x-1/2 
        rounded-full 
        bg-gold 
        blur-[160px]"
      />


      <div className="container-x relative text-center">


        {/* Brand Logo */}
        <motion.img
          src={logo}
          alt="SaintSolutions Logo"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8
          }}
          className="
          mx-auto mb-10 
          h-28 sm:h-36
          w-auto
          object-contain
          drop-shadow-[0_0_35px_rgba(212,175,55,0.45)]
          "
        />


        <motion.h1
          initial={{
            opacity:0,
            y:30
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:0.9
          }}
          className="
          mx-auto max-w-5xl
          font-display 
          text-5xl 
          font-semibold 
          leading-[1.05]
          sm:text-7xl
          lg:text-8xl"
        >

          <span className="gold-text">
            Digital Solutions
          </span>

          <br />

          That Help Businesses Grow

        </motion.h1>



        <motion.p
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            delay:0.4
          }}
          className="
          mx-auto mt-8 
          max-w-2xl
          text-lg
          leading-relaxed
          text-white/65
          sm:text-xl"
        >
          SaintSolutions designs premium websites,
          e-commerce platforms, and digital experiences
          that help businesses build trust and attract customers.
        </motion.p>



        <motion.div
          initial={{
            opacity:0,
            y:20
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            delay:0.6
          }}
          className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row"
        >

          <Button to="/contact">
            Start Your Project
          </Button>


          <Button
            to="/audit"
            variant="ghost"
          >
            Free Website Audit
          </Button>


        </motion.div>


      </div>

    </section>
  )
}



const About = () => (

<section className="section border-t border-white/5">

<div className="container-x grid gap-14 lg:grid-cols-2">


<Reveal>

<h2 className="
font-display
text-4xl
font-semibold
leading-tight
sm:text-5xl">

A digital partner for businesses ready to grow.

</h2>


<div className="mt-6 h-px w-20 bg-gold-grad"/>

</Reveal>



<Reveal delay={0.15}>

<p className="text-lg leading-relaxed text-white/65">

SaintSolutions is a South African digital agency
helping businesses establish powerful online
presences through modern websites, e-commerce
solutions, and digital strategy.

</p>


<p className="mt-5 text-lg leading-relaxed text-white/65">

From marketplaces and fashion brands to beauty
businesses and startups, we create digital
solutions designed around real business goals.

</p>


</Reveal>


</div>

</section>

)



const Services = () => (

<section className="section bg-panel/30">

<div className="container-x">

<SectionHeading
title="Solutions built for growth"
text="Helping businesses create stronger digital experiences."
/>


<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


{services.map((s,i)=>(

<Reveal
key={s.id}
delay={i*0.06}
>


<Card>

<div className="
mb-6 flex
h-12 w-12
items-center
justify-center
rounded-xl
border
border-gold/40
text-xl
text-gold">

{s.icon}

</div>


<h3 className="
font-display
text-2xl
font-semibold">

{s.title}

</h3>


<p className="
mt-3
leading-relaxed
text-white/60">

{s.short}

</p>


</Card>


</Reveal>

))}


</div>

</div>

</section>

)



const Why = () => (

<section className="section">

<div className="container-x">


<SectionHeading
title="Why choose SaintSolutions"
/>


<div className="
grid gap-10
sm:grid-cols-2
lg:grid-cols-3">


{whyUs.map((w,i)=>(

<Reveal
key={w.title}
delay={i*0.05}
>


<div className="
border-l
border-gold/40
pl-6">


<h3 className="
text-lg
font-semibold
text-gold">

{w.title}

</h3>


<p className="
mt-2
text-white/60">

{w.text}

</p>


</div>


</Reveal>

))}


</div>


</div>

</section>

)



const Portfolio = () => (

<section className="section">

<div className="container-x">


<SectionHeading
title="Selected work"
text="Digital products and brands created by SaintSolutions."
/>


<div className="
grid gap-6
md:grid-cols-2">

{projects.map((p,i)=>(

<ProjectCard
key={p.name}
project={p}
index={i}
/>

))}

</div>


</div>

</section>

)



const CTA = () => (

<section className="section">


<div className="container-x">


<Reveal>


<div className="
rounded-3xl
border
border-gold/40
bg-panel
px-6
py-16
text-center
sm:px-16">


<h2 className="
font-display
text-4xl
font-semibold
sm:text-6xl">

Ready to grow your business online?

</h2>


<p className="
mx-auto
mt-5
max-w-xl
text-white/60">

Let's build a digital presence that
creates trust and attracts customers.

</p>


<div className="
mt-9
flex
flex-col
justify-center
gap-4
sm:flex-row">


<Button to="/contact">
Book Consultation
</Button>


<Button
to="/audit"
variant="ghost">

Request Audit

</Button>


</div>


</div>


</Reveal>


</div>


</section>

)



export default function Home(){

return (

<>

<Hero/>

<About/>

<Services/>

<Why/>

<Portfolio/>

<CTA/>

</>

)

}