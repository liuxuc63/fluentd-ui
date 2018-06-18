'use strict'
import 'lodash/lodash'
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'
import OwnedPluginForm from './owned_plugin_form'

window.addEventListener('load', () => {
  new Vue({
    el: '#plugin-setting',
    data: () => {
      return {}
    },
    components: {
      'owned-plugin-form': OwnedPluginForm
    },
    methods: {
    }
  })
})
