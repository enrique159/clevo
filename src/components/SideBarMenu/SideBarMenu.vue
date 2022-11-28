<template>
  <div class="side-bar-menu">
    <div class="side-bar-menu__logo">
      <img src="@/assets/logo.svg" alt="clevo" />
    </div>
    <div class="side-bar-menu__menu">
      <ul>
        <li>
          <router-link to="/home">
            <i class="fas fa-home"></i>
            <span>{{ $t('General.home') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/facturas">
            <i class="fas fa-file-invoice-dollar"></i>
            <span>{{ $t('General.invoices') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/clientes">
            <i class="fas fa-users"></i>
            <span>{{ $t('General.clients') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/productos">
            <i class="fas fa-boxes"></i>
            <span>{{ $t('General.products') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/proveedores">
            <i class="fas fa-truck"></i>
            <span>{{ $t('General.providers') }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/usuarios">
            <i class="fas fa-user"></i>
            <span>{{ $t('General.users') }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.side-bar-menu {
  background-color: $color-white-0;
  width: 300px;
  height: 100%; 
  padding: 2rem 3rem;

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: $color-white-1;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  &__menu {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 1rem;

        a {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: $color-black-0;
          font-size: 1.2rem;
          font-weight: 500;
          transition: all 0.3s ease;

          &:hover {
            color: $color-blue-0;
          }

          i {
            margin-right: 1rem;
          }
        }
      }
    }
  }
}
</style>