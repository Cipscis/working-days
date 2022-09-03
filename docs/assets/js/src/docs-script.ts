import { isWorkingDay, workingDaysBetween } from '@cipscis/working-days';

const Selectors = Object.freeze({
	DATE: '#example-date',
	DATE_OUTPUT: '#example-date-output',

	RANGE_START: '#example-range-start',
	RANGE_END: '#example-range-end',
	RANGE_OUTPUT: '#example-range-output',
});

const validDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const $date = document.querySelector(Selectors.DATE);

if ($date instanceof HTMLInputElement) {
	$date.addEventListener('change', (e) => {
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

	$rangeStart.addEventListener('change', displayRange);
	$rangeEnd.addEventListener('change', displayRange);
}

// console.log(foo());
