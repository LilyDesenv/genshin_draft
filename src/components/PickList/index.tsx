import GameCharacter from '../../models/GameCharacter'
import CharCard from '../CharCard'
import * as S from './styles'

type Props = {
  chars: GameCharacter[]
}

const PickList = ({ chars }: Props) => {
  return (
    <S.Container>
      {chars.map((c) => (
        <CharCard key={c.id} gameCharacter={c}></CharCard>
      ))}
    </S.Container>
  )
}

export default PickList
