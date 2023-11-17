import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: string;
  quantity: number;
}


const initialState = [
  {
    name: 'Le Trung Hau',
    userName: '@Haule',
    gender: 'Male',
    birthdate: '10-12-2003',
    email: 'hault2003@gmail.com',
    phone: '0345625243',
    image: 'https://www.facebook.com/images/fb_icon_325x325.png',
    password: '123abc',
  },
  {
    orderDetails: [
      {
        idorder: 'FGHJYTN',
        date: 'August 1, 2017',
        orderStatus: 'Shipping',
        items: [
          {
            id: 1,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Nike Air Zoom Pegasus 36 Miami',
            price: '299.43',
            quantity: '1',
          },
          {
            id: 2,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike2.png",
            name: 'Nike Air Zoom Pegasus 36 Miami',
            price: '299.43',
            quantity: '1',
          }
        ],
        dateship: 'January 16, 2015',
        shipping: 'GHTK',
        Transportfee: '40',
        idship: '000199999999',
        address: 'địa chỉ nhà minh lỏ',
      },
      {
        idorder: 'ABCXYZ',
        date: 'September 10, 2017',
        orderStatus: 'Delivered',
        items: [
          {
            id: 3,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 3',
            price: '199.99',
            quantity: '1',
          }
        ],
        dateship: 'February 25, 2018',
        shipping: 'DHL',
        Transportfee: '40',
        idship: '000299999999',
        address: '123 Main Street, Anytown, USA',
      },
      {
        idorder: 'DEF123',
        date: 'October 5, 2018',
        orderStatus: 'Delivered',
        items: [
          {
            id: 4,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 4',
            price: '249.99',
            quantity: '1',
          },
          {
            id: 5,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 5',
            price: '149.99',
            quantity: '1',
          },
          {
            id: 6,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 6',
            price: '199.99',
            quantity: '1',
          }
        ],
        dateship: 'March 12, 2019',
        shipping: 'FedEx',
        Transportfee: '40',
        idship: '000399999999',
        address: '456 Elm Street, Othertown, USA',
      },
      {
        idorder: 'XYZ456',
        date: 'November 20, 2019',
        orderStatus: 'Processing',
        items: [
          {
            id: 7,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 7',
            price: '179.99',
            quantity: '1',
          },
          {
            id: 8,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 8',
            price: '219.99',
            quantity: '1',
          },
          {
            id: 9,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 9',
            price: '159.99',
            quantity: '1',
          },
          {
            id: 10,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 10',
            price: '249.99',
            quantity: '1',
          }
        ],
        dateship: 'April 5, 2020',
        shipping: 'UPS',
        Transportfee: '40',
        idship: '000499999999',
        address: '789 Oak Street, Anothertown, USA',
      },
      {
        idorder: 'MNO789',
        date: 'December 15, 2020',
        orderStatus: 'Delivered',
        items: [
          {
            id: 11,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 11',
            price: '169.99',
            quantity: '1',
          }
        ],
        dateship: 'May 20, 2021',
        shipping: 'USPS',
        Transportfee: '40',
        idship: '000599999999',
        address: '101 Pine Street, Yetanothertown, USA',
      },
      {
        idorder: 'PQR123',
        date: 'January 5, 2022',
        orderStatus: 'Processing',
        items: [
          {
            id: 12,
            image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png",
            name: 'Sample Product 12',
            price: '199.99',
            quantity: '1',
          }
        ],
        dateship: 'June 10, 2022',
        shipping: 'DHL',
        Transportfee: '40',
        idship: '000699999999',
        address: '202 Cedar Street, Yetanothertown, USA',
      },
    ],
  },
  {
    Address:[
      {
        idAddress:1111,
        consigneename: 'Minh dep trai',
        deliveryaddress: 'Nha cua le duc minh deo cho may dia chi nha con, doi muoi nam nua bo may cho may dia chi con Hau',
        deliverphone: '0372711935',
      },
      {
        idAddress:2222,
        consigneename: 'Hoang bao ve',
        deliveryaddress: 'Nha cua le duc minh deo cho may dia chi nha con',
        deliverphone: '0372711935',
      },
      {
        idAddress:3333,
        consigneename: 'Hau loz',
        deliveryaddress: 'Nha cua le duc minh deo cho may dia chi nha con',
        deliverphone: '0372711935',
      },
      {
        idAddress:4444,
        consigneename: 'Long lon',
        deliveryaddress: 'Nha cua le duc minh deo cho may dia chi nha con',
        deliverphone: '0372711935',
      },
    ]
  },
];


const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
  },
});

export default Slice.reducer;
