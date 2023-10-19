import React, {useRef} from 'react';

function UseRefComponent(props) {
    const ref = useRef(0)
    const increaseRef = ()=>{
        ref.current++;
        alert(ref.current)
    }

    return (
        <div>
            <h1>useRef</h1>
            <div>useRef doesn't re-render.</div>
            <div>Initial value: {ref.current}</div>
            <button onClick={increaseRef}>Increase</button>
            <hr></hr>
        </div>
    );
}

export default UseRefComponent;