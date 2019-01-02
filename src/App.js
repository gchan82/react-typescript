// contd 15(4:02)

import React, { Component } from 'react';
import MyClass from './Components/MyClass';
import MyComp from './Components/MyComp.tsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyClass isMarried={false}/>
        <MyComp name={'dude'} isMarried={false} kids={0} livedIn={'CA'} />
      </div>
    )
  }
}

export default App;