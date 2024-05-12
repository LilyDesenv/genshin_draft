import * as S from './styles'

const Draft = () => {
  const constEmpty =
    'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/emptyConst.png'

  const constSelected =
    'https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/selectedConst.png'

  return (
    <S.Container>
      <S.Header>
        <h1>Meu draft</h1>
      </S.Header>
      <S.Body>
        <S.PickSection>
          <S.ContentSection>
            <input type="text" placeholder="Player 1" />
            <S.CharSection>
              <S.CharCard>
                <div className="backgroundChar imageChar">
                  <div className=" border borderT5">
                    <S.CharButton className="alignCenter">
                      <button className="displayNone">+</button>
                      <h4 className="displayNones">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNones">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageChar2">
                  <div className=" border borderT4">
                    <S.CharButton className="alignCenter">
                      <button className="displayNone">+</button>
                      <h4 className="displayNones">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>
            </S.CharSection>
          </S.ContentSection>
          <S.ContentSection></S.ContentSection>
          <S.ContentSection>
            <input type="text" placeholder="Player 2" />
            <S.CharSection>
              <S.CharCard>
                <div className="backgroundChar imageChar">
                  <div className=" border borderT5">
                    <S.CharButton className="alignCenter">
                      <button className="displayNone">+</button>
                      <h4 className="displayNones">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNones">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageChar2">
                  <div className=" border borderT4">
                    <S.CharButton className="alignCenter">
                      <button className="displayNone">+</button>
                      <h4 className="displayNones">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>

              <S.CharCard>
                <div className="backgroundChar imageCharEmpty">
                  <div className=" border borderEmpty">
                    <S.CharButton className="alignCenter">
                      <button className="displayNones">+</button>
                      <h4 className="displayNone">Nome do personagem</h4>
                    </S.CharButton>
                  </div>
                </div>
                <S.CharConst>
                  <div className="displayNone">
                    <span>
                      <img src={constSelected} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                    <span>
                      <img src={constEmpty} />
                    </span>
                  </div>
                </S.CharConst>
              </S.CharCard>
            </S.CharSection>
          </S.ContentSection>
        </S.PickSection>
        <S.BanSection>
          <h3 className="alignCenter">Bans</h3>
          <div className="alignCenter">
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
            <S.BanCard className="alignCenter">
              <button className="displayNones">+</button>
            </S.BanCard>
          </div>
        </S.BanSection>
      </S.Body>
      <S.Footer>
        <div className="alignCenter">
          <h3>Feito por mim</h3>
        </div>
        <S.Contact>F G E</S.Contact>
      </S.Footer>
    </S.Container>
  )
}

export default Draft
