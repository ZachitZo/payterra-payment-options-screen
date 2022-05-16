export const PAYMENT_METHOD_MAP = {
  'BCP (Banco de Crédito del Perú)': {
    name: 'BCP (Banco de Crédito del Perú)',
    shortName: 'BCP',
    logo: 'bcp.svg',
    tabs: [
      {
        name: 'мобильный банк',
        title: 'Оплата в мобильном банке',
        icon: 'phone.svg',
        instructions: [
          'Войдите в мобильное приложение BCP, войдите в главное меню и выберите опцию «Оплатить услуги».',
          'Выберите опцию поиска «Искать в разделе».',
          'Найдите «Adjustpayments», выберите Adjustpayments Soles или Dollars и введите свой платежный код.',
          'Вставьте код оплаты, подтвердите и готово!'
        ],
      },
      {
        name: 'онлайн-банк',
        title: 'Оплата в интернет-банке',
        icon: 'computer.svg',
        instructions: [
          'Введите свой онлайн-банк BCP www.viabcp.com',
          'Зайдите в меню «Платежи» и выберите «Оплатить услугу».',
          'Найдите «Adjustpayments», выберите Soles или Dollars и введите свой платежный код.',
          'Вставьте код оплаты, подтвердите и готово!'
        ],
      },
      {
        name: 'агенты',
        title: 'Оплата через агента',
        icon: 'store.svg',
        instructions: [
          'Acércate a un agente del BCP e indica que deseas pagar al servicio de recaudación de KashIO Perú.',
          'Indica el Código de Agente de KashIO: <b>15813</b>.',
          'Indica tu código de pago.',
          'Indica monto total, moneda a pagar y ¡Listo!',
          'Recibe el voucher de pago de la operación.'
        ],
      },
      {
        name: 'отделение банка',
        title: 'Оплата в отделении банка',
        icon: 'bank.svg',
        instructions: [
          'Acércate a una oficina o agencia del BCP e indica que deseas pagar al servicio de recaudación de KashIO.',
          'Elije el tipo de moneda a pagar y proporciona el número de tu DNI, RUC, teléfono o código único, según corresponda.',
          'Elije la deuda que deseas pagar y listo. Recibe el voucher de pago de la operación.'
        ],
      },
    ],
  },
  'Banco BBVA': {
    name: 'Banco BBVA',
    shortName: 'BBVA',
    logo: 'bbva.svg',
    tabs: [
      {
        name: 'мобильный банк',
        title: 'Оплата в мобильном банке',
        icon: 'phone.svg',
        instructions: [
          'Ingresa a la aplicación móvil del BBVA, accede al menú principal y selecciona tu cuenta bancaria.',
          'Elige la opción “Pagar servicio” y selecciona "Agregar servicio a pagar".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares e ingresa tu código de pago.',
          'Selecciona la deuda a pagar, confirma y ¡Listo!'
        ],
      },
      {
        name: 'онлайн-банк',
        title: 'Оплата в интернет-банке',
        icon: 'computer.svg',
        instructions: [
          'Ingresa a tu banca web BBVA desde: <b>https://www.bbva.pe</b>',
          'Ve a tu cuenta, pulsa el botón "Quiero" y selecciona la opción "Pagar servicio".',
          'Selecciona la opción "Instituciones y empresas" y pulsa la opción "Nombre".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares, pulsa siguiente e ingresa tu código de pago',
          'Selecciona la deuda a pagar, confirma y ¡Listo!'
        ],
      },
      {
        name: 'агенты',
        title: 'Оплата через агента',
        icon: 'store.svg',
        instructions: [
          'Acércate a un agente del BBVA e indica que deseas pagar al servicio de recaudación de KashIO Perú.',
          `Indica el Código de Agente de KashIO:<br>    Pago en Soles: <b>11140</b><br>    Pago en Dólares: <b>11141</b>`,
          'Indica tu código de pago.',
          'Indica monto total, moneda a pagar y ¡Listo!',
          'Recibe el voucher de pago de la operación.'
        ],
      },
      {
        name: 'отделение банка',
        title: 'Оплата в отделении банка',
        icon: 'bank.svg',
        instructions: [
          'Acércate a una oficina o agencia del BBVA e indica que deseas pagar al servicio de recaudación de KashIO.',
          'Elije el tipo de moneda en la que quieres pagar.',
          'Proporciona tu número de DNI, RUC, teléfono o código único según corresponda y elije la deuda que quieres pagar.',
          'Recibe el voucher de pago de la operación.'
        ],
      },
    ],
  },
  'Interbank' : {
    name: 'Interbank',
    shortName: 'Interbank',
    logo: 'interbank.svg',
    tabs: [
      {
        name: 'мобильный банк',
        title: 'Оплата в мобильном банке',
        icon: 'phone.svg',
        instructions: [
          'Ingresa a la aplicación móvil de Interbank.',
          'Selecciona la opción "Operaciones" y elige la opción "Pago y recargas".',
          'Selecciona "Pago a institución o empresa".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares e ingresa tu código de pago.',
          'Selecciona la deuda a pagar, confirma y ¡Listo!'
        ],
      },
      {
        name: 'онлайн-банк',
        title: 'Оплата в интернет-банке',
        icon: 'computer.svg',
        instructions: [
          'Ingresa a tu banca web Interbank desde: <b>https://interbank.pe</b>',
          'Selecciona "Mis operaciones" y eligen la opción "Pago o Recarga".',
          'Selecciona "Pago a institución o empresa".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares e ingresa tu código de pago.',
          'Selecciona la deuda a pagar, confirma y ¡Listo!'
        ],
      },
      {
        name: 'агенты',
        title: 'Оплата через агента',
        icon: 'store.svg',
        instructions: [
          'Acércate a un agente de Interbank e indica que deseas pagar al servicio de recaudación de KashIO Perú.',
          'Indica el Código de Agente de KashIO:<br>    Pago en Soles: <b>0791501</b><br>    Pago en Dólares: <b>0791502</b>',
          'Indica tu código de pago.',
          'Indica monto total, moneda a pagar y ¡Listo!',
          'Recibe el voucher de pago de la operación.'
        ],
      },
      {
        name: 'отделение банка',
        title: 'Оплата в отделении банка',
        icon: 'bank.svg',
        instructions: [
          'Acércate a una oficina o agencia del Interbank e indica que deseas pagar al servicio de recaudación de KashIO.',
          'Elige la moneda a pagar y proporciona tu número de DNI, RUC, teléfono o código único según corresponda.',
          'Elije las deudas a pagar y listo.',
          'Recibe el voucher de pago de la operación.'
        ],
      },
    ],
  },
  'Scotiabank' : {
    name: 'Scotiabank',
    shortName: 'Scotiabank',
    logo: 'scotiabank.svg',
    tabs: [
      {
        name: 'мобильный банк',
        title: 'Оплата в мобильном банке',
        icon: 'phone.svg',
        instructions: [
          'Ingresa a la aplicación móvil de Scotiabank.',
          'Selecciona la opción "Quiero" y elige la opción "Pagar".',
          'Selecciona "Servicios o Instituciones".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares e ingresa tu código de pago.',
          'Selecciona la deuda a pagar, confirma y ¡Listo!'
        ],
      },
      {
        name: 'онлайн-банк',
        title: 'Оплата в интернет-банке',
        icon: 'computer.svg',
        instructions: [
          'Ingresa a tu banca web Scotiabank desde: <b>https://mi.scotiabank.com.pe/</b>',
          'Elige la opción "Pagar" y selecciona la opción "Servicios o Instituciones".',
          'Busca "KashIO Perú", elige KashIO Perú Soles o Dólares e ingresa tu código de pago.',
          'Selecciona la deuda a pagar, confirma y ¡Listo!',
        ],
      },
      {
        name: 'агенты',
        title: 'Оплата через агента',
        icon: 'store.svg',
        instructions: [
          'Acércate a un agente de Scotiabank e indica que deseas pagar al servicio de recaudación de KashIO Perú o indica nuestro RUC 20602393799.',
          'Indica tu código de pago.',
          'Indica monto total, moneda a pagar y ¡Listo!',
          'Recibe el voucher de pago de la operación.'
        ],
      },
      {
        name: 'отделение банка',
        title: 'Оплата в отделении банка',
        icon: 'bank.svg',
        instructions: [
          'Acércate a una oficina o agencia del Scotiabank e indica que deseas pagar al servicio de recaudación de KASHIO PERU.',
          'Proporciona tu número de DNI, RUC, teléfono o código único según corresponda y elije la deuda que quieres pagar.',
          'Elije el tipo de moneda y el moto a pagar.',
          'Recibe el voucher de pago de la operación.'
        ],
      },
    ],
  },
  'KasNet' : {
    name: 'KasNet',
    shortName: 'KasNet',
    logo: 'kasnet.svg',
    tabs: [
      {
        name: 'агенты',
        title: 'Оплата через агента',
        icon: 'store.svg',
        instructions: [
          'Acércate a un agente de KASNET e indica que deseas pagar al servicio de recaudación de KashIO Perú.',
          'Indica el Código de Agente de KashIO: <b>220044</b>.',
          'Indica tu código de pago.',
          'Indica monto total, moneda a pagar y ¡Listo!',
          'Recibe el voucher de pago de la operación.'
        ],
      },
    ],
  },
  'Tambo' : {
    name: 'Tambo',
    shortName: 'Tambo',
    logo: 'tambo.svg',
    tabs: [
      {
        name: 'магазины',
        title: 'Оплата в магазине',
        icon: 'store.svg',
        instructions: [
          'Перейдите в магазин Tambo+ и укажите, что вы хотите осуществить агентский платеж в «Adjustpayments».',
          'Укажите свой платежный код.',
          'Выберите счёт для оплаты и Готово!',
          'Сохраните квитанцию об оплате операции',
        ],
      },
    ],
  },
};
