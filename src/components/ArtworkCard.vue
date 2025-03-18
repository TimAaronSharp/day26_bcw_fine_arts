<script setup>
import { Artwork } from '@/models/Artwork.js';


defineProps({
  artworkProp: { type: Artwork, required: true }
})

</script>


<template>
  <div>
    <img :src="artworkProp.imgUrls.regular" alt="" class="img-fluid mt-2">
  </div>
</template>


<style lang="scss" scoped></style>