import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import FooterCom from './components/Footer';
import Products from './components/Products';
import {Layout} from 'antd';
import Login from './components/login';
import { useState } from 'react';

const {Header, Content, Footer} = Layout;

function App() {
  const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)


  return (
    <div className="App">
      <Layout>
        <Header>
          <Navbar setToken={setToken} />
        </Header>
        <Content>
          {token? <Products /> : <Login token={token} setToken={setToken}/>}
        </Content>
       
        <Footer>
          <FooterCom />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
