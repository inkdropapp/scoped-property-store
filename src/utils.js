const cloneDeep = require('lodash/cloneDeep')
const isObject = require('lodash/isObject')
const isArray = require('lodash/isArray')
const isPlainObject = value => isObject(value) && !isArray(value)

function deepExtend(target) {
  let result = target
  let i = 0
  while (++i < arguments.length) {
    const object = arguments[i]
    if (isPlainObject(result) && isPlainObject(object)) {
      const keys = Object.keys(object)
      for (let key of keys) {
        result[key] = deepExtend(result[key], object[key])
      }
    } else {
      result = cloneDeep(object)
    }
  }
  return result
}

exports.deepExtend = deepExtend
