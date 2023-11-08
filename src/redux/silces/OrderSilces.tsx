import { createSlice } from '@reduxjs/toolkit';



type Order = {
  orderDetails: {
    idorder: string;
    date: string;
    orderStatus: string;
    items: Item[];
    dateship: string;
    shipping: string;
    Transportfee: string;
    idship: string;
    address: string;
  };
};


type Item = {
  id: number;
  image: string;
  name: string;
  price: string;
}

function totalprice(order: Order ) {totalprice
  const itemTotal = order.orderDetails.items.reduce((total, item: Item) => total + parseFloat(item.price), 0);
  const shippingFee = parseFloat(order.orderDetails.Transportfee);
  return itemTotal + shippingFee;
}
function totalitems(order: Order ) {
  const itemTotal = order.orderDetails.items.reduce((total, item: Item) => total + parseFloat(item.price), 0);
  return itemTotal; 
}
const initialState = [
    {
      id: 1,
      orderDetails: {
        idorder: 'FGHJYTN',
        date: 'August 1, 2017',
        orderStatus: 'Shipping',
        items: [
          {
            id: 1,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Nike Air Zoom Pegasus 36 Miami',
            price: '299.43',
          },
          {
            id: 2,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png",
            name: 'Nike Air Zoom Pegasus 36 Miami',
            price: '299.43',
          }
        ],
        dateship: 'January 16, 2015',
        shipping: 'GHTK',
        Transportfee:'40',
        idship: '000199999999',
        address: 'địa chỉ nhà minh lỏ',
      },
    },
    {
      id: 2,
      orderDetails: {
        idorder: 'ABCXYZ',
        date: 'September 10, 2017',
        orderStatus: 'Delivered',
        items: [
          {
            id: 3,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 3',
            price: '199.99',
          }
        ],
        dateship: 'February 25, 2018',
        shipping: 'DHL',
        Transportfee:'40',
        idship: '000299999999',
        address: '123 Main Street, Anytown, USA',
      },
    },
    {
      id: 3,
      orderDetails: {
        idorder: 'DEF123',
        date: 'October 5, 2018',
        orderStatus: 'Delivered',
        items: [
          {
            id: 4,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 4',
            price: '249.99',
          },
          {
            id: 5,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 5',
            price: '149.99',
          },
          {
            id: 6,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 6',
            price: '199.99',
          }
        ],
        dateship: 'March 12, 2019',
        shipping: 'FedEx',
        Transportfee:'40',
        idship: '000399999999',
        address: '456 Elm Street, Othertown, USA',
      },
    },
    {
      id: 4,
      orderDetails: {
        idorder: 'XYZ456',
        date: 'November 20, 2019',
        orderStatus: 'Processing',
        items: [
          {
            id: 7,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 7',
            price: '179.99',
          },
          {
            id: 8,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 8',
            price: '219.99',
          },
          {
            id: 9,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 9',
            price: '159.99',
          },
          {
            id: 10,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 10',
            price: '249.99',
          }
        ],
        dateship: 'April 5, 2020',
        shipping: 'UPS',
        Transportfee:'40',
        idship: '000499999999',
        address: '789 Oak Street, Anothertown, USA',
      },
    },
    {
      id: 5,
      orderDetails: {
        idorder: 'MNO789',
        date: 'December 15, 2020',
        orderStatus: 'Delivered',
        items: [
          {
            id: 11,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 11',
            price: '169.99',
          }
        ],
        dateship: 'May 20, 2021',
        shipping: 'USPS',
        Transportfee:'40',
        idship: '000599999999',
        address: '101 Pine Street, Yetanothertown, USA',
      },
    },
    {
      id: 6,
      orderDetails: {
        idorder: 'PQR123',
        date: 'January 5, 2022',
        orderStatus: 'Processing',
        items: [
          {
            id: 12,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 12',
            price: '199.99',
          }
        ],
        dateship: 'June 10, 2022',
        shipping: 'DHL',
        Transportfee:'40',
        idship: '000699999999',
        address: '202 Cedar Street, Yetanothertown, USA',
      },
    },
  ];


  const updatedInitialState = initialState.map(order => ({
    ...order,
    orderDetails: {
      ...order.orderDetails,
      totalprice: totalprice(order),
      totalitemsprice:totalitems(order),
    },
  }));

const OrderSlice = createSlice({
    name: 'OrderSlice',
    initialState : updatedInitialState,
    reducers: {

    },
});

export default OrderSlice.reducer;