<script setup>
import { artworksService } from '@/services/ArtworksService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {
  logger.log('HomePage is mounted')
  getAllArtworks()
})
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
  <div></div>
</template>

<style scoped lang="scss"></style>
