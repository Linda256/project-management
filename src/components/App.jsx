import React, { Component } from "react";
import ReactDom from "react-dom";
import Projects from "./Projects.jsx"
import AddProject from "./AddProject.jsx"
import uuid from 'uuid';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects : []
    }
  }

  getProjects(){
    this.setState({
      projects:[
      {
        id: uuid.v4(),
        title:'Legacy',
        category: 'Web development'
      },
      {
        id: uuid.v4(),
        title:'Green Field',
        category: 'Mobile development'
      },
      {
        id: uuid.v4(),
        title:'MVP',
        category: 'Blog development'
      }
      ]}
      )

  }

 deleteHandler(id){
  let projects  = this.state.projects;
  let index = projects.findIndex(project => project.id);
  projects.splice(index,1);
  this.setState({projects});
 }

 addProject(title, category){
  let newProject = {
    id:uuid.v4(),
    title,
    category
  }
  let projects = this.state.projects;
  projects.push(newProject);
  this.setState({projects});
 }

componentWillMount(){
  this.getProjects();
}

  render(){
    return(
      <div>
        <h1>This is my React App</h1>
         <Projects projects= {this.state.projects} onDelete = {this.deleteHandler.bind(this)} />
         <AddProject projects = {this.state.projects} addProject = {this.addHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;