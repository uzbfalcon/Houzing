
import styled from 'styled-components';
import { ReactComponent as location } from '../../assets/icons/location.svg';
import { ReactComponent as tel } from '../../assets/icons/tel.svg';
import { ReactComponent as email } from '../../assets/icons/email.svg';
import { ReactComponent as facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as linkedin } from '../../assets/icons/linkedin.svg';

const Container = styled.div`
  max-height: 100%;
  height: 100%;
  background: var(--colorPrimary);
  display: flex;
  position: relative;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  margin-top: 96px;
  padding: 48px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: fit-content;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

Content.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;

Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;

Icon.Location = styled(location)`
  margin-right: 18px;
  height: 19px;
  width: 19px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Tel = styled(tel)`
  margin-right: 18px;
  width: 19px;
  height: 19px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Email = styled(email)`
  margin-right: 18px;
  width: 19px;
  height: 19px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Facebook = styled(facebook)`
  margin-right: 18px;
  margin-top: 20px;
  width: 24px;
  height: 24px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Twitter = styled(twitter)`
  margin-right: 18px;
  margin-top: 20px;
  width: 24px;
  height: 24px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Instagram = styled(instagram)`
  margin-right: 18px;
  margin-top: 20px;
  width: 24px;
  height: 24px;

  & path {
    fill: #ffffff;
  }
`;

Icon.Linkedin = styled(linkedin)`
  margin-right: 18px;
  margin-top: 20px;
  width: 24px;
  height: 24px;

  & path {
    fill: #ffffff;
  }
`;

export { Container, Content, Icon };
