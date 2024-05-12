import styled from 'styled-components'

export const Container = styled.div`
  margin: 8px;
  border: 1px solid white;
  max-width: 80px;
  max-height: 80px;
  min-height: 15vh;
  width: 100%;
  height: 100%;
  background-color: #dadada;
  border: 4px solid gray;
  border-radius: 8px;
  cursor: pointer;

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
