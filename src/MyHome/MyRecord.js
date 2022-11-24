import React, { useState } from 'react';
import './MyHome.css';
import './MyRecord.css';
import R_W_List from './R_W_List';
import R_M_List from './R_M_List';
import MyHomeList from './MyHomeList';
import R_B_List from './R_B_List';
import styles from './R_Content.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useCollection} from '../Hooks/useCollection';
import { useCollection1} from '../Hooks/useCollection1';
import { useCollection2} from '../Hooks/useCollection2';
import { useCollection3} from '../Hooks/useCollection3';

function MyRecord() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection('Place', ["uid", "==", user.uid]);
    const { documents1, error1 } = useCollection1('work', ["uid", "==", user.uid]);
    const { documents2, error2 } = useCollection2('Memo', ["uid", "==", user.uid]);
    const { documents3, error3 } = useCollection3('Book', ["uid", "==", user.uid]);

    return (
        <dir className='MyMemo'>

            <Link to="/Main">
                <button type='button' className= '홈으로'> &#60;홈으로</button>
            </Link>

            <h1 className='큰마이홈'>마이홈</h1>

            <h4 className='부제1'>&#62;나의 기록</h4>

            <dir className='title1'>
                <Link to="/MyHome">
                    <button type='button' className= '여행지목록'>여행지 목록</button>
                </Link>
                <Link to="/MyWork">
                    <button type='button' className= '나의일정'>나의 일정</button>
                </Link>
                <Link to="/MyMemo">
                    <button type='button' className= '나의메모'>나의 메모</button>
                </Link>
                <Link to="/MyBook">
                    <button type='button' className= '나의가계부'>나의 가계부</button>
                </Link>
                
                <button type='button' className= 'M_나의기록'>나의 기록</button>
            </dir>

            <dir className='Place_R'>
                <main className={styles.R_cont}>
                    <h2 style={{textAlign:"right"}}>&#45; 여행지 목록</h2>
                    <ul >
                        {error && <strong>{error}</strong>}
                        {documents && <MyHomeList HomePlace={documents} />}
                    </ul>

                </main>
            </dir>

            <dir className='work_R'>
            <h2 style={{textAlign:"center"}}>&#45; 나의 일정</h2>
                <main className={styles.R_cont}>

                <ul className={styles.R_content_list}>
                        {error1 && <strong>{error}</strong>}
                        {documents1 && <R_W_List WorkPlace={documents1} />}
                    </ul>

                </main>
            </dir>

            <dir className='Memo_R'>
            <h2 style={{textAlign:"center"}}>&#45; 나의 메모</h2>
                <main className={styles.R_cont}>
                
                    
                    <ul className={styles.R_content_list}>
                        {error2 && <strong>{error}</strong>}
                        {documents2 && <R_M_List MemoPlace={documents2} />}
                    </ul>

                </main>
            </dir>

            <dir className='Book_R'>
            <h2 style={{textAlign:"center"}}>&#45; 나의 가계부</h2>
                <main className={styles.R_cont}>
                
                    
                    <ul className={styles.R_content_list}>
                        {error3 && <strong>{error}</strong>}
                        {documents3 && <R_B_List BookPlace={documents3} />}
                    </ul>

                </main>
            </dir>

        </dir>

    )
}

export default MyRecord;