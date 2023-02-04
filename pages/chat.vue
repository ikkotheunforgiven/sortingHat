<script setup>
    definePageMeta({
        pageTransition: {
            name: 'rotate'
        }
    })
    const { data: hat } = await useFetch('https://gist.githubusercontent.com/Xowap/b01fbce0c23971e23ab28427c09f92b3/raw/ad6399bd659679ff1f3209c2549a359d9cb744fd/sorting_hat.json')
    const questions = JSON.parse(hat.value)
</script>

<template>
    <div class="grid place-items-center">
        <div class="flex w-1/2 pt-10">
            <img src="https://i.pinimg.com/originals/f8/df/21/f8df21490b911ab243d0eb153b9d4f75.png" class="self-end w-20 mr-4 mt-5" alt="hat">
            <div class="flex flex-col">
                <div class="bg-green-700 rounded-3xl rounded-bl-none shadow-sm p-4">
                    <p class="text-xl">Vení Harry agarramé la pija boludo.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-row-reverse w-1/2 pt-10">
            <img src="https://i.pinimg.com/originals/94/e1/73/94e173ce3bf0e8996cd8fa1b30b0fe57.jpg" class="self-end rounded-full w-16 ml-4 mt-5" alt="hat">
            <div class="flex flex-col">
                <div class="bg-green-700 rounded-3xl rounded-br-none shadow-sm p-4">
                    <p class="text-xl">Ay, sombrero trolaso.</p>
                </div>
            </div>
        </div>
    </div>
</template>
