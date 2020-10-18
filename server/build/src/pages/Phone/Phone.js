
import React from 'react';
import { Button } from '../../GlobalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import Img1 from '../../assets/samsung-s20.png'
import {InputGroup, FormControl} from 'react-bootstrap';
import { IconContext } from 'react-icons/lib';
import {
    FilterDevice,
    FilterOffer,
    FilterSection,
    FilterSource,
    FilterWrapper,
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
    PricingImg} from './Phone.element';


export function Phone() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      
      
      
      
      <PricingSection>
      <FilterSection>
          <FilterWrapper>
              <h3>Filter by</h3>
              <FilterSource>
              <InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Samsung">Samsung</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup><InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Apple</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup> <InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Apple</InputGroup.Text>
    </InputGroup.Prepend>
    
  </InputGroup>
              </FilterSource>
              <FilterOffer>
              <InputGroup  className="mb-3">
              <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Newest</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup>
              </FilterOffer>
              <FilterDevice>
              <InputGroup  className="mb-3">
              <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Iphone 12</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup><InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Iphone 11</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup><InputGroup  className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text id="Apple">Samsung s10</InputGroup.Text>
    </InputGroup.Prepend>
    </InputGroup>
              </FilterDevice>
          </FilterWrapper>
      </FilterSection>
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
