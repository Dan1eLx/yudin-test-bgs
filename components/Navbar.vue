<template>
      <v-navigation-drawer
        absolute
        permanent
        right
        miniVariant
        expandOnHover
      >
        <v-list dense
          nav
          class="py-0">

          <v-list-item two-line class="px-0 mini-variant">
            <v-list-item-avatar>
              <img :src="user.photo">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{user.username}}</v-list-item-title>
              <v-list-item-subtitle>Авторизован</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

        <v-divider></v-divider>


          <v-list-item
            @click.prevent="logout"
          >
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Выход</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.authUser
    }
  }
}
</script>



