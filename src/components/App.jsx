import React, { Component } from "react";
import ReactDom from "react-dom";
import Projects from "./Projects.jsx"
import AddProject from "./AddProject.jsx"
//import AddProject2 from "./AddProject2.jsx"
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
        category: 'Web design'
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

 // addHandler(title, category){
 //  let newProject = {
 //    id:uuid.v4(),
 //    title:title,
 //    category:category
 //  }
 //  let projects = this.state.projects;
 //  projects.push(newProject);
 //  this.setState({projects});
 // }

 addHandler(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects})
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