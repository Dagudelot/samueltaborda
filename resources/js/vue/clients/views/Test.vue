<template>

    <div v-if="test" id="test_container">
        <h1 v-if="!showingQuestions">{{ test.title }}</h1>

        <div id="questions_container" v-if="showingQuestions">
            <h2>{{ currentQuestion.description }}</h2>
            <v-select
            :items="answersTypes"
            v-model="currentQuestion.answer"
            class="select"
            label="Tipo de respuesta"
            ></v-select>
        </div>

        <!-- Buttons -->
        <div id="buttons" v-if="showingQuestions">
            <div class="outline-button" @click="previousQuestion" :class="{hidden : index == 0}">Anterior</div>
            <div class="outline-button" @click="nextQuestion" :class="{hidden : index == test.questions.length-1}">Siguiente</div>
            <div class="outline-button" id="finish_button" @click="finishTest" v-if="index ==  test.questions.length-1">Finalizar</div>
        </div>

        <!-- Result -->
        <div id="result" v-if="!showingQuestions && result.show">
            <h2> Resultado: </h2>
            <h3>{{ result.message }}</h3>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import mixins from '../mixins';

    export default {
        mixins: [ mixins ],
        mounted(){
            this.jumpToTop();
            var test_slug = this.$route.params.test_slug;

            this.getTest(test_slug)
            .then(res => {
                this.test = res.data.test
            })

            setTimeout(() => {
                this.showingQuestions = true;
                this.currentQuestion = this.test.questions[ this.index ];
            }, 5000);
        },
        data(){
            return {
                test: null,
                showingQuestions: false,
                currentQuestion: null,
                index : 0,
                answersTypes: [
                    'Sí',
                    'No'
                ],
                result: {
                    show: false,
                    message: ''
                }
            }
        },
        methods: {
            ...mapActions('testsStore', ['getTest']),
            previousQuestion(){
                this.index--;
                this.currentQuestion = this.test.questions[ this.index ];
            },
            nextQuestion(){
                this.index++;
                this.currentQuestion = this.test.questions[ this.index ];
            },
            finishTest(){
                var positiveAnswers = this.test.questions.filter(question => question.answer == 'Sí').length;
                var negativeAnswers = this.test.questions.filter(question => question.answer == 'No').length;
                this.showingQuestions = false;
                this.result.show = true;
                
                if( positiveAnswers >= this.test.expected ){
                    this.result.message = this.test.passedMessage;
                }else{
                    this.result.message = this.test.failedMessage;
                }
            }
        }
    }
</script>

<style scoped>

    .hidden{
        visibility: hidden;
    }

    h1{
        text-align: center;
        margin-top: 2em;
    }

    #test_container{
        width: 100vw;
        height: 80vh;
        padding: 10em 0;
        text-align: center;
    }

    #questions_container{
        margin-bottom: 10em;
    }

    #questions_container h2{
        transition: 2s;
    }

    .select{
        width: 80vw;
        margin: auto;
    }

    #footer{
        display: none;
    }

    #buttons{
        display: flex;
        justify-content: space-between;
        width: 90vw;
        margin: auto;
    }

    .outline-button{
        padding: .5em 1.3em;
    }

    #finish_button{
        background: #22D1EE;
    }

    #result{
        text-align: center;
        margin-top: 8em;
    }

</style>