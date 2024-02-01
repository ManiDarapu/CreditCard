// Write your code here
import {useState} from 'react'
import {
  Div1,
  Div2,
  CreditDiv,
  Num,
  NameTitle,
  Div3,
  PaymentDiv,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [num, setNum] = useState('')
  const [name, setName] = useState('')

  const onChangeNum = event => {
    setNum(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }
  return (
    <Div1>
      <Div2>
        <h1>CREDIT CARD</h1>
        <CreditDiv data-testid="creditCard">
          <Num>{num}</Num>
          <NameTitle>CARDHOLDER NAME</NameTitle>
          <p>{name.toUpperCase()}</p>
        </CreditDiv>
      </Div2>
      <Div3>
        <PaymentDiv>
          <h1>Payment Method</h1>
          <Input
            type="text"
            placeholder="Card Number"
            value={num}
            onChange={onChangeNum}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </PaymentDiv>
      </Div3>
    </Div1>
  )
}

export default CreditCard
