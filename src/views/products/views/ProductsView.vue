<template>
  <div class="container">
    <ProductsOptionsComp />

    <div class="card">
      <DataView
        data-key="id"
        :value="products"
        :layout="layout"
        :paginator="true"
        :rows="9"
        :sort-order="sortOrder"
        :sort-field="sortField"
      >
        <template #header>
          <div class="grid grid-nogutter">
            <div class="col-6" :style="{ textAlign: 'left' }">
              <Dropdown
                v-model="sortKey"
                :options="sortOptions"
                option-label="label"
                placeholder="Sort By Price"
                @change="onSortChange($event)"
              />
            </div>
            <div class="col-6" :style="{ textAlign: 'right' }">
              <DataViewLayoutOptions v-model="layout" />
            </div>
          </div>
        </template>

        <template #list="slotProps">
          <div class="col-12">
            <div class="product-list-item">
              <img
                src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                :alt="slotProps.data.name"
              >
              <div class="product-list-detail">
                <div class="product-name">
                  {{ slotProps.data.name }}
                </div>
                <div class="product-description">
                  {{ slotProps.data.description }}
                </div>
                <Rating
                  :model-value="slotProps.data.rating"
                  :readonly="true"
                  :cancel="false"
                />
                <i class="pi pi-tag product-category-icon" />
                <span class="product-category">{{
                  slotProps.data.category
                }}</span>
              </div>
              <div class="product-list-action">
                <span class="product-price">${{ slotProps.data.price }}</span>
                <Button
                  icon="pi pi-shopping-cart"
                  label="Add to Cart"
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                />
                <span :class=" 'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase() ">
                  {{ slotProps.data.inventoryStatus }}
                </span>
              </div>
            </div>
          </div>
        </template>

        <!-- //////////////// GRID TEMPLATE /////////////// -->

        <template #grid="slotProps">
          <div class="col-12 md:col-4">
            <div class="product-grid-item card">
              <div class="product-grid-item-top">
                <div>
                  <i class="pi pi-tag product-category-icon" />
                  <span class="product-category">{{
                    slotProps.data.category
                  }}</span>
                </div>
                <span :class=" 'product-badge status-' + slotProps.data.inventoryStatus.toLowerCase()">
                  {{ slotProps.data.inventoryStatus }}
                </span>
              </div>
              <div class="product-grid-item-content">
                <img
                  src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
                  :alt="slotProps.data.name"
                >
                <div class="product-name">
                  {{ slotProps.data.name }}
                </div>
                <div class="product-description">
                  {{ slotProps.data.description }}
                </div>
                <Rating
                  :model-value="slotProps.data.rating"
                  :readonly="true"
                  :cancel="false"
                />
              </div>
              <div class="product-grid-item-bottom">
                <span class="product-price">${{ slotProps.data.price }}</span>
                <Button
                  icon="pi pi-shopping-cart"
                  :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"
                />
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductsOptionsComp from "../components/ProductsOptionsComp.vue"
import { ref, onMounted } from "vue"
import ProductService from "@/common/ProductService"

const products = ref()
const productService = ref(new ProductService())
const layout = ref("grid")
const sortKey = ref()
const sortOrder = ref()
const sortField = ref()
const sortOptions = ref([
  { label: "Price High to Low", value: "!price" },
  { label: "Price Low to High", value: "price" },
])

const onSortChange = (event: any) => {
  const value = event.value.value
  const sortValue = event.value

  if (value.indexOf("!") === 0) {
    sortOrder.value = -1
    sortField.value = value.substring(1, value.length)
    sortKey.value = sortValue
  } else {
    sortOrder.value = 1
    sortField.value = value
    sortKey.value = sortValue
  }
}

onMounted(() => {
  productService.value.getProducts().then((data) => (products.value = data))
})
</script>

<style lang="scss" scoped>
.card {
  background: $color-white-1;
  padding: 2rem;
  margin-bottom: 2rem;
}
.p-dropdown {
  width: 14rem;
  font-weight: normal;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 700;
}

.product-description {
  margin: 0 0 1rem 0;
}

.product-category-icon {
  vertical-align: middle;
  margin-right: 0.5rem;
}

.product-category {
  font-weight: 600;
  vertical-align: middle;
}

::v-deep(.product-list-item) {
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;

  img {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
  }

  .product-list-detail {
    flex: 1 1 0;
  }

  .p-rating {
    margin: 0 0 0.5rem 0;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    align-self: flex-end;
  }

  .product-list-action {
    display: flex;
    flex-direction: column;
  }

  .p-button {
    margin-bottom: 0.5rem;
  }
}

::v-deep(.product-grid-item) {
  margin: 0.5rem;
  border: 1px solid var(--surface-border);

  .product-grid-item-top,
  .product-grid-item-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin: 2rem 0;
  }

  .product-grid-item-content {
    text-align: center;
  }

  .product-price {
    font-size: 1.5rem;
    font-weight: 600;
  }
}

@media screen and (max-width: 576px) {
  .product-list-item {
    flex-direction: column;
    align-items: center;

    img {
      margin: 2rem 0;
    }

    .product-list-detail {
      text-align: center;
    }

    .product-price {
      align-self: center;
    }

    .product-list-action {
      display: flex;
      flex-direction: column;
    }

    .product-list-action {
      margin-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
}
</style>
