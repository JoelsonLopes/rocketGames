import { RiSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";


import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
    return(
        <Container>


            <Link to="/">RocketGames</Link>

            <Input placeholder="Pesquisar pelo título" icon={RiSearchLine}/>

            <Profile to="/profile">
                <div>
                    <strong>Joelson Lopes</strong>
                    <button>Sair</button>
                </div>

                <img src="https://github.com/joelsonlopes.png"  alt="Foto do usuário"/>
            </Profile>
            
        </Container>
    )
}