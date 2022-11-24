import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function FrontMountainF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/FrontMountain";
    const place = "앞산해넘이전망대";
    const src = "앞산해넘이전망대.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='FrontMountainF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>앞산해넘이전망대</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 남구 대명동 1501-2 <br/>
            &#62; 일몰과 함께 대구의 경관을 한눈에 담을 수 있는‘앞산 해넘이전망대’는 남구의 앞산빨래터공원에 위치한다. 앞산빨래터공원의 
            역사와 상징을 담아 전망대 디자인은 빨래 짜는 모습을 형상화했다. 전망대를 향하는 경사로는 앞산의 전경과 주변 경관을 볼 수 있어 산책하기 좋다.



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