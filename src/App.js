import React from 'react';
import { Layout } from 'antd';

import NavHeader from './layout/NavHeader';
import CenterContent from './layout/center';

const { Footer } = Layout;

class App extends React.Component {
  render() {
    return (
        <Layout className="app_height">
          <NavHeader/>
          <CenterContent/>
          <Footer style={{ padding: '0px' }}>&nbsp;</Footer>
        </Layout>
    );
  }
}

export default App;
