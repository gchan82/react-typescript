import React, { Component } from 'react';

export interface MyClassProps {name?: string; isMarried: boolean; }
export interface MyClassState {age: number; }

class MyClass extends Component <MyClassProps, MyClassState>{

public static defaultProps: Partial<MyClassProps> = {
  name: 'Gary'
}

state = {
  age: 21
}

  render(){
    return(
      <div className="MyClass">
        <h1>My name is {this.props.name} and I am {this.state.age} years old.</h1>
      </div>
    )
  }
}

export default MyClass;