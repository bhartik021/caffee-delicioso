import Hero from '../components/Hero'
import Story from '../components/Story'
import Signatures from '../components/Signatures'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import CtaBand from '../components/CtaBand'
import Visit from '../components/Visit'
import useSeo from '../lib/useSeo'

export default function Home() {
  useSeo('/')
  return (
    <>
      <Hero />
      <Story />
      <Signatures />
      <Menu />
      <Gallery />
      <CtaBand />
      <Visit />
    </>
  )
}
