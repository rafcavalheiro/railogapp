import { FC } from 'react'
import { styled } from '@mui/material'


import Header from '@/header'
import TransferList from './providers/TransferList'
import SelectTextFields from './providers/SelectTextFields'

const App: FC = () => {
  return (
    <Root>     
      <Header />
      <div>                  
        <h4>Requisite um vagão vazio para o pátio de destino</h4>
        <TransferList/>
        <h4>Selecione a Moeda</h4>
        <SelectTextFields/>            
      </div>
    </Root>
  )
}



const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }

  
   
`

export default App

