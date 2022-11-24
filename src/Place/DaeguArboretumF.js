import React, { useState } from 'react';
import { useFirestore } from "../Hooks/useFirestore";
import  Modal from "../Place/Modal.js";
import './Dogg.css';


export default function DaeguArboretumF({ uid }) { 

    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const text = "/DaeguArboretum";
    const place = "대구수목원";
    const src = "대구수목원.jpg";
    const number1 = 35.853235;
    const number2 = 128.566615;
    const { addDocument} = useFirestore('Place');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(text, number1, number2);
        addDocument({ uid, text, place, src, number1, number2 });
    } 
    

    return (
        <dir className='DaeguArboretumF'>
            <form onSubmit={handleSubmit}>
                <button type='submit' className= 'place선택하기' onClick={openModal}> 선택하기</button>
            </form>

            <Modal open={modalOpen} close={closeModal} header="성공!!">선택이 되었습니다. 마이홈의 여행지 목록에 가면 확인할 수 있습니다.</Modal>

            <h1 className='place'>대구수목원</h1>

            <img className='PlacePhoto' src="test1.jpg"></img>

            <h4 className='장소설명'>
            &#62; 위치: 대구 달서구 화암로 342 대구수목원관리사무소 <br/>
            &#62; 연면적은 244,630㎡이며 화목원·약초원·야생초화원·침활엽수원·습지원·수생식물원·약용식물원·무궁화원·유실수원·염료식물원·
            철쭉원·방향식물원·괴석원·죽림원·생태천이관찰원·잔디광장 등 21개의 주제로 꾸며진 전문 수목원이 있다. 보유 식물은 초본류 1300종 
            27만 포기, 목본류 450종 8만 그루 등 총 1750종 35만 본의 식물이 전시되어 있다. 이 밖에 시민들의 자연학습장인 산림문화전시관이 있다. 
            지상 2층 연면적 1650㎡인 전시관의 1층은 비지터센터·제1전시실·체험학습실, 2층은 제2전시실·기획전시실이 있다. 주의할 점은 내부에 자전거, 
            스케이트를 타고 들어가거나 애완동물을 동반하고 들어갈 수 없다.
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
