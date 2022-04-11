import CharCard from '../CharCard'
import gerar3bruxos from '../gerar3'
import './style.css'

export default function Tribruxo({students, tres, setTres}){
    return <div>
        <h1>Tribruxo</h1>
        <div className='tribruxo'>
            {tres.map((student, id)=><CharCard char={student}/>)}
        </div>
        <button onClick={()=> gerar3bruxos(tres, setTres, students)}>Tentar Novamente</button>
    </div>
}