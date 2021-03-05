import React, { useState } from 'react';
import FormSizeDemo from './PR';
import Steptwocontent from './PRComponent';
import StepPF from './PF';
import EmpDetails from './EmpDetails';
import { Steps, Button, message } from 'antd';
import './App.css'
const Step = Steps.Step;

const steps = [{
  title: 'Personal Details',
  content: 
  <FormSizeDemo></FormSizeDemo>,
}, {
  title: 'Information',
  content:  <Steptwocontent></Steptwocontent>,
},{
    title: 'PF',
    content: <StepPF></StepPF>,
  }, {
  title: 'Employee Status',
  content: <EmpDetails></EmpDetails>,
}];

class Stepsperformed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action right">
        {
            this.state.current > 0
            &&
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          
           {
            this.state.current < steps.length - 1
            &&
            <Button type="primary" onClick={() => this.next()}>Next</Button>
          }
        </div>
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);

export default Stepsperformed;