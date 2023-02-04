<template>
  <div class="bg-gray-900 h-screen">
    <NuxtPage />
  </div>
</template>

<style>
  div {
    color: white;
    font-family: 'Life Savers', cursive;
    font-weight: 800;
  }

  .page-enter-active,.page-leave-active {  
    transition: all 0.4s;
  }

  .page-enter-from,.page-leave-to {  
    opacity: 0;  
    filter: blur(1rem);
  }

  .rotate-enter-active,.rotate-leave-active {  
    transition: all 0.4s;
    }

  .rotate-enter-from,.rotate-leave-to {  
    opacity: 0;  
    transform: rotate3d(1, 1, 1, 15deg);
  }
</style>