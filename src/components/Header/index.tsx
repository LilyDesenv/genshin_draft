import { Actions, Container, Options } from './styles'
import config from '../../assets/images/icons/actions/config.png'
import globe from '../../assets/images/icons/actions/globe.png'
import theme from '../../assets/images/icons/actions/theme.png'
import wallpaper from '../../assets/images/icons/actions/wallpaper.png'
import { useState } from 'react'

const Header = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)

  return (
    <>
      <Container>
        <input placeholder="Meu Draft" />
      </Container>
      <Actions>
        <div>
          <button onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
            <img src={config} alt="globe" title="Configurações" />
          </button>
        </div>
        <Options className={isOptionsOpen ? 'options' : 'displayNone'}>
          <button>
            <img src={globe} alt="globe" title="Idioma" />
          </button>
          <button>
            <img src={theme} alt="pallete" title="Tema" />
          </button>
          <button>
            <img src={wallpaper} alt="wallpaper" title="Plano de fundo" />
          </button>
        </Options>
      </Actions>
    </>
  )
}

export default Header
