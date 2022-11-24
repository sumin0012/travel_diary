import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function DinosaurF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/Dinosaur";
    const place = "고산골공룡공원";
    const src = "고산골공룡공원.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='DinosaurF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>고산골 공룡공원</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 남구 용두2길 43 <br/>
            &#62; 실제로 이곳은 예전에 공룡이 살았던 곳으로 공룡발자국화석, 공룡알 화석이 있으며 산책로와 메타세콰이어길, 
            주민운동시설로 이루어져 있다. 공룡공원 내에는 티라노사우루스, 스피노사우루스, 트리케라톱스, 안킬로사우루스, 스테고사우루스, 
            브라키오사우루스, 파키케팔로사우루스 등 주로 공룡백과에 있던 인기있는 공룡들의 실제크기 모형이 장식되어 있다. 공룡 놀이터와 
            공룡 포토존도 마련되어 있다.
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