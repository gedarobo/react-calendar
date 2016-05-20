import React, {PropType, Component} from 'react';
import moment from 'moment';
import MonthRow from './MonthRow';

class CalendarTable extends Component {
	makeRenderDateList() {
		let i,
			firstDateTimeOfMonth = moment(this.props.todayDate, 'YYYY-MM-DD').startOf('month'),
			lastDateTimeOfMonth = moment(this.props.todayDate, 'YYYY-MM-DD').endOf('month'),
			lastDateTimeOfPrevMonth = moment(firstDateTimeOfMonth).subtract(1, 'days'),
			firstDateTimeOfNextMonth = moment(firstDateTimeOfMonth).add(1, 'days'),
			lastDateOfMonth = lastDateTimeOfMonth.date(),
			lastDateOfPrevMonth = lastDateTimeOfPrevMonth.date(),
			firstDayOfMonth  = firstDateTimeOfMonth.day(),
			lastDayOfMonth = lastDateTimeOfMonth.day();

		this.dateList = [];
		this.weekList = [];

		// 지난 달 일자
		if (firstDayOfMonth > 0) {
			for (i = lastDateOfPrevMonth - firstDayOfMonth; i < lastDateOfPrevMonth; i++) {
				let tempDate = moment(lastDateTimeOfPrevMonth).date(i + 1);

				this.dateList.push({
					year: tempDate.year(),
					month: tempDate.month() + 1,
					date: tempDate.date()
				});
			}
		}

		// 이번 달 일자
		for (i = 1; i < lastDateOfMonth + 1; i++) {
			let tempDate = moment(firstDateTimeOfMonth).date(i);

			this.dateList.push({
				year: tempDate.year(),
				month: tempDate.month() + 1,
				date: tempDate.date()
			});
		}

		// 다음 달 일자
		for (i = 1; i < 7 - lastDayOfMonth; i++) {
			let tempDate = moment(firstDateTimeOfNextMonth).date(i);

			this.dateList.push({
				year: tempDate.year(),
				month: tempDate.month() + 1,
				date: tempDate.date()
			});
		}

		this.dateList.map(() => this.weekList.push(this.dateList.splice(0, 7)));
	}

	render() {
		let tableStyle = {
				position: 'absolute',
				top: '22px',
				left: 0,
				right: 0,
				bottom: 0
			},
			tableContainerStyle = {
				overflow: 'hidden',
				position: 'absolute',
				top: 0,
				bottom: 0,
				left: 0,
				width: '100%',
				height: '100%',
				background: '#fff'
			};

		this.makeRenderDateList();

		return (
			<div style={tableStyle}>
				<div style={tableContainerStyle}>
					{this.weekList.map((value, index) => <MonthRow dateList={value} key={index} rowHeight={100/ this.weekList.length} />)}
				</div>
			</div>
		);
	}
}

export default CalendarTable;