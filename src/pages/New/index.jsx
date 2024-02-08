

import { Header } from '../../components/Header'

import { Container, Form, TextArea } from './styles'

import { Input } from "../../components/Input";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button"
import { ButtonText } from '../../components/ButtonText'



export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <ButtonText to="/" title="Voltar" />
                        
                    <h1>
                        Novo jogo
                    </h1>
                    <div>
                        <Input placeholder="Titulo"/>
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>

                    <TextArea placeholder="Observações"/>
                </Form>

                <p>Marcadores</p>

                <div className="tags">
                    <TagItem value="Aventura"/>
                    <TagItem placeholder="Novo marcador" $isNew/>                  
                </div>
                
                <div className="button">
                    <Button title="Excluir jogo"/>
                    <Button title="Salvar Alterações"/>
                </div>

            </main>
        </Container>
    )
}