import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    text-align: center;
    margin-top: 16px auto;
    font-weight: 900;

    background-color: transparent;
    border: none;
    font-size: 26px;
    font-weight: 900;
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
export const Actions = styled.div`
  display: block;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  button {
    border: none;
    cursor: pointer;
    background-color: transparent;

    img {
      border-radius: 50%;
      height: 30px;
      width: 30px;
      background-color: ${colors.white};
      margin-left: 8px;
      margin-top: 6px;
    }
  }
`
export const Options = styled.div`
  background-color: black;
  border: 1px solid white;
  border-radius: 8px;
`
