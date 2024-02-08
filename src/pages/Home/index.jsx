import { ButtonContainer, CardContainer, Container, Content, H1 } from './styles'


import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Cards'

export function Home() {
    return(
        <Container>
            <Header />

            <Content>
                <H1>
                    <h1>Meus jogos</h1>
                </H1>

                <ButtonContainer to="/new">
                    <Button title="+ Adicionar jogo"/>
                </ButtonContainer>
                
                <CardContainer to="/details">
                    <Card data={{
                        title: 'Shadow of morder',
                        rating: 2.5,
                        description: 'A jogabilidade de Shadow of Mordor lembra um pouco a de Assassins Creed, com control e total sobre seu personagem, que pode escalar paredes, pular de grandes alturas e surpreender inimigos A câmera é em terceira pessoa, também nos combates, e por isso ele é focado na ação cinematográfica.',
                        tags: [
                           {id: '1', name: 'Aventura'},
                           {id: '2', name: 'Fantasia'},                                
                             ]
                    }}/>                                                        
                    </CardContainer>
            </Content>
        </Container>
    )
}