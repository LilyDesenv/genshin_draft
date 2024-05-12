import { useState } from 'react'
import * as S from './styles'
import anemo from '../../assets/images/icons/elements/anemo.png'
import geo from '../../assets/images/icons/elements/geo.png'
import hydro from '../../assets/images/icons/elements/hydro.png'
import dendro from '../../assets/images/icons/elements/dendro.png'
import pyro from '../../assets/images/icons/elements/pyro.png'
import cryo from '../../assets/images/icons/elements/cryo.png'
import electro from '../../assets/images/icons/elements/electro.png'
import sword from '../../assets/images/icons/weapons/sword.png'
import spear from '../../assets/images/icons/weapons/spear.png'
import claymore from '../../assets/images/icons/weapons/claymore.png'
import bow from '../../assets/images/icons/weapons/bow.png'
import catalist from '../../assets/images/icons/weapons/catalist.png'
import random from '../../assets/images/random.png'

import * as Obj from '../../objects/objectsTest'

const Modal = () => {
  const [modal, setModal] = useState(true)
  const [isAnemoOpen, setIsAnemoOpen] = useState(true)
  const [isGeoOpen, setIsGeoOpen] = useState(false)
  const [isHydroOpen, setIsHydroOpen] = useState(false)
  const [isDendroOpen, setIsDendroOpen] = useState(false)
  const [isPyroOpen, setIsPyroOpen] = useState(false)
  const [isCryoOpen, setIsCryoOpen] = useState(false)
  const [isElectroOpen, setIsElectroOpen] = useState(false)

  const openAnemo = () => {
    setIsAnemoOpen(true)
    setIsGeoOpen(false)
    setIsHydroOpen(false)
    setIsDendroOpen(false)
    setIsPyroOpen(false)
    setIsCryoOpen(false)
    setIsElectroOpen(false)
  }

  const openGeo = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(true)
    setIsHydroOpen(false)
    setIsDendroOpen(false)
    setIsPyroOpen(false)
    setIsCryoOpen(false)
    setIsElectroOpen(false)
  }
  const openHydro = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(false)
    setIsHydroOpen(true)
    setIsDendroOpen(false)
    setIsPyroOpen(false)
    setIsCryoOpen(false)
    setIsElectroOpen(false)
  }
  const openDendro = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(false)
    setIsHydroOpen(false)
    setIsDendroOpen(true)
    setIsPyroOpen(false)
    setIsCryoOpen(false)
    setIsElectroOpen(false)
  }
  const openPyro = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(false)
    setIsHydroOpen(false)
    setIsDendroOpen(false)
    setIsPyroOpen(true)
    setIsCryoOpen(false)
    setIsElectroOpen(false)
  }
  const openCryo = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(false)
    setIsHydroOpen(false)
    setIsDendroOpen(false)
    setIsPyroOpen(false)
    setIsCryoOpen(true)
    setIsElectroOpen(false)
  }
  const openElectro = () => {
    setIsAnemoOpen(false)
    setIsGeoOpen(false)
    setIsHydroOpen(false)
    setIsDendroOpen(false)
    setIsPyroOpen(false)
    setIsCryoOpen(false)
    setIsElectroOpen(true)
  }

  return (
    <>
      <S.Container className={modal ? 'visible' : ''}>
        <S.ModalContent>
          <S.Block>
            <S.MenuIcons>
              <S.Menu>
                <S.MenuItem
                  className={isAnemoOpen ? 'selected' : ''}
                  onClick={() => openAnemo()}
                >
                  <img src={anemo} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isGeoOpen ? 'selected' : ''}
                  onClick={() => openGeo()}
                >
                  <img src={geo} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isHydroOpen ? 'selected' : ''}
                  onClick={() => openHydro()}
                >
                  <img src={hydro} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isDendroOpen ? 'selected' : ''}
                  onClick={() => openDendro()}
                >
                  <img src={dendro} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isPyroOpen ? 'selected' : ''}
                  onClick={() => openPyro()}
                >
                  <img src={pyro} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isCryoOpen ? 'selected' : ''}
                  onClick={() => openCryo()}
                >
                  <img src={cryo} alt="" />
                </S.MenuItem>

                <S.MenuItem
                  className={isElectroOpen ? 'selected' : ''}
                  onClick={() => openElectro()}
                >
                  <img src={electro} alt="" />
                </S.MenuItem>
              </S.Menu>

              <S.Content className={isAnemoOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsAnemo.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isGeoOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsGeo.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isHydroOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsHydro.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isDendroOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsDendro.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isPyroOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsPyro.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isCryoOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsCryo.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>

              <S.Content className={isElectroOpen ? '' : 'displayNone'}>
                <ul>
                  <li>
                    <img
                      src={random}
                      alt=""
                      title="Clique para selecionar um personagem aleatoriamente"
                    />
                  </li>
                  {Obj.charsElectro.map((c) => (
                    <li key={c.id}>
                      <img src={c.imagepick} alt={c.name} title={c.name} />
                    </li>
                  ))}
                </ul>
              </S.Content>
            </S.MenuIcons>
          </S.Block>
          <S.Block>
            <button onClick={() => setModal(false)}>Fechar</button>
          </S.Block>
        </S.ModalContent>

        <div className="overlay" onClick={() => setModal(false)}></div>
      </S.Container>
    </>
  )
}

export default Modal
