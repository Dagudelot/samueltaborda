<template>
    <v-card
    class="mx-0"
  >
    <v-img
      :class="`${title_color}--text align-end`"
      height="200px"
      :src="image"
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions>
        <v-btn
            color="blue"
            text
            @click="redirect"
        >
            Entrar
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        props: [ 'title_color', 'image', 'title', 'description', 'href', 'route' ],
        methods: {
            redirect(){
                if( this.href != null ){
                    window.location = '/' + this.href;
                }else{
                    this.$router.push({ name: this.route });
                }
            }
        }
    }
</script>

<style scoped>

    .v-card{
        width: 30vw;
    }

    @media screen and(max-width: 768px){
        .v-card{
            width: 87vw;
        }
    }

</style>