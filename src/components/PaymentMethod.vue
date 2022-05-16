<template>
  <div :class="$style.container" @click="checkMethod">
    <div :class="$style.title">
      {{ method.name }}
    </div>
    <div :class="$style.logo">
      <img :src="require(`@/assets/logos/${getLogo}`)" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaymentMethod',
  props: {
    method: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getLogo() {
      return this.method.logo;
    },
  },
  methods: {
    checkMethod() {
      this.$emit('check-method', this.method);
    },
  },
};
</script>

<style lang="sass" module>
  .container
    display: flex
    align-items: center
    padding: 20px
    cursor: pointer

  .title
    letter-spacing: -0.05em

  .logo
    width: 108px
    height: 30px
    margin: auto 0 auto auto
</style>
