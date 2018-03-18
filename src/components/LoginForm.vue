
<template>
  <div class="component-body">
    <form class="submit-form" @submit="checkForm" method="post" :action="loginUrl">
      <div>
        <ul class="form-section">
          <!-- Email Address -->
          <li class="list-box">
            <div class="list-header">
              Email Address: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text" :class="{isRequired: error.email, passed: passed.email}" name="email_address" v-model="email">
            </div>
          </li>
          <!-- Password -->
          <li class="list-box">
            <div class="list-header">
              Password: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="password" :class="{isRequired: error.password, passed: passed.password}" name="password"  v-model="password">
            </div>
          </li>
          <!-- Submit button -->
          <li class="list-box">
            <div class="list-body">
              <button type="submit" name="submit_button">Log In >></button>
            </div>
          </li>
          <!-- forgot -->
          <li class="list-box">
            <div class="list-body">
              <p>Forgot password? &emsp; <a :href="forgotUrl">Click here</a></p>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props:['loginUrl',"forgotUrl"],
  data: function() {
    return {
      email: null,
      password: null,
      error: {
        email: false,
        password: false,
      },
      passed: {
        email: false,
        password: false,
      },
      form_error: true
    };
  },
  watch: {
    email: function(val) {
      if (val === "" || !this.validEmail(val)) {
        this.error.email = true;
        this.passed.email = false;
      } else {
        this.error.email = false;
        this.passed.email = true;
      }
    },
    password: function(val) {
      if (val === "") {
        this.error.password = true;
        this.passed.password = false;
      } else {
        this.error.password = false;
        this.passed.password = true;
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    checkForm: function(e) {
      console.log(this.countries);
      this.form_error = false;
      if (!this.passed.email) {
        this.error.email = true;
        this.form_error = true;
      }
      if (!this.passed.password) {
        this.error.password = true;
        this.form_error = true;
      }
      if (!this.form_error){
          return true;
      }
      e.preventDefault();
    },
    validEmail: function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  }
};
</script>

