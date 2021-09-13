import './App.css'
import { Layout } from "antd"
import CustomHeader from "./components/header"
import Routes from "./routes"

function App() {

  const { Header, Content } = Layout

  return (
    <>
      <Layout>
        <Header>
          <CustomHeader/>
        </Header>
        <Content>
          <Routes/>
        </Content>
      </Layout>
    </>
  )
}

export default App;
