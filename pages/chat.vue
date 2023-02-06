<script setup>
    definePageMeta({
        pageTransition: {
            name: 'rotate'
        }
    })
    const { data: hat } = await useFetch('https://gist.githubusercontent.com/Xowap/b01fbce0c23971e23ab28427c09f92b3/raw/ad6399bd659679ff1f3209c2549a359d9cb744fd/sorting_hat.json')
    const questions = JSON.parse(hat.value)
    const name = ref('')
</script>

<template>
    <div>
        <div class="grid place-items-center" id="panel">
            <Messages name="Sorting Hat" v-for="question in questions" :content="question.title" :answers="question.answers"/>
        </div>
        <div class="flex justify-center mt-10 mb-10" id="nameInput">
            <input class="w-64 h-11 rounded rounded-r-none  text-center text-black" type="text" v-model="name" placeholder="Type your name here...">
            <button class="w-20 h-11 rounded rounded-l-none  bg-green-700 hover:bg-green-800 focus:outline-none focus:ring" @click="answer">Send</button>
        </div>
    </div> 
</template>
