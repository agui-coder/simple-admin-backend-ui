/**
 * 支付渠道枚举
 */
export const PayChannelEnum = {
  WX_PUB: {
    code: 'WxPub',
    name: '微信 JSAPI 支付',
  },
  WX_LITE: {
    code: 'WxLite',
    name: '微信小程序支付',
  },
  WX_APP: {
    code: 'WxApp',
    name: '微信 APP 支付',
  },
  WX_BAR: {
    code: 'WxBar',
    name: '微信条码支付',
  },
  ALIPAY_PC: {
    code: 'AlipayPc',
    name: '支付宝 PC 网站支付',
  },
  ALIPAY_WAP: {
    code: 'AlipayWap',
    name: '支付宝 WAP 网站支付',
  },
  ALIPAY_APP: {
    code: 'AlipayApp',
    name: '支付宝 APP 支付',
  },
  ALIPAY_QR: {
    code: 'AlipayQr',
    name: '支付宝扫码支付',
  },
  ALIPAY_BAR: {
    code: 'AlipayBar',
    name: '支付宝条码支付',
  },
  MOCK: {
    code: 'mock',
    name: '模拟支付',
  },
};

/**
 * 支付的展示模式枚举
 */
export const PayDisplayModeEnum = {
  URL: {
    mode: 'url',
  },
  IFRAME: {
    mode: 'iframe',
  },
  FORM: {
    mode: 'form',
  },
  QR_CODE: {
    mode: 'qr_code',
  },
  APP: {
    mode: 'app',
  },
};

/**
 * 支付类型枚举
 */
export const PayType = {
  WECHAT: 'WECHAT',
  ALIPAY: 'ALIPAY',
  MOCK: 'MOCK',
};

/**
 * 支付订单状态枚举
 */
export const PayOrderStatusEnum = {
  WAITING: {
    status: 10,
    name: '未支付',
  },
  SUCCESS: {
    status: 20,
    name: '已支付',
  },
  CLOSED: {
    status: 30,
    name: '未支付',
  },
};
