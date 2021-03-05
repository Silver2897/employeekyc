import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Stepsperformed from './steps';
import { 
Form,
Input,
Button,
Radio,
Select,
Cascader,
DatePicker,
InputNumber,
TreeSelect,
Switch,
} from 'antd';

const FormSizeDemo = () => {
const [componentSize, setComponentSize] = useState('default');

function onChange(e) {
  console.log(`radio checked:${e.target.value}`);
}


const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};

return (
  <>
  {/* <Stepsperformed></Stepsperformed> */}
  <br />
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      <Form.Item label="Name">
        <Input placeholder="First Name"/>
        <Input placeholder="Middle Name"/>
        <Input placeholder="Last Name"/>
      </Form.Item>
      <Form.Item label="Employee Code">
        <Input placeholder="Employee Code"/>
      </Form.Item>
      <Form.Item label="Attendance Code">
        <Input placeholder="Attendance Code"/>
      </Form.Item>
      <Form.Item label="Father Name">
        <Input placeholder="Father Name"/>
      </Form.Item>
      <Form.Item label="Spouse Name">
        <Input placeholder="Spouse Name"/>
      </Form.Item>
      <Form.Item label="Personal Email">
        <Input placeholder="abc@xyz.com"/>
      </Form.Item>
      <Form.Item label="Official Email">
        <Input placeholder="abc@xyz.com"/>
      </Form.Item>
      <Form.Item label="Aadhar Number">
        <Input placeholder="1111 2222 3333 4444"/>
      </Form.Item>
      <Form.Item label="Aadhar Number">
        <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">Male</Radio.Button>
          <Radio.Button value="b">Female</Radio.Button>
          <Radio.Button value="c">Transgender</Radio.Button>
          <Radio.Button value="d">Undecided</Radio.Button>
        </Radio.Group>
      </Form.Item>  
    </Form>
  </>
);
};

export default FormSizeDemo;