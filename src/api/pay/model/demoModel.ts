import { BaseListResp } from '/@/api/model/baseModel';

export interface DemoOrderInfo {
  id: number;
  createdAt?: number;
  updatedAt?: number;
  spuId?: number;
  spuName?: string;
  price?: number;
  payStatus?: boolean;
  payTime?: number;
  payChannelCode?: string;
  payRefundId?: number;
  refundPrice?: number;
  refundTime?: number;
}
export interface createDemoOrderReq {
  spuId: number;
}

/**
 *  @description: DemoOrder list response
 */

export type DemoOrderListResp = BaseListResp<DemoOrderInfo>;
