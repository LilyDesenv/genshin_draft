import PickList from '../PickList'
import { Container, Info2, Info1, Section } from './styles'
import { charsP1, charsP2 } from '../../objects/objectsTest'

const PickSection = () => {
  const t5p1 = 1
  const t5constp1 = 1
  const standp1 = 0
  const standConstp1 = 0

  const t5p2 = 1
  const t5constp2 = 1
  const standp2 = 0
  const standConstp2 = 0

  return (
    <Container>
      <Section>
        <input type="text" placeholder="Player 1" />
        <PickList chars={charsP1} />
        <Info1>
          T5: {t5p1} - Const: {t5constp1} - Mochileiro: {standp1} - Mochileiro
          Const: {standConstp1}
        </Info1>
      </Section>
      <Section></Section>
      <Section>
        <input type="text" placeholder="Player 2" />
        <PickList chars={charsP2} />
        <Info2>
          T5: {t5p2} - Const: {t5constp2} - Mochileiro: {standp2} - Mochileiro
          Const: {standConstp2}
        </Info2>
      </Section>
    </Container>
  )
}

export default PickSection
