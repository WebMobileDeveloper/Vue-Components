
<template>
  <div class="component-body">
    <form class="submit-form" @submit="checkForm" method="post" :action="url">
      <h2 class="form-header">
        Register
      </h2>
      <div>
        <div class="list-body">
          <p class="form-description">Enter the information below to register.
            A confirmation email will be sent to the email account with which you registered.</p>
        </div>
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
          <!-- First Name -->
          <li class="list-box">
            <div class="list-header">
              First Name: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text" :class="{isRequired: error.first_name, passed: passed.first_name}" name="first_name"  v-model="first_name">
            </div>
          </li>
          <!-- Last Name -->
          <li class="list-box">
            <div class="list-header">
              Last Name: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text"  :class="{isRequired: error.last_name, passed: passed.last_name}" name="last_name"  v-model="last_name">
            </div>
          </li>
          <!-- Country -->
          <li class="list-box">
            <div class="list-header">
              Country: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <select name="country" v-model="country">
                <option v-for="(country,key) in countries" v-bind:value="country.name" :key="key">{{ country.name }}</option>
              </select>
            </div>
          </li>
          <!-- Address1 -->
          <li class="list-box">
            <div class="list-header">
              Address1: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text"  :class="{isRequired: error.address1, passed: passed.address1}" name="address1" v-model="address1">
            </div>
          </li>
          <!-- Address2 -->
          <li class="list-box">
            <div class="list-header">
              Address2:
            </div>
            <div class="list-body">
              <input type="text" name="address2" v-model="address2">
            </div>
          </li>
          <!-- city -->
          <li class="list-box">
            <div class="list-header">
              City: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text" :class="{isRequired: error.city, passed: passed.city}" name="city" v-model="city">
            </div>
          </li>
          <!-- State/Province -->
          <li class="list-box">
            <div class="list-header">
              State/Province: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text" :class="{isRequired: error.state_province, passed: passed.state_province}" name="state_province" v-model="state_province">
            </div>
          </li>
          <!-- Zip/Postal Code -->
          <li class="list-box">
            <div class="list-header">
              Zip/Postal Code: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text" :class="{isRequired: error.zip_postalcode, passed: passed.zip_postalcode}" name="zip_postalcode" v-model="zip_postalcode">
            </div>
          </li>
          <!-- Phone Number -->
          <li class="list-box">
            <div class="list-header">
              Phone Number: <span class="color-red">*</span>
            </div>
            <div class="list-body">
              <input type="text"  :class="{isRequired: error.phone_number, passed: passed.phone_number}" name="phone_number" v-model="phone_number">
            </div>
          </li>
          <!-- Submit button -->
          <li class="list-box">
            <div class="list-body">
              <button type="submit" name="submit_button">Submit registration >></button>
            </div>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import { Countries } from "./country.js";
export default {
  props: ["url"],
  data: function() {
    return {
      email: null,
      password: null,
      first_name: "",
      last_name: "",
      country: "United States",
      address1: "",
      address2: "",
      city: "",
      state_province: "",
      zip_postalcode: "",
      phone_number: "",
      countries: Countries,
      error: {
        email: false,
        password: false,
        first_name: false,
        last_name: false,
        address1: false,
        city: false,
        state_province: false,
        zip_postalcode: false,
        phone_number: false
      },
      passed: {
        email: false,
        password: false,
        first_name: false,
        last_name: false,
        address1: false,
        city: false,
        state_province: false,
        zip_postalcode: false,
        phone_number: false
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
    first_name: function(val) {
      if (val === "") {
        this.error.first_name = true;
        this.passed.first_name = false;
      } else {
        this.error.first_name = false;
        this.passed.first_name = true;
        this.first_name =
          this.first_name.charAt(0).toUpperCase() + this.first_name.slice(1);
      }
    },
    last_name: function(val) {
      if (val === "") {
        this.error.last_name = true;
        this.passed.last_name = false;
      } else {
        this.error.last_name = false;
        this.passed.last_name = true;
        this.last_name =
          this.last_name.charAt(0).toUpperCase() + this.last_name.slice(1);
      }
    },
    address1: function(val) {
      if (val === "") {
        this.error.address1 = true;
        this.passed.address1 = false;
      } else {
        this.error.address1 = false;
        this.passed.address1 = true;
      }
    },
    city: function(val) {
      if (val === "") {
        this.error.city = true;
        this.passed.city = false;
      } else {
        this.error.city = false;
        this.passed.city = true;
        this.city = this.city.charAt(0).toUpperCase() + this.city.slice(1);
      }
    },
    state_province: function(val) {
      if (val === "") {
        this.error.state_province = true;
        this.passed.state_province = false;
      } else {
        this.error.state_province = false;
        this.passed.state_province = true;
        this.state_province =
          this.state_province.charAt(0).toUpperCase() +
          this.state_province.slice(1);
      }
    },
    zip_postalcode: function(val) {
      if (val === "") {
        this.error.zip_postalcode = true;
        this.passed.zip_postalcode = false;
      } else {
        this.error.zip_postalcode = false;
        this.passed.zip_postalcode = true;
      }
    },
    phone_number: function(val) {
      if (val === "" || !this.validPhone(val)) {
        this.error.phone_number = true;
        this.passed.phone_number = false;
      } else {
        this.error.phone_number = false;
        this.passed.phone_number = true;
      }
    }
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
      if (!this.passed.first_name) {
        this.error.first_name = true;
        this.form_error = true;
      }
      if (!this.passed.last_name) {
        this.error.last_name = true;
        this.form_error = true;
      }
      if (!this.passed.address1) {
        this.error.address1 = true;
        this.form_error = true;
      }
      if (!this.passed.city) {
        this.error.city = true;
        this.form_error = true;
      }
      if (!this.passed.state_province) {
        this.error.state_province = true;
        this.form_error = true;
      }
      if (!this.passed.zip_postalcode) {
        this.error.zip_postalcode = true;
        this.form_error = true;
      }
      if (!this.passed.phone_number) {
        this.error.phone_number = true;
        this.form_error = true;
      }
      if (!this.form_error) {
        if (confirm("Are you sure want to submit for registration?")) {
          return true;
        }
      }
      e.preventDefault();
    },
    validEmail: function(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function(number) {
      const re = /^[+]*[(]?[0-9]{1,3}[)]?[-\s\./0-9]*$/g;
      return re.test(number);
    }
  }
};
</script>

