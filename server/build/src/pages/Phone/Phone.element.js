import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilterSection = styled.div`
padding-left: 10px;
 padding-right: 10px;
 padding-top: 20px;
margin-top: 108px;
 margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background: #101522; */
  background: grey;
`;

export const FilterWrapper = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 10px;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FilterSource = styled.div`
display: block;
position: relative;

padding-top: 20px;
padding-bottom: 20px;
border-bottom: 3px solid grey;
cursor: pointer;
font-size: 22px;
padding-left: 20px;
`

export const FilterOffer = styled.div`
display: block;
padding-top: 20px;
padding-bottom: 20px;
position: relative;

border-bottom: 3px solid grey;
cursor: pointer;
font-size: 22px;
padding-left: 20px;
`

export const FilterDevice = styled.div`
display: block;
padding-top: 20px;
padding-bottom: 20px;
position: relative;
cursor: pointer;
font-size: 22px;
padding-left: 20px;
`

export const PricingSection = styled.div`
  padding: 100px 0 50px;
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #101522;
  
`;

export const PricingImg = styled.img`
width: 100%;
height: 100%;
display: flex;
align-items: center;

`;

export const PricingWrapper = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;    
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`
  background: #1694cf;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  margin: 30px;
  
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #101522;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;