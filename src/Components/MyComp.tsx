import React from 'react';

type MyCompProps = {
  name: 'Gary Chan' | 'dude',
  isMarried: boolean,
  kids: 0 | 2 | 4,
  livedIn?: ['CA', 'AZ']
}

const MyComp = (props: MyCompProps) => {
    return (
      <div>
        <h1>{props.name} {props.isMarried} {props.kids} {props.livedIn}</h1>

      </div>
    )
}

export default MyComp;