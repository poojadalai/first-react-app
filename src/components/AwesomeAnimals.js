import React from 'react'

export default function AwesomeAnimals() {
  return (
    <div> {
        <ul>
          {[
            "Awesomeness level 1: Chicken",
            "Awesomeness level 2: Chicken",
            "Awesomeness level 3: Chicken",
            "Awesomeness level 4: Chicken",
            "Awesomeness level 5: Chicken",
          ].map((awesom, index) => {
            return <p key={index}>{awesom}</p>;
          })}
        </ul>
    }</div>
  )
}
