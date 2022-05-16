<template>
  <div :class="$style.container">
    <div :class="$style.title">
      Срок оплаты
    </div>
    <div :class="$style.counter">
      {{ time }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaymentExpireCounter',
  props: {
    time: {
      type: String,
      required: true,
    }
  },
};
</script>

<style lang="sass" module>
  .container
    display: flex
    padding: 20px

  .title
    font-weight: 300
    line-height: 18px

  .counter
    font-family: 'IBM Plex Sans', sans-serif
    font-weight: 400
    font-size: 18px
    line-height: 24px
</style>
