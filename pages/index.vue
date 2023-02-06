<template>
    <div class="container mx-auto pt-24">
        <img class="mx-auto mb-5" src="/img/hogwarts.png" alt="shield">
        <h1 class="text-center text-5xl">Welcome Wizards!</h1>
        <p class="text-center text-lg mt-5">Click start to face the sorting hat.</p>
        <div class="text-lg grid justify-center mt-7">
            <NuxtLink v-slot="{ navigate }" to="/chat" custom>
                <button class="w-64 h-11 rounded bg-green-700 hover:bg-green-800 focus:outline-none focus:ring" @click="navigate">Start</button>
            </NuxtLink>
        </div>
    </div>
</template>