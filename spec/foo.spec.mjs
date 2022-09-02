import { foo } from '../dist/index.js';

describe('foo', () => {
	it('returns true', () => {
		expect(foo()).toBe(true);
	});
});
