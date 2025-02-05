import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useLocation, useNavigate } from "react-router";
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

export function Slider(props){
  let navigation = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState('home');

  useEffect(()=>{
    setSelected(location.pathname?.split("/")[1]);
    return()=>{};
  },[location]);

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="h-16 px-2 py-4">
        <div className='bg-gray-600 h-full w-full rounded-md'/>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={selected}
        selectedKeys={selected}
        items={[
          {
            key: 'home',
            icon: <HomeOutlined/>,
            label: 'HOME',
            onClick : ()=> navigation("/home")
          },
          {
            key: 'catalog',
            icon: <UnorderedListOutlined />,
            label: 'CATALOG',
            onClick : ()=> navigation("/catalog")
          }
        ]}
      />
    </Sider>
  );
}