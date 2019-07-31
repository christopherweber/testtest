import React, { Component } from 'react';
import SingleExperience from './SingleExperience'

export default class ExperienceCard extends Component {

    state = {
        selectedExp: ""
    }

    

  render() {
    return (
      <div> 
          {this.props.exp.map((exp,i) => {
            return (<SingleExperience key={i} exp={exp}/>)
          })
    }
      </div>
    );
  }
}
