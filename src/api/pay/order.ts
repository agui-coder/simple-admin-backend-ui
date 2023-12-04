import { BaseDataResp, BaseIDReq } from '../model/baseModel';
import { OrderInfo, OrderSubmitReq, OrderSubmitResp } from './model/orderModel';
import { ErrorMessageMode } from '/#/axios';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  GetOrder = '/pay/order/get',
  SubmitOrder = '/pay/order/submit',
}
/**
 *  @description: Get Order By ID
 */
export const getOrder = (params: BaseIDReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<BaseDataResp<OrderInfo>>(
    { url: Api.GetOrder, params: params },
    {
      errorMessageMode: mode,
    },
  );
};

export const  submitOrder = (params: OrderSubmitReq, mode: ErrorMessageMode = 'notice') => {
  return defHttp.post<OrderSubmitResp>(
    { url: Api.SubmitOrder, params: params },
    {
      errorMessageMode: mode,
    },
  );
};
