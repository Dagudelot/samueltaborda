<template>
    <v-row justify="center" class="service pointer">
        <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on }">
            <div v-on="on">
                <div class="icon">
                    <img :src="service.icon" alt="icon" width="100">
                </div>
                <div class="service_title">
                    {{ service.title }}
                </div>
                <div class="service_description">
                    {{ service.description.substr(0, 250) }}
                </div>
                <img src="/images/icons/plus.svg" alt="icon" width="25" class="right pointer" v-on="on">
            </div>
        </template>
        <v-card>
            <v-card-title>
            <span class="headline">{{ service.title }}</span>
            </v-card-title>
            <v-card-text>
                {{ service.description }}
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
  export default {
      props: [ 'service' ],
        data () {
            return {
                dialog: false,
            }
        }
  }
</script>
