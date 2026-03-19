const dayjs = require('dayjs')

function format(date = new Date(), template = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(template)
}

module.exports = { format }