<template>
  <div :class="$style.container">
    <template v-if="method">
      <div :class="$style.content">
        <div :class="$style.title">
          Способ оплаты:
        </div>
        <div :class="$style.method" @click="$emit('uncheck-method')">
          {{ displayName }}
        </div>
      </div>
      <div :class="$style.logo">
        <img :src="require(`@/assets/logos/${getLogo}`)" />
      </div>
    </template>

    <div v-else :class="[$style.title, $style.empty]">
      Получите инструкцию для оплаты:
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaymentMethodController',
  props: {
    method: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
    };
  },
  computed: {
    displayName() {
      return this.method.shortName;
    },
    getLogo() {
      return this.method.logo;
    },
  },
};
</script>

<style lang="sass" module>
  .container
    display: flex
    padding: 20px

  .title
    font-weight: 300
    line-height: 1em
    letter-spacing: -0.05em

    &.empty
      line-height: 30px

  .method
    position: relative
    display: inline-block
    padding-right: 15px
    margin-top: 5px
    font-weight: 600
    font-size: 16px
    line-height: 20px
    color: #0057FF
    letter-spacing: -0.05em
    text-decoration: underline
    text-underline-position: under
    cursor: pointer

    &:after
      content: ''
      position: absolute
      top: 8px
      right: 0
      width: 10px
      height: 5px
      background: url(@/assets/icons/arrow-down.svg) no-repeat center

  .logo
    width: 108px
    height: 30px
    margin: auto 0 auto auto
</style>
