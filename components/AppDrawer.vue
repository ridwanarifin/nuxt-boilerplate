<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in dataSource"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mdiApps } from '@mdi/js'
import { mapGetters } from 'vuex'

export default {
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => [
        {
          icon: mdiApps,
          title: 'Home',
          to: '/'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['app']),
    drawer: {
      get () {
        return this.app && this.app.drawer
      },
      set (v) {
        this.setGlobalApp({
          path: 'drawer',
          payload: v
        })
      }
    },
    miniVariant: {
      get () {
        return this.app && this.app.miniVariant
      },
      set (v) {
        this.setGlobalApp({
          path: 'miniVariant',
          payload: v
        })
      }
    },
    clipped: {
      get () {
        return this.app && this.app.clipped
      },
      set (v) {
        this.setGlobalApp({
          path: 'clipped',
          payload: v
        })
      }
    }
  }
}
</script>
