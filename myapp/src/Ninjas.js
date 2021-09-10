// vid 1 to 13

// import React, { Component } from 'react';

// class Ninjas extends Component{
//     render(){
//         // console.log(this.props);
//         const { name, age, belt } = this.props
//         return(
//             <div className="ninja">
//             <div>Name: {this.props.name}</div>
//             <div>Age: {this.props.age}</div>
//             <div>Belt: {this.props.belt}</div>
//         </div>
//         );
//     }
// }

// export default Ninjas;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-14: Outputting Lists

// import React, { Component } from 'react';

// class Ninjas extends Component{
//     render(){
//         // console.log(this.props);
//         const { ninjas} = this.props;
//         const ninjaList = ninjas.map(ninja => {
//             return (
//                 <div className="ninja" key={ninja.id}>
//                     <div>Name: {ninja.name}</div>
//                     <div>Age: {ninja.age}</div>
//                     <div>Belt: {ninja.belt}</div>
//                 </div>
//             )   
//         })
//         return(
//             <div className="ninja-list">
//                 { ninjaList }
//             </div>
//         )
//     }
// }

// export default Ninjas;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-15: Stateless Components

// import React, { Component } from 'react';

// const Ninjas = ({ninjas}) => {
//     const ninjaList = ninjas.map(ninja => {
//         return (
//             <div className="ninja" key={ninja.id}>
//                 <div>Name: {ninja.name}</div>
//                 <div>Age: {ninja.age}</div>
//                 <div>Belt: {ninja.belt}</div>
//             </div>
//         )   
//     })
//     return(
//         <div className="ninja-list">
//             { ninjaList }
//         </div>
//     )
// }

// export default Ninjas;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-16: Conditional Output

// import React, { Component } from 'react';

// const Ninjas = ({ninjas}) => {
//     // const ninjaList = ninjas.map(ninja => {
//     //     if(ninjas.age > 20){
//     //         return (
//     //             <div className="ninja" key={ninja.id}>
//     //                 <div>Name: {ninja.name}</div>
//     //                 <div>Age: {ninja.age}</div>
//     //                 <div>Belt: {ninja.belt}</div>
//     //             </div>
//     //         )   
//     //     } else {
//     //         return null
//     //     }
//     // })
   
//     // return(
//     //     <div className="ninja-list">
//     //         { ninjaList }
//     //     </div>
//     // )
    
//     return(
//         <div className="ninja-list">
//             { 
//                 ninjas.map(ninja => {
//                     // condition ? () : () // true : false
//                     return ninja.age ? (
//                         <div className="ninja" key={ninja.id}>
//                             <div>Name: {ninja.name}</div>
//                             <div>Age: {ninja.age}</div>
//                             <div>Belt: {ninja.belt}</div>
//                         </div>
//                     ) : null;
//                 })
//             }
//         </div>
//     )
// }

// export default Ninjas;

///////////////////////////////////////////////////////////////////////////////////////////////////

// vid-19-deleting data

import React from 'react'

const Ninjas = ({ninjas, deleteNinja}) => {
  return (
    <div className="ninja-list">
      { 
        ninjas.map(ninja => {
          return (
            <div className="ninja" key={ninja.id}>
              <div>Name: { ninja.name }</div>
              <div>Age: { ninja.age }</div>
              <div>Belt: { ninja.belt }</div>
              <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default Ninjas