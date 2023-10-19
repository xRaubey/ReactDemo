import React, {useState, useMemo} from 'react';


function UseMemoComponent(props) {
    const [v1, setV1] = useState('0');
    const [v2, setV2] = useState('0');

    let r = 0
    const fn = (p1, p2)=>{
        r = Number(p1)+Number(p2);
        return r;
    }

    const useMe = useMemo(() => fn(v1,v2), [v1,v2]);


    return (
        <div>
            <h1>useMemo</h1>
            <div> "useMemo" Hook returns a memoized value. It only runs when one of its dependencies update.</div>
            <input type='text' onChange={e => setV1(e.target.value)}/>
            <input type='text' onChange={e => setV2(e.target.value)}/>
            <div>useMemo = {useMe}</div>
            <hr></hr>
        </div>
    );
}

export default UseMemoComponent;