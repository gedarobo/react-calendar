import React, {PropType, Component} from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarContainer from './CalendarContainer';
import moment from 'moment';

class Calendar extends Component {
	render() {
		this.todayDate = moment().format('YYYY-MM-DD');
		this.todayDate = '2016-03-10';
		console.log(this.todayDate)

		return (
			<div>
				<CalendarHeader todayDate={this.todayDate} />
				<CalendarContainer todayDate={this.todayDate} />
			</div>
		);
	}
}

export default Calendar;