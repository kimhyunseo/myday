import { useEffect, useState } from "react";

const quotes = [
    "삶이 있는 한 희망은 있다.",
    "성공은 실패를 거듭해도 열정을 잃지 않는 것이다.",
    "가장 어두운 밤도 끝나고 해는 떠오른다.",
    "남들이 당신을 어떻게 생각하느냐보다, 당신이 자신을 어떻게 생각하느냐가 더 중요하다.",
    "천 리 길도 한 걸음부터 시작된다.",
    "너 자신이 되어라. 다른 사람은 이미 있으니.",
    "불가능은 사실이 아니라 의견일 뿐이다.",
    "행동은 모든 성공의 근본 열쇠다.",
    "오늘 걷지 않으면 내일은 뛰어야 한다.",
    "사람은 자기가 생각하는 대로 된다."
]
const Quote = () => {
    const [quote, setQuote] = useState('');
    //랜덤 명언 추출
    // Math.random(); //0~1 : 0~quote.lenght
    useEffect(()=>{
        const random = Math.floor(Math.random()*quotes.length);
        setQuote(quotes[random]);
    },[])

    return (
        <div className="quote">
            <p>오늘의 명언</p>
            <p>"{quote}"</p>
        </div>
    );
};

export default Quote;