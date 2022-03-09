import React from 'react'
import { useEffect , useState } from 'react'

export default function LikeCounter() {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
  
    // console.log("Whar are these?", numLikes, set_numLikes);
    useEffect(()=>{
        console.log("Inside a UseEffect!")
    }, [count])
  
  
    const increment = () => {
      // console.log("Yes, clicked! Current number of likes:", numLikes);
      setCount(count + 1);
    };
    // set_numLikes(numLikes + 1);
  
    return (
      <div>
        <p>
          This post has <b>{count}</b> likes!
        </p>
        <button onClick={increment}>LIKE</button>{" "}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          UNLIKE
        </button>
        <br />
        <br />
        <button onClick={() => {setCount(initialValue); }}>Reset</button>
      </div>
    );
}
