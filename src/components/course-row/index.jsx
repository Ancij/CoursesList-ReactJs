import React from 'react'  
import CourseBadge from '../course-badge'

class CourseRow extends React.Component {

	render() {
		return(


			<article className="row course__item">
        		<CourseBadge badge={this.props.badge} />
				
				<div className="col-xs-9 course__right">
					<h2>{this.props.title}</h2>
				</div>			
			</article>
		)
	}
}

export default CourseRow