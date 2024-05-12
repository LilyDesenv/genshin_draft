import BanSection from '../BanSection'
import PickSection from '../PickSection'
import { Container } from './styles'

const Draft = () => {
  return (
    <Container>
      <PickSection />
      <BanSection />
    </Container>
  )
}

export default Draft
