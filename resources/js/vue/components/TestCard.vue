<template>
    <v-card
    max-width="344"
    class="mx-auto"
  >
    <v-list-item>
      <v-list-item-avatar color="blue"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title left class="headline">{{ test.title }}</v-list-item-title>
        <v-list-item-subtitle left>Por: {{ test.user.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      {{ test.description }}
    </v-card-text>

    <v-card-actions>
      <v-chip v-if="$mq == 'sm'">{{ test.questions.length }}</v-chip>
      <v-chip v-else>{{ test.questions.length }} Preguntas</v-chip>
      <v-spacer></v-spacer>
      <v-btn
        text
        right
        color="blue"
        @click="redirect"
      >
        HACER TEST
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
    export default {
        props: [ 'test' ],
        methods: {
            redirect(){
                this.$router.push({ name: 'test', params: { test_slug: this.test.slug } });
            }
        }
    }
</script>