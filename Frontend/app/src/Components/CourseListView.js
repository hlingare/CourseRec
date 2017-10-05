import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import { getCourseData } from '../utils/courselist-api';

class CourseListView extends Component {

  constructor() {
    super()
    this.state = { courses: [] }; 
}


  getCourseList() {
	getCourseData().then((courses) => {
		this.setState({ courses });
		console.log( courses );
	});
  }

  componentDidMount() {
	this.getCourseList();
  }

  render() {
    const { courses }  = this.state;

    return (
      <div>
        <Nav auth={this.auth} {...this.props}  />
        <h3 className="text-center">Courses</h3>
        <hr/>

        { courses.map((course, index) => (
              <div className="col-sm-6" key={index}>
		<div className="panel panel-danger">
		<div className="panel-heading">
		<h3 className="panel-title"><span className="btn">#{ course.id }</span></h3>
              </div>
		<div className="panel-body">
		 <p> { course.course } </p>
		</div>
		</div>
		</div>
          ))}
          </div>
    );
  }
}

export default CourseListView;
