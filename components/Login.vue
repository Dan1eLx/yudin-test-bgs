<template>
  <v-form @submit.prevent="login" ref='loginForm'>
    <v-alert v-if="formError" color="error">{{formError}}</v-alert>
    <v-text-field
      label="Логин"
      :rules="loginRules"
      required
      v-model="formLogin"
    ></v-text-field>
    <v-text-field
      label="Пароль"
      required
      :rules="passwordRules"
      type="password"
      v-model.trim="formPassword"
    ></v-text-field>

    <v-btn color="primary" type="submit" class="mt-1 center">
      <v-icon class="mr-1">mdi-login-variant</v-icon>
      Вход
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data () {
    return {
      formError: null,
      formLogin: '',
      formPassword: '',
      loginRules: [
      v => !!v || 'Введите логин',
      ],
      passwordRules: [
      v => !!v || 'Введите пароль',
      ],
    }
  },
  methods: {
    async login () {

      if (this.$refs.loginForm.validate()){
      try {
        await this.$store.dispatch('login', {
          login: this.formLogin,
          password: this.formPassword
        })
        this.formLogin = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
      }
    },
  }
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
