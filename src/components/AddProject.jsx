import React, {Component} from 'react';
import uuid from 'uuid';

class AddProject exteeds Component {
  let categoryOption =
  this.props.projects.map( project => return { <option key>{project.category} </option>
  }));

  render(){
    return(
      <Form onSummit={this.props.addProject.bind(this,this.ref.title,this.ref.category)}>
        <div>
          <lable>Title</lable>
          <input type='text' ref = 'title'>
        </div>
        <div>
          <lable>Category</lable>
          <select ref ='category'>
            {category}
        </div>

        <button submmit/>
      </Form>
      )
  }
}

export default AddProject;