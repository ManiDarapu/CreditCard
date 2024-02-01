// Style your elements here
import styled from 'styled-components'

export const Div1 = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Div2 = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #344e7a;
  color: #ffffff;
  padding-top: 50px;
  padding-bottom: 200px;
`
export const CreditDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 50%;
  width: 85%;
  border-radius: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 40px;
  flex-direction: column;
  padding-bottom: 20px;
`

export const Num = styled.p`
  font-size: 22px;
`

export const NameTitle = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #d3d9e0;
`

export const Div3 = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const PaymentDiv = styled.div`
  display: flex;
  box-shadow: 2px 2px 2px 2px #c3cad9;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;
  width: 80%;
`
export const Input = styled.input`
  width: 80%;
  height: 15%;
  border-radius: 7px;
  border-style-type: none;
  margin: 10px;
  border-color: #d3d9e0;
  padding-left: 10px;
`
