
import React, { Component } from 'react'

import {Breadcrumb } from 'antd';
import { Layout, Menu, Icon } from 'antd';

class Bread extends Component {
    constructor (props) {
        super(props)
    }
    
    render () {
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        )
    }

}

export default Bread