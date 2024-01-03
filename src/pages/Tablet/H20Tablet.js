import { useState, useCallback } from "react";
import TabletHamburger from "../../components/TabletHamburger";
import PortalPopup from "../../components/PortalPopup";
import styled from "styled-components";
import "./index.css";
import Carousel from "components/company_animation/App";
import { Link } from "react-router-dom";
const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 166.3px;
  height: 138px;
  object-fit: cover;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PajamashamburgerIcon = styled.img`
  position: relative;
  width: 73.1px;
  height: 73.1px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;
const LogoParent = styled.div`
  position: absolute;
  top: 29px;
  left: calc(50% - 342px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 445px;
`;
const Header = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 196px;
`;
const Shareh2oIsAn = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 34.36px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 649.2px;
  height: 139.3px;
`;
const Body = styled.div`
  position: absolute;
  top: 104.4px;
  left: 0px;
  width: 649.2px;
  height: 139.3px;
`;
const ItsAMini = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 42.76px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  width: 432.1px;
  height: 104.4px;
`;
const SvgIcon = styled.img`
  position: absolute;
  top: 49.2px;
  left: calc(50% - 74.75px);
  width: 155.6px;
  height: 8.2px;
  overflow: hidden;
`;
const Title = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 432.1px;
  height: 104.4px;
  font-size: 36.86px;
  color: var(--color-white);
`;
const MainContainer1 = styled.div`
  position: relative;
  width: 649.2px;
  height: 243.7px;
`;
const OurProductIs = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 42.96px;
  text-transform: capitalize;
  font-weight: 600;
`;
const OurProductIsABlankWrapper = styled.div`
  position: relative;
  width: 326.1px;
  height: 43px;
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 37.44%;
  width: 96.51%;
  top: 101.63%;
  right: -1.1%;
  bottom: -39.07%;
  left: 4.59%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const CanvasParent = styled.div`
  position: relative;
  width: 108.9px;
  height: 43px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 492.5px;
  height: 59.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0.7672024965286255px;
  box-sizing: border-box;
`;
const OppositeOfTraditional = styled.div`
  position: relative;
  line-height: 38.45px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 643.1px;
  flex-shrink: 0;
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 59.8px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 2.047999858856201px;
  font-size: 24.58px;
  color: var(--color-lightsteelblue);
`;
const Section = styled.div`
  position: relative;
  width: 647.2px;
  height: 150px;
  font-size: 30.69px;
  color: var(--color-white);
`;
const MainContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32.77px;
`;
const EllipseShadow2webpIcon = styled.img`
  position: absolute;
  top: 17.6px;
  right: 0px;
  width: 355.4px;
  height: 355.4px;
  object-fit: cover;
`;
const Bottle1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 54.3px;
  width: 266px;
  height: 384.2px;
  object-fit: cover;
`;
const EllipseShadow2webpParent = styled.div`
  position: absolute;
  top: 469.4px;
  left: calc(50% - 177.25px);
  width: 355.4px;
  height: 384.2px;
`;
const MoreImpressionsThan = styled.div`
  position: absolute;
  top: calc(50% - 19.3px);
  left: calc(50% - 131.9px);
  line-height: 24.12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 263.7px;
  height: 58.9px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 45.1px;
  left: calc(50% - 132.1px);
  width: 264.2px;
  height: 43px;
`;
const CircleTicksvgIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 28.7px;
  height: 28.7px;
  overflow: hidden;
`;
const X = styled.div`
  position: absolute;
  top: 0.3px;
  left: 44.9px;
  line-height: 13.88px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 50.6px;
  height: 26.8px;
`;
const Divelement = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 190.5px;
  height: 28.7px;
  font-size: 28.67px;
  color: var(--color-white);
`;
const DivElementWrap = styled.div`
  position: relative;
  width: 264.2px;
  height: 88.1px;
`;
const CheaperPerTen = styled.div`
  position: absolute;
  top: calc(50% - 17.5px);
  left: calc(50% - 156.65px);
  line-height: 24.17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 313.2px;
  height: 77.4px;
`;
const DivelementorWidgetContainer2 = styled.div`
  position: absolute;
  top: 41px;
  left: calc(50% - 156.65px);
  width: 313.3px;
  height: 43px;
`;
const Rs300 = styled.div`
  position: absolute;
  top: -3.3px;
  left: 45.8px;
  line-height: 13.88px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 107px;
  height: 35.7px;
`;
const Divelement1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 149.5px;
  height: 24.6px;
  font-size: 28.67px;
  color: var(--color-white);
`;
const DivelementorWidgetContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 313.3px;
  height: 84px;
`;
const DivElementWap = styled.div`
  position: relative;
  width: 313.3px;
  height: 88.1px;
`;
const DivElementWrapParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 63.49px;
`;
const Section1 = styled.div`
  position: relative;
  width: 640.6px;
  height: 122px;
`;
const ReturnOnInvestment = styled.div`
  position: absolute;
  top: calc(50% - 19.5px);
  left: calc(50% - 132.1px);
  line-height: 24.12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 264.2px;
  height: 36.9px;
`;
const Div = styled.div`
  position: absolute;
  top: -3.6px;
  left: 43.1px;
  line-height: 13.88px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 63.7px;
  height: 32.1px;
`;
const SavingLivesAnd = styled.div`
  position: absolute;
  top: calc(50% - 17.2px);
  left: calc(50% - 156.65px);
  line-height: 24.17px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 313.2px;
  height: 55.4px;
`;
const Priceless = styled.div`
  position: absolute;
  top: -2.4px;
  left: 45.2px;
  line-height: 13.88px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 125px;
  height: 32.1px;
`;
const Section2 = styled.div`
  position: relative;
  width: 640.6px;
  height: 104.2px;
`;
const AdvertiseWithUs = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 10.25px);
  left: calc(50% - 104.45px);
  letter-spacing: 0.27px;
  line-height: 20.38px;
  text-transform: capitalize;
  font-weight: 500;
  z-index: 0;
`;
const Svg = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 6.15px);
  left: calc(50% + 86.05px);
  width: 11.5px;
  height: 10.2px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const Link00 = styled.div`
  border-radius: 33.96px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 20.38px rgba(0, 0, 0, 0.07);
  width: 262.1px;
  height: 57.3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 8.151143074035645px 30.56678581237793px 8.151143074035645px
    36.68014144897461px;
  box-sizing: border-box;
  position: relative;
  gap: 5.41px;
`;
const LinkHow = styled.div`
  position: relative;
  line-height: 24.63px;
  text-transform: capitalize;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 183.4px;
  height: 24.4px;
  flex-shrink: 0;
  z-index: 0;
`;
const SvgIcon1 = styled.img`
  position: absolute;
  margin: 0 !important;
  top: 18.4px;
  left: 199.6px;
  width: 30.9px;
  height: 15.5px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const DivrtArrowBtn = styled.div`
  border-radius: 43.98px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 0px 26.39px rgba(0, 0, 0, 0.07);
  width: 266.7px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12.287999153137207px 0px;
  box-sizing: border-box;
  position: relative;
  gap: 32.15px;
  font-size: 23.81px;
`;
const LinkParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 49.15px;
  font-size: 24.58px;
  color: var(--color-white);
`;
const SectionParent = styled.div`
  position: absolute;
  top: 913.3px;
  left: 4.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 49.15px;
  font-size: 23.81px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 324.45px);
  width: 648.9px;
  height: 1322.3px;
`;
const MainContainer = styled.div`
  position: absolute;
  top: 20.2px;
  left: calc(50% - 324.5px);
  width: 648.9px;
  height: 1322.3px;
`;
const Hero = styled.div`
  position: absolute;
  width: 100%;
  top: 196px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 1381px;
  color: var(--color-lightsteelblue);
`;
const DivelementorWidgetWrapIcon = styled.img`
  position: relative;
  border-radius: 17.51px;
  width: 454.7px;
  height: 421.4px;
`;
const HowToAdvertise = styled.div`
  position: relative;
  line-height: 34.64px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 323px;
  height: 31.7px;
  flex-shrink: 0;
`;
const WithUs = styled.div`
  position: relative;
  line-height: 34.64px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  width: 148.9px;
  height: 31.7px;
  flex-shrink: 0;
