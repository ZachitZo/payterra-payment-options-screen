<template>
  <div class="payment-options-wrapper">

    <div class="payment-options-section">
      <div class="payment-options-section-cell">
        <div class="payment-code">
          <div class="payment-code-title">
            Код оплаты
          </div>
          <div class="payment-code-text">
            {{ paymentCode }}
          </div>
        </div>
        <button class="payment-code-button" @click="copyCode">
        </button>
      </div>

      <div class="payment-options-section-cell">
        <div class="payment-due">
          <div class="payment-due-title">
            Срок оплаты
          </div>
          <div class="payment-due-counter">
            {{ paymentDueTimeCounter }}
          </div>
        </div>
      </div>
    </div>

    <div class="payment-options-section">
      <div class="payment-options-section-cell">
        <div class="payment-method-controller">
          <template v-if="currentPaymentMethod">
            <div class="current-payment-method">
              <div class="current-payment-method-title">
                Способ оплаты:
              </div>
              <div class="current-payment-method-name" @click="clearPaymentMethod">
                {{ currentPaymentMethod.shortName }}
              </div>
            </div>
            <div class="current-payment-method-logo">
              <img :src="require(`@/assets/logos/${currentPaymentMethod.logo}`)" />
            </div>
          </template>

          <div v-else class="current-payment-method-title empty">
            Получите инструкцию для оплаты:
          </div>
        </div>
      </div>

      <template v-if="!checkedPaymentMethod">
        <div
          v-for="method in preparedMethodList"
          :key="method.id"
          class="payment-options-section-cell active"
          @click="setPaymentMethod(method)"
        >
          <div class="payment-method">
            <div class="payment-method-title">
              {{ method.name }}
            </div>
            <div class="payment-method-logo">
              <img :src="require(`@/assets/logos/${method.logo}`)" />
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="payment-method-instructions">
          <div v-if="isShownTabs" class="payment-method-instructions-tabs">
            <div
              v-for="tab in currentPaymentMethod.tabs"
              :key="tab.id"
              class="payment-method-instructions-tab"
              :class="{ active: isActiveTab(tab.name) }"
              @click="setCurrentTab(tab)"
            >
              <div class="tab-icon">
                <img :src="require(`@/assets/icons/${tab.icon}`)" />
              </div>
              <div v-if="!isActiveTab(tab.name)" class="tab-name">
                {{ tab.name }}
              </div>
            </div>
          </div>
          <div class="payment-method-instruction-content">
            <div class="payment-method-instruction-title">
              {{ currentTab.title }}
            </div>
            <div class="payment-method-instruction-text">
              <ol>
                <li
                  v-for="instruction in currentTab.instructions"
                  :key="instruction.id"
                  class="payment-method-instruction-step"
                  v-html="instruction"
                >
                </li>
              </ol>
            </div>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import { PAYMENT_METHOD_MAP } from '@/definitions/paymentMethods';

function dateGap(date){
  let dateNow = new Date();

  return date - dateNow;
}

