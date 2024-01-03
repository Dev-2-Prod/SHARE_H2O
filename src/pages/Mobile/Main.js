import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Img } from "components";
import "./index.css";
import Frame from "../../components/FrameMobile";
import PortalPopup from "../../components/PortalPopupMobile";
import styled from "styled-components";
import CarouselScroll from "components/company_animation/App";
import { Text } from "components";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 68.7px;
  height: 57px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PajamashamburgerIcon = styled.img`
  position: absolute;
  top: 16px;
  left: 90vw;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 57px;
`;
const Shareh2oIsAn = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 16.78px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 317px;
  height: 68px;
`;
const Body = styled.div`
  position: absolute;
  top: 51px;
  left: 0px;
  width: 317px;
  height: 68px;
`;
const ItsAMini = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 20.88px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  width: 265px;
  height: 51px;
`;
const SvgIcon = styled.img`
  position: absolute;
  top: 24px;
  left: calc(50% - 36.5px);
  width: 76px;
  height: 4px;
  overflow: hidden;
`;
const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 211px;
  height: 51px;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const MainContainer1 = styled.div`
  position: relative;
  width: 317px;
  height: 119px;
`;
const OurProductIs = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 20.98px;
  text-transform: capitalize;
  font-weight: 600;
`;
const OurProductIsABlankWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  width: 159.2px;
  height: 21px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 37.62%;
  width: 96.43%;
  top: 101.9%;
  right: -0.94%;
  bottom: -39.52%;
  left: 4.51%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const CanvasParent = styled.div`
  position: relative;
  width: 53.2px;
  height: 21px;
  margin-top: 10px;
  margin-left: 3px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;
  width: 240.5px;
  height: 29.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0.3746106028556824px;
  box-sizing: border-box;
`;
const OppositeOfTraditional = styled.div`
  position: relative;
  line-height: 18.78px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 314px;
  flex-shrink: 0;
`;
const DivelementorWidgetContainer = styled.div`
  margin-top: 5px;
  position: absolute;
  top: 49.2px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 1px;
  font-size: var(--font-size-xs);
  color: var(--color-lightsteelblue);
`;
const Section = styled.div`
  position: relative;
  width: 316px;
  height: 73.2px;
  font-size: 14.98px;
  color: var(--color-white);
`;
const MainContainerParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
`;
const EllipseShadow2webpIcon = styled.img`
  position: absolute;
  top: 9.6px;
  right: 0px;
  width: 194px;
  height: 194px;
  object-fit: cover;
`;
const Bottle1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 29.6px;
  width: 145.2px;
  height: 209.7px;
  object-fit: cover;
`;
const EllipseShadow2webpParent = styled.div`
  position: relative;
  width: 194px;
  height: 209.7px;
`;
const MoreImpressionsThan = styled.div`
  position: absolute;
  top: calc(50% - 9.5px);
  left: calc(50% - 64.5px);
  line-height: 11.78px;
  font-weight: 500;
  display: flex;
  font-size: 13px;
  align-items: center;
  width: 129px;
  height: 18px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 22px;
  left: calc(50% - 64.5px);
  width: 129px;
  height: 21px;
`;
const CircleTicksvgIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 14px;
  height: 14px;
  overflow: hidden;
`;
const X = styled.div`
  position: absolute;
  top: 3px;
  left: 22px;
  line-height: 6.78px;
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 600;
`;
const Divelement = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 93px;
  height: 14px;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const DivElementWrap = styled.div`
  position: relative;
  width: 129px;
  height: 43px;
`;
const CheaperPerTen = styled.div`
  position: absolute;
  top: calc(50% - 8.5px);
  left: calc(50% - 76.5px);
  line-height: 11.8px;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  width: 153px;
  height: 18px;
`;
const DivelementorWidgetContainer2 = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 76.5px);
  width: 153px;
  height: 21px;
`;
const Divelement1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 73px;
  height: 12px;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const DivelementorWidgetContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 153px;
  height: 41px;
`;
const DivElementWap = styled.div`
  position: relative;
  width: 153px;
  height: 43px;
`;
const DivElementWrapParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
`;
const Section1 = styled.div`
  position: relative;
  width: 313px;
  height: 43px;
`;
const AdvertiseWithUs = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 11.5px);
  left: calc(50% - 59px);
  letter-spacing: 0.13px;
  line-height: 9.95px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 119px;
  height: 17px;
  flex-shrink: 0;
  font-size: 13px;
  z-index: 0;
`;
const Svg = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 2.5px);
  left: calc(50% + 42px);
  width: 5.6px;
  height: 5px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Link10 = styled.div`
  border-radius: 16.58px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 9.95px rgba(0, 0, 0, 0.07);
  width: 148px;
  height: 39px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 3.9800498485565186px 14.925188064575195px 3.9800498485565186px
    17.91022491455078px;
  box-sizing: border-box;
  position: relative;
  gap: 2.64px;
`;
const LinkHow = styled.div`
  position: relative;
  line-height: 12.03px;
  text-transform: capitalize;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 104px;
  height: 12px;
  flex-shrink: 0;
  z-index: 0;
`;
const SvgIcon1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 8.5px;
  left: 104px;
  width: 20px;
  height: 7px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const DivrtArrowBtn = styled.div`
  border-radius: 21.48px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 12.89px rgba(0, 0, 0, 0.07);
  width: 126px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 6px 0px;
  box-sizing: border-box;
  position: relative;
  gap: 35px;
  font-size: var(--font-size-smi);
`;
const LinkParent = styled.div`
  width: 313px;
  height: 39px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const SectionParent = styled.div`
  width: 324px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  font-size: var(--font-size-3xs);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 168.5px);
  width: 337px;
  height: 645px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 21px;
`;
const MainContainer = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 165.5px);
  width: 331px;
  height: 645px;
`;
const Hero = styled.div`
  position: absolute;
  width: 100%;
  top: 57px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 661px;
  color: var(--color-lightsteelblue);
`;
const DivelementorWidgetWrapIcon = styled.img`
  position: relative;
  border-radius: 8.55px;
  width: 222px;
  height: 198.5px;
`;
const HowToAdvertise = styled.div`
  position: relative;
  line-height: 16.91px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 157.7px;
  height: 15.5px;
  flex-shrink: 0;
`;
const WithUs = styled.div`
  position: relative;
  line-height: 16.91px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  width: 72.7px;
  height: 15.5px;
  flex-shrink: 0;
`;
const Heading21 = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.604066789150238px 0px;
  box-sizing: border-box;
`;
const DistributeFreeIn = styled.div`
  position: absolute;
  top: 3.1px;
  left: 22.2px;
  line-height: 11.28px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 267.5px;
  height: 9.3px;
