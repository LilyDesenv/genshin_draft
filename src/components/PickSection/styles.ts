import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw 1fr;
`
export const Section = styled.div`
  display: block;

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
export const Info1 = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: start;
  justify-content: start;
`

export const Info2 = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-right: 16px;
`
