import styled from 'styled-components'

export const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`

export const Capa = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`

export const Tag = styled.span`
  font-size: 12px;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
`

export const Preco = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #2ecc71;
  margin-top: 8px;
`

export const BtnComprar = styled.button`
  background-color: #2ecc71;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #27ae60;
  }
`
