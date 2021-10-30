<template>
  <div class="box">
      <h1>Faça seu login</h1>
      <form action="login()">
          <label class="login_label">Email: <input type="email" ref="email"></label>
          <label class="login_label">Senha: <input type="password" ref="passwor"></label>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .login_label{
        display: block;
        margin-bottom: 1em;
    }
</style>