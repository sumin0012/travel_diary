import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function SparklandF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/Sparkland";
    const place = "스파크랜드";
    const src = "스파크랜드.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='SparklandF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>스파크랜드</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 중구 동성로6길 61 레드존 7~9층 <br/>
            &#62; 동성로 일대를 구경할 수 있는 대관람차가 들어서있다. 참고로 관람차 안의 바닥 중간에 아래가 보이는 강화 유리가 있다. 
            야경에 사진 찍기도 제법 괜찮은 곳. 요금은 대관람차 기준 6천원으로, 부담없이 가볍게 탈 수 있다. 이 외에도 일명 '트위스트타워', 
            '디스크~오', '코페르니쿠스'라고 야외 놀이기구 3점이 더 설치되어있다. 놀이기구 1개당 티겟가격은 개장 기준 4~5천원. 묶어서 할인 
            티겟을 판매하기도 한다. 참고로 7층 오락실 내부에는 미니 회전목마도 있다.
            </h4>

            <dir className='PhotoZone'>
                <img className='photp1' src="test2.jpg"></img>
                <img className='photp2' src="test2.jpg"></img>
                <img className='photp3' src="test2.jpg"></img>
                <img className='photp4' src="test2.jpg"></img>
            </dir>
        </dir>
    )
}