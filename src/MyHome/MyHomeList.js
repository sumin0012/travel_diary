import { useFirestore } from '../Hooks/useFirestore';
import { Link } from 'react-router-dom';
import '../Main/Main.css';

// MyHomeList는 props 로 전달되기 때문에 원래는 props.Work 로 접근해야 하지만 비구조화할당을 이용하면 깔끔합니다.

export default function MyHomeList({ HomePlace }) {

    const {deleteDocument} = useFirestore('Place');

    return (
        <>
            {HomePlace.map((item) => {
                return (
                    <dir key={item.id}>
                        <button type='button' style={{background: "teal", color: "#fff", border: 0}} 
                        onClick={() => deleteDocument(item.id)}>X</button>
                        <Link to={item.text} ><img src={item.src}/></Link>
                    </dir>
                )
            })}
        </>
    )
}