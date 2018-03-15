
<template>
  <div class="component-body">    
    <form class="submit-form" @submit="checkForm" method="post" :action="url">  
      <h2 class="form-header">
        Forgot Password
      </h2>    
      <div>
        <div class="list-body">
          <p class="form-description">Enter your username or email address below. You will receive an email on your registerd email address with your new password.</p>
        </div>
        <div class="form-section">
          <div class="left-section">User Name: <span class="color-red">*</span></div>
          <div class="right-section">
          <!-- Email Address -->
            <div class="list-body">
              <input type="text" :class="{isRequired: error.user_name, passed: passed.user_name}" name="user_name" v-model="user_name"> 
            </div>                 
          <!-- Submit button -->          
            <div class="list-body">
              <button type="submit" name="submit_button">E-mail new password</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["url"],
  data: function() {
    return {
      user_name: null,
      error: {
        user_name: false
      },
      passed: {
        user_name: false
      },
      form_error: true
    };
  },
  watch: {
    user_name: function(val) {
      if (val == "") {
        this.error.user_name = true;
        this.passed.user_name = false;
      } else {
        this.error.user_name = false;
        this.passed.user_name = true;
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    checkForm: function(e) {
      console.log(this.countries);
      this.form_error = false;
      if (!this.passed.user_name) {
        this.error.user_name = true;
        this.form_error = true;
      }
      if (!this.form_error) {
        return true;
      }
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
.submit-form {
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 0px;
  background-color: rgb(240, 240, 240);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.534);
  text-align: left;
  color: black;
}
.form-header,
.form-description {
  text-align: center;
  margin: 10px 0px;
}
.form-section {
  /* -webkit-margin-end: 20px;
  -webkit-margin-start: 20px; */
  padding: 10px 0px;
  display: table;
  width: 100%;
}
.form-section>div{
  display: table-cell;
}
.left-section {
    width:30%;
    text-align: right;
    padding: 10px;
}
.right-section {
  padding: 0px 20px;
}
.color-red {
  color: red;
}
input {
  padding: 2px 20px 2px 10px;
  -webkit-padding: 2px 20px 2px 10px;
  font-size: 1.05em;
  width: 100%;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #00000057;
  background-repeat: no-repeat;
  background-position: center right;
  -webkit-background-size: 1.125rem 1.125rem;
  background-size: 1.125rem 1.125rem;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  /* border-style:none; */
}

input:focus {
  box-shadow: 0px 0px 5px #599df7;
  -webkit-box-shadow: 0px 0px 5px #599df7;
  border-width: 2px;
  border-color: transparent;
  border-style: inset;
  outline: 0;
}
input.isRequired {
  border: 1px solid red;
  /* box-shadow: 0px 0px 5px red;
  -webkit-box-shadow: 0px 0px 5px red; */
}
input.passed {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
}
input.isRequired {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E");
}
button {
  margin-top: 20px;
  padding: 5px;
}
</style>
