<template>
  <div id="app">
    <payment-options />
  </div>
</template>

<script>
import PaymentOptions from './views/PaymentOptions';

export default {
  name: 'App',
  components: {
    PaymentOptions,
  },
};
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }
</style>
