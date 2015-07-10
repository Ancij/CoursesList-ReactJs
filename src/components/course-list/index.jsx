import React from 'react'  
import CourseRow from '../course-row'

class CourseList extends React.Component {
	render() {
		let courses_count = this.props.courses.length

		return (
			<div className="courseList">
				<h2 className="title">We have {courses_count} courses</h2>				
				{
					this.props.courses.map((course) => {
		            return <CourseRow key={ course.id }
		                              title={ course.name }
		                              badge={ course.badge }
		                              />
		          })
		        }
			</div>
		)
	}
}

export default CourseList  