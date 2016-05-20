import React, {PropType, Component} from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarContainer from './CalendarContainer';
import moment from 'moment';

class Calendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todayDate: moment().format('YYYY-MM-DD')
		};
	}

	changeDate(action) {
		let todayDateTime = moment(this.state.todayDate);

		switch (action) {
			case 'prev':
				this.setState({
					todayDate: todayDateTime.subtract(1, 'month').format('YYYY-MM-DD')
				});
				break;

			case 'next':
				this.setState({
					todayDate: todayDateTime.add(1, 'month').format('YYYY-MM-DD')
				});
				break;

			case 'today':
				this.setState({
					todayDate: moment().format('YYYY-MM-DD')
				});
				break;
		}
	}

	render() {
		return (
			<div>
				<CalendarHeader todayDate={this.state.todayDate} onChangeDate={this.changeDate.bind(this)}/>
				<CalendarContainer todayDate={this.state.todayDate} />
			</div>
		);
	}
}

export default Calendar;