`;
const DivelementorWidgetContainer5 = styled.div`
  position: relative;
  width: 22.2px;
  height: 17.7px;
  background-image: url("/divelementorwidgetcontainer@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const AskUsTo = styled.div`
  position: absolute;
  top: 0px;
  left: 21.6px;
  line-height: 16.69px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 289.2px;
  height: 17px;
`;
const DivelementorWidgetContainer6 = styled.div`
  position: relative;
  width: 22.2px;
  height: 17.7px;
  background-image: url("/divelementorwidgetcontainer1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const SellBottlesWith = styled.div`
  position: absolute;
  top: 2.8px;
  left: 22.2px;
  line-height: 11.28px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 187.7px;
  height: 10.1px;
`;
const DivelementorWidgetContainer7 = styled.div`
  position: relative;
  width: 22.2px;
  height: 17.7px;
  background-image: url("/divelementorwidgetcontainer2@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const DivelementorWidgetContainerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 9.28px;
`;
const SectionInner = styled.div`
  width: 29.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12.37px;
`;
const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 18.56px;
`;
const LearnMore = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.9px);
  left: calc(50% - 40.6px);
  line-height: 14.05px;
  text-transform: capitalize;
  font-weight: 600;
  font-size:15px;
  z-index: 0;
`;
const Link1 = styled.div`
  width: 124px;
  height: 27px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Section4 = styled.div`
  border-radius: 23.41px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 14.05px rgba(0, 0, 0, 0.07);
  width: 124px;
  height: 39px;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  text-align:center;
  box-sizing: border-box;
  font-size: var(--font-size-sm);
`;
const HowTo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 27.84px;
`;
const DivelementorWidgetWrapParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
const Container = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 150.5px);
  width: 300px;
  height: 391px;
`;
const Howto = styled.div`
  position: absolute;
  width: 100%;
  top: 718px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 411px;
  font-size: 18.56px;
`;
const Text1 = styled.div`
  position: absolute;
  top: 0.6px;
  left: 128.5px;
  line-height: 14.36px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 12.3px;
  height: 13.1px;
`;
const Process1 = styled.div`
  position: relative;
  line-height: 14.36px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 101.1px;
  height: 13.1px;
  flex-shrink: 0;
`;
const SvgIcon2 = styled.img`
  position: relative;
  width: 70.9px;
  height: 2.6px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProcessParent = styled.div`
  position: absolute;
  top: 1.3px;
  left: calc(50% - 63.7px);
  width: 128.7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5.25px;
  font-size: 21.01px;
`;
const Heading22 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 77.5px);
  width: 130px;
  height: 31.5px;
`;
const SelectFromThe = styled.div`
  position: absolute;
  top: -1px;
  left: 0px;
  line-height: 18.77px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 251px;
  height: 86px;
`;
const DivelementorWidgetContainer8 = styled.div`
  position: absolute;
  top: 48px;
  left: calc(50% - 123.5px);
  width: 251px;
  height: 87px;
`;
const SelectYour = styled.div`

  line-height: 11.26px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  min-width: 53px;
 max-width: 100px;
  height: 25px;
`;
const Package = styled.div`
 padding-left:10px;
  line-height: 11.26px;
  text-transform: capitalize;
  font-size:18px;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  flex-direction:row;
  justify-content:start;
  align-items:center;
 min-width: 103px;
 max-width: 143px;
  height: 25px;

`;
const DivrtTextappearLine30 = styled.div`
display:flex;
flex-direction:row;
justify-content:start;
  position: absolute;
  top: 14px;
  left: 11px;
  width: 216px;
  height: 25px;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  
 
`;
const Div1 = styled.div`
  overflow: visible;
  position: absolute;
  top: -4px;
  left: 223.2px;
  font-size: 28.71px;
  line-height: 27.53px;
  font-weight: 500;
  color: var(--color-darkslategray-200);
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.39px;
  background-color: var(--color-gray-100);
  width: 290px;
  height: 200px;
`;
const FrameChild = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 13.2px;
  height: 13.2px;
`;
const FrameItem = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 13.2px;
  height: 13.2px;
`;
const EllipseParent = styled.div`
  position: absolute;
  top: 150px;
  left: 82px;
  width: 72px;
  height: 12px;
`;
const DivelementorWidgetWrapGroup = styled.div`
  position: relative;
  width: 290px;
  height: 200.2px;
  border-radius: 10px;
  flex-shrink: 0;
`;
const Payment = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 102px;
  line-height: 11.26px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  width: 83px;
  height: 25px;
`;
const Designs = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 99px;
  line-height: 11.26px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  width: 74px;
  height: 25px;
`;
const Receive = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 0px;
  line-height: 11.26px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 73px;
  height: 25px;
`;
const VideoClients = styled.div`
  position: absolute;
  top: calc(50% - 12.5px);
  left: 76px;
  line-height: 11.26px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  width: 140px;
  height: 25px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: calc(50% - 113px);
  left: calc(50% - 158.5px);
  width: 311px;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
  padding: 25px 12px;
  box-sizing: border-box;
  gap: 30px;
  font-size: var(--font-size-base);
  color: var(--color-lightsteelblue);
`;
const ProcessContainer = styled.div`
  position: absolute;
  top: 50px;
  left: calc(50% - 157.5px);
  width: 350px;
  height: 261px;
  overflow: hidden;
`;
const Process = styled.div`
  position: absolute;
  width: 100%;
  top: 1129px;
  right: 100px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 319px;
  font-size: 10.26px;
`;
const Advantages1 = styled.div`
  position: absolute;
  top: calc(50% - 12.05px);
  left: calc(50% - 53.3px);
  line-height: 12.53px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 106.5px;
  height: 24.1px;
`;
const Heading23 = styled.div`
  position: relative;
  width: 118px;
  height: 26.3px;
`;
const SvgIcon3 = styled.img`
  position: relative;
  width: 106.5px;
  height: 26.6px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Heading2Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.15px;
`;
const Section5 = styled.div`
  position: absolute;
  top: 4.6px;
  left: calc(50% - 58.5px);
  width: 118px;
  height: 54.1px;
`;
const EllipseShadow2webpIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 44.5px);
  left: calc(50% - 181.2px);
  width: 84px;
  height: 88.3px;
  object-fit: cover;
`;
const FlexibleIconsvg = styled.img`
  position: absolute;
  top: 10px;
  left: calc(50% - 30.2px);
  height: 54.6px;
  overflow: hidden;
`;
const SelectQuantityAnd = styled.div`
  position: absolute;
  top: calc(50% - 40px);
  left: 0px;
  line-height: 19.98px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 225px;
`;
const DivelementorWidgetContainer12 = styled.div`
  position: absolute;
  top: calc(50% - 30.5px);
  left: calc(50% - 105.5px);
  width: 236px;
  height: 92px;
  text-align: start;
`;
const DivelementorWidgetContainer122 = styled.div`
  position: absolute;
  top: calc(50% - 50.5px);
  left: calc(50% - 110.5px);
  width: 240px;
  height: 92px;
  text-align: start;
`;
const FlexibleOption1 = styled.div`
  position: absolute;
  top: calc(50% - 11.5px);
  left: 2px;
  line-height: 21.63px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivrtTextappearLine76 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 104px);
  width: 199px;
  height: 39px;
  font-size: var(--font-size-lg);
  color: var(--color-orange);
`;
const DivelementorWidgetWrap4 = styled.div`
  width: 270px;

  background-color: var(--color-gray-100);

  height: auto;
`;
const FrameChild13 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-white);
  width: 12px;
  height: 12px;
`;
const FrameChild14 = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 12px;
  height: 12px;
`;
const EllipseParent2 = styled.div`
  position: absolute;
  top: 185px;
  left: 82px;
  width: 72px;
  height: 12px;
`;
const FlexibleOption = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 271px;
  height: 220px;
`;
const PolicyIconsvg = styled.img`
  position: absolute;
  top: 10px;
  left: 203px;
  width: 46px;
  height: 44.9px;
  overflow: hidden;
`;
const WeWillDesign = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: 0px;
  line-height: 19.98px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 225px;
`;
const TagDesigns = styled.div`
  position: absolute;
  top: 0px;
  left: 301px;
  width: 271px;
  height: 199px;
`;
const ApprovedIconsvg = styled.img`
  position: absolute;
  top: 10px;
  left: 203px;
  width: 48px;
  height: 48.6px;
  overflow: hidden;
`;
const Distribution = styled.div`
  position: absolute;
  top: 0px;
  left: 602px;
  width: 271px;
  height: 199px;
`;
const OnlineServiceIconsvg = styled.img`
  position: absolute;
  top: 10px;
  left: 208px;
  width: 45.6px;
  height: 46.8px;
  overflow: hidden;
`;
const TransparencyPolicy = styled.div`
  position: absolute;
  top: 0px;
  left: 903px;
  width: 271px;
  height: 199px;
`;
const Section6 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 70px;
  left: calc(50% - 135.5px);
  width: 271px;
  height: auto;
  overflow: auto;
  font-size: var(--font-size-base);
  color: var(--color-lightsteelblue);

  background-color: var(--color-gray-200);
`;
const Advantages = styled.div`
  position: absolute;
  width: 100%;

  top: 1446px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 318px;
  font-size: 18.33px;
`;
const Icon = styled.img`
  position: relative;
  width: 63.3px;
  height: 22.6px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon1 = styled.img`
  position: relative;
  width: 107.8px;
  height: 17.5px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon2 = styled.img`
  position: relative;
  width: 58px;
  height: 17.5px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon3 = styled.img`
  position: relative;
  width: 130.5px;
  height: 19.3px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon4 = styled.img`
  position: relative;
  width: 85.8px;
  height: 22.6px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon5 = styled.img`
  position: relative;
  width: 66.3px;
  height: 17.5px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 20px;
`;
const Trusted = styled.div`
  position: absolute;
  top: 4px;
  left: 11px;
  line-height: 10.94px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 58px;
  height: 20px;
`;
const Span = styled.span``;
const Partners2 = styled.span`
  color: var(--color-aquamarine);
`;
const PartnersTxt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Partners1 = styled.div`
  position: absolute;
  top: 6px;
  left: 78px;
  line-height: 10.94px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 68px;
  height: 17px;
  color: #aaa;
`;
const Heading24 = styled.div`
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 77.5px);
  width: 155px;
  height: 28px;
`;
const Partners = styled.div`
  position: absolute;
  width: 100%;
  top: 1764px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 98px;
  font-size: var(--font-size-base);
`;
const SvgIcon4 = styled.img`
  position: absolute;
  top: -30.7px;
  left: calc(50% + 8.5px);
  width: 83px;
  height: 83px;
  overflow: hidden;
`;
const Rectangle3svgIcon = styled.img`
  position: absolute;
  top: calc(50% - 6.05px);
  left: calc(50% - 6px);
  width: 16.2px;
  height: 16.2px;
  overflow: hidden;
`;
const Step1 = styled.div`
  position: absolute;
  top: 2.9px;
  left: 42.6px;
  line-height: 9.37px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer16 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 107.2px;
  height: 14.5px;
`;
const Increase = styled.div`
  position: absolute;
  top: 0.1px;
  left: calc(50% - 21.1px);
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42.2px;
  height: 7.6px;
`;
const Spanline = styled.div`
  position: absolute;
  width: calc(100% - 34.9px);
  right: 17.7px;
  bottom: 0.4px;
  left: 17.2px;
  background-color: var(--color-orange);
  height: 0.5px;
`;
const FootTraffic = styled.div`
  position: absolute;
  top: 9.9px;
  left: 11.7px;
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49.8px;
  height: 7.6px;
`;
const DivrtTextappearLine5 = styled.div`
  position: absolute;
  top: 22px;
  left: calc(50% - 33.9px);
  width: 67.8px;
  height: 20.5px;
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  width: calc(100% - 214.5px);
  top: 0px;
  right: 214.5px;
  left: 0px;
  border-radius: 7.48px;
  height: 51.4px;
`;
const DivelementorWidgetContainer17 = styled.div`
  position: absolute;
  top: 37.5px;
  left: calc(50% - 53.6px);
  width: 107.2px;
  height: 14px;
`;
const SvgIcon5 = styled.img`
  position: absolute;
  top: -35.7px;
  left: calc(50% + 9.5px);
  width: 83px;
  height: 83px;
  overflow: hidden;
`;
const Rectangle3svgIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 8.15px);
  left: calc(50% - 8.3px);
  width: 16.2px;
  height: 16.2px;
  overflow: hidden;
