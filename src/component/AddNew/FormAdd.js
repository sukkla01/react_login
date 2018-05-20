import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/th';


import 'antd/dist/antd.css'

const FormItem = Form.Item;
const Option = Select.Option;
moment.locale('th');

function handleChange(value, date, dateString) {
    console.log(`selected ${value}`);
    console.log(date, dateString);
}

class FormAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //startDate: moment()
        };
        // this.handleChange = this.handleChange.bind(this);
    }


    render() {
        return (
            <div style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 15 }}>

                <Row gutter={24}>
                    <Col className="gutter-row" span={4}>
                        <label >คำนำหน้า : </label>
                        <Select defaultValue="1" style={{ width: 100 }} onChange={handleChange}>
                            <Option value="1">นาย</Option>
                            <Option value="2">นาง</Option>
                            <Option value="3">นางสาว</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label >ชื่อ : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '80%', marginRight: '3%', marginLeft: '3%' }}
                            
                        />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label >นามสกุล : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '70%', marginRight: '3%', marginLeft: '3%' }}
                        />
                    </Col>

                </Row>
                <br />
                <Row gutter={24}>
                    <Col className="gutter-row" span={4}>
                        <label style={{ marginRight: 30 }} >เพศ : </label>
                        <Select defaultValue="1" style={{ width: 100 }} onChange={handleChange} >
                            <Option value="1">ชาย</Option>
                            <Option value="2">หญิง</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label >เลขบัตร ปชช. : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '64%', marginRight: '3%', marginLeft: '3%' }}
                        />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label style={{ marginRight: 25 }} >วันเกิด : </label>
                        <DatePicker onChange={handleChange} placeholder="เลือกวันที่"
                            defaultValue={moment('2015-01-01', 'YYYY-mm-dd')}


                        />


                    </Col>


                </Row>
                <br />
                <Row gutter={24}>
                    <Col className="gutter-row" span={4}>
                        <label style={{ marginRight: 10 }} >เชื่อชาติ : </label>
                        <Select defaultValue="1" style={{ width: 100 }} onChange={handleChange} >
                            <Option value="1">1.ไทย</Option>
                            <Option value="2">2.ลาว</Option>
                            <Option value="3">3.พม่า</Option>
                            <Option value="4">4.อื่นๆ</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label style={{ marginRight: 22 }} >สัญชาติ : </label>
                        <Select defaultValue="1" style={{ width: 100 }} onChange={handleChange} >
                            <Option value="1">ไทย</Option>
                            <Option value="2">ลาว</Option>
                            <Option value="3">พม่า</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={8}>
                        <label >เบอร์โทร : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '70%', marginRight: '3%', marginLeft: '3%' }}
                        />
                    </Col>


                </Row>
                <br />
                <Row gutter={24}>
                    <Col className="gutter-row" span={4}>
                        <label >บ้านเลขที่ : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '55%', marginRight: '3%', marginLeft: '3%' }}
                        />

                    </Col>
                    <Col className="gutter-row" span={4}>
                        <label >หมู่ : </label>
                        <Input
                            type="text"
                            //size={size}
                            value=""
                            onChange={this.handleNumberChange}
                            style={{ width: '55%', marginRight: '3%', marginLeft: '3%' }}
                        />

                    </Col>


                </Row>
                <br />
                <Row gutter={24}>
                    <Col className="gutter-row" span={6}>
                        <label style={{ marginRight: 11 }} >จังหวัด : </label>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="เลือกจังหวัด"
                            optionFilterProp="children"
                            onChange={handleChange}
                            //onFocus={handleFocus}
                            //onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="01">Jack</Option>
                            <Option value="02">Lucy</Option>
                            <Option value="03">Tom</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={6}>
                        <label style={{ marginRight: 11 }} >อำเภอ : </label>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="เลือกอำเภอ"
                            optionFilterProp="children"
                            onChange={handleChange}
                            //onFocus={handleFocus}
                            //onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="01">Jack</Option>
                            <Option value="02">Lucy</Option>
                            <Option value="03">Tom</Option>
                        </Select>

                    </Col>
                    <Col className="gutter-row" span={6}>
                        <label style={{ marginRight: 11 }} >ตำบล : </label>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="เลือกตำบล"
                            optionFilterProp="children"
                            onChange={handleChange}
                            //onFocus={handleFocus}
                            //onBlur={handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="01">Jack</Option>
                            <Option value="02">Lucy</Option>
                            <Option value="03">Tom</Option>
                        </Select>

                    </Col>



                </Row>

            </div>
        )
    }
}
export default FormAdd;