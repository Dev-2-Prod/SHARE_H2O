import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  left : 10px;
  width: 47px;
  height: 39px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: relative;
 
  display: flex;
  padding-top:20px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Advertise = styled.div`
  position: relative;
  font-weight: 500;
  padding-top:35px;
`;
const LoginSignUp = styled.div`
  position: relative;
  font-weight: 500;
  cursor: pointer;
  padding-top:35px;
 
`;
const AdvertiseParent = styled.div`
  position: relative;
  top: 10px;
  left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  
  gap: var(--gap-base);
`;
const IcroundCloseIcon = styled.img`
  position: relative;
  width: 24px;
  top:-250px;
  left : 150px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const LogoParentRoot = styled.div`
  background-color: var(--color-gray-200);
  width: 188px;
 min-height: 338px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-plus-jakarta-sans);
  margin-top:30px;

  

`;

const Frame = ({change}) => {
  const navigate = useNavigate();

  const onLoginSignUpClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onIcroundCloseIconClick = useCallback(() => {
    console.log("this mobile version")
    change();
  }, [navigate]);

  const onAdvertiseTextClick = useCallback(() => {
    change();
    const anchor = document.querySelector(
      "#advertising"
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

  return (
    <LogoParentRoot>
      <Logo>
        <Shareh2ologoRemovebgPreviewIcon
          alt=""
          src="/shareh2ologoremovebgpreview-11@2x.png"
        />
      </Logo>
      <AdvertiseParent>
        <Advertise onClick={onAdvertiseTextClick}>Advertise</Advertise>
        <Advertise onClick={onPricingTextClick}>Pricing</Advertise>
        <Advertise onClick={onContactUsTextClick}>Contact us</Advertise>
        <LoginSignUp onClick={onLoginSignUpClick}>Login/ Sign up</LoginSignUp>
      </AdvertiseParent>
      <IcroundCloseIcon
        alt=""
        src="/icroundclose.svg"
        onClick={onIcroundCloseIconClick}
      />
    </LogoParentRoot>
  );
};

export default Frame;
