import { Navigation } from './components/layout'
import { Analytics } from '@vercel/analytics/next'
import { Hero, Benefits, Courses, Team, Program, Contact } from './pages'

const App = () => {
  return (
    <>
      <Analytics />
      <Navigation />
      <Hero />
      <Benefits />
      <Courses />
      <Team />
      <Program />
      <Contact />
    </>
  )
}

export default App
