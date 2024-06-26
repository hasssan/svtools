import { test } from 'vitest';
import { moneyFormat } from './utils';

test('should format money', ({ expect }) => {
	expect(moneyFormat(1)).toBe('1g');
	expect(moneyFormat(100)).toBe('100g');
	expect(moneyFormat(1000)).toBe('1,000g');
	expect(moneyFormat(1000000)).toBe('1,000,000g');
	expect(moneyFormat('1000000')).toBe('1,000,000g');
	expect(moneyFormat('1000000000')).toBe('1,000,000,000g');
});

test('should return empty string if value is falsy', ({ expect }) => {
	expect(moneyFormat(0)).toBe('0g');
	expect(moneyFormat('')).toBe('');
});
