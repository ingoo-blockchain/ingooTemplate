import Link from 'next/link'
import { Layout, Menu } from 'antd'
const { Header, Footer, Sider, Content } = Layout;
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const items = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
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
  ]

const DefaultLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" items={items}></Menu>
                
            </Header>
            <Content>
                {children}
            </Content>
            <Footer>
                asdfasdf
            </Footer>
        </Layout>
    )
}

export default DefaultLayout