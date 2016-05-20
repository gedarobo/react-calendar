import React, {PropType, Component} from 'react';
import moment from 'moment';

class CalendarHeader extends Component {
	render() {
		let headerStyle = {
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				height: '90px',
				background: '#222',
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
				margin: '20px 0 0 65px',
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
				width: '65px',
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
						<button style={buttonStyle} onClick={this.props.onChangeDate.bind(this, 'prev')}>&lt;</button>
						<span>{moment(this.props.todayDate).format('YYYY.MM')}</span>
						<button style={buttonStyle} onClick={this.props.onChangeDate.bind(this, 'next')}>&gt;</button>
					</h1>
					<button style={textButtonStyle} onClick={this.props.onChangeDate.bind(this, 'today')}>TODAY</button>
				</div>
			</div>
		);
	}
}

export default CalendarHeader;