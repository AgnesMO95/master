import styled from '@emotion/styled'
import { FC } from 'react'

interface IButtonProps {
  backgroundColor: string
}

const Button = styled.button<IButtonProps>`
  padding: 32px;
  background-color: ${props => props.backgroundColor};
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const StyledEmotionButton: FC = () => {
  return <Button backgroundColor="green">Hover to change color</Button>
}

export default StyledEmotionButton
