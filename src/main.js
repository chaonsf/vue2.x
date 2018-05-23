
import Vue from 'vue'
/*import Router from './Router'*/        /*这个是vue路由*/
import store from './store'
import vuex from './vuex'


new Vue({
  el:"#app",
  store,
  render:xx => xx(vuex)
})
