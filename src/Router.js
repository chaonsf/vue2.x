import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const first={template:'<div>first内容</div>'}
const second={template:'<div>second内容</div>'}
const Home={template:'<div>Home内容</div>'}
const firstFirst={template:'<div>firstFirst内容{{$route.params.id}}</div>'}
const firstSecond={template:'<div>firstSecond内容</div>'}
const firstChild={
   template:`
    <div class="ghu">
       <h2>组件</h2>
        <router-view class="xianshi"></router-view>
    </div>
   `
}


const router=new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:"/",name:"Home",component:Home},
    {path:"/first",component:firstChild,
        children:[
          {path:"/",name:"Home-first",component:first},
          {path:"first",name:"Home-first-first",component:firstFirst},
          {path:"second",name:"Home-first-second",component:firstSecond}
        ]
    },
    {path:"/second",name:"Home-second",component:second}
  ]
})
/*上面的name是要传的参数,如果这个路由有子路由，则传的参数要写在子路由的根目录上，而它本身不要写,第二种传参方式也可以：to，见模板*/
new Vue({
  router,
  template:`
  <div>
    <h1>导航</h1>
    <p>{{$route.name}}</p>
    <ol>
       <li><router-link to="/">/</router-link></li>
        <li><router-link to="/first">first</router-link></li>
              <ol>
               <li><router-link :to="{name:'Home-first-first',params:{id:'123'}}">first</router-link></li> 
               <li><router-link to="/first/second">second</router-link></li>
              </ol>
         <li><router-link to="/second">second</router-link></li>
    </ol>
    <router-view class="xianshi"></router-view>
</div>
  `
}).$mount("#app")
