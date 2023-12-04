import { defHttp } from '@/utils/http/axios';
import { BaseDataResp, BaseListReq } from '/@/api/model/baseModel';
import { DemoOrderListResp, DemoOrderInfo, createDemoOrderReq } from '/@/api/pay/model/demoModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  GetDemoOrderList = '/pay/demo-order/page',
  GetDemoOrder = '/pay/demo-order/get',
}

/**
 * @description: Get member list
 */

export const getDemoOrderPage = (params: BaseListReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DemoOrderListResp>>(
    { url: Api.GetDemoOrderList, params },
    { errorMessageMode: mode },
  );
};

/**
 *  @description: Get DemoOrder By ID
 */
export const getDemoOrder = (params: createDemoOrderReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<DemoOrderInfo>>(
    { url: Api.GetDemoOrder, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

// 创建示例订单
export function createDemoOrder(data) {
  return defHttp.post({ url: '/pay/demo-order/create', data });
}

// 退款示例订单
export function refundDemoOrder(id: number) {
  return defHttp.put({ url: `/pay/demo-order/refund?id=${id}` });
}
