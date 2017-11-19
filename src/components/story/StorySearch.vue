<!--
<router-view> 안에 선언된 하위 컴포넌트는 항상 최상단 노드로 감싸주어야 함
감싸주시 않음 아래와 같은 에러 발생
Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

** 에러 케이스
하하
<div>
  허허
</div>

** 정상 케이스
<div>
  하하
  허허
</div>
-->
<template>
  <div>
    <h2>검색 히스토리</h2>
    <div>
      <div v-for="list in historyList">{{list.word}}</div>
    </div>
  </div>
</template>

<script>
  import {store} from '../../store/store.js'
  export default {
    data () {
      return {
        store,
        historyList: store.state.searchHistory
      }
    },
    computed: {
    }
  }
</script>
