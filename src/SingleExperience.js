import React, { Component } from 'react';

export default class SingleExperience extends Component {

   // handleDelete = (item) => {
   //    return fetch('./data.json' + '/' + item, {
   //       method: 'delete'
   //     }).then(response =>
   //       response.json().then(json => {
   //          console.log("fired baby!")
   //         return json;
   //       })
   //       );
   // }

   handleDelete = () => {
      console.log("that's show biz baby!")
   }

    
    render(){


       return(
          <div>
             <p>{this.props.exp.experience_name}</p>
             <button onClick={(e) => this.handleDelete(e,this.props.exp)}>Delete</button>
          </div>
       )
    }
}
