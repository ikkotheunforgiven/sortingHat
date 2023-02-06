<script setup>
    const props = defineProps({
        name: String,
        content: String,
        answers: Object
    })

    const realAnswer = ref('')
    const G = ref(0)
    const R = ref(0)
    const H = ref(0)
    const S = ref(0)

    const answered = (data, score) => {
        realAnswer.value = data
        G.value += score.g
        R.value += score.r
        H.value += score.h
        S.value += score.s
    }
</script>

<template>
    <div class="flex w-1/2 pt-10 mb-5">
        <img src="https://i.pinimg.com/originals/f8/df/21/f8df21490b911ab243d0eb153b9d4f75.png" class="self-end w-20 mr-4" alt="hat">
        <div class="flex flex-col">
            <div class="bg-green-700 rounded-3xl rounded-bl-none shadow-sm p-4 mb-2">
                <p class="text-xl">{{ content }}</p>
            </div>
            <small>{{ name }}</small>
        </div>
    </div>

    <User :answer="realAnswer" />

    <div class="flex justify-center gap-3 w-2/3" v-if="realAnswer == ''">
        <button class="bg-white hover:bg-gray-100 p-4 rounded text-center text-black shadow-sm text-sm basis-1/5" v-for="answer in answers" @click="answered(answer.title, answer.scores)">{{ answer.title }}</button>
    </div>
</template>
