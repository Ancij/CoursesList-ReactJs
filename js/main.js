var CourseRow = React.createClass({displayName: "CourseRow",
	render: function (){
		var rows = [];
		var courses_count = this.props.courses.length;
		this.props.courses.forEach(function (course){			
			rows.push(React.createElement(Course, {key: course.name, course: course}));		
		});
		return (
			React.createElement("div", {className: "courseList"}, 
				React.createElement("h2", {className: "title"}, "We have ", courses_count, " courses"), 
				rows
			)
		)
	}
});

var Course = React.createClass({displayName: "Course",
	render: function (){
		return (			
			React.createElement("article", {className: "row course__item"}, 
				React.createElement("div", {className: "col-xs-3 center-xs middle-xs course__left"}, 
					React.createElement("img", {src: this.props.course.badge, alt: this.props.course.name})
				), 
				React.createElement("div", {className: "col-xs-9 course__right"}, 
					React.createElement("h2", null, this.props.course.name)
				)			
			)
		)
	}
});

var courseList = [
	{		
		"name": "Curso de Desarrollo Web",
		"badge": "/img/badge.png"
	},
	{		
		"name": "Curso de Android",
		"badge": "/img/badge.png"
	},
	{		
		"name": "Curso de Django",
		"badge": "/img/badge.png"
	},	
	{		
		"name": "Curso de React.js",
		"badge": "/img/badge.png"
	}
]

React.render(React.createElement(CourseRow, {courses: courseList}), document.getElementById('aplication'));