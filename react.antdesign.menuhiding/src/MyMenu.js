import React,{Component} from 'react'
import {Menu,Icon} from 'antd'

class MyMenu extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return (
            <Menu mode="horizontal">
                {
                    this.props.menuItems.map((menuItem,index)=>{
                        const isDisable = menuItem==="android"?true:false
                        console.log(menuItem,isDisable)
                        return (
                            <Menu.Item key={menuItem} disabled={isDisable}>
                                <Icon type={menuItem} />
                                {index}-{menuItem}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
            )
    }
}

export default MyMenu