import { CarreraTecnicaList } from "./components/CarreraTecnicaList"


const initCarrerasTecnicas = [
{codigo: 1, nombre: 'Programacion con Java'},
{codigo: 2, nombre: 'Desarrolo de apolicaciones web'}
]
export const App = () => {
    return(
        <>
            <h1>Carreras Técnicas</h1>
            <CarreraTecnicaList carrerasTecnicas={initCarrerasTecnicas}/>
        </>
       
    
    )
}


