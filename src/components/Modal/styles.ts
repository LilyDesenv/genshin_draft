import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  transition: opacity 0.5s ease;

  &.visible {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.5s ease;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
export const ModalContent = styled.div`
  max-width: 75vw;
  width: 100%;
  border: 1px solid white;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  display: block;
  padding: 16px;
  padding-bottom: 0;
`

export const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`

export const MenuIcons = styled.div`
  width: 100%;
`

export const Menu = styled.ul`
  display: flex;
`
export const MenuItem = styled.li`
  background-color: ${colors.black};
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 1px solid ${colors.white};
  border-radius: 8px 8px 0 0;

  &:hover {
    background-color: #2a2a2a;
  }

  img {
    width: 50px;
    height: 50px;

    &:hover {
      transform: scale(1.1);
    }
  }

  &.selected {
    background-color: #222;
    border-bottom: none;
  }
`
export const Content = styled.div`
  border: 1px solid white;
  border-top: none;
  border-radius: 0 0 8px 8px;
  min-height: 50vh;

  background-color: #222;
  display: flex;
  align-items: start;
  justify-content: center;

  ul {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
  }

  li {
    margin-left: 8px;

    img {
      height: 20vh;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
