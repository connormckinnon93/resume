class Education extends React.Component {
	render() {
		return(
			<div className="col-sm-12">
				<h3>{ this.props.program }</h3>
				<h4>{ this.props.school }</h4>
			</div>
		);
	}
}

class EducationBox extends React.Component {
	render() {
		const education = this._getEducation();
		return(
			<div className="row">
				{ education }
			</div>
		);
	}

	_getEducation() {
		const educationList = [
			{id: 1, school: 'Seneca College', program: 'Webmaster Content Site Design Certificate'},
			{id: 2, school: 'Seneca College', program: 'Advanced Project Management Certificate'},
			{id: 3, school: 'Udacity', program: 'Udacity Full Stack Nanodegree'},
			{id: 4, school: 'Coursera (Duke University)', program: 'Software Engineering Fundamentals Specialization'}
		];

		return educationList.map((education) => {
			return (
				<Education school={education.school} program={education.program} key={education.id} />
			);
		});
	}
}

class Experience extends React.Component {
	render() {
		return(
			<div className="col-sm-12">
				<h3>{ this.props.title }</h3>
				<h4>{ this.props.employer }</h4>
			</div>
		);
	}
}


class ExperienceBox extends React.Component {
	render() {
		const experience = this._getExperience();
		return(
			<div className="row">
				{ experience }
			</div>
		);
	}

	_getExperience() {
		const experienceList = [
			{id: 1, employer: 'Seneca College', title: 'Developer'},
			{id: 2, employer: 'Seneca College', title: 'Workshop Facilitator'},
			{id: 3, employer: 'Lambton', title: 'eLearning Consultant'},
			{id: 4, employer: 'Seneca College', title: 'Lead Developer - Technical'}
		];

		return experienceList.map((experience) => {
			return (
				<Experience employer={experience.employer} title={experience.title} key={experience.id} />
			);
		});
	}
}

class Header extends React.Component {
	render() {
		return(
			<div className="header">
				<h1>{ this.props.name }</h1>
				<h4>{ this.props.title }</h4>
			</div>
		);
	}
}

class Resume extends React.Component {
	render() {
		return( <div className="container">
					<Header name="Connor McKinnon" title="Full Stack Web Developer"/>
					<hr />
					<EducationBox />
					<hr />
					<ExperienceBox />
 				</div> );
	}
}

ReactDOM.render(
	<Resume />, document.getElementById('app')
);