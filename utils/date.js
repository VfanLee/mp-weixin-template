import dayjs from 'dayjs'

export function format(date = new Date(), template = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(template)
}