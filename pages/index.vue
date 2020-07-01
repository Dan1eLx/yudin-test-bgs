<template>
  <div>
    <v-row>
      <v-col cols="3">
        <v-avatar size="100%">
          <v-img
            :src="`https://picsum.photos/500/300?image=40`"
            :lazy-src="`https://picsum.photos/10/6?image=40`"
            aspect-ratio="1"
            class="grey lighten-2"
          ></v-img>
        </v-avatar>

      </v-col>
      <v-col cols="3">
        <h1>{{user.username}}</h1>
        <h2>{{user.email}}</h2>
      </v-col>

    </v-row>

  </div>
</template>

<script>

export default {
  middleware: 'auth',
  computed: {
    user() {
      return this.$store.state.authUser
    }
  }

}
</script>
