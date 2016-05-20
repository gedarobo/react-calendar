import React, {PropType, Component} from 'react';

class MonthRow extends Component {
	render() {
		let rowStyle = {
				height: this.props.rowHeight + '%'
			},
			scheduleListStyle = {
				position: 'relative',
				tableLayout: 'fixed',
				width: '100%'
			};

		return (
			<div style={rowStyle}>
				<table cellpadding="0" cellspacing="0" style={scheduleListStyle}>
					<tbody>
						<tr>
							{this.props.dateList.map((value, index) => <td key={index}>{value.date}</td>)}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MonthRow;