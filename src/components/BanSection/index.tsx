import BanList from '../BanList'
import { Container } from './styles'

const BanSection = () => {
  return (
    <Container>
      <h3 className="alignCenter">Bans</h3>
      <BanList />
    </Container>
  )
}

export default BanSection
