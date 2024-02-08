import { RiTimeLine } from "react-icons/ri";

import { Container, TitleAndNote, ProfileAndTime, Tags, Content } from './styles'

import { VscStarFull } from "react-icons/vsc";

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details() {

  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText to="/" title="Voltar" />            

          <TitleAndNote>
            <h1>Shadown of Morder</h1> 
            <VscStarFull />
            <VscStarFull />
            <VscStarFull />
            <VscStarFull />
            <VscStarFull />
          </TitleAndNote>

          <ProfileAndTime>
            <img src="https://github.com/joelsonlopes.png" alt="Foto Usuário" />
              <span>Por Joelson Lopes</span>
              <RiTimeLine />  
              <span>23/05/22 às 08:00</span>
          </ProfileAndTime>

          <Tags>
              <Tag title="Ação" />
              <Tag title="Aventura" />
              <Tag title="Fantasia" />
          </Tags>

          <p>Shadow of War chegou continuando a trama do sucesso de 2014, então nada mais justo que a gente recapitular pra quem 
            não jogou — ou mesmo pra quem jogou e não se lembra—  a história de Middle-earth: Shadow of Mordor, ou Terra-Média: 
            Sombras de Mordor, se você é daqueles brasileiríssimos da gema.
            A trama de Shadow of Mordor é baseada no universo de J. R. R. Tolkien e se passa na Terra-Média, entre os eventos de 
            O Hobbit e O Senhor dos Anéis. O protagonista da trama é Talion, um guardião de Gondor do qual nós convenientemente nunca 
            ouvimos falar, e que fica junto com vários guardiões e sua família no último lugar da Arda em que você gostaria de trazer 
            seus entes queridos: uma estação de vigia, perto do Portão Negro de Mordor.
            O trágico ritual macabro
            Então, o pior acontece. Sauron, o Senhor do Escuro, ainda sem forma física, volta para Mordor e o seu exército invade a 
            estação. Tragicamente, o filho Dirhael, a esposa Ioreth e o próprio Talion são assassinados em um ritual macabro para 
            invocar um tal “Lord Elfo”. Os responsáveis são os três capitães negros do inimigo: O Martelo de Sauron, A Torre de Sauron 
            e A Mão Negra de Sauron. O trio mais baixo-astral desde o Nirvana.
            
            
            </p>
          
        </Content>  
      </main>        
    </Container>
  )
}