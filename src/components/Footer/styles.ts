import styled from 'styled-components'

export const Contact = styled.div`
  width: auto;
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
    align-items: end;
    justify-content: end;
    margin-right: 16px;
  }
`
