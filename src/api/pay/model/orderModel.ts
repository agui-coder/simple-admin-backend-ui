export interface OrderInfo {
  id: number;
  merchantId: number;
  appId: number;
  channelId: number;
  channelCode: string;
  merchantOrderId: string;
  subject: string;
  body: string;
  notifyUrl: string;
  notifyStatus: number;
  amount: number;
  channelFeeRate: number;
  channelFeeAmount: number;
  status: number;
  userIp: string;
  expireTime: Date;
  successTime: Date;
  notifyTime: Date;
  successExtensionId: number;
  refundStatus: number;
  refundTimes: number;
  refundAmount: number;
  channelUserId: string;
  channelOrderNo: string;
  createAt: Date;
}

export interface OrderSubmitReq {
  id: number;
  channelCode: string;
  channelExtras?: any;
  displayMode?: string;
  returnUrl?: string;
}

export interface OrderSubmitResp  {
  status: number;
  displayMode :string;
  displayContent :string;
}