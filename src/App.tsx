import Draft from './pages/Draft'
import { GlobalCSS } from './styles'
import GlobalFonts from './assets/fonts/fonts'
import Home from './pages/Home'

function App() {
  return (
    <>
      <GlobalCSS />
      <GlobalFonts />
      {/* <Draft /> */}
      <Home />
    </>
  )
}

export default App