`;
const Heading21 = styled.div`
  width: 614.4px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.2371286153793335px 0px;
  box-sizing: border-box;
`;
const DistributeFreeIn = styled.div`
  position: absolute;
  top: 6.3px;
  left: 45.4px;
  line-height: 23.1px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 547.9px;
  height: 19px;
`;
const DivelementorWidgetContainer5 = styled.div`
  position: relative;
  width: 45.4px;
  height: 36.3px;
  background-image: url("/divelementorwidgetcontainer@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const AskUsTo = styled.div`
  position: absolute;
  top: 0px;
  left: 44.3px;
  line-height: 34.19px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 592.2px;
  height: 34.8px;
`;
const DivelementorWidgetContainer6 = styled.div`
  position: relative;
  width: 45.4px;
  height: 36.3px;
  background-image: url("/divelementorwidgetcontainer1@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
`;
const SellBottlesWith = styled.div`
  position: absolute;
  top: 5.8px;
  left: 45.4px;
  line-height: 23.1px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 384.5px;
  height: 20.6px;
`;
const DivelementorWidgetContainer7 = styled.div`
  position: relative;
  width: 45.4px;
  height: 36.3px;
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
  gap: 19px;
`;
const SectionInner = styled.div`
  width: 60.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 25.34px;
`;
const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 38px;
`;
const LearnMore = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -2.5px;
  left: 4.9px;
  line-height: 28.77px;
  text-transform: capitalize;
  font-weight: 500;
  z-index: 0;
`;
const Link1 = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const Section4 = styled.div`
  border-radius: 47.95px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 28.77px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.50817584991455px 42.86793899536133px 9.590145111083984px
    43.15565872192383px;
  font-size: 25.34px;
`;
const HowTo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 57.01px;
`;
const DivelementorWidgetWrapParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36.86px;
`;
const Container = styled.div`
  position: absolute;
  top: 41px;
  left: calc(50% - 307.2px);
  width: 614.4px;
  height: 759.7px;
`;
const Howto = styled.div`
  position: absolute;
  width: 100%;
  top: 1577px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 841.7px;
  font-size: var(--font-size-19xl);
`;
const Text1 = styled.div`
  position: absolute;
  top: 0.9px;
  left: 200.4px;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 19.2px;
  height: 20.4px;
`;
const Process1 = styled.div`
  position: relative;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 157.7px;
  height: 20.5px;
  flex-shrink: 0;
`;
const SvgIcon2 = styled.img`
  position: relative;
  width: 110.6px;
  height: 4.1px;
  overflow: hidden;
  flex-shrink: 0;
`;
const ProcessParent = styled.div`
  position: absolute;
  top: 2px;
  left: calc(50% - 99.4px);
  width: 200.7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8.19px;
  font-size: 32.77px;
`;
const Heading22 = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 101.3px);
  width: 202.8px;
  height: 49.2px;
`;
const SelectFromThe = styled.div`
  position: absolute;
  top: 1.6px;
  left: 0px;
  line-height: 22.78px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 276.4px;
  height: 111.1px;
`;
const DivelementorWidgetContainer8 = styled.div`
  position: absolute;
  top: 72.6px;
  left: calc(50% - 137.95px);
  width: 276.4px;
  height: 112.7px;
`;
const SelectYour = styled.div`
  position: absolute;
  top: calc(50% - 10.8px);
  left: 0px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
`;
const Package = styled.div`
  position: absolute;
  top: calc(50% - 10.8px);
  left: 127.9px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
`;
const DivrtTextappearLine30 = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 114.75px);
  width: 230px;
  height: 29px;
  font-size: 22.11px;
  color: var(--color-white);
`;
const Div1 = styled.div`
  position: absolute;
  top: -25.3px;
  left: 240px;
  font-size: 47.63px;
  line-height: 45.16px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-base-4);
  background-color: var(--color-gray-100);
  width: 300.1px;
  height: 209.5px;
`;
const Package1 = styled.div`
  position: absolute;
  top: calc(50% - 10.8px);
  left: 116.7px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
`;
const DivrtTextappearLine301 = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 114.95px);
  width: 230px;
  height: 29px;
  font-size: 22.11px;
  color: var(--color-white);
`;
const Div2 = styled.div`
  position: absolute;
  top: -25.3px;
  left: 235.3px;
  font-size: 47.63px;
  line-height: 45.16px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const DivelementorWidgetWrap1 = styled.div`
  position: absolute;
  top: 0px;
  left: 323.9px;
  border-radius: var(--br-base-4);
  background-color: var(--color-gray-100);
  width: 300.1px;
  height: 209.5px;
`;
const DivelementorWidgetWrapGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 623.9px;
  height: 209.5px;
`;
const Section1Child = styled.img`
  position: absolute;
  top: 233px;
  left: calc(50% - 19.05px);
  width: 38.1px;
  height: 14.3px;
`;
const Section11 = styled.div`
  position: relative;
  width: 623.9px;
  height: 257.7px;
  flex-shrink: 0;
`;
const SelectTag = styled.div`
  position: absolute;
  top: calc(50% - 10.3px);
  left: 0px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
`;
const Designs = styled.div`
  position: absolute;
  top: calc(50% - 10.3px);
  left: 120.9px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
`;
const DivrtTextappearLine302 = styled.div`
  position: absolute;
  top: 20.2px;
  left: calc(50% - 106.55px);
  width: 213.7px;
  height: 22px;
  font-size: 22.11px;
  color: var(--color-white);
`;
const Div3 = styled.div`
  position: absolute;
  top: -25.3px;
  left: 232.9px;
  font-size: 47.63px;
  line-height: 45.16px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Receive = styled.div`
  position: absolute;
  top: calc(50% - 9.55px);
  left: 0px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
`;
const VideoClients = styled.div`
  position: absolute;
  top: calc(50% - 9.55px);
  left: 88.7px;
  line-height: 18.47px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  width: 167.9px;
`;
const ReceiveParent = styled.div`
  position: absolute;
  top: 4.8px;
  left: calc(50% - 127.95px);
  width: 256.6px;
  height: 19.1px;
`;
const DivrtTextappearLine303 = styled.div`
  position: absolute;
  top: 20.2px;
  left: calc(50% - 114.95px);
  width: 242.9px;
  height: 28.6px;
  font-size: 22.11px;
  color: var(--color-white);
`;
const Div4 = styled.div`
  position: absolute;
  top: -25.3px;
  left: 231.1px;
  font-size: 47.63px;
  line-height: 45.16px;
  font-weight: 500;
  color: var(--color-darkslategray);
`;
const Section2Child = styled.img`
  position: absolute;
  top: 247.9px;
  left: calc(50% + 19.05px);
  width: 38.1px;
  height: 14.3px;
`;
const Section21 = styled.div`
  position: relative;
  width: 623.9px;
  height: 257.8px;
  flex-shrink: 0;
`;
const MainSection = styled.div`
  position: absolute;
  top: calc(50% - 118.25px);
  left: calc(50% - 315px);
  width: 640.5px;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 30.958139419555664px 0px;
  box-sizing: border-box;
  gap: 23.81px;
  z-index: 100;
  font-size: 16.85px;
  color: var(--color-lightsteelblue);
`;
const ProcessContainer = styled.div`
  // position: absolute;
  top: 20.5px;
  // left: calc(50% - 226.2px);
  width: 452.6px;
  height: 438.3px;
  overflow-x: auto;
`;
const Process = styled.div`
  position: absolute;
  width: 100%;
  top: 2414px;
  right: 0px;
  left: 0px;
  z-index: 100;
  background-color: var(--color-gray-200);
  height: 525.1px;
  font-size: var(--font-size-base);
`;
const Advantages1 = styled.div`
  position: absolute;
  top: calc(50% - 21.55px);
  left: calc(50% - 95.2px);
  line-height: 22.39px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 190.4px;
  height: 43px;
`;
const Heading23 = styled.div`
  position: relative;
  width: 210.8px;
  height: 47.1px;
`;
const SvgIcon3 = styled.img`
  position: relative;
  width: 190.4px;
  height: 47.6px;
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
  gap: 2.05px;
