import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// import Styles
import styled from "styled-components";
import { About, Description, Image } from "../style";
const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt=".." />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 1rem 0rem 3rem 0rem;
  }
`;
const Cards= styled.div`
display:flex;
flex-wrap:wrap;
`

const Card=styled.div`
flex-basis: 12rem;
margin-left:1rem;
.icon{
  display: flex;
  align-items:center;
  h3{
    color: black;
    background:white;
    padding:0.5rem;
    margin-left:1rem;
  }
}
`
export default ServicesSection;
