import React, {PropType, Component} from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarContainer from './CalendarContainer';

class Calendar extends Component {
	render() {
		this.todayDate = new Date();

		return (
			<div>
				<CalendarHeader todayDate={this.todayDate} />
				<CalendarContainer />
			</div>
		);
	}
}

export default Calendar;