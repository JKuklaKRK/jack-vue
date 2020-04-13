<template>
    <div class="content">
        <div v-for="item in questions" v-bind:key="item.questionNumer" :class="['question-template', item.questionNumer == currentQuestion ? 'question-visible' : '']">
            <div class="question">{{item.question}}</div>
            <div class="answers-box">
                <div @click="item.selected = answer.answerId" v-for="answer in item.answers" v-bind:key="answer.answerId" :class="['answer', item.selected == answer.answerId ? 'answer-selected' : '']">
                    <p>{{answer.answer}}</p>
                </div>
            </div>
            <div class="control-bar">
                <button :class="['question-control', currentQuestion == 1 ? 'unable-to-click' : '']" @click="prevQuestion()">Poprzednie pytanie</button>
                <button :class="['question-control', currentQuestion == questions.length ? 'unable-to-click' : '']" @click="nextQuestion()">Następne pytanie</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    questionNumer: 1,
                    question: 'Co do spraw uczuciowych... jak podszedłbyś do osoby, która budzi Twoje zainteresowanie?',
                    answers: [
                        {
                            answerId: 1,
                            answer: 'mój urok załatwi wszystko',
                        },
                        {
                            answerId: 2,
                            answer: 'to co potrafię z pewnością jemu/jej zaimponuje',
                        },
                        {
                            answerId: 3,
                            answer: 'nie... nie uda mi się',
                        },
                        {
                            answerId: 4,
                            answer: 'z pewnością ją/jego zaintryguję',
                        }
                    ],
                    selected: 0
                },
                {
                    questionNumer: 2,
                    question: 'Totalnie wolne popołudnie... jak najchętniej je spędzisz?',
                    answers: [
                        {
                            answerId: 1,
                            answer: 'wyłączony telefon, kocyk, kakao, książka albo Netflix',
                        },
                        {
                            answerId: 2,
                            answer: 'pójdę coś poćwiczyć, nie będę marnować czasu',
                        },
                        {
                            answerId: 3,
                            answer: 'wypad do pubu albo jakieś party hard',
                        },
                        {
                            answerId: 4,
                            answer: 'będę się uczyć czegoś nowego',
                        },
                        {
                            answerId: 5,
                            answer: 'puszczę sobie relaksacyjną muzykę i oddam się melancholijnym rozmyślaniom',
                        },
                        {
                            answerId: 6,
                            answer: 'postawię sobie pasjansa, posłucham teorii spiskowych na YT',
                        }
                    ],
                    selected: 0
                }
            ],
            currentQuestion: 1
        }
    },
    methods: {
        prevQuestion() {
            if (this.currentQuestion > 1) {
                this.currentQuestion--;
            }
        },
        nextQuestion(){
            if (this.currentQuestion < this.questions.length) {
                this.currentQuestion++;
            }
        }
    }
}
</script>

<style lang="scss">
    .content {
        padding: 20px;

        .question-template {
            display: none;
            &.question-visible {
                display: initial;
            }

            .question {
                text-align: center;
                font-size: 30px;
            }

            .answers-box {
                display: flex;
                flex-wrap: wrap;
                padding: 20px;
                .answer {
                    width: calc(50% - 40px);
                    margin: 20px;
                    padding: 20px 0;
                    font-size: 30px;
                    text-align: center;
                    -webkit-box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    -moz-box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    cursor: pointer;
                    z-index: 10;

                    @keyframes hoverAni {
                        0% {background-color: transparent;}
                        50% {background-color: rgba(31, 141, 40,0.75);}
                        100% {background-color: transparent;}
                    }

                    &:hover {
                        -webkit-box-shadow: 0px 0px 0px 3px rgba(31, 141, 40, 1);
                        -moz-box-shadow: 0px 0px 0px 3px rgba(31, 141, 40, 1);
                        box-shadow: 0px 0px 0px 3px rgba(31, 141, 40, 1);
                    }

                    &.answer-selected {
                        animation: hoverAni 3s infinite;
                    }
                }
            }
            .control-bar {
                display: flex;
                justify-content: space-between;
                padding: 20px 40px;

                .question-control {
                    border: none;
                    -webkit-box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    -moz-box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    box-shadow: 0px 0px 0px 3px rgba(255,255,255,1);
                    color: #ffffff;
                    background-color: #040e0b;
                    padding: 20px 40px;

                    &.unable-to-click {
                        pointer-events: none;
                        opacity: 0.5;
                    }
                }
            }
        }
    }
</style>