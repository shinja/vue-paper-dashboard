import Vue from 'vue'
import ulog from 'ulog'

function formatter(logger, method, args) {
  // add the logger name to the call
  args.unshift(logger.name + ': ')
}
ulog.formats.push(formatter) // from here on, our format is used


const logger = ulog('app')
logger.level = process.env.NODE_ENV === 'development' ? 'debug' : 'error'

const plugin = {
  install(Vue) {
    Vue.prototype.$logger = logger
  }
}

Vue.use(plugin)
logger.debug('logger is ready')

export default logger
