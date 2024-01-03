import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Advertise = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
  padding-top:30px;
`;
const AdvertiseParent = styled.div`
  position: absolute;
  top: 137px;
  left: 46px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 31.75px;
`;
const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 84px;
  height: 69.7px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const IcroundCloseIcon = styled.img`
  position: absolute;
  top: 19px;
  left: 250px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  cursor: pointer;
`;
const LogoParent = styled.div`
  position: absolute;
  top: 33px;
  left: calc(50% - 154px);
  width: 309px;
  height: 70px;
`;
const TabletHamburgerRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-200);
  width: 384px;
 min-height: 570px;
  max-width: 100%;
 
  max-height: 50%;
  text-align: left;
  font-size: 31.75px;
  color: var(--color-white);
  font-family: var(--font-plus-jakarta-sans);
`;

const TabletHamburger = ({change}) => {
  const navigate = useNavigate();

  const onAdvertiseTextClick = useCallback(() => {
    change();
    const anchor = document.querySelector(
      "#advertise"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    change();
    const anchor = document.querySelector(
      "#pricing"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    change();
    const anchor = document.querySelector(
      "#contactus"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [navigate]);

  const onLoginSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


  const onIcroundCloseIconClick = useCallback(() => {
    console.log("this tablet version")
    change();
  }, [navigate]);

  return (
    <TabletHamburgerRoot>
      <AdvertiseParent>
        <Advertise onClick={onAdvertiseTextClick}>Advertise</Advertise>
        <Advertise onClick={onPricingTextClick}>Pricing</Advertise>
        <Advertise onClick={onContactUsTextClick}>Contact us</Advertise>
        <Advertise onClick={onLoginSignUpClick}>Login/ Sign up</Advertise>
      </AdvertiseParent>
      <LogoParent>
        <Logo onClick={onLogoContainerClick}>
          <Shareh2ologoRemovebgPreviewIcon
            alt=""
            src="/shareh2ologoremovebgpreview-13@2x.png"
          />
        </Logo>
        <IcroundCloseIcon
          alt=""
          src="/icroundclose.svg"
          onClick={onIcroundCloseIconClick}
        />
      </LogoParent>
    </TabletHamburgerRoot>
  );
};

export default TabletHamburger;
