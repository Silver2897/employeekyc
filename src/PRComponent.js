import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import Stepsperformed from './steps';
import { 
Form,
DatePicker,
} from 'antd';

const Steptwocontent = () => {
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
        span: 10,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
      
      <Form.Item label="Birth date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Joining date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Last Reappointment Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Probabtion Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Trainee Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Confirmation Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Scheduled Exit Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Last Exit Date">
            <DatePicker />
      </Form.Item>
      <Form.Item label="Exit Date">
            <DatePicker />
      </Form.Item>
    </Form>
  </>
);
};

export default Steptwocontent;