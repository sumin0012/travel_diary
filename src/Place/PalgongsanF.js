import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function PalgongsanF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/Palgongsan";
    const place = "팔공산케이블카";
    const src = "팔공산케이블카.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='PalgongsanF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>팔공산 케이블카</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 동구 팔공산로185길 51 팔공산케이블카 <br/>
            &#62; 팔공산 케이블카는 프랑스 POMA의 최신 기술로 만든 가장 안전하고 쾌적한 곤돌라 리프트 6인승 시설로,
            팔공산을 단 7~8분만에 오랜 기다림 없이 쉽고 빠르게 올라갈 수 있다. 케이블카 정상역에는 대구 도심보다 무려 7도나 낮은 '냉골삼림욕장'과 함께 
            피톤치드를 느낄 수 있는 간단한 산책로가 있어 여름에는 숲 속의 맑은 공기를 맡으며 쉬어가기 좋으며, 가을에는 팔공산 단풍의 
             절경을 바로 눈앞에서 감상하며 팔공산을 올라갈 수 있다.
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