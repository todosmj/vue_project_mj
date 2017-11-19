<template>
  <div>
    <div class="hello">
      <h1>카운트</h1>
      값: {{getCount}}
      <button @click="addCount">+</button>
    </div>
    <child v-bind:getCount="getCount"></child>
  </div>
</template>

<script>
  import CountDetail from './CountDetail'
  import { mapGetters, mapMutations } from 'vuex'

  /*
  * computed는 method와 비슷하지만 캐쉬를 가지고 있어서
  * 함수 본문에서 사용하는 상태값 변화가 없으면 함수를 수행하지 않고
  * 캐쉬값을 반환 하여 비교적 빠름
  * */
  export default {
    computed: {
      ...mapGetters([// getters는 computed에 선언
        'getCount'
      ])
    },
    methods: {
      ...mapMutations([ // mutation은 method에 선언
        'addCounter'
      ]),
      addCount: function () {
        /*
        * commit을 통해 mutation을 호출
        * 첫번째 인자: 호출항 mutation명
        * 두번째 인자: 넘길 파라미터
        * */
        this.$store.commit('addCounter', {value: 10})
      }
    },
    components: {
      'child': CountDetail
    }
  }
</script>
