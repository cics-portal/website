<template><div><p>{{ message }}</p>
</div></template>


<script setup>
import { ref } from 'vue'

const message = ref('This is a message.')
</script>