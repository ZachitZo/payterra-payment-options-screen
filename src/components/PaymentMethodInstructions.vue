<template>
  <div :class="$style.container">
    <div :class="$style.tabs">
      <div :class="$style.tab">
        
      </div>
    </div>
    <div :class="$style.content">
      <div :class="$style.title">
        Оплата в мобильном банке
      </div>
      <div :class="$style.text">
1. Войдите в мобильное приложение BCP, войдите в главное меню и выберите опцию «Оплатить услуги».
2. Выберите опцию поиска «Искать в разделе».
3. Найдите «Adjustpayments», выберите Adjustpayments Soles или Dollars и введите свой платежный код.
4. Вставьте код оплаты, подтвердите и готово!
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PaymentMethodInstructions',
  components: {
  },
  props: {
    method: {
      type: Object,
      required: true,
    },
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="sass" module>
  .container
    background-color: #F9F9F9

  .tabs
    height: 75px
    padding: 10px 10px 0

  .tab
    position: relative
    top: 1px
    width: 100%
    max-width: 110px
    height: 65px
    border-width: 1px 1px 0px 1px
    border-style: solid
    border-color: rgba(0, 0, 0, 0.1)
    background-color: #FFFFFF
    border-radius: 4px 4px 0px 0px

  .content
    padding: 20px
    border-top: 1px solid #e5e5e5
    background-color: #FFFFFF

  .title
    font-size: 24px
    line-height: 32px
    margin-bottom: 15px

  .text
    font-weight: 300
    line-height: 16px
    letter-spacing: -0.05em
</style>
