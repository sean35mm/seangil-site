const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

function getDateParts(dateString: string): [number, number, number] | null {
  const value = dateString.trim();
  const usDate = /^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(value);
  const isoDate = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
  return usDate
    ? [Number(usDate[3]), Number(usDate[1]), Number(usDate[2])]
    : isoDate
      ? [Number(isoDate[1]), Number(isoDate[2]), Number(isoDate[3])]
      : null;
}

function getUtcDate(dateString: string): Date | null {
  const parts = getDateParts(dateString);

  if (!parts) return null;

  const [year, month, day] = parts;
  const date = new Date(Date.UTC(year, month - 1, day));
  const isValid =
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day;

  return isValid ? date : null;
}

export function convertDateFormat(dateString: string): string {
  const date = getUtcDate(dateString);
  return date ? formatter.format(date) : dateString.trim();
}

export function convertDateToIso(dateString: string): string | undefined {
  return getUtcDate(dateString)?.toISOString().slice(0, 10);
}
