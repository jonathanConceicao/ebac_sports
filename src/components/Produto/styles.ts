import styled from 'styled-components'
import { cores } from '../../styles'

export const Capa = styled.div`
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 8px;
    border-radius: 4px;
  }
`

export const Produto = styled.div`
  display: block;
  position: relative;
  background-color: ${cores.corFundo};
  border-radius: 8px;
  padding: 8px;
`

export const Titulo = styled.h3`
  min-height: 64px;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
`

export const Preco = styled.div`
  margin: 16px 0;
  strong {
    font-size: 18px;
    font-weight: bold;
  }
`

export const BtnCurtir = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  color: ${cores.corPrincipal};
  font-weight: bold;
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  font-weight: bold;
  font-size: 16px;
  padding: 12px 0;
  color: #eee;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-image: linear-gradient(
      -45deg,
      ${cores.corPrincipal},
      ${cores.corSecundaria}
    );
  }
`
