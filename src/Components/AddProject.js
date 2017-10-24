import React, { Component } from 'react';

class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }
  render() {

    return (
      <div>
        <h3>Add Project</h3>
        <form>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
            <select ref="category">

            </select>
          </div>
          <div>
            <label>Category</label><br />

          </div>
        </form>
      </div>
    );
  }
}



export default Projects;
