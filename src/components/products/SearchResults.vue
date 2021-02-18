<template>
  <div>
    <v-parallax dark src="@/assets/photo-food-3.jpg" height="300">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-card class="mx-auto searched-prod mt-10" max-width="344">
            <v-card-text>
              <h1 class="display-1 font-weight-thin mb-4">
                {{ searched_prod }}
              </h1>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>

    <v-alert type="success" v-if="show" dismissible>
      Favori ajouté avec succès!
    </v-alert>

    <v-row align="center" class="row-search">
      <v-col v-for="(result, i) in results" :key="i" md="4">
        <v-card class="mx-auto results-card">
          <v-card-text>
            {{ result.name }}
            <v-btn class="float-right" outlined fab small color="green">
              {{ result.nutrition_grade }}
            </v-btn>
          </v-card-text>
          <v-card-actions class="mt-10">
            <v-row justify="space-around">
              <v-btn
                rounded
                depressed
                dark
                color="amber accent-3"
                class="btn-edit"
                @click="learnMore(result.id)"
                name="learn_more"
              >
                en savoir +
              </v-btn>
              <v-btn
                rounded
                depressed
                color="orange darken-2"
                class="btn-edit"
                dark
                @click="
                  dialog = true;
                  getId(result.id);
                "
              >
                modifier
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- <v-row justify="center">
      <v-dialog v-model="dialog" max-width="405px">
        <v-card>
          <v-card-title>Sélectionner un produit de substitution </v-card-title>
          <v-divider></v-divider>
          <v-card-text v-for="(result, i) in results" :key="i">
            <v-checkbox
              color="orange darken-3"
              value="orange darken-3"
              :label="result.name"
            >
            </v-checkbox>
            <div class="pl-9">nutriscore : {{ result.nutrition_grade }}</div>
          <v-divider></v-divider>
          <v-card-actions>

            <v-btn color="orange accent-3" text @click="dialog = false">
              Fermer
            </v-btn>
            <v-btn color="orange accent-3" text @click="editSub(result.id)">
              Enregistrer
            </v-btn>
          </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row> -->

    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="405px">
        <v-card>
          <v-card-title>Sélectionner un produit de substitution </v-card-title>
          <v-divider></v-divider>
          <v-card-text v-for="(result, i) in results" :key="i" class="">
            <!-- <form @submit.prevent="getSubId(result.id)"> -->

            <!-- <v-checkbox
              color="orange darken-3"
              :label="result.name"
              :value="result"
              :disabled="selectedItem.length > 1 && selectedItem.indexOf(result) === -1"
              @change="getSubId(result.id)"
              v-model="selectedItem"
            >
            </v-checkbox> -->
            <v-row justify="justify">
              <label>
                <input
                  color="orange darken-3"
                  type="checkbox"
                  v-model="selectedItem"
                  :value="result.name"
                  :disabled="
                    selectedItem.length > 0 &&
                      selectedItem.indexOf(result.name) === -1
                  "
                  @change="getSubId(result.id)"
                />
              </label>
              <div class="pl-9">name : {{ result.name }}</div>
              <div class="pl-9">nutriscore : {{ result.nutrition_grade }}</div>
            </v-row>
            <!-- </form> -->
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="orange accent-3" text @click="dialog = false">
              Fermer
            </v-btn>
            <v-btn color="orange accent-3" text type="submit" @click="editSub">
              Enregistrer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import axios from "@/plugins/axios.js";
import { mapGetters } from "vuex";

export default {
  name: "SearchResults",
  components: {},
  data() {
    return {
      results: [],
      dialogm1: "",
      dialog: false,
      prod_id: null,
      sub_id: null,
      searched_prod: "",
      nutrition_grade: "",
      show: false,
      selectedItem: [],
    };
  },
  created() {
    this.results = this.$route.params.data;
    this.searched_prod = this.$route.params.search;
    // console.log('resultats: ', this.results)
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      email: "auth/email",
    }),
  },
  methods: {
    async learnMore(id) {
      const res = await axios.get("products/" + id);
      this.results = res.data;
      this.$router.push({
        name: "singleProduct",
        params: { data: this.results, id: id },
      });
    },
    async editSub() {
      console.log("user", this.user);

      const res = await axios.post("products/favorites/", {
        user: this.email,
        sub_product: this.sub_id,
        old_product: this.prod_id,
      });
      this.dialog = false;
      this.show = true;
      console.log("res sub", res);
    },
    getId(id) {
      this.prod_id = id;
    },
    getSubId(id) {
      this.sub_id = id;
      console.log("sub id", this.sub_id);
    },
  },
};
</script>

<style scoped lang="sass">
.searched-prod
  border-radius: 50px !important

.results-card
  border-radius: 30px !important
  box-shadow: 0 2px 12px 0 rgba(195, 191, 185, 0.48), 0 2px 2px 0 rgba(221, 218, 213, 0.36)
  height: 170px
  width: 344px
  padding: 10px
  @media (max-width: 600px)
    width: 250px
    height: auto

.btn-edit
  width: 150px
  @media (max-width: 600px)
    margin: 10px

.test
  // height: 50px

.row-search
  margin-bottom: 150px
  margin-top: 50px
</style>
