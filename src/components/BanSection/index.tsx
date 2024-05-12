import BanCard from '../BanCard'
import { Container } from './styles'

const BanSection = () => {
  return (
    <Container>
      <h3 className="alignCenter">Bans</h3>
      <div className="alignCenter">
        <BanCard />
        <BanCard />
        <BanCard />
        <BanCard />
        <BanCard />
        <BanCard />
        <BanCard />
        <BanCard />
      </div>
    </Container>
  )
}

export default BanSection
