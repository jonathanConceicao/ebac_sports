import styled from 'styled-components'
import { cores } from '../../styles'
export const Header = styled.header` ... `

export const Produto = styled.div`
  background-color: ${cores.corFundo};
  padding: 8px;
  border-radius: 8px;
  position: relative;
`

export const Capa = styled.div`
  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Preco = styled.div`
  display: block;
  margin-bottom: 16px;

  strong {
    font-weight: bold;
    font-size: 18px;
  }
`

export const BtnCurtir = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
`

export const BtnComprar = styled.button`
  background-color: ${cores.corPrincipal};
  color: ${cores.corFundo};
  border: none;
  padding: 8px 0;
  width: 100%;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${cores.corSecundaria};
  }
`
