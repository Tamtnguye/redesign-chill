
import React from 'react';
import { Button } from '../../GlobalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import Img1 from '../../assets/samsung-s20.png'
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  PricingImg
} from '../../components/Pricing/Pricing.element';

export function Phone() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Phone</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <PricingImg  src={Img1}/>
                </PricingCardIcon>
                <PricingCardPlan>Iphone</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  
                  <PricingCardFeature> <Button primary>Choose Plan</Button></PricingCardFeature>
                </PricingCardFeatures>
               
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Phone;
