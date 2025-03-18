<script setup>
import { Artwork } from '@/models/Artwork.js';


defineProps({
  artworkProp: { type: Artwork, required: true }
})

</script>


<template>
  <div>
    <img :src="artworkProp.imgUrls.regular" :alt="artworkProp.altDescription" class="img-fluid mt-2">
    <!-- <p>{{ artworkProp.slug }}</p> -->
  </div>
</template>


<style lang="scss" scoped></style>