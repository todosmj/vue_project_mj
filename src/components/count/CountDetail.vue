<template>
  <div>
    <div>
      하위 값: {{getCount}}
    </div>

    <div>
      <h3>여기서 하위 컴포넌트를 한번더 선언해보자!</h3>
    </div>
    <div is="count-item"></div>
  </div>
</template>

<script>
  import countItem from './CountItem'

  export default {
    props: ['getCount'],
    components: {
      'countItem': countItem
      /*
       * html 속성은 대소문자 구분하지 않음으로
       * camelCased 선언한 속성은 실제 선언은 kebab-case를 사용함
      */
    }
  }
</script>
