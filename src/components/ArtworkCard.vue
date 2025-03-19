<script setup>
import { Artwork } from '@/models/Artwork.js';
import { artworksService } from '@/services/ArtworksService.js';
// import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';


defineProps({
  artworkProp: { type: Artwork, required: true }
})

async function admirerCheck(artId) {
  try {
    // logger.log(artId)
    await artworksService.admirerCheck(artId)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div>
    <img :src="artworkProp.imgUrls.regular" :alt="artworkProp.altDescription" class="img-fluid mt-2">
    <!-- <p>{{ artworkProp.slug }}</p> -->
    <span @click="admirerCheck(artworkProp.id)" class="mdi mdi-thumb-up-outline" role="button">{{
      artworkProp.admirers.length }}</span>
  </div>

</template>


<style lang="scss" scoped></style>