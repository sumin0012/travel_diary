import { useState } from "react";
import { useFirestore } from "../Hooks/useFirestore";
import { useEffect } from "react";

// uid 는 MyWorkForm이 쓰이는 js파일에서 props로 전달받는 유저 아이디입니다.
export default function MyMemoForm({ uid }) {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore('Memo');

    const handleData = (event) => {
        if (event.target.id === 'tit') {
            setTitle(event.target.value);
        } else if (event.target.id === "txt") {
            setText(event.target.value);
        }
    }

    useEffect(() => {
        if (response.success) {
            console.log(response);
            setTitle('');
            setText('');
        }
    }, [response.success]); // response.success가 바뀔 때만 effect를 재실행합니다.

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(title, text);
        addDocument({ uid, title, text });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>나의 메모</legend>
                    <label htmlFor="tit">메모 제목 : </label>
                    <input id="tit" type='text' value={title} required onChange={handleData} />

                    <label htmlFor="txt">메모 내용 : </label>
                    <textarea id="txt" type='text' value={text} required onChange={handleData}></textarea>

                    <button type="submit">저장하기</button>
                </fieldset>
            </form>
        </>
    )
}