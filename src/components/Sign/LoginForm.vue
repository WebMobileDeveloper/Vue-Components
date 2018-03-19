
<template>
  <div class="component-body">
    <form class="submit-form" @submit="checkForm" method="post" :action="loginUrl">
      <h2 class="form-header">
        Login
      </h2>
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
              <p>Forgot password? &emsp; <a :href="forgotUrl" @click="onForgot">Click here</a></p>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["loginUrl", "forgotUrl"],
  data: function() {
    return {
      email: null,
      password: null,
      error: {
        email: false,
        password: false
      },
      passed: {
        email: false,
        password: false
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
    }
  },
  created() {},
  mounted() {},
  methods: {
    checkForm: function(e) {
      this.form_error = false;
      if (!this.passed.email) {
        this.error.email = true;
        this.form_error = true;
      }
      if (!this.passed.password) {
        this.error.password = true;
        this.form_error = true;
      }
      if (!this.form_error) {
        // this.$router.push({ name: 'Home' });
        e.preventDefault();
        localStorage.setItem("signed", "signed");
        this.$router.push("/");
        return false;
      }
      e.preventDefault();
    },
    onForgot: function(e) {
      e.preventDefault();
      this.$router.push("/forgot");
      return false;
    },
    validEmail: function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
<style lang="scss" scoped>

.submit-form {
  padding: 20px 0;
  background-color: rgb(240, 240, 240);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.534);
  text-align: left;
  color:black;
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
  border: 1px solid rgba(0,0,0,0.57) ;
  background-repeat: no-repeat;
  background-position: center right;
  -webkit-backgroundS-size: 1.125rem 1.125rem;
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


