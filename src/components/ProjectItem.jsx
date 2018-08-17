import React, { Component } from "react";


class ProjectItem extends Component{
  render(){
    return (
       <li onClick = {this.props.onDelete.bind(this, this.props.project.id)}>
        {this.props.project.title} : {this.props.project.category}
      </li>
      )
  };
}

// const ProjectItem = (props) => (
//   <li>{this.props.project.title}</li>
//   )
export default ProjectItem;