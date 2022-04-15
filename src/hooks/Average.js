import React,{useState, useRef, useCallback, useMemo} from 'react'

const getAverage = lists =>{
    console.log('평균값 계산중');
    if (lists.length === 0) return 0;
    const sum = lists.reduce((a,b) => a+b);
    return sum / lists.length;
}

function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState(' ');

    const inputE1 = useRef(null);

    const onChange = useCallback(e => {
        console.log('컴포넌트가 처음 랜더링 될때만 함수생성');
        setNumber(e.target.value);
    },[]); //컴포넌트가 처음 렌더링 될때만 함수 생성

    const onInsert = useCallback(e => {
        console.log('number 혹은 list가 바뀌었을때 함수생성');
        const nextLists = lists.concat(parseInt(number));
        setLists(nextLists);
        setNumber(' ');
        inputE1.current.focus();
    },[number,lists]);

    const avg = useMemo(() => getAverage(lists)
    ,[lists]);

  return (
      <div>
              <div>Average</div>
              <input value={number} onChange={onChange} ref={inputE1} />
              <button onClick={onInsert}>등록</button>
              <ul>
                  {lists.map((list, index) => (
                      <li key={index}>{list}</li>
                  ))}
              </ul>
              <div><b>평균값:</b> {avg} </div>
      </div>
  )
}

export default Average