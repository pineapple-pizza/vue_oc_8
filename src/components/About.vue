<template>
  <div>
    <h1 class="display-1 font-weight-thin mt-6 mb-6 text-center">
      Notre histoire inoubliable Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, molestiae iure veritatis quibusdam rerum et! In molestias natus amet repellat repudiandae, veritatis veniam porro omnis accusamus pariatur consequuntur est tempore.
    </h1>

    <v-row justify="center">
      <v-col md="4" v-for="(item, i) in items" :key="i">
        <v-card class="card-form">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-content>{{ item.description }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem pariatur dolorum at fugit sunt, voluptas aperiam ipsam voluptatem, nesciunt voluptatibus ullam molestiae rerum ipsum rem assumenda veniam! Maiores, nobis odit.</v-list-item-content>
            </v-list-item-content>

            <v-list-item-avatar tile size="80" color="grey">
              <v-img :src="item.img"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "About",
  components: {},
  data() {
    return {
      items: [
        {
          name: "Colette",
          img: require("@/assets/persona3.png"),
          description:
            "texte lorem ipsum dolor sit amet, consectetur adipiscing elit. cras purus orci, ornare sit amet nulla in, condimentum sollicitudin leo. ",
        },
        {
          name: "Rémy",
          img: require("@/assets/persona4.png"),
          description:
            "texte lorem ipsum dolor sit amet, consectetur adipiscing elit. cras purus orci, ornare sit amet nulla in, condimentum sollicitudin leo.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="sass">
.card-form
  border-radius: 30px !important
  box-shadow: 0 2px 12px 0 rgba(195, 191, 185, 0.48), 0 2px 2px 0 rgba(221, 218, 213, 0.36)
  height: 220px
  padding: 20px
</style>
