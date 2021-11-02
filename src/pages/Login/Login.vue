<template>
  <div class="box">
      <div class="contentArea"> 
          <img src="@/assets/shibuya.jpg" alt="um bairro massa" width="100%" height="93%">
      </div>
      
      <div class="contentArea" id="formBox">
          <h1>Faça seu login</h1>
        <form action="login()" id="loginForm">
            <div class="form-group col-sm-6">
                <label class="login_label">Email: <input class="form-control" type="email" ref="email"></label>
            </div>
            <div class="form-group col-sm-6">
                <label class="login_label">Senha: <input class="form-control" type="password" ref="passwor"></label>
            </div>
            <div class="form-group col-sm-6 ">
                <input class="form-control btn btn-success" type="submit" ref="submit">
            </div>
        </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .box{
        display: flex;
        flex-flow: row nowrap;
        width: 100vw;
        height: 100vh;
        color: var(--std-white);
        background-color: var(--dark-blue);
    }
    .contentArea{
        width: 50vw ;
        height: 100vh;
    }
    #formBox{
        justify-content: center;
        align-items: center;
    }
    #loginForm{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
    .login_label{
        display: block;
        margin-bottom: 1em;
    }
</style>