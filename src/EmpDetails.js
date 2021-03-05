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
Checkbox,
Divider,
Col,Row,
} from 'antd';
const { Option } = Select;
const EmpDetails = () => {
const [componentSize, setComponentSize] = useState('default');
var disabled = true;
function onChange() {
    alert(disabled);
 var disabled = disabled  ? 'false' : 'true';;
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

const onFormLayoutChange = ({ size }) => {
  setComponentSize(size);
};

return (
  <>
  {/* <Stepsperformed></Stepsperformed> */}
  <br />
  <br />
  <div>
  Employee Status:
  <Select placeholder="Select" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    </div>
    <Row>
      <Col span={12}>Col</Col>
      <Col span={12}>Col</Col>
    </Row>
    <Col>
      <Row span={12}>Row</Row>
      <Row span={12}>Row</Row>
    </Col>
  </>
);
};

export default EmpDetails;