`;
const Section5 = styled.div`
  position: absolute;
  top: 16.4px;
  left: calc(50% - 105.4px);
  width: 210.8px;
  height: 96.7px;
`;
const EllipseShadow2webpIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 91.05px);
  left: calc(50% - 371px);
  width: 171.9px;
  height: 180.7px;
  object-fit: cover;
`;
const FlexibleIconsvg = styled.img`
  position: absolute;
  top: 8.2px;
  left: 221.1px;
  width: 51.2px;
  height: 48.2px;
  overflow: hidden;
`;
const SelectQuantityAnd = styled.div`
  position: absolute;
  top: calc(50% - 66.5px);
  left: calc(50% - 133.05px);
  line-height: 24.84px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 266.1px;
  height: 133px;
`;
const DivelementorWidgetContainer12 = styled.div`
  position: absolute;
  top: calc(50% - 39.9px);
  left: calc(50% - 132px);
  width: 266.1px;
  height: 133px;
`;
const FlexibleOption = styled.div`
  position: absolute;
  top: calc(50% - 16.35px);
  left: calc(50% - 93.15px);
  line-height: 26.89px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 186.3px;
  height: 30.7px;
`;
const DivrtTextappearLine76 = styled.div`
  position: absolute;
  top: 8.2px;
  left: calc(50% - 132px);
  width: 186.3px;
  height: 49.1px;
  font-size: 24.56px;
  color: var(--color-orange);
`;
const DivelementorWidgetWrap4 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 306px);
  border-radius: 17.84px;
  background-color: var(--color-gray-100);
  width: 296.8px;
  height: 202.6px;
`;
const PolicyIconsvg = styled.img`
  position: absolute;
  top: 6.1px;
  left: 188.3px;
  width: 55px;
  height: 53.6px;
  overflow: hidden;
`;
const DivelementorWidgetWrap5 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% + 9.2px);
  border-radius: 17.84px;
  background-color: var(--color-gray-100);
  width: 296.8px;
  height: 202.6px;
`;
const TopSection = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 612px;
  height: 202.6px;
`;
const Distribution = styled.div`
  position: absolute;
  top: calc(50% - 16.35px);
  left: calc(50% - 93.15px);
  line-height: 26.89px;
  text-transform: capitalize;
  font-weight: 600;
`;
const OnlineServiceIconsvg = styled.img`
  position: absolute;
  top: 11.9px;
  left: 203.4px;
  width: 50.4px;
  height: 51.7px;
  overflow: hidden;
`;
const TransparentPolicy = styled.div`
  position: absolute;
  top: calc(50% - 16.4px);
  left: calc(50% - 93.15px);
  line-height: 26.89px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 186.3px;
  height: 30.7px;
`;
const DivrtTextappearLine763 = styled.div`
  position: absolute;
  top: 8.2px;
  left: calc(50% - 132px);
  width: 186.3px;
  height: 61.4px;
  font-size: 24.56px;
  color: var(--color-orange);
`;
const DownSection = styled.div`
  position: absolute;
  top: 235.4px;
  left: 0px;
  width: 612px;
  height: 202.6px;
`;
const Section6 = styled.div`
  position: absolute;
  top: 147.4px;
  left: calc(50% - 305.9px);
  width: 612px;
  height: 438px;
  font-size: 20.47px;
  color: var(--color-lightsteelblue);
`;
const Advantages = styled.div`
  position: absolute;
  width: calc(100% - 0.4px);
  top: 2937px;
  right: 0.4px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 650.9px;
  font-size: 32.75px;
`;
const Icon = styled.img`
  position: relative;
  width: 129.6px;
  height: 46.3px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon1 = styled.img`
  position: relative;
  width: 220.8px;
  height: 35.8px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon2 = styled.img`
  position: relative;
  width: 118.9px;
  height: 35.8px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon3 = styled.img`
  position: relative;
  width: 267.3px;
  height: 39.6px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon4 = styled.img`
  position: relative;
  width: 175.8px;
  height: 46.3px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Icon5 = styled.img`
  position: relative;
  width: 135.9px;
  height: 35.8px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 71.4px;
`;
const Trusted = styled.div`
  position: absolute;
  top: 8.2px;
  left: 22.5px;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 118.8px;
  height: 41px;
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
  top: 12.3px;
  left: 155.3px;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 139.3px;
  height: 34.8px;
  color: #aaa;
`;
const Heading24 = styled.div`
  position: absolute;
  top: calc(50% - 72.7px);
  left: calc(50% - 152.6px);
  width: 305.2px;
  height: 57.3px;
`;
const Partners = styled.div`
  position: absolute;
  width: 100%;
  top: 3588px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 160.8px;
  font-size: 32.77px;
  align-items:"center";
`;
const SvgIcon4 = styled.img`
  position: absolute;
  top: -62.8px;
  left: calc(50% + 17.4px);
  width: 169.9px;
  height: 169.9px;
  overflow: hidden;
`;
const Rectangle3svgIcon = styled.img`
  position: absolute;
  top: calc(50% - 12.2px);
  left: calc(50% - 12.2px);
  width: 33.2px;
  height: 33.2px;
  overflow: hidden;
`;
const Step1 = styled.div`
  position: absolute;
  top: 6px;
  left: 87.2px;
  line-height: 19.18px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer16 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 219.4px;
  height: 29.6px;
`;
const Increase = styled.div`
  position: absolute;
  top: 0.3px;
  left: calc(50% - 43.3px);
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86.3px;
  height: 15.5px;
`;
const Spanline = styled.div`
  position: absolute;
  width: calc(100% - 71.4px);
  right: 36.2px;
  bottom: 0.7px;
  left: 35.2px;
  background-color: var(--color-orange);
  height: 1px;
`;
const FootTraffic = styled.div`
  position: absolute;
  top: 20.2px;
  left: 23.9px;
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 101.8px;
  height: 15.5px;
`;
const DivrtTextappearLine5 = styled.div`
  position: absolute;
  top: 44.9px;
  left: calc(50% - 69.4px);
  width: 138.8px;
  height: 41.8px;
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  width: calc(100% - 439px);
  top: 0px;
  right: 439px;
  left: 0px;
  border-radius: 15.31px;
  height: 105.2px;
`;
const DivelementorWidgetContainer17 = styled.div`
  position: absolute;
  top: 76.7px;
  left: calc(50% - 109.7px);
  width: 219.4px;
  height: 28.6px;
`;
const SvgIcon5 = styled.img`
  position: absolute;
  top: -73px;
  left: calc(50% + 19.4px);
  width: 169.9px;
  height: 169.9px;
  overflow: hidden;
`;
const Rectangle3svgIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 16.7px);
  left: calc(50% - 16.9px);
  width: 33.2px;
  height: 33.2px;
  overflow: hidden;
`;
const Step2 = styled.div`
  position: absolute;
  top: 7.6px;
  left: 79.5px;
  line-height: 14.29px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59.8px;
  height: 13.3px;
`;
const Improve = styled.div`
  position: absolute;
  top: 1.7px;
  left: 1px;
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75.3px;
  height: 15.5px;
`;
const Spanline1 = styled.div`
  position: absolute;
  width: calc(100% - 103.1px);
  right: 20.2px;
  bottom: 11.7px;
  left: 82.9px;
  background-color: var(--color-orange);
  height: 1px;
`;
const Sales = styled.div`
  position: absolute;
  top: 1.7px;
  left: 65.2px;
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68.6px;
  height: 17.7px;
`;
const DivrtTextappearLine46 = styled.div`
  position: absolute;
  top: 43.6px;
  left: calc(50% - 68.9px);
  width: 137.8px;
  height: 34.3px;
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  width: calc(100% - 439px);
  top: 0px;
  right: 219.6px;
  left: 219.4px;
  border-radius: 15.31px;
  height: 105.2px;
`;
const BlankLine = styled.p`
  margin: 0;
`;
const Text11 = styled.div`
  position: absolute;
  top: 1.5px;
  left: 22.3px;
  line-height: 14.29px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 175px;
  height: 25px;
