export default (context, inject) => {
  // inject global lodash
  inject('_', require('lodash'))
  // inject global @mdi/js in $icon
  inject('icon', require('@mdi/js'))
}
