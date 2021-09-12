import './App.css';

import { Layout } from "antd"

import CustomHeader from "./components/header"

function App() {

  const { Header, Content } = Layout

  return (
    <>
      <Layout>
        <Header><CustomHeader/></Header>
        <Content>Content</Content>
      </Layout>
    </>
  )
}

export default App;
