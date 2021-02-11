<template>
  <div>
    <v-app-bar color="white" fixed>
      <div class="toolbar-items">
        <v-row align="center">
          <!-- <v-app-bar-nav-icon > -->
            <v-img class="logo-beurre" :src="logo"></v-img>
          <!-- </v-app-bar-nav-icon> -->
          <v-toolbar-title class="toolbar-title">
            <v-btn text to="/" rounded>
              {{ greeting }} 
            </v-btn></v-toolbar-title
          >
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <div class="toolbar-links">
        <template v-if="authenticated">
          <v-btn depressed class="mx-5" to="/search" name="search">
            chercher
          </v-btn>
          <v-btn icon x-large to="/profile" class="mx-5" name="profile_account"
            ><v-icon>mdi-account</v-icon></v-btn
          >
          <v-btn icon x-large to="/products" class="mx-5" name="favorites">
            <div class="icon-carrot"><v-img :src="icon"></v-img></div
          ></v-btn>
          <v-btn
            icon
            x-large
            to="/logout"
            @click.prevent="signOut"
            class="mx-5"
          >
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <template v-else>
          <v-btn text large to="/login" class="mx-5" name="login">log in</v-btn>
          <v-btn text large to="/signin" class="mx-5" name="signin">sign up</v-btn>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {},
  data() {
    return {
      greeting: "Pur Beurre",
      logo: require("@/assets/logo_pur_beurre.png"),
      icon: require("@/assets/icon-carrot.svg"),
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      email: "auth/email",
    }),
  },
  methods: {
    ...mapActions({
      signOutAction: "auth/signOut",
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Home",
        });
      });
    },
  },
};
</script>

<style scoped lang="sass">
.icon-carrot
  height: 40px
  width: 40px

.logo-beurre
  height: 40px
  width: 40px

.toolbar-items
  padding-left: 100px

.toolbar-title
  padding-left: 10px

.toolbar-links
  padding-right: 100px
</style>
