<template>
  <v-app dark>
    <Navbar />
    <v-container>
      <Nuxt  />
    </v-container>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
