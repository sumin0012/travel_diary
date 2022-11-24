import { useFirestore } from '../Hooks/useFirestore';
import styles from './R_Content.module.css';

// WorkPlace는 props 로 전달되기 때문에 원래는 props.Work 로 접근해야 하지만 비구조화할당을 이용하면 깔끔합니다.

export default function R_W_List({ WorkPlace }) {

    const {deleteDocument} = useFirestore('work');

    return (
        <>
            {WorkPlace.map((item) => {
                return (
                    <li key={item.id}>
                        <strong className={styles.title}>{item.title}</strong>
                        <p className={styles.text}>{item.text}</p>
                        <button type='button' onClick={() => deleteDocument(item.id)}>삭제</button>
                    </li>
                )
            })}
        </>
    )
}