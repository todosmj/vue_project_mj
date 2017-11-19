<template>
  <div>
    <h4>여기는 하위 컴포넌 트 안이에요</h4>
    <p>여기서 스토어를 이용해 계산 한번 더 해볼께요</p>
    <div>
        <p v-for="items in getItem">{{items}}</p>
    </div>
    <button @click="addItemBtn">항목추가</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import {store} from '../../store/store'
export default {
  data: function () {
    return {
      addItemBtn: function () {
        store.commit('addItem')
      }
    }
  },
  computed: {
    ...mapGetters([
      'getItem'
    ])
  },
  method: {
    ...mapMutations([
      'addItem'
    ])
  }
}
</script>
<!--
궁금증1.
하위 컴포넌트에서 클릭 요소를 선언할때
method에서 선언하는게 아니라 data에서 선언했는데 왜 그럴까요?

궁금증2.
부모 컴포넌트에서는 store 접근시에  this.$store로 접근 할 수 있는데
왜 하위 컴포넌트에서는 안될까요?

궁금증3.
store 사용할때 import로 해서 직접 접근 하는 방법밖에 없을까요?
-->
