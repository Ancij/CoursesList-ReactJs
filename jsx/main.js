var CourseRow = React.createClass({
	render: function (){
		var rows = [];
		var courses_count = this.props.courses.length;
		this.props.courses.forEach(function (course){			
			rows.push(<Course key={course.name} course={course}/>);		
		});
		return (
			<div className="courseList">
				<h2 className="title">We have {courses_count} courses</h2>
				{rows}
			</div>
		)
	}
});

var Course = React.createClass({
	render: function (){
		return (			
			<article className="row course__item">
				<div className="col-xs-3 center-xs middle-xs course__left">
					<img src={this.props.course.badge} alt={this.props.course.name} />
				</div>
				<div className="col-xs-9 course__right">
					<h2>{this.props.course.name}</h2>
				</div>			
			</article>
		)
	}
});

var courseList = [
	{		
		"name": "Curso de Desarrollo Web",
		"badge": "img/badge.png"
	},
	{		
		"name": "Curso de Android",
		"badge": "img/badge.png"
	},
	{		
		"name": "Curso de Django",
		"badge": "img/badge.png"
	},	
	{		
		"name": "Curso de React.js",
		"badge": "img/badge.png"
	}
]

React.render(<CourseRow courses={courseList}/>, document.getElementById('aplication'));