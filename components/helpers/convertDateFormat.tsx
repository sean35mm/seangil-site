// DateHelper.ts
export function convertDateFormat(isoDateStr: string): string {
	const date = new Date(isoDateStr)

	const options = {
		month: 'long' as const,
		day: '2-digit' as const,
		year: 'numeric' as const,
	} // Type assertion for all fields
	return date.toLocaleDateString('en-US', options).replace(/ /g, ' ')
}
