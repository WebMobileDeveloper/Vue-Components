<template>
  <div id="sign" class="row vertical-align sign-page">
    <div class="col col-lg-6 col-sm-12">
      <RegisterForm url=""/>
    </div>    
    <div class="col col-lg-6 col-sm-12">
      <LoginForm loginUrl="" forgotUrl=""/>
    </div>
  </div>
</template>
<script>
import RegisterForm from "../components/Sign/register_form";
import LoginForm from "../components/Sign/LoginForm";

export default {
  name: "Sign",
  components: {
    RegisterForm,
    LoginForm
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
  // color: rebeccapurple;
}
.sign-page {
  min-height: 100vh;
}
@media (min-width: 1200px) {
  .vertical-align {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
  }
}
@media (max-width: 1200px) {
  .submit-form {
    margin-bottom: 50px;
  }
}
.submit-form {
  padding: 20px 0;
  background-color: rgb(240, 240, 240);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.534);
  text-align: left;
  color: black;
}
.form-header,
.form-description {
  text-align: left;
  margin: 10px 20px;
}
ul {
  -webkit-margin-end: 20px;
  -webkit-padding-start: 20px;
}
li {
  list-style: none;
}
.list-header {
  margin: 15px 0 2px;
  font-weight: 600;
}

.color-red {
  color: red;
}
li input {
  padding: 2px 20px 2px 10px;
  font-size: 1.05em;
  width: 100%;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid rgba(0, 0, 0, 0.57);
  background-repeat: no-repeat;
  background-position: center right;
  -webkit-backgrounds-size: 1.125rem 1.125rem;
  background-size: 1.125rem 1.125rem;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

li input:focus {
  box-shadow: 0 0 5px #599df7;
  -webkit-box-shadow: 0 0 5px #599df7;
  border: 2px inset transparent;
  outline: 0;
}
li input.isRequired {
  border: 1px solid red;
}
li input.passed {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
}
li input.isRequired {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E");
}
li select {
  padding: 2px 20px 2px 10px;
  font-size: 1.05em;
  width: 100%;
  border-radius: 5px;
}
button {
  margin-top: 20px;
  padding: 5px 7px;
  font-size: 1.2em;
}
</style>


