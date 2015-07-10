import React from 'react'

class CourseBadge extends React.Component {  
	render() {
		return (
			<div className="col-xs-3 center-xs middle-xs course__left">
				<img src={`img/${this.props.badge} `}/>
			</div>
		)
	}
}

export default CourseBadge