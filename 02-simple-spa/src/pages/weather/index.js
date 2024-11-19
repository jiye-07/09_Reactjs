import React from 'react';

import { useParams } from "react-router-dom";

const Weather = () => {
    
    // 요청 데이터 확인 하기
    const params = useParams();
    console.group("useParams()의 리턴값 확인");
    console.debug(params);
    console.groupEnd();

    // 필요한 변수값과 타입 확인
    console.debug('요청된 학과번호 값=%s (%s)', params.id, typeof params.id);
    console.debug('요청된 학과번호 값=%s (%s)', params.msg, typeof params.msg);
    console.groupEnd();

    //
    const weatherIList = {
        item: [
            { id: 1, name:'mon', am: '맑음', pm: '맑음' },
            { id: 2, name:'tue', am: '비', pm: '맑음' },
            { id: 3, name:'wed', am: '맑음', pm: '흐림' },
            { id: 4, name:'thu', am: '맑음', pm: '흐림' },
            { id: 5, name:'fri', am: '흐림', pm: '흐림' },
            { id: 6, name:'sat', am: '비', pm: '맑음' },
            { id: 7, name:'sun', am: '맑음', pm: '맑음' }
        ]
    };

    const weatherItem = weatherIList.item.find((v , i) => v.id === parseInt(params.id));

    // 조회 결과가 없는 경우
    if (!weatherItem) {
        return (<h3>존재하지 않는 데이터에 대한 요청입니다.</h3>)
    }
    
    return (
        <div>
            <h2>오전</h2>
            <p>{weatherItem.am}</p>

            <h2>오후</h2>
            <p>{weatherItem.pm}</p>  
        </div>
  );
};

export default Weather;
