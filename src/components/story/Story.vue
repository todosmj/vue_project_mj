<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li><router-link :to="{name:'story.search'}" tag='button'>검색 목록</router-link></li>
        <li><router-link :to="{name:'story.list', params:{item:'all'}}">목록</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
    <!--
    router-view 는 router-link로 연결된 페이지를 뿌리는 역할을 한다.

    해당 페이지의 구조는 아래구조를 따르며 이는 router에서 세팅한다(index.js)
    Story.vue
      - StorySearch.vue
      - StoryList.vue
    -->
  </div>
</template>

<!--
.router-link-active는 router-link로 연결된 항목에 자동으로 붙여지는 클래스로 현재 선택된 항목에 스타일을 주고 싶다면
해당 클래스를 이용하는 꿀팁!!!
-->
<style type=”text/css”>
  .router-link-active {font-size:26px; color: green;font-weight:bold}
</style>

<script>
  export default {
    name: 'Story',
    data () {
      return {
        msg: 'story Page'
      }
    }
  }
</script>
