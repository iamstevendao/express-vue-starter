<template lang="pug">
.navbar.navbar-light.fixed-top.navbar-expand-lg
  .container
    a.navbar-brand(href='/')
      i.fas.fa-cube
      | Project name
    button.navbar-toggler(type='button', data-toggle='collapse', data-target='.navbar-collapse')
      span.sr-only Toggle navigation
      span.navbar-toggler-icon
    .collapse.navbar-collapse
      ul.nav.navbar-nav
        li.nav-item(v-for="item in navbarItems")
          router-link.nav-link(:to="{ name: item.route }",
                               :class="{ 'active': item.route === $route.name }")
            | {{ item.name }}
      ul.nav.navbar-nav.ml-auto
        template(v-if="!user")
          li.nav-item(:class="{ 'active': $route.name === 'login' }")
            router-link.nav-link(:to="{ name: 'login' }") Login
          li.nav-item(:class="{ 'active': $route.name === 'sign-up' }")
            router-link.nav-link(:to="{ name: 'sign-up' }") Create Account
        template(v-else)
          li.dropdown(:class="{ 'active': $route.name === 'account-management' }").nav-item
            a.dropdown-toggle.nav-link(href='#', data-toggle='dropdown')
              img(v-if="user && user.profile.picture", :src="user.profile.picture")
              img(v-else, :src="user.gravatar(60)")
              span {{ user.profile.name || user.email || user.id }}
              i.caret
            ul.dropdown-menu
              li.dropdown-item
                router-link(:to="{ name: 'account'}") My Account
              li.divider.dropdown-item
              li.dropdown-item
                router-link(:to="{ name: 'logout'}") Logout
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      navbarItems: [
        { name: 'Home', route: 'home' },
        { name: 'API Examples', route: 'api' },
        { name: 'Contact', route: 'contact' },
        { name: 'Status', route: 'status' },
      ],
    };
  },
  computed: {
    ...mapGetters('account', [
      'user',
    ]),
  },
};
</script>
