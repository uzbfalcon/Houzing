import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button } from "../Generic";
import Recent from "../Recent";
import nouser from "../../assets/img/nouser.gif";
import { Yandex } from "../Generic/Yandex";
import {
  Container,
  Content,
  Description,
  Details,
  Icons,
  Section,
  User,
  Wrapper,
} from "./style";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
        window.scrollTo(0, 0);
      });
  }, [params?.id]);

  return (
    <React.Fragment>
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large>{data?.name}</Content.Title>
              <div className="info">
                {data?.city},{data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Search /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>Bed {data?.houseDetails?.beds || 0}</Details.Title>
              <Icons.Bath />
              <Details.Title>
                Bath {data?.houseDetails?.bath || 0}
              </Details.Title>
              <Icons.Garage />
              <Details.Title>
                Garage {data?.houseDetails?.garage || 0}{" "}
              </Details.Title>
              <Icons.Ruler />
              <Details.Title>
                Area {data?.houseDetails?.area || 0}kv
              </Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title>${data?.price || 0}/mo</Details.Title>
                </del>
                <h2 className="title"> ${data?.salePrice || 0}/mo</h2>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                {data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Feature</Content.Title>
          <Section>
            <Container gap={25}>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Air Conditioning {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Garage />
                <Details.Title>
                  Barbeque {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  Dryer {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  Gym {data?.houseDetails?.beds || 0}
                </Details.Title>
              </Content>
            </Container>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
            <Section>
              <Container gap={25}>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Air Conditioning {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Garage />
                  <Details.Title>
                    Barbeque {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Bed />
                  <Details.Title>
                    Dryer {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
                <Content flex>
                  <Icons.Ruler />
                  <Details.Title>
                    Gym {data?.houseDetails?.beds || 0}
                  </Details.Title>
                </Content>
              </Container>
            </Section>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Lochinbek Khujamov</div>
              <div className="info">+998904681203</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      <Yandex /> 
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;