`;
const DivelementorWidgetContainer19 = styled.div`
  position: absolute;
  top: 76.7px;
  left: calc(50% - 109.7px);
  width: 219.4px;
  height: 28.6px;
  font-size: 8.17px;
  color: var(--color-lightsteelblue);
`;
const Rectangle3svgIcon2 = styled.img`
  position: absolute;
  top: calc(50% - 16.7px);
  left: calc(50% - 17.2px);
  width: 33.2px;
  height: 33.2px;
  overflow: hidden;
`;
const Step3 = styled.div`
  position: absolute;
  top: 7.6px;
  left: 81.4px;
  line-height: 14.29px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55.4px;
  height: 13.3px;
`;
const GainAmazing = styled.div`
  position: absolute;
  top: -0.6px;
  left: 11.8px;
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 119.6px;
  height: 15.5px;
`;
const Spanline2 = styled.div`
  position: absolute;
  width: calc(100% - 119.9px);
  right: 61.5px;
  bottom: 7.7px;
  left: 58.4px;
  background-color: var(--color-orange);
  height: 1px;
`;
const Pr = styled.div`
  position: absolute;
  top: 17.2px;
  left: 49.4px;
  line-height: 17.15px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38.2px;
  height: 15.3px;
`;
const DivrtTextappearLine65 = styled.div`
  position: absolute;
  top: 43.6px;
  left: calc(50% - 68.9px);
  width: 137.8px;
  height: 43.4px;
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  width: calc(100% - 439px);
  top: 0px;
  right: 0.1px;
  left: 438.9px;
  border-radius: 15.31px;
  height: 105.2px;
`;
const BenefitsOfAdvertising = styled.div`
  position: absolute;
  top: 1.8px;
  left: 0px;
  line-height: 49.86px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 439px;
  height: 45.4px;
`;
const With = styled.div`
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 37.49%;
  top: 0%;
  left: 0%;
  line-height: 49.86px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;
const Shareh2o = styled.div`
  position: absolute;
  margin: 0 !important;
  height: 100%;
  width: 57.66%;
  top: 0%;
  left: 37.49%;
  line-height: 49.86px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding-left: 140px;
`;
const WithParent = styled.div`
  position: absolute;
  top: 51.6px;
  left: 83.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8.903783798217773px 13.355672836303711px;
  gap: 1.78px;
`;
const Heading25 = styled.div`
  position: absolute;
  top: -128.7px;
  left: calc(50% - 218.5px);
  width: 439px;
  height: 117.5px;
  font-size: 35.62px;
`;
const Section7 = styled.div`
  position: absolute;
  top: 164.9px;
  left: calc(50% - 328.4px);
  width: 658.4px;
  height: 105.2px;
`;
const DivtestimonialDataIcon = styled.img`
  position: absolute;
  top: 15.9px;
  left: calc(50% - 140.9px);
  width: 264px;
  height: 74.2px;
`;
const OurBrandHas = styled.div`
  position: absolute;
  top: calc(50% - 29.65px);
  left: calc(50% - 125.85px);
  line-height: 17.9px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 253.7px;
  height: 61.4px;
`;
const Blockquote = styled.div`
  position: absolute;
  top: 34.8px;
  left: calc(50% - 124.8px);
  width: 251.7px;
  height: 75.7px;
`;
const Avatar2jpgIcon = styled.img`
  position: absolute;
  top: calc(50% - 19.15px);
  left: calc(50% - 108.2px);
  border-radius: 19.17px;
  width: 38.3px;
  height: 38.3px;
  object-fit: cover;
`;
const JackMgomes = styled.div`
  position: absolute;
  top: 2.5px;
  left: 45.6px;
  line-height: 17.53px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 120.7px;
  height: 12.3px;
`;
const MyntraCeo = styled.div`
  position: absolute;
  top: 22.9px;
  left: 45.6px;
  font-size: 12.28px;
  line-height: 13.42px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  width: 83.9px;
  height: 10.2px;
`;
const DivtestimonialTitle = styled.div`
  position: absolute;
  width: calc(100% - 66px);
  top: 124.4px;
  right: 44.1px;
  left: 21.9px;
  height: 38.3px;
  overflow: hidden;
  font-size: 16.37px;
`;
const Divholder = styled.div`
  position: absolute;
  top: 8.2px;
  left: 8.2px;
  border-radius: 10.96px;
  background-color: rgba(0, 0, 0, 0.63);
  box-shadow: 0px 0px 10.96px rgba(0, 0, 0, 0.06);
  width: 282.4px;
  height: 180.1px;
  overflow: hidden;
`;
const Divtestimonial3 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 298.75px);
  width: 298.8px;
  height: 188.3px;
  overflow: hidden;
`;
const DropUsAn = styled.div`
  position: absolute;
  top: calc(50% - 29.7px);
  left: calc(50% - 140.2px);
  line-height: 19.43px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 280.4px;
  height: 57.3px;
`;
const DivelementorWidgetContainer21 = styled.div`
  position: absolute;
  top: 69.6px;
  left: calc(50% - 131px);
  width: 280.4px;
  height: 79.8px;
`;
const WeCareAbout = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: 1px;
  line-height: 30.68px;
  text-transform: capitalize;
  font-weight: 600;
  z-index: 0;
`;
const WeCareAboutWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 0.5px;
  width: 253.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Client = styled.div`
  position: relative;
  line-height: 30.68px;
  text-transform: capitalize;
  font-weight: 600;
`;
const ClientWrapper = styled.div`
  position: absolute;
  top: 33.3px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Satisfaction = styled.div`
  position: relative;
  line-height: 30.68px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 145.3px;
  height: 28.6px;
  flex-shrink: 0;
`;
const Spanline3 = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 143.2px;
  height: 2px;
`;
const SatisfactionParent = styled.div`
  position: absolute;
  top: 33.3px;
  left: 77px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Heading26 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 133.3px);
  width: 264px;
  height: 61.4px;
  font-size: 24.56px;
`;
const ContactUs = styled.div`
  position: absolute;
  margin: 0 !important;
  top: -0.4px;
  left: 4px;
  line-height: 16.43px;
  text-transform: capitalize;
  font-weight: 500;
  z-index: 0;
`;
const Link2 = styled.div`
  margin: 0 !important;
  position: absolute;
  top: calc(50% - 7.7px);
  left: calc(50% - 46.95px);
  width: 94.1px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 0;
`;
const DivrtBtnEffectInfo = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 72.7px);
  border-radius: 27.39px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 16.43px rgba(0, 0, 0, 0.07);
  width: 147.3px;
  height: 36.8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6.573531150817871px 24.48639678955078px 5.477941989898682px
    24.650737762451172px;
  box-sizing: border-box;
`;
const Section9 = styled.div`
  position: absolute;
  top: 153.5px;
  left: calc(50% - 149.4px);
  width: 202.6px;
  height: 36.8px;
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  width: calc(100% - 298.7px);
  top: calc(50% - 97.25px);
  right: -0.1px;
  left: 298.8px;
  border-radius: 16.43px;
  height: 194.4px;
  font-size: 16.37px;
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: calc(50% - 98.6px);
  left: calc(50% - 298.15px);
  width: 597.5px;
  height: 198.5px;
`;
const Section8 = styled.div`
  position: absolute;
  top: calc(50% + 4.1px);
  left: calc(50% - 303.9px);
  border-radius: 18.87px;
  width: 608.5px;
  height: 238.2px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: 10.23px;
`;
const EllipseShadow3webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 382.7px);
  left: calc(50% + 185.2px);
  width: 198.1px;
  height: 160.8px;
  object-fit: cover;
`;
const Benefits = styled.div`
  position: absolute;
  width: calc(100% - 0.6px);
  top: 3749px;
  right: 0.6px;
  left: 0px;
  background-color: var(--color-gray-100);
  height: 618px;
  text-align: center;
  font-size: 17.71px;
`;
const Ellipse2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 182.8px);
  left: calc(50% - 370.8px);
  width: 203.6px;
  height: 172px;
  object-fit: cover;
`;
const ChooseYour = styled.div`
  position: relative;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176.1px;
  height: 28.7px;
  flex-shrink: 0;
  z-index: 0;
