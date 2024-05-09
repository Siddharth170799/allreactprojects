// import { Form, Row, Col, Table, Typography, DatePicker, Space, Button } from "antd";
// import { useState, useEffect, useContext } from "react";
// import { globalContext } from "@/components/globalContext";
// import { extractCodeUsingId } from "@/utils";
// import dayjs from "dayjs";

// dayjs().locale("en");

// export default function BookingList() {
//     var Set = require("es6-set");
//     const { state, dispatch } = useContext(globalContext);

//     const [form] = Form.useForm();
//     const [data, setData] = useState([]);
//     const [originalData,setOriginalData] = useState([]);
//     const [waybillMasters, setWayBillMasters] = useState([]);
//     const [consignorMasters, setConsignorMasters] = useState([]);
//     const [consigneeMasters, setConsigneeMasters] = useState([]);
//     const [bookingTypeMasters, setBookingTypeMasters] = useState([]);
//     const [branchMasters, setBranchMasters] = useState(null);
//     const [statusFilter, setStatusFilter] = useState([]);

//     const dateFormat = "DD-MM-YYYY";


//     const handlePrint = (waybillId) => {

//         fetch(`${state.apiUrl}/print?type=waybill&id=${waybillId}`, { method: 'POST' })
//             .then(response => {
//                 if (response.status === 200) {
//                     return response.text()
//                 }
//                 else {
//                     throw new Error(response.status)
//                 }
//             })
//             .then(data => {
//                 fetch(`http://localhost:9000/print`, {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "text/plain",
//                     },
//                     body: data,
//                 })
//                     .then(response => {
//                         console.log(response.status)
//                     })
//                     .catch(error => console.log(error));

//             })
//             .catch(error => console.log(error));
//     }

//     const viewWayBill = (waybillId) => {

//         console.log('Viewing Waybill');
//         dispatch({ type: "VIEW_WAYBILL", payload: { waybillId: waybillId } })
//     }


//     useEffect(() => {
//         fetch(`${state.apiUrl}/branches/`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log("/GET Branches");
//                 const baseData = data.map((item) => {
//                     item.key = item.id;
//                     item.label = item.code;
//                     item.label = item.code;
//                     item.value = item.id;
//                     item.text = item.code;
//                     item.branchId = item.id;
//                     return item;
//                 })

//                 const listData = baseData.map((item) => {
//                     item.code = item.parentBranchId ? item.code + " (" + extractCodeUsingId(item.parentBranchId, baseData) + ")" : item.code;
//                     return item;
//                 })



//                 listData.sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }));
//                 console.log("listData", listData);


//                 fetch(`${state.apiUrl}/waybills/?branchId=` + state.currentBranch)
//                     .then(response => response.json())
//                     .then(data => {

//                         setData(data);
//                         setOriginalData(data);
//                         console.log("Data", data);

//                         const wayBillData = data.map((item) => {
//                             item.label = item.lrNumber;
//                             item.value = item.lrNumber;
//                             item.key = item.id;
//                             item.text = item.lrNumber;
//                             item.destinationCode = listData.find(branch => branch.id == item.toBranchId).code;
//                             return item;
//                         })
//                         console.log("WayBillData", wayBillData)
//                         console.log(data);
//                         setWayBillMasters(wayBillData);

//                         let consignorList = data.map((item) => {
//                             return {

//                                 text: item.consignorName,
//                                 value: item.consignorName,
//                             }

//                         })
//                         let uniqueList = Array.from(new Set(consignorList.map(c => JSON.stringify(c))), JSON.parse);
//                         setConsignorMasters(uniqueList);

//                         let consigneeList = data.map((item) => {
//                             return {
//                                 text: item.consigneeName,
//                                 value: item.consigneeName,
//                             }
//                         })
//                         let uniqueList2 = Array.from(new Set(consigneeList.map(c => JSON.stringify(c))), JSON.parse);
//                         setConsigneeMasters(uniqueList2);

//                         let bookingtypeList = data.map((item) => {
//                             return {
//                                 text: item.bookingType,
//                                 value: item.bookingType,
//                             }
//                         })
//                         let uniqueList3 = Array.from(new Set(bookingtypeList.map(c => JSON.stringify(c))), JSON.parse);

//                         let statusList = data.map((item) => {
//                             return {
//                                 text: item.status,
//                                 value: item.status,
//                             }
//                         })
//                         let uniqueListStatus = Array.from(new Set(statusList.map(c => JSON.stringify(c))), JSON.parse);
//                         setStatusFilter(uniqueListStatus)

//                         setBookingTypeMasters(uniqueList3)

//                         let destinationList = data.map((item) => {
//                             return {
//                                 text: item.destinationCode,
//                                 value: item.destinationCode,
//                             }
//                         })
//                         let uniqueList4 = Array.from(new Set(destinationList.map(c => JSON.stringify(c))), JSON.parse);

//                         setBranchMasters(uniqueList4);

//                     })


//                     .catch(error => console.log(error));
//             }


//             )
//             .catch(error => console.log(error));


//     }, []);

