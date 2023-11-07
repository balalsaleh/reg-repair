import React, { useState } from 'react';
import { AppstoreOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Button } from 'antd';
import '../index.css';

const items = [
  {
    label: 'Search',
    key: 'search',
    icon: <SearchOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const HomePage = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div>
      {/* Inner Header with Logo */}
      <div className="inner-header">
        <img src="/your-logo.png" alt="Logo" />
      </div>

      {/* Navigation Bar */}
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      {/* Centered Banner with <h1> and <p> */}
      <div className="banner">
        <div className="banner-content">
          <h1>Enter your Reg to find your Auto Repair</h1>
          <p>Some additional text goes here.</p>
          <input type="text" className="regInput" placeholder="ENTER REG" />
        </div>
      </div>

      {/* Button Container with Ant Design Button */}
      <div className="searchButton-container">
        <Button type="primary" icon={<SearchOutlined />}>Search</Button>
      </div>
    </div>
  );
};

export default HomePage;