`;
const Plan = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 2px;
  left: 189.8px;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65.5px;
  height: 26.6px;
  flex-shrink: 0;
  z-index: 1;
`;
const ChooseYourParent = styled.div`
  width: 256px;
  height: 28.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  z-index: 0;
`;
const FromOurOptions = styled.div`
  position: relative;
  line-height: 22.4px;
  text-transform: capitalize;
  font-weight: 600;
`;
const FromOurOptionsWrapper = styled.div`
  margin: 0 !important;
  position: absolute;
  top: 36.9px;
  left: 4.1px;
  width: 251.9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 0.8px;
  left: calc(50% - 130px);
  width: 260.1px;
  height: 63.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 4.799998760223389px;
  box-sizing: border-box;
  gap: 2px;
`;
const ListIconsvg = styled.img`
  position: absolute;
  top: calc(50% - 8.6px);
  left: 2px;
  width: 12.3px;
  height: 12.3px;
  overflow: hidden;
`;
const PlasticBottles = styled.div`
  position: absolute;
  top: 1.2px;
  left: 20.5px;
  font-size: 14px;
  line-height: 11.2px;
  font-weight: 500;
`;
const DivelementorWidgetContainer22 = styled.div`
  position: relative;
  width: 135.2px;
  height: 18.4px;
`;
const ListIconsvg1 = styled.img`
  position: absolute;
  top: calc(50% - 7.1px);
  left: 2px;
  width: 12.3px;
  height: 12.3px;
  overflow: hidden;
`;
const Units = styled.div`
  position: absolute;
  font-size: 13px;
  top: -2px;
  left: 18.4px;
  line-height: 11.2px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 120.8px;
  height: 12.3px;
`;
const DivelementorWidgetContainer23 = styled.div`
  position: relative;
  width: 145.4px;
  height: 10.2px;
`;
const FrameDiv = styled.div`
  position: absolute;
  top: 186.4px;
  left: 14.3px;
  width: 147.5px;
  height: 41px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.0480000972747803px;
  box-sizing: border-box;
  gap: 8.19px;
  text-align: left;
`;
const Select = styled.div`
  position: relative;
  line-height: 18.98px;
  text-transform: capitalize;
  font-weight: 500;
`;
const Link3 = styled.div`
  width: 84.2px;
  height: 22.7px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const DivrtBtnEffectInfo1 = styled.div`
  position: absolute;
  top: 264.2px;
  left: calc(50% - 77.5px);
  border-radius: 31.63px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 18.98px rgba(0, 0, 0, 0.07);
  width: 155.5px;
  height: 42.1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6.325601577758789px 27.8326416015625px;
  box-sizing: border-box;
  font-size: 25.91px;
`;
const LitrePackagedWaterBottle15Icon = styled.img`
  position: absolute;
  top: 63.5px;
  left: calc(50% - 59.4px);
  width: 118.7px;
  height: 118.7px;
  object-fit: cover;
`;
const BeginnerPlastic = styled.div`
  position: relative;
  line-height: 11.2px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 159.7px;
  height: 12.3px;
  flex-shrink: 0;
`;
const Heading3 = styled.b`
  position: relative;
  font-size: 24.58px;
  letter-spacing: -0.35px;
  line-height: 15.36px;
  display: flex;
  font-family: var(--font-space-grotesk);
  text-align: left;
  align-items: center;
  width: 118.8px;
  height: 16.4px;
  flex-shrink: 0;
`;
const BeginnerPlasticParent = styled.div`
  position: absolute;
  top: 6.1px;
  left: calc(50% - 84px);
  width: 170px;
  height: 53.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4.0960001945495605px 0px;
  box-sizing: border-box;
  gap: 18.43px;
  font-size: 20.48px;
`;
const DivelementorWidgetWrap12 = styled.div`
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--color-gray-100);
  width: 204.8px;
  height: 247.8px;
`;
const Istockphoto484192249612x612Icon = styled.img`
  position: absolute;
  top: 67.2px;
  left: calc(50% - 65.5px);
  width: 129.5px;
  height: 113px;
  object-fit: cover;
`;
const DivelementorWidgetWrap1Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 40.959999084472656px;
  gap: 41.67px;
`;
const DivelementorWidgetContainerParent2 = styled.div`
  position: absolute;
  top: 186.4px;
  left: 14.3px;
  width: 178.2px;
  height: 41px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.0480000972747803px;
  box-sizing: border-box;
  gap: 8.19px;
  text-align: left;
`;
const Screenshot20230930193338RIcon = styled.img`
  position: absolute;
  top: 67.6px;
  left: calc(50% - 24.6px);
  width: 49.3px;
  height: 108.5px;
  object-fit: cover;
`;
const BeginnerCarton = styled.div`
  position: relative;
  line-height: 11.2px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 12.3px;
  flex-shrink: 0;
`;
const BeginnerCartonParent = styled.div`
  position: absolute;
  top: 6.1px;
  left: calc(50% - 88.1px);
  width: 178.2px;
  height: 53.2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4.0960001945495605px 0px;
  box-sizing: border-box;
  gap: 18.43px;
  font-size: 20.48px;
`;
const DivelementorWidgetContainerParent3 = styled.div`
  position: absolute;
  top: 186.4px;
  left: 14.3px;
  width: 180.2px;
  height: 41px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 2.0480000972747803px;
  box-sizing: border-box;
  gap: 8.19px;
  text-align: left;
`;
const I290421638SorryJadenYourIcon = styled.img`
  position: absolute;
  top: 66.3px;
  left: calc(50% - 34.8px);
  width: 70.9px;
  height: 108.4px;
  object-fit: cover;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 131.1px;
  left: calc(50% - 309.6px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 14.883721351623535px 43.00800323486328px;
  gap: 102.4px;
  font-size: 16.38px;
`;
const Section10 = styled.div`
  position: absolute;
  width: 100%;
  top: 30.7px;
  right: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  height: 827.4px;
`;
const Plans = styled.div`
  position: absolute;
  width: 100%;
  top: 4367px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 858.1px;
  text-align: center;
  font-size: 28.67px;
`;
const TypesOf = styled.div`
  position: absolute;
  top: 0px;
  left: -2px;
  line-height: 25.78px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 127px;
  height: 24.6px;
`;
const Containers = styled.div`
  position: absolute;
  top: 2px;
  left: 124.9px;
  line-height: 25.78px;
  text-transform: capitalize;
  font-weight: 600;
  color: var(--color-aquamarine);
  display: flex;
  align-items: center;
  width: 153.6px;
  height: 22.5px;
`;
const Heading28 = styled.div`
  position: absolute;
  top: 26.6px;
  left: calc(50% - 140.25px);
  width: 280.6px;
  height: 26.6px;
  font-size: 28.67px;
`;
const SelectFromOur = styled.div`
  position: relative;
  line-height: 12.89px;
  font-weight: 500;
`;
const DivelementorWidgetContainer30 = styled.div`
  position: absolute;
  top: 82.2px;
  left: calc(50% - 148.85px);
  width: 297.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1.3808473348617554px 0px;
  box-sizing: border-box;
  color: var(--color-lightsteelblue);
`;
const Plastic200mlPet = styled.div`
  position: absolute;
  top: 4.9px;
  left: calc(50% - 109.8px);
  line-height: 19.53px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer31 = styled.div`
  position: absolute;
  top: 13.9px;
  left: 11.9px;
  width: 248.2px;
  height: 29.3px;
