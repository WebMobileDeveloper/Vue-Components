<template>
  <div id="forgot-password" class="row vertical-align forgot-page">
    <div class="col col-lg-6 col-sm-12">
      <ForgotPassword url=""/>
    </div>    
  </div>
</template>
<script>
import ForgotPassword from "../components/Sign/ForgotPassword";

export default {
  name: "Forgot",
  components: {
    ForgotPassword
  }
};
</script>
<style lang="scss" scoped>
    
.container {
  height: 100%;
}
.forgot-page {
  min-height: 100vh;
}

.vertical-align {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
}
</style>





