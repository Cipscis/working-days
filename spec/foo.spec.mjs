import { foo } from '../dist/working-days.js';

describe('foo', () => {
	it('returns true', () => {
		expect(foo()).toBe(true);
	});
});
