import { Contact, Container } from './styles'
import discord from '../../assets/images/icons/socialContacts/discord.svg'
import git from '../../assets/images/icons/socialContacts/github.svg'
import mail from '../../assets/images/icons/socialContacts/mail.svg'
const Footer = () => {
  return (
    <Container>
      <div className="alignCenter">
        <h3>Feito por mim</h3>
      </div>
      <Contact>
        <span>
          <img src={discord} alt="" />
        </span>
        <span>
          <img src={git} alt="" />
        </span>
        <span>
          <img src={mail} alt="" />
        </span>
      </Contact>
    </Container>
  )
}

export default Footer
