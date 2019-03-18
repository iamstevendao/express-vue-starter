<template lang="pug">
div
  .pb-2.mt-2.mb-4.border-bottom
    h3 Sign up
  form(id="signup-form")
    input(type="hidden", name="_csrf", value=_csrf)
    .form-group.row
      label.col-md-3.col-form-label.font-weight-bold.text-right(for="email") Email
      .col-md-7
        input.form-control(type="email",
                          name="email",
                          id="email",
                          v-model="email",
                          placeholder="Email",
                          autofocus,
                          autocomplete="email",
                          required)
    .form-group.row
      label.col-md-3.col-form-label.font-weight-bold.text-right(for="password") Password
      .col-md-7
        input.form-control(type="password",
                            v-model="password",
                            name="password",
                            id="password",
                            placeholder="Password",
                            autocomplete="new-password",
                            required)
    .form-group.row
      label.col-md-3.col-form-label.font-weight-bold.text-right(for="confirmPassword")
        | Confirm Password
      .col-md-7
        input.form-control(type="password",
                          v-model="confirmPassword",
                          name="confirmPassword",
                          id="confirmPassword",
                          placeholder="Confirm Password",
                          autocomplete="new-password",
                          required)
    .form-group.offset-sm-3.col-md-7.pl-2
      button.btn.btn-success(type="submit",
                            @click.prevent="clickSignUp",
                            :disabled="password && password !== confirmPassword")
        i.fas.fa-user-plus.fa-sm
        | Sign up
</template>


<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: null,
    };
  },
  methods: {
    ...mapActions('account', ['signUp']),
    async clickSignUp() {
      try {
        const res = await this.signUp({
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
