import {
	isWorkingDay,
	workingDaysBetween,
	addWorkingDays,
	getHoliday,
	Holiday,
} from '@cipscis/working-days';

const Selectors = Object.freeze({
	DATE: '#example-date',
	DATE_OUTPUT: '#example-date-output',

	RANGE_START: '#example-range-start',
	RANGE_END: '#example-range-end',
	RANGE_OUTPUT: '#example-range-output',

	EXTEND_START: '#example-extend-start',
	EXTEND_NUMBER: '#example-extend-number',
	EXTEND_OUTPUT: '#example-extend-output',

	GET_YEAR: '#example-get-year',
	GET_HOLIDAY: '#example-get-holiday',
	GET_OUTPUT: '#example-get-output',
});

const validDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const $date = document.querySelector(Selectors.DATE);

if ($date instanceof HTMLInputElement) {
	$date.addEventListener('input', (e) => {
		const $output = document.querySelector(Selectors.DATE_OUTPUT);

		if ($output) {
			const value = $date.value;
			if (validDatePattern.test(value)) {
				const date = new Date(value);

				try {
					const dateIsWorkingDay = isWorkingDay(date);

					$output.innerHTML = dateIsWorkingDay ? 'Working day' : 'Not a working day';
				} catch (e) {
					if (e instanceof RangeError) {
						$output.innerHTML = `RangeError: ${e.message}`;
					} else {
						$output.innerHTML = 'An unexpected error was encountered';
						throw e;
					}
				}
			} else {
				$output.innerHTML = 'Please select a valid date';
			}
		}
	});
}

const $rangeStart = document.querySelector(Selectors.RANGE_START);
const $rangeEnd = document.querySelector(Selectors.RANGE_END);

if ($rangeStart instanceof HTMLInputElement && $rangeEnd instanceof HTMLInputElement) {
	const displayRange = function (e: Event) {
		const $output = document.querySelector(Selectors.RANGE_OUTPUT);

		if ($output) {
			const startValue = $rangeStart.value;
			const endValue = $rangeEnd.value;

			if (validDatePattern.test(startValue) && validDatePattern.test(endValue)) {
				const startDate = new Date(startValue);
				const endDate = new Date(endValue);

				try {
					const numWorkingDays = workingDaysBetween(startDate, endDate);

					$output.innerHTML = `${numWorkingDays} working day${numWorkingDays === 1 ? '' : 's'}`;
				} catch (e) {
					if (e instanceof RangeError) {
						$output.innerHTML = `RangeError: ${e.message}`;
					} else {
						$output.innerHTML = 'An unexpected error was encountered';
						throw e;
					}
				}
			} else {
				$output.innerHTML = 'Please select a valid pair of dates';
			}
		}
	}

	$rangeStart.addEventListener('input', displayRange);
	$rangeEnd.addEventListener('input', displayRange);
}

const $extendStart = document.querySelector(Selectors.EXTEND_START);
const $extendNumber = document.querySelector(Selectors.EXTEND_NUMBER);

if ($extendStart instanceof HTMLInputElement && $extendNumber instanceof HTMLInputElement) {
	const displayRange = function (e: Event) {
		const $output = document.querySelector(Selectors.EXTEND_OUTPUT);

		if ($output) {
			const startValue = $extendStart.value;
			const numberValue = $extendNumber.value;

			if (validDatePattern.test(startValue)) {
				const startDate = new Date(startValue);

				try {
					const endDate = addWorkingDays(startDate, Number(numberValue));

					$output.innerHTML = new Intl.DateTimeFormat('en-NZ', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'short',
					}).format(endDate);
				} catch (e) {
					if (e instanceof RangeError) {
						$output.innerHTML = `RangeError: ${e.message}`;
					} else {
						$output.innerHTML = 'An unexpected error was encountered';
						throw e;
					}
				}
			} else {
				$output.innerHTML = 'Please select a valid pair of dates';
			}
		}
	}

	$extendStart.addEventListener('input', displayRange);
	$extendNumber.addEventListener('input', displayRange);
}

const $getYear = document.querySelector(Selectors.GET_YEAR);
const $getHoliday = document.querySelector(Selectors.GET_HOLIDAY);

if ($getYear instanceof HTMLInputElement && $getHoliday instanceof HTMLSelectElement) {
	const getHolidayEvent = function (e: Event) {
		const $output = document.querySelector(Selectors.GET_OUTPUT);

		if ($output) {
			const year = Number($getYear.value);
			const holiday = Number($getHoliday.value) as Holiday;

			try {
				const holidayDate = getHoliday(holiday, year);

				if (holidayDate) {
					$output.innerHTML = new Intl.DateTimeFormat('en-NZ', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						weekday: 'short',
					}).format(new Date(...holidayDate));
				} else {
					$output.innerHTML = `The selected holiday does not occur in the year ${year}`;
				}
			} catch (e) {
				if (e instanceof RangeError) {
					$output.innerHTML = `RangeError: ${e.message}`;
				} else {
					$output.innerHTML = 'An unexpected error was encountered';
					throw e;
				}
			}
		}
	}

	$getYear.addEventListener('input', getHolidayEvent);
	$getHoliday.addEventListener('change', getHolidayEvent);
}
