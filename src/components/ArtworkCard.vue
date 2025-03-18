<script setup>
import { Artwork } from '@/models/Artwork.js';


defineProps({
  artworkProp: { type: Artwork, required: true }
})

</script>


<template>
  <div class="col-md-3">
    <div>
      {{ artworkProp }}
    </div>
  </div>
</template>


<style lang="scss" scoped></style>