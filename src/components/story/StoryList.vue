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
    <h2>스토리 검색 페이지</h2>
    <p> 당신이 검색한 단어는 <strong>{{searchWord}}</strong>입니다</p>

    <input autofocus autocomplete="off"
           placeholder="검색어를 입력하세요"
           v-model="searchWord"
           @keydown.enter="searchFilter">

    <hr>
    <h3>목록</h3>
    <div>
      <div v-for="list in storyList">{{list.word}}</div>
    </div>
  </div>
</template>

<script>
  import {store} from '../../store/store'
  import {mapGetters} from 'vuex'

  export default {
    data () {
      return {
        searchWord: null,
        storyList: store.state.searchWords,
        store
      }
    },
    computed: {
      ...mapGetters([// getters는 computed에 선언
        'getSearchWord'
      ])
    },
    methods: {
      searchFilter: function () {
        let word = this.searchWord
        this.storyList = store.state.searchWords.filter(function (list) {
          return list.word.match(word)
        })
        store.state.searchHistory.push({word: this.searchWord})
      },
      init: function () {
        this.searchWord = (this.$route.params.item === 'all') ? '' : this.$route.params.item
        this.searchFilter()
      }
    },
    mounted: function () {
      this.init()
    }
  }
</script>
