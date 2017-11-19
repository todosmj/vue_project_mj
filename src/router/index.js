import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Count from '@/components/count/Count'
import Story from '@/components/story/Story'
import StoryList from '@/components/story/StoryList'
import StorySearch from '@/components/story/StorySearch'

Vue.use(Router)
Vue.use(Vuex)

/*
* vue router는 기본 해쉬모드로 URL에 기본적으로 #이 붙게 됨
* #을 없애기 위해서는 mode를 history 로 변경해주어야함
* */
export default new Router({
  mode: 'history',
  base: '/mj',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/count',
      component: Count
    },
    {
      path: '/story',
      component: Story,
      children: [
        {
          path: 'list/:item',
          name: 'story.list',
          component: StoryList
        },
        {
          path: 'search',
          name: 'story.search',
          component: StorySearch
        }
      ]
    }
  ]
})
