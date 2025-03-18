<script setup>
import { AppState } from '@/AppState.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const currentPage = computed(() => AppState.currentPage)
const totalPages = computed(() => AppState.totalPages)

async function changePage(pageNumber) {
  try {
    logger.log(pageNumber)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="d-flex align-items-center">
    <button @click="changePage(currentPage - 1)" class="btn btn-indigo fs-5" type="button"
      :disabled="currentPage <= 1">Prev</button>
    <span class="fs-5">Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="changePage(currentPage + 1)" class="btn btn-indigo fs-5" type="button"
      :disabled="currentPage >= totalPages">Next</button>
  </div>
</template>



<style lang="scss" scoped></style>