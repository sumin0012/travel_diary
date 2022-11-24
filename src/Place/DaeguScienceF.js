import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function DaeguScienceF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/DaeguScience";
    const place = "국립대구과학관";
    const src = "국립대구과학관.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='DaeguScienceF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>국립대구과학관</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 달성군 유가읍 테크노대로6길 20 <br/>
            &#62; 과학기술정보통신부 산하 과학관 겸 이를 운영하는 특수법인&#40;기타공공기관&#41;으로 대구광역시, 경상북도, 
            경상남도 일부 지역 거주민을 위한 과학관이다.<br/>
            &#62; 매주 월요일과 1월 1일은 휴무이며, 오전 9시 30분부터 오후 5시 30분까지 운영한다.&#40;입장은 오후 4시 30분까지이다.&#41; 
            상설전시관은 대인&#40;20세 이상&#41;은 3,000원, 소인&#40;7~19세&#41;은 2,000원이며 경로우대자&#40;65세 이상&#41;, 장애인, 국가유공자, 기초생활수급자 및 
            차상위 계층은 무료이다.
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
