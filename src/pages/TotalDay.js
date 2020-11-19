import React from 'react'
import { Steps,
		   Col, 
	    Popover, 
	        Row, 
	     Divider 
	 } from 'antd';


function TotalDays() {

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
return(
	<>
<Col span={18} offset={3}>
<Steps direction="horizontal" size="small" current={3}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </Steps>
  </Col>
<br/><br/>
 <Row justify="start" className="rowBorder">
<Col span={3}><b>Proposal</b><br/>Days 1</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
  <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>Survey Task</b><br/>7 Days</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={4} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Other" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
    <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>Subribe Form</b><br/>2 Days</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
      <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>Sales Order</b><br/>1 Day</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
      <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>Installation Task</b><br/>2 Days</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
      <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>BAO Task</b><br/>1 Day</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
    <Step title="In Progress" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Waiting" description="You can hover on the dot." />
    <Step title="Other" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
      <br/>
   <Row justify="start" className="rowBorder">
<Col span={3}><b>Product Activation</b><br/>1 Day</Col>
<Col span={1}><Divider style={{background: 'rgb(224 224 224)', height: 80}} type="vertical" /></Col> 
<Col span={20}>
  <Steps className="stepsPadding" current={1} progressDot={customDot}>
    <Step title="Finished" description="You can hover on the dot." />
  </Steps>
  </Col>
  </Row>
</>

)

}
export default TotalDays;