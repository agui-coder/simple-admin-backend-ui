import type { BasicColumn, FormSchema } from '@/components/Table';
import { Tag } from 'ant-design-vue';
import { h } from 'vue';
import { formatToDateTime } from '/@/utils/dateUtil';

export const columns: BasicColumn[] = [
  {
    title: '订单编号',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: '商品名字',
    dataIndex: 'spuName',
    width: 100,
  },
  {
    title: '支付价格',
    dataIndex: 'price',
    width: 100,
    customRender: ({ text }) => {
      return h(Tag, {}, () => `￥${(text / 100.0).toFixed(2)}`);
    },
  },
  {
    title: '退款金额',
    dataIndex: 'refundPrice',
    width: 100,
    customRender: ({ text }) => {
      return h(Tag, {}, () => `￥${(text / 100.0).toFixed(2)}`);
    },
  },
  {
    title: '支付单号',
    dataIndex: 'payOrderId',
    width: 100,
  },
  {
    title: '创建时间',
    dataIndex: 'createAt',
    width: 180,
    customRender: ({ text }) => {
      return formatToDateTime(text);
    },
  },
  {
    title: '是否支付',
    dataIndex: 'payStatus',
    width: 100,
    customRender: ({ text }) => {
      return text === true ? '是' : '否';
    },
  },
  {
    title: '支付时间',
    dataIndex: 'payTime',
    width: 180,
    customRender: ({ text }) => {
      return formatToDateTime(text);
    },
  },
  {
    title: '退款时间',
    dataIndex: 'refundTime',
    width: 180,
    customRender: ({ text }) => {
      return formatToDateTime(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '支付单号',
    field: 'payOrderId',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    label: '是否支付',
    field: 'payStatus',
    component: 'Select',
    componentProps: {
      options: [
        { label: '是', value: true },
        { label: '否', value: false },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    label: '商品',
    field: 'spuId',
    component: 'Select',
    required: true, 
    componentProps: {
      options: [
        { value: 1, label: '华为手机', price: 1 },
        { value: 2, label: '小米电视', price: 2 },
        { value: 3, label: '苹果手表', price: 3 },
        { value: 4, label: '华硕笔记本', price: 4 },
        { value: 5, label: '蔚来汽车', price: 5 },
      ],
    },
  },
];
