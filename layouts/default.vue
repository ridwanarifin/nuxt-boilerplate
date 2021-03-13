<template>
  <v-app>
    <app-drawer :data-source="items" />

    <app-bar :title="title" />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import AppDrawer from '~/components/AppDrawer.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: { AppDrawer, AppBar, AppFooter },
  data () {
    return {
      items: [
        {
          icon: this.$icon.mdiApps,
          title: 'Welcome',
          to: '/'
        }
      ],
      title: 'My project boilerplate'
    }
  }
}
</script>
