import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Events from './pages/Events'
import Careers from './pages/Careers'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="events" element={<Events />} />
        <Route path="careers" element={<Careers />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
