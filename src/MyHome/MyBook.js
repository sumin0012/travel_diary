import React, { useState } from 'react';
import './MyHome.css';
import './MyBook.css';
import MyBookForm from './MyBookForm';
import MyBookList from './MyBookList';
import styles from './Content.module.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';
import { useCollection} from '../Hooks/useCollection';

function MyBook() {
    const { user } = useAuthContext();
    const { documents, error } = useCollection('Book', ["uid", "==", user.uid]);

    return (
        <dir className='MyBook'>

            <Link to="/Main">
                <button type='button' className= '홈으로'> &#60;홈으로</button>
            </Link>

            <h1 className='큰마이홈'>마이홈</h1>

            <h4 className='부제1'>&#62;나의 가계부</h4>

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
                
                <button type='button' className= 'M_나의가계부'>나의 가계부</button>
                
                <Link to="/MyRecord">
                    <button type='button' className= '나의기록'>나의 기록</button>
                </Link>
                
            </dir>

            <dir className='Book'>
                <main className={styles.cont}>
                    <aside className={styles.side_menu}>
                        <MyBookForm uid={user.uid} />
                    </aside>
                    <ul className={styles.content_list}>
                        {error && <strong>{error}</strong>}
                        {documents && <MyBookList BookPlace={documents} />}
                    </ul>

                </main>
            </dir>
        </dir>

    )
}

export default MyBook;