export default {
  name: 'PaymentOptions',
  created() {
    this.setPaymentDueTime();

    this.counterInterval = setInterval(() => {
      this.setPaymentDueTime();
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.counterInterval);
    this.counterInterval = null;
  },
  data() {
    return {
      paymentCode: '221192630032',
      paymentDueTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      paymentDueDate: new Date('May 16 2022 12:12:00'),
      paymentMethodList: [
        {
          name: 'BCP (Banco de Crédito del Perú)',
        },
        {
          name: 'Banco BBVA',
        },
        {
          name: 'Interbank',
        },
        {
          name: 'Scotiabank',
        },
        {
          name: 'KasNet',
        },
        {
          name: 'Tambo',
        },
      ],
      checkedPaymentMethod: null,
      currentTab: null,
      counterInterval: null,
    };
  },
  computed: {
    currentPaymentMethod() {
      if (!this.checkedPaymentMethod) {
        return null;
      }

      return this.getPaymentMethodByName(this.checkedPaymentMethod.name);
    },
    preparedMethodList() {
      return this.paymentMethodList.map(method => {
        return this.getPaymentMethodByName(method.name);
      });
    },
    isShownTabs() {
      return this.checkedPaymentMethod ? this.checkedPaymentMethod.tabs.length > 1 : false;
    },
    paymentDueTimeCounter() {
      const isExpired = [
        this.paymentDueTime.days,
        this.paymentDueTime.hours,
        this.paymentDueTime.minutes,
        this.paymentDueTime.seconds
      ].every(el => el === 0)

      if (isExpired) {
        return 'Истёк';
      }

      const displayDays = `0${this.paymentDueTime.days.toString()}`.slice(-2);
      const displayHours = `0${this.paymentDueTime.hours.toString()}`.slice(-2);
      const displayMinutes = `0${this.paymentDueTime.minutes.toString()}`.slice(-2);
      const displaySeconds = `0${this.paymentDueTime.seconds.toString()}`.slice(-2);

      return displayDays === '00' ?
        `${displayHours}:${displayMinutes}:${displaySeconds}` :
        `${displayDays} дней ${displayHours}:${displayMinutes}:${displaySeconds}`;
    },
  },
  methods: {
    copyCode() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(this.paymentCode)
        .catch((error) => {
          console.error(error);
        });
      }
    },
    getPaymentMethodByName(name) {
      return PAYMENT_METHOD_MAP[name];
    },
    setCurrentTab(tab) {
      this.currentTab = tab;
    },
    clearPaymentMethod() {
      this.checkedPaymentMethod = null;
      this.setCurrentTab(null);
    },
    setPaymentMethod(method) {
      this.checkedPaymentMethod = method;
      this.setCurrentTab(method.tabs[0]);
    },
    isActiveTab(tabName) {
      return this.currentTab ? this.currentTab.name === tabName : false;
    },
    setPaymentDueTime() {
      const gap = dateGap(this.paymentDueDate);

      if (gap < 0) {
        clearInterval(this.counterInterval);
        this.counterInterval = null;
        return;
      }

      this.paymentDueTime.days = Math.floor(gap / (1000 * 60 * 60 * 24));
      this.paymentDueTime.hours = Math.floor(gap / (1000 * 60 * 60)) % 24;
      this.paymentDueTime.minutes = Math.floor(gap / (1000 * 60)) % 60;
      this.paymentDueTime.seconds = Math.floor(gap / (1000)) % 60;
    },
  },
};
</script>

<style lang="scss" scoped>
  .payment-options-wrapper {
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
  }

  .payment-options-section {
    box-shadow: 0 0 10px 0 #e5e5e5;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .payment-options-section-cell {
    display: flex;
    align-items: center;
    padding: 20px;
    &.active {
      cursor: pointer;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #e5e5e5;
    }
  }

  .payment-code-title {
    font-weight: 300;
    line-height: 18px;
  }

  .payment-code-text {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: #0057FF;
    text-decoration: underline;
    text-underline-position: under;
  }

  .payment-code-button {
    width: 24px;
    height: 24px;
    margin: auto 2px 4px auto;
    border: none;
    outline: none;
    background: url(@/assets/icons/copy.svg) no-repeat center;
    cursor: pointer;
  }

  .payment-due-title {
    font-weight: 300;
    line-height: 18px;
  }

  .payment-due-counter {
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
  }

  .payment-method-controller {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .current-payment-method-title {
    font-weight: 300;
    line-height: 1em;
    letter-spacing: -0.05em;
    &.empty {
      line-height: 30px;
    }
  }

  .current-payment-method-name {
    position: relative;
    display: inline-block;
    padding-right: 15px;
    margin-top: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #0057FF;
    letter-spacing: -0.05em;
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      top: 8px;
      right: 0;
      width: 10px;
      height: 5px;
      background: url(@/assets/icons/arrow-down.svg) no-repeat center;
    }
  }

  .current-payment-method-logo {
    width: 108px;
    height: 30px;
    margin-left: auto;
  }

  .payment-method {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .payment-method-title {
    line-height: 1em;
    letter-spacing: -0.05em;
  }

  .payment-method-logo {
    width: 108px;
    height: 30px;
    margin-left: auto;
  }

  .payment-method-instructions-tabs {
    display: flex;
    height: 75px;
    padding: 11px 10px 0;
    border-bottom: 1px solid #e5e5e5;
    background-color: #F9F9F9;
  }

  .payment-method-instructions-tab {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 110px;
    height: 65px;
    border-radius: 4px 4px 0px 0px;
    user-select: none;
    cursor: pointer;
    &.active {
      border-width: 1px 1px 0px 1px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.1);
      background-color: #FFFFFF;
    }
  }

  .tab-icon {
    width: 32px;
    height: 32px;
  }

  .tab-name {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.05em;
    color: rgba(#000000, 0.5);
  }

  .payment-method-instruction-content {
    padding: 20px;
    background-color: #FFFFFF;
  }

  .payment-method-instruction-title {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 15px;
  }

  .payment-method-instruction-text {
    font-weight: 300;
    line-height: 16px;
    letter-spacing: -0.05em;
  }

  .payment-method-instruction-step {
    font-weight: 300;
    line-height: 16px;
    letter-spacing: -0.05em;
    white-space: pre-wrap;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
</style>
