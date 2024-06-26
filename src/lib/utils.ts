/**
 * Format number to money format
 * @param x money value
 */
export function moneyFormat(x: number | string): string {
	if (x === 0) return '0g';
	if (x === '') return '';

	const digit = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return `${digit}g`;
}
