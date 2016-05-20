import React, {PropType, Component} from 'react';

class MonthRow extends Component {
	render() {
		let rowStyle = {
				position: 'relative',
				width: '100%',
				height: this.props.rowHeight + '%'
			},
			gridStyle = {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				tableLayout: 'fixed',
				borderCollapse: 'collapse',
				margin: 0,
				padding: 0
			},
			cellStyle = {
				// borderRight: '1px solid #222',
				borderBottom: '1px solid #ddd',
				verticalAlign: 'top'
			},
			scheduleListStyle = {
				position: 'relative',
				tableLayout: 'fixed',
				width: '100%'
			};

		return (
			<div style={rowStyle}>
				<table cellpadding="0" cellspacing="0" style={gridStyle}>
					<tbody>
						<tr>
							{[...Array(7)].map((value, index) => <td key={index} dayindex={index} style={cellStyle}>&nbsp;</td>)}
						</tr>
					</tbody>
				</table>

				<table cellpadding="0" cellspacing="0" style={scheduleListStyle}>
					<tbody>
						<tr>
							{this.props.dateList.map((value, index) => <td key={index}>{value.date}</td>)}
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td dayindex="8" colSpan="3">
								<div style={{background: '#00d8ff'}}>
									<div class="info">
										<a href="#" style={{textDecoration: 'initial', color: '#222', padding : '5px 1px 1px 5px'}}>내용 없음</a>
									</div>
								</div>
							</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MonthRow;