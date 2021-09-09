// vid 1 to 13

// import React, { Component } from 'react';
// import Ninjas from './Ninjas';

// class App extends Component{
//    render() {
//      return (
//       <div className="App">
//         <h1>My first React app!</h1>
//         <p>Welcome</p>
//         <Ninjas name="Ryu" age="25" belt="black " />
//         <Ninjas name="Yoshi" age="30" belt="red " />
//       </div>
//      );
//    }
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-14: Outputting Lists

import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component{
  state = {
    ninjas: [
      { name: 'Ryu', age: 40, belt: 'black', id: 1},
      { name: 'Yoshi', age: 20, belt: 'black', id: 2},
      { name: 'Crystal', age: 25, belt: 'black', id: 3}
    ]
  }
   render() {
     return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={ this.state.ninjas }/>
      </div>
     );
   }
}

export default App;
