<script setup>
import { ref } from 'vue'

const message = ref('This is a message from VUE file.')
</script>


<template>
  <p>{{ message }}</p>
</template>