`;
const Step2 = styled.div`
  position: absolute;
  top: 3.7px;
  left: 38.8px;
  line-height: 6.98px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.2px;
  height: 6.5px;
`;
const Improve = styled.div`
  position: absolute;
  top: 0.8px;
  left: 0.5px;
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36.8px;
  height: 7.6px;
`;
const Spanline1 = styled.div`
  position: absolute;
  width: calc(100% - 50.3px);
  right: 9.8px;
  bottom: 5.8px;
  left: 40.5px;
  background-color: var(--color-orange);
  height: 0.5px;
`;
const Sales = styled.div`
  position: absolute;
  top: 0.8px;
  left: 31.9px;
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.5px;
  height: 8.7px;
`;
const DivrtTextappearLine46 = styled.div`
  position: absolute;
  top: 21.3px;
  left: calc(50% - 33.6px);
  width: 67.3px;
  height: 16.8px;
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  width: calc(100% - 214.5px);
  top: 0px;
  right: 107.3px;
  left: 107.2px;
  border-radius: 7.48px;
  height: 51.4px;
`;
const BlankLine = styled.p`
  margin: 0;
`;
const Text11 = styled.div`
  position: absolute;
  top: 0.7px;
  left: 10.9px;
  line-height: 6.98px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 85.5px;
  height: 12.2px;
`;
const DivelementorWidgetContainer19 = styled.div`
  position: absolute;
  top: 37.5px;
  left: calc(50% - 53.6px);
  width: 107.2px;
  height: 14px;
  font-size: 3.99px;
  color: var(--color-lightsteelblue);
`;
const Rectangle3svgIcon2 = styled.img`
  position: absolute;
  top: calc(50% - 8.15px);
  left: calc(50% - 8.4px);
  width: 16.2px;
  height: 16.2px;
  overflow: hidden;
`;
const Step3 = styled.div`
  position: absolute;
  top: 3.7px;
  left: 39.8px;
  line-height: 6.98px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 6.5px;
`;
const GainAmazing = styled.div`
  position: absolute;
  top: -0.3px;
  left: 5.8px;
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58.4px;
  height: 7.6px;
`;
const Spanline2 = styled.div`
  position: absolute;
  width: calc(100% - 58.6px);
  right: 30.1px;
  bottom: 3.7px;
  left: 28.5px;
  background-color: var(--color-orange);
  height: 0.5px;
`;
const Pr = styled.div`
  position: absolute;
  top: 8.4px;
  left: 24.2px;
  line-height: 8.38px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18.7px;
  height: 7.5px;
`;
const DivrtTextappearLine65 = styled.div`
  position: absolute;
  top: 21.3px;
  left: calc(50% - 33.6px);
  width: 67.3px;
  height: 21.2px;
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  width: calc(100% - 214.5px);
  top: 0px;
  right: 0px;
  left: 214.5px;
  border-radius: 7.48px;
  height: 51.4px;
`;
const BenefitsOfAdvertising = styled.div`
  position: absolute;
  top: 0.9px;
  left: 0px;
  line-height: 24.37px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 214.5px;
  height: 22.2px;
`;
const With = styled.div`
  position: absolute;
  margin-left: 30px !important;
  height: 100%;
  width: 37.47%;
  top: 0%;

  line-height: 24.37px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const Shareh2o = styled.div`
  position: absolute;
  margin-left: 70px !important;
  height: 100%;
  width: 57.64%;
  top: 0%;
  left: 37.47%;
  line-height: 24.37px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const WithParent = styled.div`
  position: absolute;
  top: 25.2px;
  left: 40.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.351039886474609px 6.526558876037598px;
  gap: 0.87px;
`;
const Heading25 = styled.div`
  position: absolute;
  top: -62.9px;
  left: calc(50% - 106.75px);
  width: 214.5px;
  height: 57.4px;
  font-size: var(--font-size-mid-4);
`;
const Section7 = styled.div`
  position: absolute;
  top: 80.6px;
  left: calc(50% - 160.5px);
  width: 321.7px;
  height: 51.4px;
`;
const DivtestimonialDataIcon = styled.img`
  position: absolute;
  top: 9px;
  left: calc(50% - 58px);
  width: 118.2px;
  height: 35px;
`;
const OurBrandHas = styled.div`
  position: absolute;
  top: calc(50% - 14.5px);
  left: calc(50% - 61.5px);
  line-height: 8.75px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 124px;
  height: 30px;
`;
const Blockquote = styled.div`
  position: absolute;
  top: 17px;
  left: calc(50% - 61px);
  width: 123px;
  height: 37px;
`;
const Avatar2jpgIcon = styled.img`
  position: absolute;
  top: calc(50% - 9.35px);
  left: calc(50% - 52.85px);
  border-radius: 9.37px;
  width: 18.7px;
  height: 18.7px;
  object-fit: cover;
`;
const JackMgomes = styled.div`
  position: absolute;
  top: 1.2px;
  left: 22.3px;
  line-height: 8.57px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 59px;
  height: 6px;
`;
const MyntraCeo = styled.div`
  position: absolute;
  top: 11.2px;
  left: 22.3px;
  font-size: 6px;
  line-height: 6.56px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  width: 41px;
  height: 5px;
`;
const DivtestimonialTitle = styled.div`
  position: absolute;
  width: calc(100% - 32.3px);
  top: 60.8px;
  right: 21.6px;
  left: 10.7px;
  height: 18.7px;
  overflow: hidden;
  font-size: var(--font-size-5xs);
`;
const Divholder = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 5.35px;
  background-color: rgba(0, 0, 0, 0.63);
  box-shadow: 0px 0px 5.35px rgba(0, 0, 0, 0.06);
  width: 138px;
  height: 88px;
  overflow: hidden;
`;
const Divtestimonial3 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 146px);
  width: 146px;
  height: 92px;
  overflow: hidden;
`;
const DropUsAn = styled.div`
  position: absolute;
  top: calc(50% - 18.5px);
  left: calc(50% - 58.5px);
  line-height: 9.5px;
  font-weight: 500;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 126px;
  height: 28px;
`;
const DivelementorWidgetContainer21 = styled.div`
  position: absolute;
  top: 25px;
  left: calc(50% - 64px);
  width: 126px;
  height: 49px;
 font-size:6px;
`;
const WeCareAbout = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 0.5px;
  line-height: 14.99px;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 0;
`;

const WeCareAboutWrapper = styled.div`
  position: absolute;
  top: 6px;
  left: 3px;
  width: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size:6px;
 
`;
const Client = styled.div`
  position: relative;
  line-height: 14.99px;
  text-transform: capitalize;
  font-weight: 600;
`;
const ClientWrapper = styled.div`
  position: absolute;
  top: 23px;
  left: 23px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Satisfaction = styled.div`
  position: relative;
  line-height: 14.99px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 30px;
  height: 14px;
  flex-shrink: 0;