//     const onFinish = (values) => {
//         var isBetween = require('dayjs/plugin/isBetween')
//         dayjs.extend(isBetween);
//         let fromDate = dayjs(values.fromDate,dateFormat);
//         console.log("From Date", fromDate);
//         let toDate = dayjs(values.toDate,dateFormat);
//         console.log("To Date", toDate);
//         const filteredData = data.filter((d => dayjs(d.lrDate,dateFormat).isBetween(fromDate, toDate, 'day','[]')))
//         console.log("Filtered Data",filteredData);
//         setData(filteredData);
//       }


//     const columns = [
//         {
//             title: 'LR No',
//             dataIndex: 'lrNumber',
//             key: 'lrNumber',
//             defaultSortOrder: 'ascend',
//             sorter: (a, b) => a.lrNumber - b.lrNumber,
//             filters: waybillMasters,
//             onFilter: (value, record) => record.lrNumber == value,
//             filterSearch: true,

//         },
//         {
//             title: 'Booking Type',
//             dataIndex: 'bookingType',
//             key: 'bookingType',
//             filters: bookingTypeMasters,
//             onFilter: (value, record) => record.bookingType == value,
//             filterSearch: true,
//         },
//         {
//             title: 'Booking Date',
//             dataIndex: 'lrDate',
//             key: 'lrDate',
//             width: '15%',
//         },
//         {
//             title: 'Destination',
//             dataIndex: 'destinationCode',
//             key: 'destinationCode',
//             filters: branchMasters,
//             onFilter: (value, record) => record.destinationCode == value,
//             filterSearch: true,
//         },
//         {
//             title: 'Consignor Name',
//             dataIndex: 'consignorName',
//             key: 'consignorName',
//             filters: consignorMasters,
//             onFilter: (value, record) => record.consignorName == value,
//             filterSearch: true,
//         },
//         {
//             title: 'Consignee Name',
//             dataIndex: 'consigneeName',
//             key: 'consigneeName',
//             filters: consigneeMasters,
//             onFilter: (value, record) => record.consigneeName == value,
//             filterSearch: true,
//         },
//         {
//             title: 'Status',
//             dataIndex: 'status',
//             key: 'status',
//             filters: statusFilter,
//             onFilter: (value, record) => record.status == value,
//             filterSearch: true,

//         },
//         {
//             title: 'Action',
//             dataIndex: 'print',
//             width: '15%',
//             render: (_, record) => (
//                 <Space>
//                     <Typography.Link
//                         onClick={() => { handlePrint(record.id) }}>
//                         Print
//                     </Typography.Link >
//                     <Typography.Link
//                         onClick={() => { viewWayBill(record.id) }}>
//                         View
//                     </Typography.Link >
//                 </Space>
//             ),

//         }

//     ];

   
//     return (

//         <>
//             <Row>
//                 <Col span={8} offset={8}>
//                     <h1 className="content-title">Bookings List</h1>
//                 </Col>
//             </Row>
//             <Form form={form} name="bookings_list" labelAlign="right" autoComplete="off" onFinish={onFinish}>
//                 <Row style={{ marginTop: '3%' }}>

//                     <Col span={9} offset={4}>
//                         <Form.Item name="fromDate" label="From Date" labelAlign='left' rules={[{ required: 'true' }]} >
//                             <DatePicker format={dateFormat} />

//                         </Form.Item>
//                     </Col>
//                     <Col span={8}>
//                         <Form.Item name="toDate" label="To Date" labelAlign='left' rules={[{ required: 'true' }]} >
//                             <DatePicker format={dateFormat} />

//                         </Form.Item>
//                     </Col>

//                 </Row>

//                 <Row style={{ marginTop: '3%' }}>

//                     <Col span={8}></Col>
//                     <Col span={4}>
//                         <Form.Item>
//                             <Button type="primary" htmlType="submit" style={{ width: "10em", height: "3.5em", backgroundColor: '#3385ff', textAlign: 'center', fontSize: '1em' }}>
//                                 Apply filters
//                             </Button>
//                         </Form.Item>
//                     </Col>

//                     <Col span={4}>
//                         <Form.Item>
//                             <Button type="dashed" onClick={() => {setData(originalData); form.resetFields()}} style={{ width: "10em", height: "3.5em", backgroundColor: '#a4d233', textAlign: 'center', fontSize: '1em' }}>
//                                 Reset
//                             </Button>

//                         </Form.Item>
//                     </Col>

//                 </Row>


//                 <br />
//                 <Row>
//                     <Col span={18} offset={4}>
                        
//                         <Table
//                             dataSource={data ? data : [] }
//                             columns={columns}
//                             loading={branchMasters ? false : true}
//                         />

//                     </Col>
//                 </Row>
             
//             </Form>
//         </>
//     );
// }
import React from 'react';
import { Form, Input, Button } from 'antd';
import './index.css';


const MyFormComponent = () => {
  const [form] = Form.useForm(); // Using the useForm hook to create a form instance

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      {/* Input field for name */}
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please enter your name' }]}
      >
        <Input />
      </Form.Item>

      {/* Input field for email */}
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email' },
        ]}
      >
        <Input />
      </Form.Item>

      {/* Submit button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyFormComponent;

