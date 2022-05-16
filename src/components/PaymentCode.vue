<template>
  <div :class="$style.container">
    <div :class="$style.content">
      <div :class="$style.title">
        Код оплаты
      </div>
      <div :class="$style.code">
        {{ code }}
      </div>
    </div>
    <div :class="$style.button" @click="copyCode">
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaymentCode',
  props: {
    code: {
      type: String,
      required: true,
    }
  },
  methods: {
    copyCode() {
      console.log(this.code);
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
    line-height: 18px

  .code
    font-weight: 600
    font-size: 24px
    line-height: 32px
    color: #0057FF
    text-decoration: underline
    text-underline-position: under

  .button
    width: 24px
    height: 24px
    margin: auto 2px 4px auto
    background: url(@/assets/icons/copy.svg) no-repeat center
    cursor: pointer
</style>
