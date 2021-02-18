<template>
  <div>
    <v-parallax dark src="@/assets/photo-food-4.jpeg" class="mt-6" height="300">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-card class="mx-auto products-card" max-width="344">
            <h1 class="display-1 font-weight-thin mt-6 mb-6 text-center">
              Mes produits favoris
            </h1>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>

    <v-row align="center">
      <v-col v-for="(result, i) in all_sub_prod" :key="i" md="4" sm="2">
        <v-card class="mx-auto fav-products">
          <v-card-text>
            <!-- <v-btn class="float-right" outlined fab small color="green"> -->
             substitued product : {{ result.sub_product }}
            <!-- </v-btn> -->
            old product : {{ result.old_product }}
          </v-card-text>
          <v-card-actions class="mt-10">
            <v-btn
              rounded
              depressed
              dark
              color="amber accent-3"
              class="btn-edit"
              :href="result.url"
              target="_blank"
            >
              en savoir +
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "@/plugins/axios.js";
import { mapGetters } from "vuex";

export default {
  name: "MyProducts",
  components: {},
  data() {
    return {
      all_products: [],
      results: [],
      prod_id: null,
      sub_prod: null,
      all_sub_prod: [],
      name: "",
      nutrition_grade: "",
      url: "",
    };
  },
  created() {
    axios.get("products/favorites/").then((res) => {
      var i = 0;
      while (i < res.data.length) {
        this.sub_prod = res.data[i].sub_product;
        this.all_sub_prod.push({
          sub_product: res.data[i].sub_product,
          old_product: res.data[i].old_product,
        });
        var parsedobj = JSON.parse(JSON.stringify(this.all_sub_prod));
        console.log("test res fav", parsedobj);
        i++;
      }
      // console.log('all prod in fav ', this.all_products)
    });
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      email: "auth/email",
    }),
  },
  methods: {
    // allProducts() {
    // axios.get("products/").then((response) => {
    //   console.log("all prod", response);
    //   var i;
    //   for (i = 0; i < response.data.length; i++) {
    //     this.prod_id = response.data[i].id
    //     this.results.push({
    //       name: response.data[i].name,
    //       nutrition_grade: response.data[i].nutrition_grade,
    //       url: response.data[i].url,
    //       id: response.data[i].id
    //     });
    //     // console.log('results res', this.results)
    //   }
    // });
    // },
  },
};
</script>

<style scoped lang="sass">
.products-card
  border-radius: 30px !important
  box-shadow: 0 2px 12px 0 rgba(195, 191, 185, 0.48), 0 2px 2px 0 rgba(221, 218, 213, 0.36)
  height: auto
  padding: 10px

.fav-products
  border-radius: 30px !important
  box-shadow: 0 2px 12px 0 rgba(195, 191, 185, 0.48), 0 2px 2px 0 rgba(221, 218, 213, 0.36)
  height: 200px
  padding: 10px
  max-width: 344px
  @media (max-width: 600px)
    max-width: 214px
</style>
