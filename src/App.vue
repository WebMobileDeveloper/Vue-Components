<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <RegisterForm url="http://localhost"/>
    <br/>    
    <LoginForm loginUrl="http://login_url" forgotUrl="http://forgot_url"/>
    <br/>    
    <ForgotPassword url="http://login_url"/>
  </div>
</template>

<script>
import RegisterForm from "./components/register_form";
import LoginForm from "./components/LoginForm";
import ForgotPassword from "./components/ForgotPassword";

export default {
  name: "App",
  components: {
    RegisterForm,
    LoginForm,
    ForgotPassword
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