`;
const HardCardbord200 = styled.div`
  position: absolute;
  top: 2.1px;
  left: calc(50% - 107.5px);
  line-height: 19.53px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer32 = styled.div`
  position: absolute;
  top: 53.7px;
  left: 11.9px;
  width: 244.8px;
  height: 23.7px;
`;
const Aluminum200mlBottles = styled.div`
  position: absolute;
  top: 4.9px;
  left: calc(50% - 107.5px);
  line-height: 19.53px;
  text-transform: capitalize;
  font-weight: 600;
`;
const DivelementorWidgetContainer33 = styled.div`
  position: absolute;
  top: 87.9px;
  left: 11.9px;
  width: 244.8px;
  height: 29.3px;
`;
const Section13 = styled.div`
  position: absolute;
  top: 120.8px;
  left: calc(50% - 134.15px);
  border-radius: 20.92px;
  width: 272px;
  height: 131.1px;
`;
const DivelementorWidgetWrap16 = styled.div`
  position: absolute;
  top: 0.2px;
  left: -0.2px;
  border-radius: 13.81px;
  width: 316.7px;
  height: 323.3px;
`;
const DivelementorWidgetWrapIcon1 = styled.img`
  position: absolute;
  top: -6.4px;
  left: 315.4px;
  border-radius: 13.81px;
  width: 321.7px;
  height: 330.9px;
`;
const Section12 = styled.div`
  position: absolute;
  top: calc(50% - 161.8px);
  left: calc(50% - 312.3px);
  width: 624.1px;
  height: 324.5px;
`;
const Containertypes = styled.div`
  position: absolute;
  width: 100%;
  top: 5225px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
  height: 356.4px;
  font-size: 17.86px;
`;
const GetInTouch = styled.div`
  position: relative;
  line-height: 39.94px;
  text-transform: capitalize;
  font-weight: 600;
`;
const ContactUs1 = styled.div`
  position: absolute;
  top: 0px;
  left: 25.7px;
  line-height: 42.79px;
  text-transform: capitalize;
  font-weight: 500;
`;
const Link7 = styled.div`
  position: absolute;
  top: calc(50% - 3.55px);
  left: calc(50% + 100.6px);
  overflow: hidden;
`;
const DivrtBtnEffectInfo5 = styled.div`
  position: relative;
  border-radius: 71.32px;
  background-color: var(--color-firebrick);
  box-shadow: 0px 0px 42.79px rgba(0, 0, 0, 0.07);
  width: 172.6px;
  height: 47.1px;
  font-size: 22.82px;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 7.1px;
  left: 0px;
  width: 35.5px;
  height: 35.5px;
`;
const GhaziabdIndia = styled.div`
  position: relative;
  line-height: 49.69px;
  text-transform: capitalize;
  font-weight: 500;
`;
const SpanelementorIconListText = styled.div`
  position: absolute;
  top: calc(50% - 25.05px);
  left: calc(50% - 105.5px);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 4.40069055557251px 0px 8.872374534606934px;
`;
const Section15 = styled.div`
  position: relative;
  width: 300.8px;
  height: 49.7px;
  font-size: 28.39px;
`;
const About = styled.div`
  position: absolute;
  top: 5.5px;
  left: 0.2px;
  line-height: 51.71px;
  text-transform: capitalize;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 247.5px;
  height: 38.8px;
`;
const DivelementorWidgetContainer34 = styled.div`
  position: relative;
  width: 221.2px;
  height: 43px;
  overflow: hidden;
  flex-shrink: 0;
  font-size: 29.55px;
`;
const Link8 = styled.div`
  position: relative;
  font-size: 30.73px;
  line-height: 53.78px;
  font-weight: 500;
  color: var(--color-firebrick);
`;
const DivelementorWidgetWrap18 = styled.div`
  width: 446.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 14.34px;
`;
const Newsletter = styled.div`
 position: absolute;
  top:320px;
  line-height: 32.94px;
  text-transform: capitalize;
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 235.5px;
  height: 28.7px;
  flex-shrink: 0;
`;
const EnterEmail = styled.div`
  position: absolute;
  top: -0.1px;
  left: -1px;
  display: flex;
  align-items: center;
  width: 131.1px;
  height: 24.6px;
`;
const Divplaceholder = styled.div`
  position: absolute;
  top: 20.6px;
  left: 23.5px;
  width: 148.7px;
  height: 24.7px;
  overflow: hidden;
`;
const Input = styled.div`
  position: absolute;
  top: 0.8px;
  left: 0px;
  border-radius: 47.06px;
  background-color: var(--color-white);
  width: 454.7px;
  height: 65.5px;
`;
const Newsletter1 = styled.div`
  position: absolute;
  top: 19.2px;
  left: 30.1px;
  line-height: 32.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131.1px;
  height: 26.6px;
`;
const Input1 = styled.div`
  position: absolute;
  width: calc(100% - 202.8px);
  right: 0px;
  bottom: -0.8px;
  left: 202.8px;
  border-radius: 47.06px;
  background-color: #00838f;
  height: 65.5px;
  text-align: center;
  color: var(--color-white);
`;
const Section16 = styled.div`
  position: absolute;
  top: 380px;
  width: 464.9px;
  height: 65.5px;
  color: #757575;
`;
const DivelementorWidgetWrap19 = styled.div`
  width: 571.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2.352834939956665px 0px;
  box-sizing: border-box;
  gap: 26.62px;
  font-size: 24.58px;
`;
const Section14 = styled.div`
  position: absolute;
  top: 297px;
  left: calc(50% - 307.2px);
  width: 614.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 98.3px;
`;
const Shareh2ologoRemovebgPreviewIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 63.5px);
  left: calc(50% - 66.45px);
  width: 132.9px;
  height: 127px;
  object-fit: cover;
`;
const Shareh2ologoRemovebgPreviewWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 132.9px;
  height: 127px;
`;
const Shareh2oIsAn1 = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  line-height: 31.68px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 606.2px;
  height: 147.5px;
`;
const DivelementorWidgetContainer35 = styled.div`
  position: absolute;
  top: 137.2px;
  left: 0px;
  width: 606.2px;
  height: 149.5px;
  font-size: 24.58px;
`;
const SectionGroup = styled.div`
  position: absolute;
  top: 32.8px;
  left: calc(50% - 307.2px);
  width: 614.4px;
  height: 812.6px;
`;
const FacebooksvgIcon = styled.img`
  position: relative;
  width: 55.6px;
  height: 55.6px;
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
  width: 56.5px;
  height: 56.5px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PinterestsvgIcon = styled.img`
  position: relative;
  width: 52.6px;
  height: 55.6px;
  overflow: hidden;
  flex-shrink: 0;
`;
const List = styled.div`
  position: absolute;
  top: 890.9px;
  left: calc(50% - 206.6px);
  width: 413.7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 9.661393165588379px 0px 6.6742939949035645px;
  box-sizing: border-box;
  gap: 32.67px;
`;
const EllipseShadow3webpIcon1 = styled.img`
  position: absolute;
  top: calc(50% - 102px);
  left: calc(50% - 384px);
  width: 152.8px;
  height: 140px;
  object-fit: cover;
`;
const AllRightsReserved1 = styled.div`
  position: relative;
  line-height: 12.51px;
  font-weight: 500;
`;
const AllRightsReserved = styled.div`
  position: absolute;
  top: 1012.9px;
  left: calc(50% - 149.4px);
  width: 299px;
  height: 28.7px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 6.253024101257324px;
  box-sizing: border-box;
  font-size: 24.58px;
  font-family: var(--font-dm-sans);
`;
const DivelementorWidgetWrap17 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 1083.4px;
`;
const Footer = styled.div`
  position: absolute;
  width: 100%;
  top: 5581px;
  right: 0px;
  left: 0px;
  background-color: #1e1e1e;
  height: 1083.4px;
  font-size: 26.62px;
`;
const H20TabletRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 6664px;
  overflow: hidden;
  text-align: left;
  font-size: 24.58px;
  color: var(--color-white);
  font-family: var(--font-plus-jakarta-sans);
`;

