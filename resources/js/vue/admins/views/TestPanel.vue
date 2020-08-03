<template>
    <div class="contenedor" id="test_panel_container">
        <input type="text" class="w-100" placeholder="Título del test" id="test_title" v-model="title">
        <input type="text" class="w-100" placeholder="Descripción..." id="test_description" v-model="description">

        <!-- Questions List -->
        <div id="questions">
            <div
            class="question"
            v-for="(question, index) of questions"
            :key="index"
            >
                <div class="question_description">
                    <span>{{ index+1 }}</span>
                    <input type="text" class="w-100" placeholder="Pregunta..." v-model="question.description">
                </div>
                <v-select
                :items="answersTypes"
                v-model="question.answerType"
                label="Tipo de respuesta"
                ></v-select>
            </div>
        </div>

        <!-- Addd Question -->
        <v-btn id="add_question_btn" class="mx-2" fab dark small color="primary" outlined @click="addQuestion">
            <v-icon dark>mdi-plus</v-icon>
        </v-btn>

        <!-- Cut Point -->
        <div id="cut_point">
            <label for="expected">Punto de corte:</label>
            <input type="number" v-model="expected" min="0" :max="questions.length" name="expected" id="expected_input">
            <input type="text" class="w-100" v-model="passedMessage" placeholder="Mensaje si pasa el test">
            <input type="text" class="w-100" v-model="failedMessage" placeholder="Mensaje si NO pasa el test">
        </div>

        <!-- Save Test -->
        <div id="save_test" v-if="questions.length > 0">
            <button
            class="outline-button"
            @click="save"
            >Guardar Test</button>
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        data(){
            return {
                title: '',
                description: '',
                questions: [],
                answersTypes: [
                    'Sí / No'
                ],
                expected: 0,
                passedMessage: '',
                failedMessage: ''
            }
        },
        methods: {
            ...mapActions('testsStore', ['saveTest']),
            addQuestion(){
                this.questions.push({
                    'description' : '',
                    'answerType' : ''
                });
            },
            save(){
                var data = {
                    'title' : this.title,
                    'description' : this.description,
                    'questions' : this.questions,
                    'expected' : this.expected,
                    'passedMessage' : this.passedMessage,
                    'failedMessage' : this.failedMessage
                };

                this.saveTest(data)
                .then(res => {
                    if( res.data.status == 'success' ){
                        alert( 'Test Creado correctamente' );
                        window.location = "/admin";
                    }
                })
                .catch(err => {
                    alert( 'Faltan datos' );
                });
            }
        }
    }
</script>

<style scoped>

    .social_tooltip{
        display: none;
    }

    #test_panel_container{
        margin: 5em auto 10em auto;
    }

    input{
        display: block;
        margin: 1em 0;
    }

    input:focus{
        outline: none;
    }

    #test_title{
        font-size: 3em;
    }

    #test_description{
        font-size: 1.7em;
    }

    .question_description{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2em;
    }

    .question_description > input{
        padding: 0 2em;
    }

    #cut_point{
        margin-top: 10em;
    }

    #save_test{
        text-align: center;
        margin-top: 5em;
    }

    #save_test > button{
        width: 100%;
        padding: .5em 3em;
    }

    #expected_input{
        display: inline-block;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        #save_test{
            position: relative;
        }
    }

</style>
