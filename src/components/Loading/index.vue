<template>
  <div>
    <div v-if="isLoading" :key="'loading'" class="loading" :class="getAnimation" />
    <slot v-else />
  </div>
</template>

<script>
export default {
  props: {
    // 从使用的组件中获取出要绑定的数据
    source: {
      type: null, // 任意类型
      require: true,
      default: null
    },
    // 从使用的组件中获取出要拦截的URL
    urls: {
      type: Array,
      default: () => {
        []
      }
    },
    animation: {
      type: String,
      default: 'loader1'
    }
  },
  data () {
    return {
      isLoading: true
    }
  },
  computed: {
    getAnimation () {
      return Array.from(new Set(this.animation.trim().split(' ')))
    }
  },
  watch: {
    source: function () {
      if (this.source) {
        this.isLoading = false
      }
    }
  },
  mounted: function () {
    if (this.urls) {
      this.__loader_checks.push((url, config) => {
        if (this.urls.includes(url)) {
          this.isLoading = true
        }
      })
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
