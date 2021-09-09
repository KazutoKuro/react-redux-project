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

import React, { Component } from 'react';

const Ninjas = ({ninjas}) => {
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
            </div>
        )   
    })
    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;
