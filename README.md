# nuxt-boilerplate

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Include
```
- lodash
- swiper
- secure-ls
- vee-validate
- vuex-map-fields
- vue-awesome-swiper
- vuex-persistedstate
- @nuxtjs/moment
- @nuxtjs/dotenv
- @nuxtjs/vendor
```

## Plugins

### filters
```javascript
import Vue from 'vue'
import _ from 'lodash'

/**
 * add helper
 * @example
 * {{ 'some long text' | truncate(10) }}
 * **/
Vue.filter('truncate', (text, length, clamp = '...') => (
  _.size(text) > length
    ? text.slice(0, length) + clamp
    : text
))
```

### injects
```javascript
export default (context, inject) => {
  /**
   * inject global lodash
   * @example
   * $_.assign({}, payload)
   **/
  inject('-', require('lodash')),

  /**
   * inject global @mdi/js
   * @example
   * $icon.mdiApp
   **/
  inject('icon', require('@mdi/js'))
}
```

### mixins
```javascript
import Vue from 'vue'
import { mapMutations } from 'vuex'

Vue.mixin({
  methods: {
    /**
     * add global methods
     * @example
     * this.setGlobalApp(value)
     **/
    ...mapMutations({
      setGlobalApp: 'SET_APP'
    })
  }
})
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
