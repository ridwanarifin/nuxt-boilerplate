<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
  >
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon
        v-text="miniVariant
          ? $icon.mdiChevronRight
          : $icon.mdiChevronLeft"
      />
    </v-btn>

    <v-btn
      icon
      @click.stop="clipped = !clipped"
    >
      <v-icon v-text="$icon.mdiApplication" />
    </v-btn>

    <v-btn
      icon
      @click.stop="fixed = !fixed"
    >
      <v-icon v-text="$icon.mdiMinus" />
    </v-btn>

    <v-toolbar-title v-text="title" />
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      default: 'Default',
      required: true
    }
  },
  computed: {
    ...mapGetters(['app']),
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
    },
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
    fixed: {
      get () {
        return this.app && this.app.fixed
      },
      set (v) {
        this.setGlobalApp({
          path: 'fixed',
          payload: v
        })
      }
    }
  }
}
</script>
