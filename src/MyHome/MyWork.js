import React, { useState } from 'react';
import './MyHome.css';
import './MyWork.css';
import MyWorkForm from './MyWorkForm';
import MyWorkList from './MyWorkList';
import styles from './Content.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useCollection} from '../Hooks/useCollection';

function MyMemo() {

    const { user } = useAuthContext();
    const { documents, error } = useCollection('work', ["uid", "==", user.uid]);

    return (
        <dir className='MyMemo'>

            <Link to="/Main">
                <button type='button' className= '홈으로'> &#60;홈으로</button>
            </Link>

            <h1 className='큰마이홈'>마이홈</h1>

            <h4 className='부제1'>&#62;나의 일정</h4>

            <dir className='title1'>
            <Link to="/MyHome">
                    <button type='button' className= '여행지목록'>여행지 목록</button>
                </Link>
                
                <button type='button' className= 'M_나의일정'>나의 일정</button>
                
                <Link to="/MyMemo">
                    <button type='button' className= '나의메모'>나의 메모</button>
                </Link>
                <Link to="/MyBook">
                    <button type='button' className= '나의가계부'>나의 가계부</button>
                </Link>
                <Link to="/MyRecord">
                    <button type='button' className= '나의기록'>나의 기록</button>
                </Link>
            </dir>

            <dir className='Work'>
                <main className={styles.cont}>
                    <aside className={styles.side_menu}>
                        <MyWorkForm uid={user.uid} />
                    </aside>
                    <ul className={styles.content_list}>
                        {error && <strong>{error}</strong>}
                        {documents && <MyWorkList WorkPlace={documents} />}
                    </ul>

                </main>
            </dir>
        </dir>

    )
}

export default MyMemo;