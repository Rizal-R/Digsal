import React, { useState, useEffect } from 'react';
import { gql} from '@apollo/client';
import Moment from 'moment';
import 'moment/locale/id'
import { Space, 
         Pagination, 
         Row, 
         Col,
         Divider,
         Input,
         Button 
} from 'antd';
import { 
         CarryOutTwoTone, 
         GlobalOutlined,
         AudioOutlined,
         InstagramOutlined 
} from '@ant-design/icons';
import {
  ApolloClient, 
  ApolloProvider,
  HttpLink,
  InMemoryCache 
} from '@apollo/client';

const clientBE = new ApolloClient({
  uri: 'https://trialdigsal-be.dwp.io/graphql',
  headers: {
    Authorization: `Bearer 3213f8411ab4a1ff1c997a331decc71b`
  },
  cache: new InMemoryCache()
});

const MY_QUERY_BE =  gql`
  query(
    $page: Int,
    $dataPerPage: Int,
    $status: String,
    $search: String,
    $startDate: String,
    $endDate: String,
    $counterType: String,

  ) {
    getCustomer(
      page: $page,
      dataPerPage: $dataPerPage,
      status: $status,
      search: $search,
      startDate: $startDate,
      endDate: $endDate
    ) {
      totalCount
      customers {
        id
        customerName
        email
        phone
        npwp
        address
        city{
          name
        }
        status
        registerVia
        billingName
        paymentDate
        createCustomerDate
      }
    }
    getRegistrationCounter(counterType: $counterType) {
      status
      total
    }
  }
`;


  function GetData(){
  const [resultQuery, setResultQuery] = useState([]);
  const [resultRegsiterAll, setTotalRegisterAll] = useState([]);
  const [resultRegister, setTotalRegister] = useState([]);
  const [TotalCustomer, setTotalCustomer] = useState();
  const [loading, setLoading] = useState(false);
  const [infoQuery, setInfoQuery] = useState({
    page: 1,
    dataPerPage: 10,
    status: "All",
    search:"", 
    startDate: "",
    endDate: "",
    counterType: "Customer"
  });

  useEffect(() => {
    setLoading(true);

    const testQuery = async () => {
      try {
        const { data } = await clientBE.query({
          query: MY_QUERY_BE,
          variables: infoQuery
        });
       // console.log(data.getRegistrationCounter);
        setTotalRegisterAll(data.getRegistrationCounter);
        setResultQuery(data.getCustomer.customers);
        setTotalCustomer(data.getCustomer.totalCount);
        setTotalRegister(data.getCustomer.registerVia);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };

    testQuery();
  }, [clientBE, infoQuery]);

  const paging = (page, pagesize)=>{
    console.log(page);
    let infoQueryNew = {
      ...infoQuery,
      page: page
    };
    setInfoQuery(infoQueryNew);
  }
  const onSearch = (value)=>{ 
    console.log(value);
    let infoQuerySearch = {
      ...infoQuery,
      search: value
    };
    setInfoQuery(infoQuerySearch);
  }
  const ALL = () =>{ 
    let infoQueryAll = {
      ...infoQuery,
      status: 'ALL'
    };
    setInfoQuery(infoQueryAll);
  }

    const OnProgress = () =>{ 
    let infoQueryOnPogrees = {
      ...infoQuery,
      status: 'On Progress'
    };
    setInfoQuery(infoQueryOnPogrees);
  }
  
  const closeDeal = () =>{ 
      console.log('AKTIF')
    let infoQueryCloseDeal = {
      ...infoQuery,
      status: 'Close Deal'
    };
    setInfoQuery(infoQueryCloseDeal);
  }


  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const X = (date) => { 
      return Moment(date).format('LL');
  }
  
// const onSearch = value => console.log(value);

    return (
        <>
<div className="right">
    <Space direction="Horizontal">
    <div style={{background:'rgb(80 98 202)'}} className="cardDasbord">
     <Button type="text" onClick={ALL}>
    {typeof resultRegsiterAll[0] !== "undefined" && resultRegsiterAll[0].status}
     </Button>
        <br/>
        <div className="cardContent">
		{typeof resultRegsiterAll[0] !== "undefined" && resultRegsiterAll[0].total}
       
        <GlobalOutlined style={{fontSize:25, color:'#fff', float:'right'}} />
        </div>
        </div>
        <div style={{background:'#8BC34A'}} className="cardDasbord">
           <Button type="text" onClick={OnProgress}>
        {typeof resultRegsiterAll[1] !== "undefined" && resultRegsiterAll[1].status}
           </Button>
        <br/>
        <div className="cardContent">
        	{typeof resultRegsiterAll[1] !== "undefined" && resultRegsiterAll[1].total}
        <GlobalOutlined style={{fontSize:25, color:'#fff', float:'right'}} />
        </div>
        </div>
        <div style={{background:'#FF9800'}} className="cardDasbord">
           <Button type="text" onClick={closeDeal}>
        {typeof resultRegsiterAll[2] !== "undefined" && resultRegsiterAll[2].status}
         </Button>
        <br/>
        <div className="cardContent">
        	{typeof resultRegsiterAll[2] !== "undefined" && resultRegsiterAll[2].total}
        <GlobalOutlined style={{fontSize:25, color:'#fff', float:'right'}} />
        </div>
        </div>

    </Space>
    </div>
            
    

        <div className="right">
        <Search placeholder="Search" onSearch={onSearch} style={{ width: 200, paddingTop:30 }}  />
        </div>       
         {resultQuery.map((tes, index)=>(
        <div className="panelList">
        <Row justify="start">
        <Col span={2}><CarryOutTwoTone style={{fontSize:30, paddingTop:15}}/></Col>
        <Col span={4}><div key={index}><br/>{tes.customerName}</div></Col>
        <Col span={5}><div className="centerContent"><b>{X(tes.createCustomerDate)}</b><br/>Register Date</div></Col>
        <Col span={5}><div className="centerContent"><b>{X(tes.paymentDate)}</b><br/>{tes.status}</div></Col>
        <Col span={4}><div className="centerContent"><b>20 Days</b><br/>Total Days</div></Col>
        <Col span={1}><div className="centerContent"><Divider style={{background: 'rgb(224 224 224)', height: 40}} type="vertical" /></div></Col> 
        <Col span={2}><div className="centerContent"> 
        {/* {tes.registerVia == "WEB"} ? <GlobalOutlined style={{fontSize:25, color:'green'}} /><br/>{tes.registerVia}
        {tes.registerVia == "AP"} : <InstagramOutlined style={{fontSize:25, color:'green'}} /><br/>{tes.registerVia} */}
        {tes.registerVia === "Web"
          ? <GlobalOutlined style={{fontSize:25, color:'blue'}} />
          : <InstagramOutlined style={{fontSize:25, color:'#ff9800'}}/>
        }
        <br/>{tes.registerVia}
        </div></Col>
        </Row>
        </div>
        )
        )}
            <div className="right">
            <Pagination defaultCurrent={1} onChange={paging} current={infoQuery.page} total={TotalCustomer} />
              </div>  
        </>
    )
}
export default GetData;