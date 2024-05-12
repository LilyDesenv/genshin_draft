import * as S from './styles'
import emptyConst from '../../assets/images/emptyConst.png'
import selectedConst from '../../assets/images/selectedConst.png'
import borderEmpty from '../../assets/images/BorderCard.gif'
import bordert4 from '../../assets/images/BorderCardT4.gif'
import bordert5 from '../../assets/images/BorderCardT5.gif'
import GameCharacter from '../../models/GameCharacter'

type Props = {
  gameCharacter: GameCharacter
}

const CharCard = ({ gameCharacter: c }: Props) => {
  let border
  let displayConst = ''
  let displayName = ''
  let displayButton = ''
  if (c.tier === '5') {
    border = bordert5
    displayButton = 'displayNone'
  } else if (c.tier === '4') {
    border = bordert4
    displayConst = 'displayNone'
    displayButton = 'displayNone'
  } else {
    border = borderEmpty
    displayConst = 'displayNone'
    displayName = 'displayNone'
  }

  return (
    <S.Container>
      <S.BGCharImg style={{ backgroundImage: `url(${c.image})` }}>
        <S.BorderCard style={{ backgroundImage: `url(${border})` }}>
          <S.CharContent className="alignCenter">
            <button className={displayButton}>+</button>
            <h4 className={displayName}>{c.name}</h4>
          </S.CharContent>
        </S.BorderCard>
      </S.BGCharImg>
      <S.CharConst>
        <div className={displayConst}>
          <span>
            <img src={selectedConst} />
          </span>
          <span>
            <img src={emptyConst} />
          </span>
          <span>
            <img src={emptyConst} />
          </span>
          <span>
            <img src={emptyConst} />
          </span>
          <span>
            <img src={emptyConst} />
          </span>
          <span>
            <img src={emptyConst} />
          </span>
        </div>
      </S.CharConst>
    </S.Container>
  )
}

export default CharCard
