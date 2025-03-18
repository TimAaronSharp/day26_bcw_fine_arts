<script setup>
import { AppState } from '@/AppState.js';
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import ArtworkCard from '@/components/ArtworkCard.vue';

onMounted(() => {
  logger.log('HomePage is mounted')
  getAllArtworks()
})

const artworks = computed(() => AppState.artworks)

async function getAllArtworks() {
  try {
    await artworksService.getAllArtworks()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>

<template>
  <section class="container">
    <div class="row">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-md-3">
        <ArtworkCard :artworkProp="artwork" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
