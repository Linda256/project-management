import React, { Component } from "react";
import ProjectItem from "./ProjectItem.jsx"

class Projects extends Component{
  render(){
    return (
       <div>
        {this.props.projects.map(project =>  <ProjectItem project = {project} onDelete = {this.props.onDelete}/>)}
      </div>
      )
  };
}
  export default Projects;