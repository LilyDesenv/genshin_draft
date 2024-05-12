import PickList from '../PickList'
import { Container, Section } from './styles'
import { charsP1, charsP2 } from '../../pages/Home'

const PickSection = () => {
  return (
    <Container>
      <Section>
        <input type="text" placeholder="Player 1" />
        <PickList chars={charsP1}></PickList>
      </Section>
      <Section></Section>
      <Section>
        <input type="text" placeholder="Player 2" />
        <PickList chars={charsP2}></PickList>
      </Section>
    </Container>
  )
}

export default PickSection
