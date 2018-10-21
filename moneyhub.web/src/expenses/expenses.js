import axios from 'axios';
import React, {Component} from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';

class Expenses extends Component {
    constructor (props){
        super(props);
        this.state = {
            expenses : [],
        }
    }


    async getExpenses(){
        let res = await axios.get(`/api/Expenses`);
        const expenses = res.data


        const columns = [{
            title: 'Id',
            dataIndex: 'ExpenseId',
            key: 'ExpenseId',
            sorter: true,
            defaultSortOrder: 'descend', 
          }, {
            title: 'ExpenseDate',
            dataIndex: 'ExpenseDate',
            key: 'ExpenseDate',
          }, {
            title: 'CategoryId',
            dataIndex: 'CategoryId',
            key: 'CategoryId',
          }];

        this.setState({
            expenses,
            columns,
        })

    }

    componentDidMount(){
        this.getExpenses();
    }

    // renderExpenseList(){
    //     console.log(this.state.expenses);
    //     return this.state.expenses.map((item)=>{
    //         // console.log(item);
    //         return <li key={item.ExpenseId}>{item.ExpenseId}</li>
        
    //     })
    // }


      
    //   [{"ExpenseId":10090,"ExpenseDate":"2018-01-11T00:00:00","CategoryId":1230,"CategoryCode":"Miscellaneous-ZhengJian","FinId":30,"FinCode":"~9855-Camel-CapitalOne-Credit-CAD","Merchant":"Costco","Item":"Photograph","Event":"Canada Citizenship","Comments":null,"Price":13.98,"Discount":0.00,"Tax":2.09,"Adjusting":0.00,"Amount":16.07,"EffectiveType":"Once","EffectiveBeginDate":null,"EffectiveEndDate":null,"RecurringId":null,"IsConfirmed":1}

    render() {
        return (
            <div>
                here is expenses:
                <Table dataSource={this.state.expenses} columns={this.state.columns} />
            </div>
        )
    }


}

export default Expenses;
