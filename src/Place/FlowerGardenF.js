import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function FlowerGardenF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/FlowerGarden";
    const place = "화원유원지";
    const src = "화원유원지.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='FlowerGardenF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>화원유원지</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 달성군 화원읍 사문진로1길 40-14 <br/>
            &#62; 유원지로 개발되었기 때문에 화원유원지&#40;花園遊園地&#41;라고도 하지만 엄밀히 말하면 화원동산이 맞다.
            정상에는 신라 경덕왕이 이 곳의 경치에 반해 감상한 곳이라 하여 붙여진 상화대&#40;賞花臺&#41;가 있으며 상화대 위에 
            팔각정이 우뚝 서 있어서 낙동강을 비롯한 주위 경관을 바라볼 수 있다. 낙동강 본류와 금호강, 대명천이 합류하는 풍경이 
            일품. 강정고령보도 멀리서 바로 보인다.
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