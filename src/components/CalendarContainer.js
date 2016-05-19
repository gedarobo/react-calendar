import React, {PropType, Component} from 'react';

class CalendarContainer extends Component {
	render() {
		let containerStyle = {
				position: 'absolute',
				top: '62px',
				left: 0,
				right: 0,
				bottom: '40px'
			};

		return (
			<div style={containerStyle}>
				COntainer
			</div>
		);
	}
}

export default CalendarContainer;