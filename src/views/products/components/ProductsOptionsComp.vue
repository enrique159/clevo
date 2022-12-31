<template>
  <div class="products-options-comp">
    <h6>{{ $t('Products.Options.welcomeLabel', { name: 'Enrique' }) }}</h6>

    <div class="d-flex c-gap-1" v-if="!smallDevice">
      <Button class="button-outline-custom br-5">{{ $t('Products.Options.newCategory') }}</Button>
      <Button class="button-custom br-5">{{ $t('Products.Options.newProduct') }}</Button>
    </div>

    <Button
      v-else
      class="button-custom br-5"
      aria-haspopup="true"
      aria-controls="overlay_tmenu_create_new"
      @click="toggleCreateNew"
    >
      Crear Nuevo
      <ChevronDownIcon class="ml-1" size="18"/>
    </Button>

    <TieredMenu
      id="overlay_tmenu_create_new"
      ref="createNewMenu"
      class="tiered-menu-custom ff-primary"
      defaultActiveItem="#"
      :model="[
        { label: $t('Products.Options.newCategory'), icon: 'ti ti-category', command: () => { }, },
        { label: $t('Products.Options.newProduct'), icon: 'ti ti-assembly', command: () => { }, },
      ]"
      :popup="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useWindowSize } from '@vueuse/core'
import { ChevronDownIcon } from "vue-tabler-icons";

const { width } = useWindowSize()
const createNewMenu = ref<any>(null);

const toggleCreateNew = (event: any) => {
  createNewMenu.value.toggle(event);
};

const smallDevice = computed(() => {
  return width.value < 768;
});
</script>

<style lang="scss" scoped>
.products-options-comp {
  @include flex-between;
  padding: 1rem 0;
}
</style>