import React from 'react'  
import CourseList from '../course-list'

class CourseApp extends React.Component {

	constructor(props) {
		super(props)
		this.state = { courses: [] }
	}

	componentWillMount() {
		fetch('/courses.json')
			.then((response) => {
		    	return response.json()
			})
		  	.then((courses) => {
		    	this.setState({ courses : courses })
		  	})
	}

  	render() {
    	if (this.state.courses.length > 0) {
      		return (
        		<div>
          			<CourseList courses={this.state.courses} />
        		</div>
      		)
    	} else {
      		return (
        		<p className="title">Loading courses...</p>
      		)
    	}
  	}

}

export default CourseApp  