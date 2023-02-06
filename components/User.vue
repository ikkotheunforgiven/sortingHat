<script setup>
    const props = defineProps({
        answer: String
    })
</script>

<template>
    <div class="flex flex-row-reverse w-1/2 pt-10" v-if="answer != ''">
        <img src="https://i.pinimg.com/originals/94/e1/73/94e173ce3bf0e8996cd8fa1b30b0fe57.jpg" class="self-end rounded-full w-16 ml-4" alt="user">
        <div class="flex flex-col">
            <div class="bg-green-700 rounded-3xl rounded-br-none shadow-sm p-4 mb-2">
                <p class="text-xl">{{ answer }}</p>
            </div>
            <small class="self-end">Wizard</small>
        </div>
    </div>
</template>