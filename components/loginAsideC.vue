<template>
    <div class="col">
      <div class="login">
        <h5>Usuario</h5>
        <input type="text" placeholder="usuario">
        <h5>Contraseña</h5>
        <input type="password" placeholder="contraseña">
        <span>No recuerdas tu contraseña?</span>
        <button type="button" class="btn btn-danger send log">Log-in</button>
        <button type="button" class="btn btn-info send">Log-in with Facebook</button>
        <button type="button" class="btn btn-danger send">Log-in with Google</button>
      </div>{{this.userData}}//
    </div>
</template>
<style scoped lang='scss'>
@import "assets/sass/colors.scss";

aside .col {
  width: 100%;
}

.send {
  width: 100%;
  margin-top: 10px;
  height: 50px;
}

.log {
  background-color: #c0b386;
  border: none;
}

.log:hover {
  background-color: #9a8f67;
}

input {
  width: 100%;
  height: 50px;
  padding: 5px;
}

h5 {
  background-color: #00a4ba;
  padding: 5px;
  margin-top: 15px;
  color: white;
  border:1px solid #00a4ba;
  border-top-right-radius: 5px;
  font-weight: 300;
}

</style>
