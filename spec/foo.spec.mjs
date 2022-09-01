import { foo } from '../dist/main-export.js';

describe('foo', () => {
	it('returns true', () => {
		expect(foo()).toBe(true);
	});
});
