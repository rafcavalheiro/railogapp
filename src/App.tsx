import { FC } from 'react'
import { Container, styled } from '@mui/material'

import Header from '@/header'
import TransferList from './providers/TransferList'
import SelectTextFields from './providers/SelectTextFields'
import IconLabelButtons from './providers/IconLabelButtons'
import MultipleSelectCheckmarks from './providers/MultipleSelectCheckmarks'



const App: FC = () => {
  return (
    <Root>     
      <Header />
      <div> 
      <section>
      <div>
      <h4>Selecione um tipo de Vagão:</h4>
          <MultipleSelectCheckmarks/>  
      </div>
      <br />
      </section>                   
      
      <section>
      <div>
        <h4>Escolha um Vagão disponível para o Pátio de destino:</h4>
          <TransferList/> 
        </div>                 
        
        <div>
          <h4>Confirmar seleções para o Pátio agora?</h4>
          <IconLabelButtons/>  
        </div> 
      </section>        

        <section>
        <div>
        <h4>Tarifas</h4>
        <h4>Selecione a Moeda:</h4>
          <SelectTextFields/> 
        </div> 
        </section>              
                 
      </div>
    </Root>
  )
}



const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 180vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }

  & section {

    background-color: auto;
    background-size: auto;
    border: 2px solid gray;
    padding: 10px;
    border-radius: 25px;
    margin-bottom: 20px;
    
    
    
    
  }

      
`

export default App

