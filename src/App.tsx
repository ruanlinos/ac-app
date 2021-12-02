import React from 'react';
import { Button } from './components/Button';
import { Typography } from './components/Typography';
import { FaHome, FaHeart } from "react-icons/fa";
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 100vh;
`;

export const ContainerLeftNavbar = styled.div`
  width: 230px;
  background-color: #307AB2;
  height: 100vh;
  padding: 15px;
`;
export const ContainerHeaderBar = styled.div`
  max-height: 64px;
  display: flex;
  padding: 12px;
  justify-content: flex-end;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-right: 9px;
`;

export const UserInformationContainer = styled.div`
  padding: 0px 5px;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Page = styled.div`
  overflow-y: scroll;
  max-height: 90vh;
`;

function App() {
  const [actualRoute, setActualRoute] = React.useState('home');
  console.log("🚀 ~ file: App.tsx ~ line 44 ~ App ~ actualRoute", actualRoute)
  return (
    <Container>
      <ContainerLeftNavbar>
        <Button
          Icon={() => <FaHome height={14} width={14} color="white" />}
          type="navButton"
          title="Home"
          onClick={() => setActualRoute('home')}
        />
        <Button
          Icon={() => <FaHome height={14} width={14} color="white" />}
          type="navButton"
          title="Another Page"
          onClick={() => setActualRoute('other')}
        />
      </ContainerLeftNavbar>
      <Content>
        <ContainerHeaderBar>
          <Button
            Icon={() => <FaHeart height={25} width={25} />}
            marginRight={1}
          />
          <Button
            Icon={() => <FaHeart height={25} width={25} />}
            marginRight={1}
          />
          <Button
            Icon={() => <FaHeart height={25} width={25} />}
          />

          <UserInformationContainer>
            <Avatar src="https://thispersondoesnotexist.com/image" />
            <Typography type="body">
              Jhon Doe Silva
            </Typography>
          </UserInformationContainer>
        </ContainerHeaderBar>

        <Page>
          {actualRoute === 'home' ? <img style={{maxWidth: "80vw"}} src={"https://i.ibb.co/pZYw9BL/Group-1086464.png"} /> : <div>Other</div>}
        </Page>
      </Content>
    </Container>
  );
}

export default App;
