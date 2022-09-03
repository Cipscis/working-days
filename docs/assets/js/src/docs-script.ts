import { isWorkingDay } from '@cipscis/working-days';

const Selectors = Object.freeze({
	DATE: '#example-date',
	DATE_OUTPUT: '#example-date-output',
});

const $date = document.querySelector(Selectors.DATE);

if ($date && $date instanceof HTMLInputElement) {
	$date.addEventListener('change', (e) => {
		const $output = document.querySelector(Selectors.DATE_OUTPUT);

		if ($output) {
			const value = $date.value;
			if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
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

// console.log(foo());
