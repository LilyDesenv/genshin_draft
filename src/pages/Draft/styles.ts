import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  margin: 8px;
  padding: 8px;
  width: 99%;
  height: 100%;

  .backgroundChar {
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
  }

  .imageChar {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image1.png');
    border-radius: 16px;
  }

  .imageChar2 {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/image2.png');
    border-radius: 16px;
  }

  .imageCharEmpty {
    background-color: #dadada;
    border-radius: 16px;
  }

  .border {
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    position: relative;
  }

  .borderEmpty {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/BorderCard.gif');
  }

  .borderT5 {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/border.gif');
  }

  .borderT4 {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/BorderCardT4.gif');
  }

  .constEmpty {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/emptyConst.png');
  }

  .constSelected {
    background-image: url('https://servidor-estaticos-pi-nine.vercel.app/imagesGenshin/selectedConst.png');
  }
`

export const Header = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 24px;
    font-weight: 900;
  }
`
export const Body = styled.div`
  display: block;
`

export const PickSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 20vw 1fr;
`
export const ContentSection = styled.div`
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
export const CharSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 8px;
  padding: 8px;
  border-radius: 16px;
`

export const CharCard = styled.div`
  max-width: 350px;
  max-height: 100px;
  min-height: 13.5vh;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
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

export const CharButton = styled.div`
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

export const BanSection = styled.div`
  margin-bottom: 8px;
  display: block;

  h3 {
    font-size: 24px;
    font-weight: 900;
  }
`
export const BanCard = styled.div`
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
export const Contact = styled.div`
  width: auto;
`
export const Footer = styled.div`
  bottom: 1px;
  max-width: 98vw;
  width: 100%;
  padding: 8px;

  h3 {
    font-size: 14px;
  }

  ${Contact} {
    display: flex;
    align-items: end;
    justify-content: end;
    margin-right: 16px;
  }
`
