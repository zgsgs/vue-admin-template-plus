<template>
  <div class="monaco">
    <div class="monaco__config">
      <label>
        <span class="config__label">语言</span>
        <el-select
          v-model="opts.language"
          clearable
          placeholder="请选择"
          size="mini"
          @change="changeLanguage"
        >
          <el-option v-for="item in sets.language" :key="item" :label="item" :value="item" />
        </el-select>
      </label>
      <label>
        <span class="config__label">样式风格</span>
        <el-select
          v-model="opts.theme"
          clearable
          placeholder="请选择"
          size="mini"
          @change="changeTheme"
        >
          <el-option v-for="item in sets.theme" :key="item" :label="item" :value="item" />
        </el-select>
      </label>
      <el-button type="primary" size="mini" @click="getValue">获取内容</el-button>
    </div>
    <!--调用子组件-->
    <monaco ref="monaco" class="monaco__edit" :height="700" :opts="opts" @change="changeValue" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      sets: {
        language: {
          'apex': 'apex',
          'azcli': 'azcli',
          'bat': 'bat',
          'c': 'c',
          'clojure': 'clojure',
          'coffeescript': 'coffeescript',
          'cpp': 'cpp',
          'csharp': 'csharp',
          'csp': 'csp',
          'css': 'css',
          'dockerfile': 'dockerfile',
          'fsharp': 'fsharp',
          'go': 'go',
          'graphql': 'graphql',
          'handlebars': 'handlebars',
          'html': 'html',
          'ini': 'ini',
          'java': 'java',
          'javascript': 'javascript',
          'json': 'json',
          'kotlin': 'kotlin',
          'less': 'less',
          'lua': 'lua',
          'markdown': 'markdown',
          'msdax': 'msdax',
          'mysql': 'mysql',
          'objective-c': 'objective-c',
          'pascal': 'pascal',
          'perl': 'perl',
          'pgsql': 'pgsql',
          'php': 'php',
          'plaintext': 'plaintext',
          'postiats': 'postiats',
          'powerquery': 'powerquery',
          'powershell': 'powershell',
          'pug': 'pug',
          'python': 'python',
          'r': 'r',
          'razor': 'razor',
          'redis': 'redis',
          'redshift': 'redshift',
          'ruby': 'ruby',
          'rust': 'rust',
          'sb': 'sb',
          'scheme': 'scheme',
          'scss': 'scss',
          'shell': 'shell',
          'sol': 'sol',
          'sql': 'sql',
          'st': 'st',
          'swift': 'swift',
          'tcl': 'tcl',
          'typescript': 'typescript',
          'vb': 'vb',
          'xml': 'xml',
          'yam': 'yam'
        },
        theme: {
          'vs': 'vs',
          'vs-dark': 'vs-dark',
          'hc-black': 'hc-black'
        }
      },
      opts: {
        value: '',
        readOnly: false, // 是否可编辑
        language: 'javascript', // 语言类型
        theme: 'vs-dark' // 编辑器主题
      }
    }
  },
  methods: {
    changeLanguage (val) {
      this.opts.language = val
    },
    changeTheme (val) {
      this.opts.theme = val
    },
    // 手动获取值
    getValue () {
      this.$message.info(this.$refs.monaco.getVal())
    },
    // 内容改变自动获取值
    changeValue (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(monaco) {
  margin: 20px;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  @include e(config) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
  }
}
@include b(config) {
  @include e(label) {
    margin-right: 8px;
  }
}
</style>
