import './style.css'
import defaultUser from '../../img/default.png'

export default function CharCard({char}){
    return <div className={`charCard ${char.house}`}>
        <figure>
            <img src={char.image||defaultUser} alt={char.name}/>
        </figure>
        <h3>{char.name}</h3>
        <h4>{char.house || 'Desconhecido'}</h4>
    </div>
}