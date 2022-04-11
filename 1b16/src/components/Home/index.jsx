import gerar3bruxos from '../gerar3'
import './style.css'

export default function Home({setHome, tres, setTres, students}){
    return <div>
        <h1>Torneio tribruxo</h1>
        <p>Clique no botão para <br/> encontrar os feiticeiros!</p>
        <button onClick={()=>{
            setHome(false)
            gerar3bruxos(tres, setTres, students)
        }}>Começar!</button>
    </div>
}