import React, {useCallback, useState} from 'react';

function UseCallbackComponent(props) {
    const [v1, setV1] = useState('0');
    const [v2, setV2] = useState('0');
    const useCb = useCallback(()=>{
            return Number(v1)+Number(v2)
    }, [v1,v2])
    return (
        <div>
            <h1>useCallback</h1>
            <div>"useCallback" Hook returns a memoized callback function. It only runs when one of its dependencies update.</div>
            <input type='text' onChange={e => setV1(e.target.value)}/>
            <input type='text' onChange={e => setV2(e.target.value)}/>
            <div>useMemo = {useCb()}</div>
            <hr></hr>
        </div>
    );
}

export default UseCallbackComponent;