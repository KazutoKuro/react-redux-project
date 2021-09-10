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

// import React, { Component } from 'react';
// import Ninjas from './Ninjas';
// import AddNinja from './AddNinja';

// class App extends Component{
//   state = {
//     ninjas: [
//       { name: 'Ryu', age: 40, belt: 'black', id: 1},
//       { name: 'Yoshi', age: 20, belt: 'black', id: 2},
//       { name: 'Crystal', age: 25, belt: 'black', id: 3}
//     ]
//   }
//    render() {
//      return (
//       <div className="App">
//         <h1>My first React app!</h1>
//         <p>Welcome</p>
//         <Ninjas ninjas={ this.state.ninjas }/>
//         <AddNinja />
//       </div>
//      );
//    }
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-18: Function as props

// import React, { Component } from 'react';
// import Ninjas from './Ninjas';
// import AddNinja from './AddNinja';

// class App extends Component{
//   state = {
//     ninjas: [
//       { name: 'Ryu', age: 40, belt: 'black', id: 1},
//       { name: 'Yoshi', age: 20, belt: 'black', id: 2},
//       { name: 'Crystal', age: 25, belt: 'black', id: 3}
//     ]
//   }
//   addNinja = (ninja) => {
//     ninja.id = Math.random();
//     let ninjas = [...this.state.ninjas, ninja]
//     this.setState({
//       ninjas: ninjas
//     })
//   }

//    render() {
//      return (
//       <div className="App">
//         <h1>My first React app!</h1>
//         <p>Welcome</p>
//         <Ninjas ninjas={ this.state.ninjas }/>
//         <AddNinja addNinja ={this.addNinja} />
//       </div>
//      );
//    }
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-19: deleting data

import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component{
  state = {
    ninjas: [
      { name: 'Ryu', age: 40, belt: 'black', id: 1},
      { name: 'Yoshi', age: 20, belt: 'black', id: 2},
      { name: 'Crystal', age: 25, belt: 'black', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id // if the id is not equal to the id of current ninja,returning true n remain in the new arry
    });
    this.setState({
      ninjas: ninjas
    });
  }

   render() {
     return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas } />
        <AddNinja addNinja ={this.addNinja} />
      </div>
     );
   }
}

export default App;
