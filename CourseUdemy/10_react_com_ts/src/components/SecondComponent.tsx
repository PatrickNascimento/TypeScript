import * as React from 'react';

interface Props{
    name: string
    age: number
    isWorking:boolean
}

export default function SecondComponent (props: Props) {
  return (
    <div>
      <h1>Second Component</h1>
      <p>o nome dele é {props.name} </p>
    </div>
  );
}


