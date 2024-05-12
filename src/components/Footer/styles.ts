import styled from 'styled-components'

export const Contact = styled.div`
  width: auto;

  img {
    border-radius: 16px;
    cursor: pointer;
    color: white;
    background-color: white;
    width: 30px;
    height: 30px;
    margin-left: 8px;
  }
`

export const Container = styled.footer`
  bottom: 1px;
  max-width: 98vw;
  width: 100%;
  padding: 8px;

  h3 {
    font-size: 14px;
  }

  ${Contact} {
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 16px;
  }
`