`;
const Spanline3 = styled.div`
  position: relatives;
  background-color: var(--color-white);
  width: 30px;
  height: 1px;
`;
const SatisfactionParent = styled.div`
  position: absolute;
  top: 23px;
  left: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Heading26 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 65.1px);
  width: 129px;
  height: 30px;
  font-size: var(--font-size-xs);
`;
const ContactUs = styled.div`
font-size:11px;
font-weight:600;

  color: white;
`;

const Link2 = styled.div`
  position: absolute;
  top: 3px;
  left: 21%;

  z-index: 2;
`;

const DivrtBtnEffectInfo = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 35.5px);
  background-color: red; /* Change this to a distinct color */
  width: 102px;
  height: 22px;
  z-index: 0;
  border-radius: 8px;
  text-align:center;
`;
const Section9 = styled.div`
  position: absolute;
  top: 72px;
  left: calc(50% - 73px);
  width: 99px;
  height: 18px;
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  width: calc(100% - 146px);
  top: calc(50% - 47.5px);
  right: 0px;
  left: 146px;
  border-radius: 8.03px;
  height: 95px;
  font-size: var(--font-size-5xs);
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: calc(50% - 48.2px);
  left: calc(50% - 145.65px);
  width: 292px;
  height: 97px;
`;
const Section8 = styled.div`
  position: absolute;
  top: calc(50% + 2px);
  left: calc(50% - 148.5px);
  border-radius: 9.22px;
  width: 297.3px;
  height: 116.4px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: 5px;
`;
const EllipseShadow3webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 142px);
  left: calc(50% + 90.5px);
  width: 96.8px;
  height: 78.6px;
  object-fit: cover;
`;
const Benefits = styled.div`
  position: absolute;
  width: 100%;
  top: 1862px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-100);
  height: 302px;
  text-align: center;
  font-size: 8.66px;
`;
const Ellipse2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 88.8px);
  left: calc(50% - 181.1px);
  width: 99.4px;
  height: 84px;
  object-fit: cover;
`;
const ChooseYour = styled.div`
  position: relative;
  line-height: 13.28px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 104.4px;
  height: 17px;
  flex-shrink: 0;
  z-index: 0;
`;
const Plan = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 1.2px;
  left: 112.5px;
  line-height: 13.28px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38.8px;
  height: 15.8px;
  flex-shrink: 0;
  z-index: 1;
`;
const ChooseYourParent = styled.div`
  width: 151.7px;
  height: 17px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  z-index: 0;
`;
const FromOurOptions = styled.div`
  position: relative;
  line-height: 13.28px;
  text-transform: capitalize;
  font-weight: 600;
`;
const FromOurOptionsWrapper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 21.9px;
  left: 2.4px;
  width: 149.3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 0.4px;
  left: calc(50% - 77.5px);
  width: 154.2px;
  height: 37.6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.8452224731445312px;
  box-sizing: border-box;
  gap: 1.19px;
`;
const ListIconsvg = styled.img`
  position: absolute;
  top: calc(50% - 8.75px);
  left: 2.1px;
  width: 12.4px;
  height: 12.4px;
  overflow: hidden;
`;
const PlasticBottles = styled.div`
  position: absolute;

  font-size: 12px;
  top: 1.2px;
  left: 20.7px;
  line-height: 11.34px;
  font-weight: 500;
`;
const DivelementorWidgetContainer22 = styled.div`
  position: relative;
  width: 136.8px;
  height: 18.7px;
`;
const ListIconsvg1 = styled.img`
  position: absolute;
  top: calc(50% - 7.2px);
  left: 2.1px;
  width: 12.4px;
  height: 12.4px;
  overflow: hidden;
`;
const Units = styled.div`
  position: absolute;
  top: -4px;
  left: 18.7px;
  line-height: 11.34px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 122.3px;
  height: 12.4px;
`;
const DivelementorWidgetContainer23 = styled.div`
  position: relative;
  width: 147.2px;
  height: 10.4px;
`;
const DivelementorWidgetContainerParent1 = styled.div`
  position: absolute;
  top: 170.2px;
  left: 12.1px;
  width: 149.2px;
  height: 41.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.0727274417877197px;
  box-sizing: border-box;
  gap: 8.29px;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const Select = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 5.25px);
  left: calc(50% - 24.6px);
  line-height: 10.12px;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 0;
  font-size:14px;
`;
const Link3 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 11.25px);
  left: calc(50% - 31.95px);
  width: 65.6px;
  height: 20.7px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const DivrtBtnEffectInfo1 = styled.div`
  position: absolute;
  top: 250px;
  left: calc(50% - 50.5px);
  border-radius: 16.87px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 10.12px rgba(0, 0, 0, 0.07);
  width: 100.5px;
  height: 28.3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.373579502105713px 14.84375px;
  box-sizing: border-box;
`;
const LitrePackagedWaterBottle15Icon = styled.img`
  position: absolute;
  top: 60.5px;
  left: calc(50% - 50.5px);
  width: 100.1px;
  height: 100.1px;
  object-fit: cover;
`;
const BeginnerPlastic = styled.div`
  position: relative;
  line-height: 10.27px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146.5px;
  height: 11.3px;
  font-size: 12px;
  flex-shrink: 0;
`;
const Heading3 = styled.b`
  margin-top: 10px;
  position: relative;
  font-size: 14px;
  letter-spacing: -0.32px;
  line-height: 14.08px;
  font-family: var(--font-space-grotesk);
  text-align: left;
`;
const BeginnerPlasticParent = styled.div`
  position: absolute;
  top: 9.2px;
  left: calc(50% - 77.5px);
  width: 155.8px;
  height: 48.8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3.755244255065918px 0px;
  box-sizing: border-box;
  gap: var(--gap-base-9);
`;
const DivelementorWidgetWrap12 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10.12px;
  background-color: var(--color-gray-100);
  width: 173px;
  height: 222px;
`;
const FrameIcon = styled.div`
  position: absolute;
  top: 300px;
  left: 51px;
  width: 72px;
  height: 12px;
`;
const DivelementorWidgetWrap1Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 173px;
  height: 312px;
`;
const DivelementorWidgetWrap1Group = styled.div`
  position: absolute;
  top: 0px;
  left: 203px;
  width: 173px;
  height: 312px;
`;
const ListIconsvg4 = styled.img`
  position: absolute;
  top: calc(50% - 7.5px);
  left: 1.9px;
  width: 11.6px;
  height: 11.6px;
  overflow: hidden;
`;
const CardboardCartons = styled.div`
  position: absolute;
  top: 1.1px;

  font-size: 12px;
  left: 19.4px;
  line-height: 10.6px;
  font-weight: 500;
`;
const DivelementorWidgetContainer26 = styled.div`
  position: relative;
  width: 158px;
  height: 18px;
`;
const ListIconsvg5 = styled.img`
  position: absolute;
  top: calc(50% - 6.65px);
  left: 1.9px;
  width: 11.6px;
  height: 11.6px;
  overflow: hidden;
`;
const Units2 = styled.div`
  position: absolute;
  top: -1.8px;
  left: 17.4px;
  line-height: 10.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 114.4px;
  height: 11.6px;
`;
const DivelementorWidgetContainer27 = styled.div`
  position: relative;
  width: 137.6px;
  height: 9.7px;
`;
const DivelementorWidgetContainerParent3 = styled.div`
  position: absolute;
  top: 170px;
  left: calc(50% - 80.5px);
  width: 161px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 1.9386098384857178px;
  box-sizing: border-box;
  gap: 7.75px;
  text-align: left;
  font-size: var(--font-size-mini);
`;
const BeginnerCarton = styled.div`
  position: relative;
  line-height: 10.27px;
  text-transform: capitalize;
  font-weight: 600;

  font-size: 12px;
`;
const DivelementorWidgetWrap1Container = styled.div`
  position: absolute;
  top: 0px;
  left: 406px;
  width: 173px;
  height: 312px;
`;
const DivelementorWidgetWrap1Parent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 609px;
  width: 173px;
  height: 312px;
`;
const Section11 = styled.div`
  position: absolute;
  top: 64px;
  left: calc(50% - 95.5px);
  width: 200px;
  height: 300px;
  overflow: hidden;
  font-size: var(--font-size-base);
  background-color: black;
  border-radius: 10px;
`;
const Section10 = styled.div`
  position: absolute;
  width: 100%;
  top: 17px;
  right: 0px;
  left: 0px;
  border-radius: 5.86px;
  height: 417px;
