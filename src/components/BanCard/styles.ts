import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  margin: 8px;
  border: 1px solid white;
  max-width: 6vw;
  max-height: 15vh;
  min-height: 15vh;
  width: 100%;
  height: 100%;
  background-color: ${colors.gray};
  border: 4px solid gray;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 36px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }

  &:hover {
    transform: scale(1.05);
  }
`
