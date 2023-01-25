import React from 'react';
import { Container, Content, Icon } from './style';




export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Location/>
          Tashkent
          </Content.Item>
        <Content.Item>
          <Icon.Tel/>
          +9989000303000
          </Content.Item>
        <Content.Item>
          <Icon.Email/>
          xujamovlochinbek
          </Content.Item>
        <Content.Item>
        <Icon.Facebook/>
        <Icon.Twitter/>
        <Icon.Instagram/>
        <Icon.Linkedin/>
        </Content.Item>
      </Content>
      
      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>Los Angeles</Content.Item>
        <Content.Item>Korea</Content.Item>
        <Content.Item>UEA</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>FrontEnd</Content.Item>
        <Content.Item>BackEnd</Content.Item>
        <Content.Item>Flutter</Content.Item>
        <Content.Item>Android</Content.Item>
        <Content.Item>Mobile</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>t.me/xujamov_l</Content.Item>
        <Content.Item>instagram.com/xujamov_l</Content.Item>
        <Content.Item>facebook.com/lochinbekkhujamov</Content.Item>
        <Content.Item>github.com/uzbfalcon</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;