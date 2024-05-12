import { Contact, Container } from './styles'

const Footer = () => {
  return (
    <Container>
      <div className="alignCenter">
        <h3>Feito por mim</h3>
      </div>
      <Contact>
        <span>Discord</span>
        <span>Git</span>
        <span>Mail</span>
      </Contact>
    </Container>
  )
}

export default Footer
