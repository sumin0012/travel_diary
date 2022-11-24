import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function TowerF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/Tower";
    const place = "타워";
    const src = "타워.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='TowerF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>83타워</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 달서구 두류동 <br/>
            &#62; 높이는 202m&#40;탑신 153m + 철탑 49m&#41;로써 대구에서 법적으로 가장 높은 건축물이다. 현재도 대구의 랜드마크 
            역할을 충실히 하고 있다. 아래에서 바라보는 체감 높이는 더 높은 편인데 아래의 애슐리, 아이스링크 등이 있는 3층짜리 
            저층부 위쪽에 탑이 있고, 위치가 이월드의 가장 높은 부분인 언덕 꼭대기 부분에 있기 때문이다.
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