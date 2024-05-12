import styled from 'styled-components'

export const Container = styled.div`
  max-width: 350px;
  max-height: 100px;
  min-height: 13.5vh;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
`

export const BGCharImg = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 10vh;
  min-height: 10vh;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`
export const BorderCard = styled.div`
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
`
export const CharContent = styled.div`
  height: 100%;
  width: 100%;

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 6vh;
    cursor: pointer;
  }

  h4 {
    color: black;
    font-weight: 900;
    font-size: 2.5vh;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    margin-top: 18%;
  }
`

export const CharConst = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 2px;
  span {
    margin-left: 3px;
    cursor: pointer;
    img {
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`
