import dayjs from 'dayjs'
export function formatUtcString(
  utcString: string,
  format = 'YYYY-MM-DD HH:mm:ss'
): any {
  return dayjs(utcString).format(format)
}