const H20Tablet = () => {
  const [isTabletHamburgerOpen, setTabletHamburgerOpen] = useState(false);

  const openTabletHamburger = useCallback(() => {
    setTabletHamburgerOpen(true);
  }, []);

  const closeTabletHamburger = useCallback(() => {
    setTabletHamburgerOpen(false);
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <H20TabletRoot>
        <Header>
          <LogoParent>
            <Logo>
              <Shareh2ologoRemovebgPreviewIcon
                alt=""
                src="/shareh2ologoremovebgpreview-11@2x.png"
              />
            </Logo>
            <PajamashamburgerIcon
              alt=""
              src="/pajamashamburger.svg"
              onClick={openTabletHamburger}
            />
          </LogoParent>
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
                          <Rs300>Rs 300</Rs300>
                        </Divelement1>
                      </DivelementorWidgetContainerParent>
                    </DivElementWap>
                  </DivElementWrapParent>
                </Section1>
                <Section2>
                  <DivElementWrapParent>
                    <DivElementWrap>
                      <DivelementorWidgetContainer1>
                        <ReturnOnInvestment>
                          return on investment
                        </ReturnOnInvestment>
                      </DivelementorWidgetContainer1>
                      <Divelement>
                        <CircleTicksvgIcon alt="" src="/circleticksvg.svg" />
                        <Div>29%</Div>
                      </Divelement>
                    </DivElementWrap>
                    <DivElementWap>
                      <DivelementorWidgetContainerParent>
                        <DivelementorWidgetContainer2>
                          <SavingLivesAnd>
                            saving lives and helping the planet
                          </SavingLivesAnd>
                        </DivelementorWidgetContainer2>
                        <Divelement1>
                          <CircleTicksvgIcon alt="" src="/circleticksvg2.svg" />
                          <Priceless>Priceless</Priceless>
                        </Divelement1>
                      </DivelementorWidgetContainerParent>
                    </DivElementWap>
                  </DivElementWrapParent>
                </Section2>
                <LinkParent>
                  <Link00>
                    <AdvertiseWithUs onClick={() => scrollToSection("Advertising")} id="advertise">
                      Advertise with Us
                    </AdvertiseWithUs>
                    <Svg />
                  </Link00>
                  <DivrtArrowBtn onClick={() => scrollToSection("Process")}>
                    <LinkHow>How To Process</LinkHow>
                    <SvgIcon1 alt="" src="/svg1.svg" />
                  </DivrtArrowBtn>
                </LinkParent>
              </SectionParent>
            </FrameParent>
            <img
              className="absolute bottom-0 left-0 object-cover w-[62%] moving-image"
              src="images/img_ellipseshadow3webp.png"
              alt="ellipseshadow3w"
            />
          </MainContainer>
        </Hero>
        <Howto id="Advertising">
          <Container>
            <DivelementorWidgetWrapParent>
              <DivelementorWidgetWrapIcon
                alt=""
                src="/divelementorwidgetwrap.svg"
              />
              <HowTo >
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
                <Link00>
                    <AdvertiseWithUs id="Learnmore" style={{fontSize:"27px" ,paddingLeft:"40px",paddingBottom:"10px"}}>
                      LearnMore
                    </AdvertiseWithUs>
                    <Svg />
                  </Link00>
              </HowTo>
            </DivelementorWidgetWrapParent>
          </Container>
        </Howto>
        <Process id="Process">
          <ProcessContainer>
            <Heading22>
              <Text1>{` `}</Text1>
              <ProcessParent>
                <Process1>Process</Process1>
                <SvgIcon2 alt="" src="/svg2.svg" />
              </ProcessParent>
            </Heading22>
            <MainSection>
              <Section11>
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
                  <DivelementorWidgetWrap1>
                    <DivelementorWidgetContainer8>
                      <SelectFromThe>
                        Pay for your selected package
                      </SelectFromThe>
                    </DivelementorWidgetContainer8>
                    <DivrtTextappearLine301>
                      <SelectYour>Make Your</SelectYour>
                      <Package1> Package</Package1>
                    </DivrtTextappearLine301>
                    <Div2>{`02 `}</Div2>
                  </DivelementorWidgetWrap1>
                </DivelementorWidgetWrapGroup>
                <Section1Child alt="" src="/frame-1000004236.svg" />
              </Section11>
              <Section21>
                <DivelementorWidgetWrapGroup>
                  <DivelementorWidgetWrap>
                    <DivelementorWidgetContainer8>
                      <SelectFromThe>
                        Select tag design from our list or upload your own.
                      </SelectFromThe>
                    </DivelementorWidgetContainer8>
                    <DivrtTextappearLine302>
                      <SelectTag>Select Tag</SelectTag>
                      <Designs>Designs</Designs>
                    </DivrtTextappearLine302>
                    <Div3>03</Div3>
                  </DivelementorWidgetWrap>
                  <DivelementorWidgetWrap1>
                    <DivelementorWidgetContainer8>
                      <SelectFromThe>
                        We wil send you the recorded video of the distribution
                        drive. You should see improvement in your brand
                        awareness and ROI.
                      </SelectFromThe>
                    </DivelementorWidgetContainer8>
                    <DivrtTextappearLine303>
                      <ReceiveParent>
                        <Receive>Receive</Receive>
                        <VideoClients>{`Video & Clients`}</VideoClients>
                      </ReceiveParent>
                    </DivrtTextappearLine303>
                    <Div4>{`04 `}</Div4>
                  </DivelementorWidgetWrap1>
                </DivelementorWidgetWrapGroup>
                <Section2Child alt="" src="/frame-1000004237.svg" />
              </Section21>
            </MainSection>
          </ProcessContainer>
          <img
            className="absolute bottom-0 left-0 object-cover w-[62%] moving-image"
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
          <Section6>
            <TopSection>
              <DivelementorWidgetWrap4>
                <FlexibleIconsvg alt="" src="/flexibleiconsvg.svg" />
                <DivelementorWidgetContainer12>
                  <SelectQuantityAnd>
                    Select quantity and type of container for Advertisement
                    according to your requirement
                  </SelectQuantityAnd>
                </DivelementorWidgetContainer12>
                <DivrtTextappearLine76>
                  <FlexibleOption>{`Flexible Option `}</FlexibleOption>
                </DivrtTextappearLine76>
              </DivelementorWidgetWrap4>
              <DivelementorWidgetWrap5>
                <PolicyIconsvg alt="" src="/policyiconsvg.svg" />
                <DivelementorWidgetContainer12>
                  <SelectQuantityAnd>
                    We will design and print your brand tags
                  </SelectQuantityAnd>
                </DivelementorWidgetContainer12>
                <DivrtTextappearLine76>
                  <FlexibleOption>Tag Designs</FlexibleOption>
                </DivrtTextappearLine76>
              </DivelementorWidgetWrap5>
            </TopSection>
            <DownSection>
              <DivelementorWidgetWrap4>
                <FlexibleIconsvg alt="" src="/flexibleiconsvg1.svg" />
                <DivelementorWidgetContainer12>
                  <SelectQuantityAnd>
                    Sell or distribute for free. We will take care of that
                  </SelectQuantityAnd>
                </DivelementorWidgetContainer12>
                <DivrtTextappearLine76>
                  <Distribution>Distribution</Distribution>
                </DivrtTextappearLine76>
              </DivelementorWidgetWrap4>
              <DivelementorWidgetWrap5>
                <OnlineServiceIconsvg alt="" src="/onlineserviceiconsvg.svg" />
                <DivelementorWidgetContainer12>
                  <SelectQuantityAnd>
                    Get the recorded video of the water distribution
                  </SelectQuantityAnd>
                </DivelementorWidgetContainer12>
                <DivrtTextappearLine763>
                  <TransparentPolicy>Transparent Policy</TransparentPolicy>
                </DivrtTextappearLine763>
              </DivelementorWidgetWrap5>
            </DownSection>
          </Section6>
        </Advantages>
        <Partners>
          <Parent1>
            <Carousel />
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
                    <WeCareAbout>24/7 we care about</WeCareAbout>
                  </WeCareAboutWrapper>
                  <ClientWrapper>
                    <Client>Client</Client>
                  </ClientWrapper>
                  <SatisfactionParent>
                    <Satisfaction>Satisfaction</Satisfaction>
                    <Spanline3 />
                  </SatisfactionParent>
                </Heading26>
                <Section9>
                <Link00 onClick={() => scrollToSection("contactus")} style={{width:"200px",marginLeft:"40px",height:"50px"}}>
                    <AdvertiseWithUs id="Learnmore" style={{fontSize:"24px" ,paddingLeft:"40px",paddingBottom:"10px" }}>
                     contactus
                    </AdvertiseWithUs>
                    <Svg />
                  </Link00>
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
            <FrameGroup>
              <DivelementorWidgetWrap1Parent>
                <DivelementorWidgetWrap12>
                  <FrameDiv>
                    <DivelementorWidgetContainer22>
                      <ListIconsvg alt="" src="/listiconsvg.svg" />
                      <PlasticBottles>Plastic Bottles</PlasticBottles>
                    </DivelementorWidgetContainer22>
                    <DivelementorWidgetContainer23>
                      <ListIconsvg1 alt="" src="/listiconsvg1.svg" />
                      <Units>5000 Units</Units>
                    </DivelementorWidgetContainer23>
                  </FrameDiv>
                <Link to="/login">
                <DivrtBtnEffectInfo1 >
                    <Link3>
                      <Select>{`select `}</Select>
                    </Link3>
                  </DivrtBtnEffectInfo1>
                </Link>  
                  <LitrePackagedWaterBottle15Icon
                    alt=""
                    src="/1litrepackagedwaterbottle15864120775363994removebgpreview-1@2x.png"
                  />
                  <BeginnerPlasticParent>
                    <BeginnerPlastic>Beginner Plastic</BeginnerPlastic>
                    <Heading3>Rs. 30000</Heading3>
                  </BeginnerPlasticParent>
                </DivelementorWidgetWrap12>

                <DivelementorWidgetWrap12>
                  <FrameDiv>
                    <DivelementorWidgetContainer22>
                      <ListIconsvg alt="" src="/listiconsvg2.svg" />
                      <PlasticBottles>Plastic Bottles</PlasticBottles>
                    </DivelementorWidgetContainer22>
                    <DivelementorWidgetContainer23>
                      <ListIconsvg1 alt="" src="/listiconsvg3.svg" />
                      <Units>10000 Units</Units>
                    </DivelementorWidgetContainer23>
                  </FrameDiv>
                  <Link to="/login">
                <DivrtBtnEffectInfo1 >
                    <Link3>
                      <Select>{`select `}</Select>
                    </Link3>
                  </DivrtBtnEffectInfo1>
                </Link>  
                  <Istockphoto484192249612x612Icon
                    alt=""
                    src="/istockphoto484192249612x612removebgpreview-1@2x.png"
                  />
                  <BeginnerPlasticParent>
                    <BeginnerPlastic>Pro Plastic</BeginnerPlastic>
                    <Heading3>Rs. 50000</Heading3>
                  </BeginnerPlasticParent>
                </DivelementorWidgetWrap12>
              </DivelementorWidgetWrap1Parent>
              <DivelementorWidgetWrap1Parent>
                <DivelementorWidgetWrap12>
                  <DivelementorWidgetContainerParent2>
                    <DivelementorWidgetContainer22>
                      <ListIconsvg alt="" src="/listiconsvg4.svg" />
                      <PlasticBottles>Cardboard Cartons</PlasticBottles>
                    </DivelementorWidgetContainer22>
                    <DivelementorWidgetContainer23>
                      <ListIconsvg1 alt="" src="/listiconsvg1.svg" />
                      <Units>5000 Units</Units>
                    </DivelementorWidgetContainer23>
                  </DivelementorWidgetContainerParent2>
                  <Link to="/login">
                <DivrtBtnEffectInfo1 >
                    <Link3>
                      <Select>{`select `}</Select>
                    </Link3>
                  </DivrtBtnEffectInfo1>
                </Link>  
                  <Screenshot20230930193338RIcon
                    alt=""
                    src="/screenshot-20230930-193338removebgpreview-1@2x.png"
                  />
                  <BeginnerCartonParent>
                    <BeginnerCarton>Beginner Carton</BeginnerCarton>
                    <Heading3>Rs. 40000</Heading3>
                  </BeginnerCartonParent>
                </DivelementorWidgetWrap12>
                <DivelementorWidgetWrap12>
                  <DivelementorWidgetContainerParent3>
                    <DivelementorWidgetContainer22>
                      <ListIconsvg alt="" src="/listiconsvg5.svg" />
                      <PlasticBottles>Cardboard Cartons</PlasticBottles>
                    </DivelementorWidgetContainer22>
                    <DivelementorWidgetContainer23>
                      <ListIconsvg1 alt="" src="/listiconsvg6.svg" />
                      <Units>10000 Units</Units>
                    </DivelementorWidgetContainer23>
                  </DivelementorWidgetContainerParent3>
                  <Link to="/login">
                <DivrtBtnEffectInfo1 >
                    <Link3>
                      <Select>{`select `}</Select>
                    </Link3>
                  </DivrtBtnEffectInfo1>
                </Link>  
                  <I290421638SorryJadenYourIcon
                    alt=""
                    src="/i290421638sorryjadenyourpaperwaterbottlesarenand8217tgreatfortheenvironmenteitherremovebgpreview-1@2x.png"
                  />
                  <BeginnerPlasticParent>
                    <BeginnerPlastic>Pro Carton</BeginnerPlastic>
                    <Heading3>Rs. 60000</Heading3>
                  </BeginnerPlasticParent>
                </DivelementorWidgetWrap12>
              </DivelementorWidgetWrap1Parent>
            </FrameGroup>
          </Section10>
        </Plans>
        <Containertypes>
          <Section12>
            <DivelementorWidgetWrap16>
              <Heading28>
                <TypesOf>{`Types Of `}</TypesOf>
                <Containers>Containers</Containers>
              </Heading28>
              <DivelementorWidgetContainer30>
                <SelectFromOur>
                  Select from our range of containers
                </SelectFromOur>
              </DivelementorWidgetContainer30>
              <Section13>
                <DivelementorWidgetContainer31>
                  <Plastic200mlPet>Plastic 200ml PET Bottles</Plastic200mlPet>
                </DivelementorWidgetContainer31>
                <DivelementorWidgetContainer32>
                  <HardCardbord200>
                    Hard Cardbord 200 ml cartons
                  </HardCardbord200>
                </DivelementorWidgetContainer32>
                <DivelementorWidgetContainer33>
                  <Aluminum200mlBottles>
                    Aluminum 200ml Bottles
                  </Aluminum200mlBottles>
                </DivelementorWidgetContainer33>
              </Section13>
            </DivelementorWidgetWrap16>
            <DivelementorWidgetWrapIcon1
              alt=""
              src="/divelementorwidgetwrap1.svg"
            />
          </Section12>
        </Containertypes>
        <Footer id="contactus">
          <DivelementorWidgetWrap17>
            <SectionGroup>
              <Section14>
                <DivelementorWidgetWrap18>
                  <GetInTouch>Get In Touch</GetInTouch>
                  <DivrtBtnEffectInfo5>
                    <ContactUs1>Contact Us</ContactUs1>
                    <Link7 />
                  </DivrtBtnEffectInfo5>
                  <Section15>
                    <FrameIcon alt="" src="/frame.svg" />
                    <SpanelementorIconListText>
                      <GhaziabdIndia>Ghaziabad, India</GhaziabdIndia>
                    </SpanelementorIconListText>
                  </Section15>
                  <DivelementorWidgetContainer34>
                    <About>About Us</About>
                  </DivelementorWidgetContainer34>
                  <Link8>info@shareh2o.com</Link8>
                </DivelementorWidgetWrap18>
                <DivelementorWidgetWrap19>
                  <Newsletter>Newsletter</Newsletter>
                  <Section16>
                    <Input>
                      <Divplaceholder>
                        <EnterEmail>Enter Email</EnterEmail>
                      </Divplaceholder>
                    </Input>
                    <Input1>
                      <Newsletter1>Newsletter</Newsletter1>
                    </Input1>
                  </Section16>
                </DivelementorWidgetWrap19>
              </Section14>
              <Shareh2ologoRemovebgPreviewWrapper>
                <Shareh2ologoRemovebgPreviewIcon1
                  alt=""
                  src="/shareh2ologoremovebgpreview-12@2x.png"
                />
              </Shareh2ologoRemovebgPreviewWrapper>
              <DivelementorWidgetContainer35>
                <Shareh2oIsAn1>
                  ShareH2O is an innovative way to advertsiement by creating a
                  win win situation for you and your target audience
                </Shareh2oIsAn1>
              </DivelementorWidgetContainer35>
            </SectionGroup>
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
      </H20TabletRoot>
      {isTabletHamburgerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeTabletHamburger}
        >
          <TabletHamburger
            onClose={closeTabletHamburger}
            change={closeTabletHamburger}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default H20Tablet;
