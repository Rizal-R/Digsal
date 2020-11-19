import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'antd';
import { PureComponent } from 'react';
import { gql} from '@apollo/client';
import {
  ApolloClient, 
  ApolloProvider,
  HttpLink,
  InMemoryCache 
} from '@apollo/client';
import { Space, 
         Pagination, 
         Row, 
         Col,

} from 'antd';

import {Pie, Doughnut} from 'react-chartjs-2';



const clientX = new ApolloClient({
  uri: 'https://trialdigsal-be.dwp.io/graphql',
  headers: {
    Authorization: `Bearer 3213f8411ab4a1ff1c997a331decc71b`
  },
  cache: new InMemoryCache()
});
const MY_QUERY_X =  gql`
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








function Home() {

const state = {
  labels: ['January', 'February'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#457CC4',
        '#C9DE00'
      ],

      data: [65, 35]
    }
  ]
}


  const [resultQuery, setResultQuery] = useState([]);
  const [resultRegsiterAll, setTotalRegisterAll] = useState();
  const [resultRegister, setTotalRegister] = useState([]);
  const [TotalCustomer, setTotalCustomer] = useState();
  const [loading, setLoading] = useState(false);
  const [infoQuery, setInfoQuery] = useState({
    page: 1,
    dataPerPage: 10,
    status: "Close Deal",
    search:"", 
    startDate: "",
    endDate: "",
    counterType: "Customer"
  });

  useEffect(() => {
    setLoading(true);

    const testQuery = async () => {
      try {
        const { data } = await clientX.query({
          query: MY_QUERY_X,
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
  }, [clientX, infoQuery]);
    const closeDeal = () =>{ 
      console.log('AKTIF')
    let infoQueryCloseDeal = {
      ...infoQuery,
      status: 'Close Deal'
    };
    setInfoQuery(infoQueryCloseDeal);
 }


   const clseDeal = () =>{ 
   	console.log('AKTIF')
    let infoQueryCloseDeal = {
      ...infoQuery,
      status: 'Close Deal'
    };
    setInfoQuery(infoQueryCloseDeal);
  }


    return(
        <div>
        
    	<Button  type="primary" onClick={clseDeal}>Save</Button>
    	<Col span={12}>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:10
            },
            legend:{
              display:true,
              position:'bottom'
            }
          }}
        />
        </Col>

		
        </div>
    )
}


export default Home;