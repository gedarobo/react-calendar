import React, {PropType, Component} from 'react';
import CalendarTable from './CalendarTable';

class CalendarContainer extends Component {
	render() {
		let containerStyle = {
				position: 'absolute',
				top: '90px',
				left: 0,
				right: 0,
				bottom: 0
			},
			weekStyle = {
				color: '#888',
				tableLayout: 'fixed',
				width: '100%',
				borderCollapse: 'collapse',
				background: '#222',
				height: '22px',
				textAlign: 'center'
			};

		return (
			<div style={containerStyle}>
				<table cellpadding="0" cellspacing="0" style={weekStyle}>
					<tbody>
						<tr>
							<th style={{color: '#c05b4d'}}>SUN</th>
							<th>MON</th>
							<th>TUE</th>
							<th>WED</th>
							<th>THU</th>
							<th>FRI</th>
							<th style={{color: '#61dafb'}}>SAT</th>
						</tr>
					</tbody>
				</table>
				<CalendarTable todayDate={this.props.todayDate} />
			</div>
		);
	}
}

export default CalendarContainer;