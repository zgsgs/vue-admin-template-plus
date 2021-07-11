<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="header t-border">sassMagic全局导入啦</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    .header {
      width: 200px;
      height: 200px;
      background-color: rgba(#000, .4);
      color: #fff;
      @include box-center(center, center);
    }
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}

</style>
