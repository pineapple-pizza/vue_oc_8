<template>
  <div>
    <v-app-bar color="white" fixed>
      <div class="toolbar-items">
        <v-row align="center">
          <v-img class="logo-beurre" :src="logo"></v-img>
          <v-toolbar-title class="toolbar-title">
            <v-btn text to="/" rounded>
              {{ greeting }}
            </v-btn>
          </v-toolbar-title>
        </v-row>
      </div>
      <v-spacer></v-spacer>
      <div class="toolbar-links">
        <template v-if="authenticated">
          <!-- <v-btn depressed to="/search" name="search" class="hidden-sm-and-down">
            chercher
          </v-btn> -->
          <!-- <v-btn icon x-large to="/search" name="search" class="hidden-sm-and-up">
            <v-icon>mdi-magnify</v-icon>
          </v-btn> -->
          <div class="auth-edit">

          <search-bar class="search-bar-edit"/>
          <div class="float-right">

          <v-btn icon x-large to="/profile" name="profile_account"
            ><v-icon>mdi-account</v-icon></v-btn
          >
          <v-btn icon x-large to="/products" name="favorites">
            <div class="icon-carrot"><v-img :src="icon"></v-img></div
          ></v-btn>
          <v-btn icon x-large to="/logout" @click.prevent="signOut">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
          </div>
          </div>

        </template>
        <template v-else>
          <v-btn text large to="/login" name="login">log in</v-btn>
          <v-btn text large to="/signin" name="signin">sign up</v-btn>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Search from "@/components/Search.vue";

export default {
  name: "Navbar",
  components: {
    'search-bar': Search
  },
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
  @media (max-width: 600px)
    height: 20px
    width: 20px

.toolbar-items
  padding-left: 100px
  @media (max-width: 600px)
    padding-left: 0

.toolbar-title
  padding-left: 10px
  @media (max-width: 600px)

.toolbar-links
  padding-right: 100px
  margin-right: 20px
  margin-left: 20px
  @media (max-width: 600px)
    padding-right: 0
    margin-right: 0
    margin-left: 0

.search-bar-edit
  padding-top: 74px
  // margin-right: 81px
  height: 75px
  width: 390px

.auth-edit
  padding-bottom: 125px
  width: 600px
</style>
