import { useReveal } from './hooks/useReveal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ImpactSection } from './components/ImpactSection'
import { About } from './components/About'
import { Modalities } from './components/Modalities'
import { Gallery } from './components/Gallery'
import { Differentials } from './components/Differentials'
import { Plans } from './components/Plans'
import { TrialCTA } from './components/TrialCTA'
import { Location } from './components/Location'
import { Hours } from './components/Hours'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  // classe global adicionada pelo observer — ver Reveal.module.css
  useReveal('isVisible')

  return (
    <>
      <Header />

      <main>
        <Hero />
        <ImpactSection />
        <About />
        <Modalities />
        <Gallery />
        <Differentials />
        <Plans />
        <TrialCTA />
        <Location />
        <Hours />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
