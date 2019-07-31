import React, { Component } from 'react';
import ExperienceCard from './ExperienceCard'

export default class Experience extends Component {

    state = {
        experiences: []
    }

    // componentDidMount = () => {
    //     fetch('./data.json')
    //     .then(response => response.json())
    //     .then(json => {
    //       console.log(json)
    //         this.setState({
    //             experiences: json
    //         })
    //     })
    //     console.log("fired")
    // }

    getExperience = () => {
        fetch('./data.json')
        .then(response => response.json())
        .then(json => {
          console.log(json)
            this.setState({
                experiences: json
            })
        })
        console.log("fired")
    }

    handleSubmit = () => {
      this.getExperience()
    }

    
  render() {
    return (
      <div>
        <button onClick={() => this.handleSubmit()} id="experienceCardButtom">Get Experiences</button>
        <ExperienceCard  exp={this.state.experiences}/>
      </div>
    );
  }
}
