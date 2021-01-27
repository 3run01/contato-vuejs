<template>
  <div id="app">
    <b-overlay :show="getOverlay" rounded="sm">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item @click="$router.push({name: 'Home'})">Início</b-nav-item>
          <b-nav-item @click="$router.push({name: 'Contato'})">Contatos</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <b-container class="mt-5">
        <router-view />
      </b-container>
    </b-overlay>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'getOverlay'
      ])
    },

  }
</script>