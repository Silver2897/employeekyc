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
Row, Col,
} from 'antd';

const StepPF = () => {
const [componentSize, setComponentSize] = useState('default');
var disabled = true;
function onChange() {
    alert(disabled);
 var disabled = disabled  ? 'false' : 'true';;
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

<Divider>Providend Fund Information</Divider>
<Row>
      <Col span={4}><Checkbox onChange={onChange}>PF Applicable ?</Checkbox></Col>
      <Col span={4}>EPF Joining Date:&nbsp;<DatePicker /></Col>
      <Col span={4}>Joining Date:&nbsp;<DatePicker /></Col>
      <Col span={6}>Last Reappointment Date:&nbsp;<DatePicker disabled/></Col>
    </Row>
<br />
</div>
<br />
<br />
<div >
<Divider>Pension Information</Divider>
<Row>
      <Col span={4}><Checkbox onChange={onChange}>Pension available ?</Checkbox></Col>
      <Col span={6}>&nbsp;PF No.&nbsp;<Input /></Col>
      <Col span={6}>&nbsp;PF UAN&nbsp;<Input /></Col>
      <Col span={6}>&nbsp;Prev Member ID&nbsp;<Input /></Col>
    </Row>
</div>
<br />
<br />
<div>
<Divider>ESIC Information</Divider>
<Row>
      <Col span={4}><Checkbox onChange={onChange}>ESIC Applicable ?</Checkbox></Col>
      <Col span={8}>&nbsp;ESIC No.&nbsp;<Input /></Col>
    </Row>
<br />

</div>
<br />
<br />
<div>
<Divider>Other Information</Divider>
<Checkbox onChange={onChange}>PT Applicable </Checkbox><br />
<Checkbox onChange={onChange}>LWF Applicable</Checkbox><br />
PAN No.<Input /><br />
EPS No.<Input />
</div>
      
  </>
);
};

export default StepPF;