exports.capitalize = function (value) {
  if (!value && value !== 0) {
    return '';
  }

  return value.toString().charAt(0).toUpperCase() + value.slice(1);
}

/**
 * 'abc' => 'ABC'
 */

exports.uppercase = (value) => {
  return (value || value === 0)
    ? value.toString().toUpperCase()
    : ''
}

/**
 * 'AbC' => 'abc'
 */

exports.lowercase = (value) => {
  return (value || value === 0)
    ? value.toString().toLowerCase()
    : ''
}

/**
 * Format the given date.
 */
exports.date = (value) => {
  return moment.utc(value).local().format('MMMM Do, YYYY');
}

/**
 * Format the given date as a timestamp.
 */

exports.datetime = (value) => {
  return moment.utc(value).local().format('MMMM Do, YYYY h:mm A');
}
/**
 * Format the given date into a relative time.
 */
exports.relative = (value) => {
  return moment.utc(value).local().locale('en-short').fromNow();
}
   