`;
const Plans = styled.div`
  position: absolute;
  width: 100%;
  top: 2164px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 434px;
  text-align: center;
  font-size: var(--font-size-mid);
`;
const TypesOf = styled.div`
  position: absolute;
  top: 3.6px;
  left: 19.7px;
  line-height: 16.34px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 106px;
  height: 16px;
`;
const Containers = styled.div`
  position: absolute;
  top: 3.9px;
  left: 97.5px;
  line-height: 16.34px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
`;
const Heading28 = styled.div`
  position: absolute;
  top: 13px;
  left: calc(50% - 100px);
  width: 250px;
  height: 29px;
`;
const SelectFromOur = styled.div`
  position: relative;
  line-height: 17.26px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 305px;
  height: 29px;
  flex-shrink: 0;
`;
const DivelementorWidgetContainer30 = styled.div`
  position: absolute;
  top: 51px;
  left: calc(50% - 153px);
  width: 306px;
  height: 37px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.8753969669342041px 0px;
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-lightsteelblue);
`;
const Plastic200mlPet = styled.div`
  position: absolute;
  top: calc(50% - 7px);
  left: calc(50% - 105px);
  line-height: 12.38px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer31 = styled.div`
  position: absolute;
  top: 11px;
  left: calc(50% - 118px);
  width: 210px;
  height: 18px;
`;
const HardCardboard200 = styled.div`
  position: absolute;
  top: calc(50% - 7.5px);
  left: -8px;
  line-height: 16.27px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 247px;
`;
const DivelementorWidgetContainer32 = styled.div`
  position: absolute;
  top: 35px;
  left: calc(50% - 110px);
  width: 261px;
  height: 29px;
`;
const Aluminum200mlBottles = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 100px);
  line-height: 12.38px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer33 = styled.div`
  position: absolute;
  top: 77px;
  left: calc(50% - 118px);
  width: 200px;
  height: 18px;
`;
const Section12 = styled.div`
  position: absolute;
  top: 92px;
  left: calc(50% - 151px);
  border-radius: 13.26px;
  width: 302px;
  height: 102px;
  font-size: var(--font-size-base);
`;
const DivelementorWidgetWrap16 = styled.div`
  position: absolute;
  top: 6px;
  left: calc(50% - 152.5px);
  border-radius: 8.75px;
  width: 306px;
  height: 206px;
`;
const DivelementorWidgetWrapIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 3.5px);
  left: calc(50% - 106.5px);
  border-radius: 10.13px;
  width: 214px;
  height: 214px;
`;
const Containertypes = styled.div`
  position: absolute;
  width: 100%;
  top: 2598px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 439px;
  font-size: var(--font-size-5xl);
`;
const GetInTouch = styled.div`
  position: relative;
  line-height: 19.5px;
  text-transform: capitalize;
  font-weight: 600;
`;
const ContactUs1 = styled.div`
  position: absolute;
  top: calc(50% - 11.5px);
  left: calc(50% - 35.5px);
  line-height: 20.9px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  font-size:14px;
  align-items: center;
  // width: 80px;
`;
const Link7 = styled.div`
  position: absolute;
  top: calc(50% + 3.5px);
  left: calc(50% + 80.5px);
  overflow: hidden;
`;
const DivrtBtnEffectInfo5 = styled.div`
  position: relative;
  border-radius: 34.83px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 20.9px rgba(0, 0, 0, 0.07);
  width: 121px;
  height: 35px;
  font-size: var(--font-size-sm);
`;
const FrameIcon1 = styled.img`
  position: absolute;
  top: 3.5px;
  left: 0px;
  width: 17.3px;
  height: 17.3px;
`;
const GhaziabdIndia = styled.div`
  width: 120px;
  position: relative;
  line-height: 24.26px;
  text-transform: capitalize;
  font-weight: 500;
`;
const SpanelementorIconListText = styled.div`
  position: absolute;
  top: calc(50% - 12.55px);
  left: calc(50% - 43.9px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.1487748622894287px 0px 4.332214832305908px;
`;
const Section14 = styled.div`
  position: relative;
  width: 131.2px;
  height: 24.3px;
  font-size: 13.86px;
`;
const About = styled.div`
  position: absolute;
  top: 2.7px;
  left: 0.1px;
  line-height: 25.25px;
  text-transform: capitalize;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 120.8px;
  height: 18.9px;
  margin-top: 5p;
`;
const DivelementorWidgetContainer34 = styled.div`
  position: relative;
  width: 108px;
  height: 21px;
  overflow: hidden;
  flex-shrink: 0;
  font-size: 14.43px;
`;
const Link8 = styled.div`
  position: relative;
  font-size: 15.01px;
  line-height: 26.26px;
  font-weight: 500;
  color: var(--color-firebrick);
`;
const DivelementorWidgetWrap18 = styled.div`
  width: 218px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;
const Newsletter = styled.div`
  position: relative;
  line-height: 16.08px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 115px;
  height: 14px;
  flex-shrink: 0;
`;
const EnterEmail = styled.div`
  position: absolute;
  top: -0.1px;
  left: -0.5px;
  font-size: 13px;
  display: flex;
  align-items: center;
  width: 101px;
  height: 12px;
`;
const Divplaceholder = styled.div`
  position: absolute;
  top: -1px;
  left: 5.5px;
  width: 150.6px;
  height: 34px;
  overflow: hidden;
  border-radius: 25px;

`;
const Input = styled.div`
  position: absolute;
  top: 0.4px;
  left: 0px;
  border-radius: 22.98px;
  background-color: var(--color-white);
  width: 222px;
  height: 32px;
 
`;
const Newsletter1 = styled.div`
  position: absolute;
  top: 9.4px;
  left: 14.7px;
  line-height: 16.08px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 13px;
`;
const Input1 = styled.div`
  position: absolute;
  width: calc(100% - 99px);
  right: 0px;
  bottom: -0.4px;
  left: 99px;
  border-radius: 22.98px;
  background-color: #00838f;
  height: 32px;
  text-align: center;
  color: var(--color-white);
`;
const Section15 = styled.div`
  position: relative;
  width: 227px;
  height: 32px;
  color: #757575;
margin-top:5px;
`;
const DivelementorWidgetWrap19 = styled.div`
  width: 279px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.1488454341888428px 0px;
  box-sizing: border-box;
  gap: 13px;
  font-size: var(--font-size-xs);
`;
const Section13 = styled.div`
  position: absolute;
  top: 161px;
  left: calc(50% - 163.5px);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-12xl);
  font-size: var(--font-size-smi);
`;
const Shareh2ologoRemovebgPreviewIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 31px);
  left: calc(50% - 32.45px);
  width: 64.9px;
  height: 62px;
  object-fit: cover;
`;
const Shareh2ologoRemovebgPreviewWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 64.9px;
  height: 62px;
`;
const Shareh2oIsAn1 = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  line-height: 15.47px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 322px;
  height: 54px;
`;
const DivelementorWidgetContainer35 = styled.div`
  position: absolute;
  top: 67px;
  left: 0px;
  width: 322px;
  height: 55px;
`;
const BottomNavSection = styled.div`
  position: absolute;
  top: 16px;
  left: calc(50% - 163.5px);
  width: 322px;
  height: 122px;
`;
const FacebooksvgIcon = styled.img`
  position: relative;
  width: 27.1px;
  height: 27.1px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ItemLinkFacebooksvg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0.7;
`;
const Icons8Twitter1 = styled.img`
  position: relative;
  width: 27.6px;
  height: 27.6px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PinterestsvgIcon = styled.img`
  position: relative;
  width: 25.7px;
  height: 27.1px;
  overflow: hidden;
  flex-shrink: 0;
`;
const List = styled.div`
  position: absolute;
  top: 435px;
  left: calc(50% - 100.5px);
  width: 202px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 4.717477321624756px 0px 3.2589330673217773px;
  box-sizing: border-box;
  gap: 15.95px;
`;
const EllipseShadow3webpIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 49.8px);
  left: calc(50% - 187.5px);
  width: 74.6px;
  height: 68.4px;
  object-fit: cover;
`;
const AllRightsReserved1 = styled.div`
  position: relative;
  line-height: 6.11px;
  font-weight: 500;
`;
const AllRightsReserved = styled.div`
  position: absolute;
  top: 494.6px;
  left: calc(50% - 102.5px);
  width: 196px;
  height: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 3.0532350540161133px;
  box-sizing: border-box;
  font-family: var(--font-dm-sans);
