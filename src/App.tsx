import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

const FullHeightLayout = styled(Layout)`
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <FullHeightLayout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </FullHeightLayout>
  );
};

export default App;
