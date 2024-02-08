import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { RiArrowLeftLine } from "react-icons/ri";


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


import { Background, Container, Form } from "./styles"
import { Link } from 'react-router-dom'


export function SignUp() {
    return (
        <Container>
            <Background />
            
            <Form>
                <h1>Rocket Games</h1>

                <p>Aplicação para acompanhar tudo que jogar.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                /> 

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />                

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Cadastrar"/>

                <Link to="/">
                    <RiArrowLeftLine style={{ marginRight: 15 }}/>
                    Voltar para o login
                </Link>    
            </Form>


        </Container>
    )
}