`;
const DivelementorWidgetWrap17 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 100%;
`;
const Footer = styled.div`
  position: absolute;
  width: 100%;
  top: 3037px;
  right: 0px;
  left: 0px;
  background-color: #1e1e1e;
  height: 529px;
`;
const MobileDashboardH2oFinalllllRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100vw;
  height: 926px;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-white);
  font-family: var(--font-plus-jakarta-sans);
`;

const MobileDashboardH2OFinalllll = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const carouselItems = [
    {
      plasticBottles: "Plastic Bottles",
      units: "5000 Units",
      imageSrc:
        "/1litrepackagedwaterbottle15864120775363994removebgpreview-1@2x.png",
      productType: "Beginner Plastic",
      price: "Rs. 30000",
    },
    {
      plasticBottles: "Plastic Bottles",
      units: "10000 Units",
      imageSrc: "/istockphoto484192249612x612removebgpreview-1@2x.png",
      productType: "Pro Plastic",
      price: "Rs. 50000",
    },
    {
      plasticBottles: "Cardboard Cartons",
      units: "5000 Units",
      imageSrc: "/screenshot-20230930-193338removebgpreview-1@2x.png",
      productType: "Beginner Carton",
      price: "Rs. 40000",
    },
    {
      plasticBottles: "Pro Cartons",
      units: "1000 Units",
      imageSrc:
        "i290421638sorryjadenyourpaperwaterbottlesarenand8217tgreatfortheenvironmenteitherremovebgpreview-1@2x.png",
      productType: "Cardboard Cartons",
      price: "Rs. 60000",
    },
  ];
  const processList = [
    {
      id: 1,
      numIcon: "01",
      text: "Select from the pre made packages.Type and quamtity of container.Area of Distribution & target customers",
      optionText1: "Select Your",
      optionText2: "Package",
    },
    {
      id: 2,
      numIcon: "02",
      text: "Pay for your selected package",
      optionText1: "Make Your",
      optionText2: "Package",
    },{
      id: 3,
      numIcon: "03",
      text: "Select tag designs from our list or upload your own",
      optionText1: "Select Tag",
      optionText2: "Designs",
    },{
      id: 4,
      numIcon: "04",
      text: "we will send you the recorded video of the distribution deivr.You should see improvement in your brand awareness and ROI.",
      optionText1: "Receive ",
      optionText2: "Videeo&Clients",
    },
  ];
  const flexibleOptions = [
    {
      id: 1,
      urlIcon: "/flexibleiconsvg.svg",
      text: "Select quantity and type of container for Advertisement according to your requirement",
      optionText: "Flexible Option",
    },
    {
      id: 2,
      urlIcon: "/approvediconsvg.svg",
      text: "We will design and print your brand tags",
      optionText: "Tag Designs",
    },
    {
      id: 3,
      urlIcon: "/onlineserviceiconsvg.svg",
      text: "Sell or distribute for free.we will take care of that",
      optionText: "Distribution",
    },
    {
      id: 4,
      urlIcon: "/approvediconsvg.svg",
      text: "Get the recorded video of the water distribution",
      optionText: "Transperency Policy",
    },
  ];
  const processOptions = [
    {
      id: 1,

      text: "Select from the pre made packages. Type and quantity of container. Area of Distribution & target customers",
      optionText: "Select Your pakage",
    },
    {
      id: 2,

      text: "Pay for your selected package",
      optionText: "Make Your Payment",
    },
    {
      id: 3,

      text: "Select tag Design from our list or upload your own.",
      optionText: "Select Tags Designs",
    },
    {
      id: 4,
      text: "We will send you the recorded video of the distribution Drive.You should see improvement in your brand awareness and ROI",
      optionText: "Receive Video & Clients",
    },
  ];
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <MobileDashboardH2oFinalllllRoot>
        <Header>
          <Logo>
            <Shareh2ologoRemovebgPreviewIcon
              alt=""
              src="/shareh2ologoremovebgpreview-12@2x.png"
            />
          </Logo>
          <PajamashamburgerIcon
            alt=""
            src="/pajamashamburger.svg"
            onClick={openFrame}
          />
        </Header>
        <Hero>
          <MainContainer>
            <FrameParent>
              <MainContainerParent>
                <MainContainer1>
                  <Body>
                    <Shareh2oIsAn>
                      ShareH2O is an innovative advertising platform that
                      utilises premium spring water as a new type of advertising
                      medium while prioritising sustainability
                    </Shareh2oIsAn>
                  </Body>
                  <Title>
                    <ItsAMini>It's a mini billboard in your hands</ItsAMini>
                    <SvgIcon alt="" src="/svg.svg" />
                  </Title>
                </MainContainer1>
                <Section>
                  <Heading2>
                    <OurProductIsABlankWrapper>
                      <OurProductIs>Our Product is a Blank</OurProductIs>
                    </OurProductIsABlankWrapper>
                    <CanvasParent>
                      <OurProductIs>Canvas</OurProductIs>
                      <VectorIcon alt="" src="/vector.svg" />
                    </CanvasParent>
                  </Heading2>
                  <DivelementorWidgetContainer>
                    <OppositeOfTraditional>
                      Opposite of traditional advertising; we put a smile on
                      their face so they'll be excited to support your brand.
                    </OppositeOfTraditional>
                  </DivelementorWidgetContainer>
                </Section>
              </MainContainerParent>
              <EllipseShadow2webpParent>
                <EllipseShadow2webpIcon
                  alt=""
                  src="/ellipseshadow2webp@2x.png"
                />
                <Bottle1Icon alt="" src="/bottle1@2x.png" />
              </EllipseShadow2webpParent>
              <SectionParent>
                <Section1>
                  <DivElementWrapParent>
                    <DivElementWrap>
                      <DivelementorWidgetContainer1>
                        <MoreImpressionsThan>
                          more impressions than direct mail
                        </MoreImpressionsThan>
                      </DivelementorWidgetContainer1>
                      <Divelement>
                        <CircleTicksvgIcon alt="" src="/circleticksvg.svg" />
                        <X>10X</X>
                      </Divelement>
                    </DivElementWrap>
                    <DivElementWap>
                      <DivelementorWidgetContainerParent>
                        <DivelementorWidgetContainer2>
                          <CheaperPerTen>
                            cheaper per ten impressions than direct mail
                          </CheaperPerTen>
                        </DivelementorWidgetContainer2>
                        <Divelement1>
                          <CircleTicksvgIcon alt="" src="/circleticksvg1.svg" />
                          <X>Rs 300</X>
                        </Divelement1>
                      </DivelementorWidgetContainerParent>
                    </DivElementWap>
                  </DivElementWrapParent>
                </Section1>
                <Section1>
                  <DivElementWrapParent>
                    <DivElementWrap>
                      <DivelementorWidgetContainer1>
                        <MoreImpressionsThan>
                          return on onvestment
                        </MoreImpressionsThan>
                      </DivelementorWidgetContainer1>
                      <Divelement>
                        <CircleTicksvgIcon alt="" src="/circleticksvg.svg" />
                        <X>29%</X>
                      </Divelement>
                    </DivElementWrap>
                    <DivElementWap>
                      <DivelementorWidgetContainerParent>
                        <DivelementorWidgetContainer2>
                          <CheaperPerTen>
                            saving lives and helping the planet
                          </CheaperPerTen>
                        </DivelementorWidgetContainer2>
                        <Divelement1>
                          <CircleTicksvgIcon alt="" src="/circleticksvg1.svg" />
                          <X>Priceless</X>
                        </Divelement1>
                      </DivelementorWidgetContainerParent>
                    </DivElementWap>
                  </DivElementWrapParent>
                </Section1>
                <LinkParent>

                  <Link10 onClick={() => scrollToSection("advertising")}>
                    <AdvertiseWithUs>Advertise with Us</AdvertiseWithUs>
                    <Svg />
                  </Link10>
                  
                  <DivrtArrowBtn>
                    <LinkHow onClick={() => scrollToSection("process")}>
                      How To Process
                    </LinkHow>
                    <SvgIcon1 alt="" src="/svg1.svg" />
                  </DivrtArrowBtn>
                </LinkParent>
              </SectionParent>
            </FrameParent>
            <div className="background-container">
              <Img
                className="absolute bottom-0 left-0 object-cover w-[62%] moving-image"
                src="images/img_ellipseshadow2webp.png"
                alt="ellipseshadow2w"
              />
            </div>
          </MainContainer>
        </Hero>
        <Howto id="advertising">
          <Container>
            <DivelementorWidgetWrapParent>
              <DivelementorWidgetWrapIcon
                alt=""
                src="/divelementorwidgetwrap.svg"
              />
              <HowTo>
                <Section3>
                  <Heading21>
                    <HowToAdvertise>How to Advertise</HowToAdvertise>
                    <WithUs>With Us</WithUs>
                  </Heading21>
                  <SectionInner>
                    <DivelementorWidgetContainerContainer>
                      <DivelementorWidgetContainer5>
                        <DistributeFreeIn>
                          Distribute Free in your own business events
                        </DistributeFreeIn>
                      </DivelementorWidgetContainer5>
                      <DivelementorWidgetContainer6>
                        <AskUsTo>
                          Ask us to distribute Free to relevant Audience
                        </AskUsTo>
                      </DivelementorWidgetContainer6>
                      <DivelementorWidgetContainer7>
                        <SellBottlesWith>
                          Sell bottles with your Ads
                        </SellBottlesWith>
                      </DivelementorWidgetContainer7>
                    </DivelementorWidgetContainerContainer>
                  </SectionInner>
                </Section3>
                <Section4>
                  <Link1>
                    <LearnMore>Learn More</LearnMore>
                  </Link1>
                </Section4>
              </HowTo>
            </DivelementorWidgetWrapParent>
          </Container>
        </Howto>
        <Process id="process">
          <ProcessContainer>
            <Heading22>
              <Text1>{` `}</Text1>
              <ProcessParent>
                <Process1>Process</Process1>
                <SvgIcon2 alt="" src="/svg2.svg" />
              </ProcessParent>
            </Heading22>

            <Carousel
     


            className="carousel-list2"
            // autoPlay
            // infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
          >
            {processList.map((each,i) => (
              <div
              key={i}
                className="curousel"
                style={{ height: "200px", width: "400px" }}
              >
                <FlexibleOption>
                  <DivelementorWidgetWrap4>
                  <Div1>{each.numIcon}</Div1>
                  
                    <DivelementorWidgetContainer122 >
                      <SelectQuantityAnd>{each.text}</SelectQuantityAnd>
                    </DivelementorWidgetContainer122>

                    <DivrtTextappearLine30>
                    <SelectYour>{each.optionText1}</SelectYour>
                    <Package> {each.optionText2}</Package>
                  </DivrtTextappearLine30>

                  </DivelementorWidgetWrap4>
                </FlexibleOption>
              </div>
            ))}
          </Carousel>

            {/* <FrameGroup>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap>
                  <DivelementorWidgetContainer8>
                    <SelectFromThe>{`Select from the pre made packages. Type and quantity of container. Area of Distribution & target customers`}</SelectFromThe>
                  </DivelementorWidgetContainer8>
                  <DivrtTextappearLine30>
                    <SelectYour>Select Your</SelectYour>
                    <Package> Package</Package>
                  </DivrtTextappearLine30>
                  <Div1>{`01 `}</Div1>
                </DivelementorWidgetWrap>
                <EllipseParent>
                  <FrameChild />
                  <FrameItem />
                  <FrameItem />
                  <FrameItem />
                </EllipseParent>
              </DivelementorWidgetWrapGroup>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap>
                  <DivelementorWidgetContainer8>
                    <SelectFromThe>Pay for your selected package</SelectFromThe>
                  </DivelementorWidgetContainer8>
                  <DivrtTextappearLine30>
                    <SelectYour>Make Your</SelectYour>
                    <Payment>Payment</Payment>
                  </DivrtTextappearLine30>
                  <Div1>{`02 `}</Div1>
                </DivelementorWidgetWrap>
                <EllipseParent>
                  <FrameItem />
                  <FrameChild />
                  <FrameItem />
                  <FrameItem />
                </EllipseParent>
              </DivelementorWidgetWrapGroup>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap>
                  <DivelementorWidgetContainer8>
                    <SelectFromThe>
                      Select tag design from our list or upload your own
                    </SelectFromThe>
                  </DivelementorWidgetContainer8>
                  <DivrtTextappearLine30>
                    <SelectYour>Select Tag</SelectYour>
                    <Designs>Designs</Designs>
                  </DivrtTextappearLine30>
                  <Div1>{`03 `}</Div1>
                </DivelementorWidgetWrap>
                <EllipseParent>
                  <FrameItem />
                  <FrameItem />
                  <FrameChild />
                  <FrameItem />
                </EllipseParent>
              </DivelementorWidgetWrapGroup>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap>
                  <DivelementorWidgetContainer8>
                    <SelectFromThe>{`We will send you the recorded video of the distribution drive. You should see improvement in your brans awareness & ROI.`}</SelectFromThe>
                  </DivelementorWidgetContainer8>
                  <DivrtTextappearLine30>
                    <Receive>Receive</Receive>
                    <VideoClients>{`Video & Clients`}</VideoClients>
                  </DivrtTextappearLine30>
                  <Div1>{`04 `}</Div1>
                </DivelementorWidgetWrap>
                <EllipseParent>
                  <FrameItem />
                  <FrameItem />
                  <FrameItem />
                  <FrameChild />
                </EllipseParent>
              </DivelementorWidgetWrapGroup>
            </FrameGroup> */}



          </ProcessContainer>
          <Img
            className="absolute bottom-0 left-0 right-[80px]  w-[62%] moving-image"
            src="images/img_ellipseshadow3webp.png"
            alt="ellipseshadow3w"
          />
        </Process>

        <Advantages>
          <Section5>
            <Heading2Parent>
              <Heading23>
                <Advantages1>Advantages</Advantages1>
              </Heading23>
              <SvgIcon3 alt="" src="/svg3.svg" />
            </Heading2Parent>
          </Section5>
          <EllipseShadow2webpIcon1 alt="" src="/ellipseshadow2webp1@2x.png" />
          <Carousel
            className="carousel-list"
           // autoPlay
           // infiniteLoop
           showArrows={false}
            showStatus={false}
            showThumbs={false}
          >
            {flexibleOptions.map((each,i) => (
              <div
              key={i}
                className="curousel"
                style={{ height: "200px", width: "auto" }}
              >
                <FlexibleOption>
                  <DivelementorWidgetWrap4>
                    <FlexibleIconsvg alt="" src={each.urlIcon} />
                    <DivelementorWidgetContainer12>
                      <SelectQuantityAnd>{each.text}</SelectQuantityAnd>
                    </DivelementorWidgetContainer12>
                    <DivrtTextappearLine76>
                      <FlexibleOption1> {each.optionText} </FlexibleOption1>
                    </DivrtTextappearLine76>
                  </DivelementorWidgetWrap4>
                </FlexibleOption>
              </div>
            ))}
          </Carousel>
        </Advantages>

        <Partners>
  <Parent1>        
          <CarouselScroll />
            
          </Parent1>
          <Heading24>
            <Trusted>{`Trusted `}</Trusted>
            <Partners1>
              <PartnersTxt>
                <Span>{` `}</Span>
                <Partners2>Partners</Partners2>
              </PartnersTxt>
            </Partners1>
          </Heading24>
        </Partners>

        <Benefits>
          <Section7>
            <DivelementorWidgetWrap8>
              <SvgIcon4 alt="" src="/svg4.svg" />
              <DivelementorWidgetContainer16>
                <Rectangle3svgIcon alt="" src="/rectangle3svg.svg" />
                <Step1>{`Step 1 `}</Step1>
              </DivelementorWidgetContainer16>
              <DivrtTextappearLine5>
                <Increase>Increase</Increase>
                <Spanline />
                <FootTraffic>Foot Traffic</FootTraffic>
              </DivrtTextappearLine5>
            </DivelementorWidgetWrap8>
            <DivelementorWidgetWrap9>
              <DivelementorWidgetContainer17 />
              <SvgIcon5 alt="" src="/svg4.svg" />
              <DivelementorWidgetContainer16>
                <Rectangle3svgIcon1 alt="" src="/rectangle3svg1.svg" />
                <Step2>{`Step 2 `}</Step2>
              </DivelementorWidgetContainer16>
              <DivrtTextappearLine46>
                <Improve>Improve</Improve>
                <Spanline1 />
                <Sales>Sales</Sales>
              </DivrtTextappearLine46>
            </DivelementorWidgetWrap9>
            <DivelementorWidgetWrap10>
              <DivelementorWidgetContainer19>
                <Text11>
                  <BlankLine>&nbsp;</BlankLine>
                </Text11>
              </DivelementorWidgetContainer19>
              <DivelementorWidgetContainer16>
                <Rectangle3svgIcon2 alt="" src="/rectangle3svg2.svg" />
                <Step3>{`Step 3 `}</Step3>
              </DivelementorWidgetContainer16>
              <DivrtTextappearLine65>
                <GainAmazing>Gain Amazing</GainAmazing>
                <Spanline2 />
                <Pr>PR</Pr>
              </DivrtTextappearLine65>
            </DivelementorWidgetWrap10>
            <Heading25>
              <BenefitsOfAdvertising>
                Benefits of Advertising
              </BenefitsOfAdvertising>
              <WithParent>
                <With>With</With>
                <Shareh2o>ShareH2O</Shareh2o>
              </WithParent>
            </Heading25>
          </Section7>
          <Section8>
            <DivelementorContainer>
              <Divtestimonial3>
                <Divholder>
                  <DivtestimonialDataIcon
                    alt=""
                    src="/divtestimonialdata.svg"
                  />
                  <Blockquote>
                    <OurBrandHas>
                      "Our brand has been recognized like never before by simple
                      act of distribution of free water. Advertising could be so
                      simple, never knew,
                    </OurBrandHas>
                  </Blockquote>
                  <DivtestimonialTitle>
                    <Avatar2jpgIcon alt="" src="/avatar2jpg@2x.png" />
                    <JackMgomes>Jack M.Gomes</JackMgomes>
                    <MyntraCeo>Myntra, CEO</MyntraCeo>
                  </DivtestimonialTitle>
                </Divholder>
              </Divtestimonial3>
              <DivelementorWidgetWrap11>
                <DivelementorWidgetContainer21>
                  <DropUsAn>
                    Drop us an email or leave a comment with out chatbot. We
                    will get back to you within 24 hours.
                  </DropUsAn>
                </DivelementorWidgetContainer21>
                <Heading26>
                  <WeCareAboutWrapper>
                    <WeCareAbout>24/7 we care about Client <span className="satisfaction-span" >Satisfaction</span></WeCareAbout>
                  </WeCareAboutWrapper>
                 {/* < ClientWrapper>
                 <Client>
                        Client
                  </Client>
                 </ClientWrapper>
                 

                  <SatisfactionParent>
                    <Satisfaction>Satisfaction</Satisfaction>
                    <Spanline3 />
                  </SatisfactionParent> */}
                </Heading26>
                <Section9>
                  <DivrtBtnEffectInfo
                    onClick={() => scrollToSection("contactus")}
                  >
                    <Link2>
                      <ContactUs>Contact Us</ContactUs>
                    </Link2>
                  </DivrtBtnEffectInfo>
                </Section9>
              </DivelementorWidgetWrap11>
            </DivelementorContainer>
          </Section8>
          <EllipseShadow3webpIcon alt="" src="/ellipseshadow3webp@2x.png" />
        </Benefits>
        <Plans id="pricing">
          <Section10>
            <Ellipse2webpIcon alt="" src="/ellipse2webp@2x.png" />
            <Heading27>
              <ChooseYourParent>
                <ChooseYour>{`choose your `}</ChooseYour>
                <Plan>Plan</Plan>
              </ChooseYourParent>
              <FromOurOptionsWrapper>
                <FromOurOptions>from our options</FromOurOptions>
              </FromOurOptionsWrapper>
            </Heading27>
            <Section11>
              <Carousel
              //  autoPlay
              //   infiniteLoop
            showArrows={false}
                showStatus={false}
                showThumbs={false}
              >
                {carouselItems.map((each,i) => (
                  <div
                  key={i}
                    className="carousel"
                    style={{ height: "300px", width: "auto" }}
                  >
                    <div className="divelementor-widget-wrap12">
                      <div className="divelementor-widget-container-parent1">
                        <div className="divelementor-widget-container23">
                          <div className="images-bottels">
                            <img
                              className="list-iconsvg1"
                              alt=""
                              src="/listiconsvg1.svg"
                            />
                          </div>

                          <div className="units">{each.plasticBottles}</div>
                        </div>
                        <div className="divelementor-widget-container23">
                          <img
                            className="list-iconsvg1"
                            alt=""
                            src="/listiconsvg1.svg"
                          />
                          <div className="units">{each.units}</div>
                        </div>
                      </div>

                      <DivrtBtnEffectInfo1>
                        <Link3>
                          <Link to="/login">
                            {" "}
                            <Select>{`select `}</Select>{" "}
                          </Link>
                        </Link3>
                      </DivrtBtnEffectInfo1>

                      <div className="slide-div">
                        <img
                          className="litre-packaged-water-bottle-15-icon"
                          alt=""
                          src={each.imageSrc}
                        />
                      </div>

                      <div className="beginner-plastic-parent">
                        <div className="beginner-plastic">
                          {each.productType}
                        </div>
                        <b className="heading-3">{each.price}</b>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Section11>
          </Section10>
        </Plans>
        <Containertypes>
          <DivelementorWidgetWrap16>
            <Heading28>
              <TypesOf>{`Types Of `}</TypesOf>
              <Containers>Containers</Containers>
            </Heading28>
            <DivelementorWidgetContainer30>
              <SelectFromOur>Select from our range of containers</SelectFromOur>
            </DivelementorWidgetContainer30>
            <Section12>
              <DivelementorWidgetContainer31>
                <Plastic200mlPet>Plastic 200ml PET Bottles</Plastic200mlPet>
              </DivelementorWidgetContainer31>
              <DivelementorWidgetContainer32>
                <HardCardboard200>
                  Hard Cardboard 200 ml cartons
                </HardCardboard200>
              </DivelementorWidgetContainer32>
              <DivelementorWidgetContainer33>
                <Aluminum200mlBottles>
                  Aluminum 200ml Bottles
                </Aluminum200mlBottles>
              </DivelementorWidgetContainer33>
            </Section12>
          </DivelementorWidgetWrap16>
          <DivelementorWidgetWrapIcon1
            alt=""
            src="/divelementorwidgetwrap1.svg"
          />
        </Containertypes>
        <Footer id="contactus">
          <DivelementorWidgetWrap17>
            <Section13>
              <DivelementorWidgetWrap18>
                <GetInTouch>Get In Touch</GetInTouch>
                <DivrtBtnEffectInfo5>
                  <ContactUs1>Contact Us</ContactUs1>
                  <Link7 />
                </DivrtBtnEffectInfo5>
                <Section14>
                  <FrameIcon1 alt="" src="/frame.svg" />
                  <SpanelementorIconListText>
                    <GhaziabdIndia>Ghaziabad, India</GhaziabdIndia>
                  </SpanelementorIconListText>
                </Section14>
                <DivelementorWidgetContainer34>
                  <About>About Us</About>
                </DivelementorWidgetContainer34>
                <Link8>info@shareh2o.com</Link8>
              </DivelementorWidgetWrap18>
              <DivelementorWidgetWrap19>
                <Newsletter>Newsletter</Newsletter>
                <Section15>
                
                    <Divplaceholder>
                    <input placeholder="Email" className="newsletter-email" type="email"/>
                    </Divplaceholder>
           
                  <Input1>
                    <Newsletter1>Newsletter</Newsletter1>
                  </Input1>
                </Section15>
              </DivelementorWidgetWrap19>
            </Section13>
            <BottomNavSection>
              <Shareh2ologoRemovebgPreviewWrapper>
                <Shareh2ologoRemovebgPreviewIcon1
                  alt=""
                  src="/shareh2ologoremovebgpreview-13@2x.png"
                />
              </Shareh2ologoRemovebgPreviewWrapper>
              <DivelementorWidgetContainer35>
                <Shareh2oIsAn1>
                  ShareH2O is an innovative way to advertisement by creating a
                  win win situation for you and your target audience
                </Shareh2oIsAn1>
              </DivelementorWidgetContainer35>
            </BottomNavSection>
            <List>
              <ItemLinkFacebooksvg>
                <FacebooksvgIcon alt="" src="/facebooksvg.svg" />
              </ItemLinkFacebooksvg>
              <Icons8Twitter1 alt="" src="/icons8twitter-1.svg" />
              <ItemLinkFacebooksvg>
                <PinterestsvgIcon alt="" src="/pinterestsvg.svg" />
              </ItemLinkFacebooksvg>
              <ItemLinkFacebooksvg>
                <PinterestsvgIcon alt="" src="/instagramsvg.svg" />
              </ItemLinkFacebooksvg>
              <ItemLinkFacebooksvg>
                <PinterestsvgIcon alt="" src="/dribbblesvg.svg" />
              </ItemLinkFacebooksvg>
            </List>
            <EllipseShadow3webpIcon1 alt="" src="/ellipseshadow3webp1@2x.png" />
            <AllRightsReserved>
              <AllRightsReserved1>
                2023. All rights reserved.
              </AllRightsReserved1>
            </AllRightsReserved>
          </DivelementorWidgetWrap17>
        </Footer>
      </MobileDashboardH2oFinalllllRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeFrame}
        >
          <Frame onClose={closeFrame} change={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default MobileDashboardH2OFinalllll;
