import React from 'react'
import { useState } from 'react'

export default function LikeButton() {
    const [like, setLike] = useState(false);

    const toggleLike = () => {
      setLike(!like);
    };
    return (
      <div>
        <h1>
          <p> {like ? "You've liked this. Click to unlike" : "Like this"}</p>
          <button onClick={toggleLike}>
           Click Me
          </button>
        </h1>
      </div>
    );
}
