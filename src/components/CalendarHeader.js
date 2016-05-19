import React, {PropType, Component} from 'react';

class CalendarHeader extends Component {
	goToday() {
		console.log('today')
	}

	render() {
		let headerStyle = {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				height: '62px',
				backgroundColor: '#222',
				textAlign: 'center'
			},
			headerTitleStyle = {
				position: 'relative',
				display: 'inline-block',
				textAlign: 'center',
				fontSize: '27px',
				fontWeight: 'normal'
			},
			headerH1Style = {
				position: 'relative',
				margin: 0,
				display: 'inline-block',
				fontSize: '27px',
				color: '#00d8ff'
			},
			buttonStyle = {
				border: 0,
				background: 0,
				cursor: 'pointer',
				color: '#00d8ff',
				fontSize: '37px'
			},
			textButtonStyle = {
				border: 0,
				background: 0,
				cursor: 'pointer',
				color: '#00d8ff',
				fontSize: '17px'
			};

		return (
			<div style={headerStyle}>
				<div style={headerTitleStyle}>
					<h1 style={headerH1Style}>
						<button style={buttonStyle}>&lt;</button>
						<span>{this.props.todayDate.getFullYear()}.{('0' + this.props.todayDate.getMonth()).slice(-2)}</span>
						<button style={buttonStyle}>&gt;</button>
					</h1>
					<button style={textButtonStyle} onClick={this.goToday.bind(this)}>오늘</button>
				</div>
			</div>
		);
	}
}

export default CalendarHeader;