import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 99px;
  height: 82.1px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 307.4px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const SignIn = styled.div`
  position: relative;
  line-height: 24.29px;
  cursor: pointer;
`;
const ButtonChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 69.15px);
  border-radius: 5.61px;
  background-color: var(--color-firebrick);
  width: 138.3px;
  height: 46.7px;
`;
const PrimaryButton = styled.div`
  position: absolute;
  top: calc(50% - 12.35px);
  left: calc(50% - 58.75px);
  line-height: 24.29px;
`;
const Button = styled.div`
  position: relative;
  width: 138.3px;
  height: 46.7px;
  text-align: left;
`;
const SignInParent = styled.div`
  position: absolute;
  top: 22px;
  left: calc(50% + 68.85px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 27px;
`;
const TopNav = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 285px);
  width: 570.3px;
  height: 82.1px;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  line-height: 52px;
  font-weight: 600;
  text-align: center;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 264px);
  line-height: 29px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 528px;
  height: 52px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 252px);
  line-height: 26px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 264px);
  width: 528px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
`;
const Email = styled.div`
  position: relative;
  width: 528px;
  height: 82px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 264px);
  width: 528px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-silver);
`;
const LanguageChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
`;
const IconParkOutlinedown = styled.img`
  position: absolute;
  height: 46.15%;
  width: 4.55%;
  top: 26.92%;
  right: 4%;
  bottom: 26.92%;
  left: 91.46%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SelectCompanySize = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
`;
const SelectCompanySizeWrapper = styled.div`
  position: absolute;
  height: 36.54%;
  width: 29.55%;
  top: 32.69%;
  right: 66.48%;
  bottom: 30.77%;
  left: 3.98%;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-7xs);
  background-color: var(--color-firebrick);
  width: 545px;
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 28px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 270px);
  width: 542px;
  height: 50px;
`;
const SignIn1 = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 139px;
  line-height: 26px;
  text-align: left;
  cursor: pointer;
`;
const SubmitParent = styled.div`
  position: relative;
  width: 542px;
  height: 99px;
  text-align: center;
  font-size: var(--font-size-base);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 190px;
  left: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 23px;
  text-align: left;
  font-size: var(--font-size-lg);
`;
const SignupTablet768pxRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-300);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const SignupTablet768px = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");
  const [companySize, setCompanySize] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleWorkEmailChange = (e) => {
    setWorkEmail(e.target.value);
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCompanyPhoneNumberChange = (e) => {
    setCompanyPhoneNumber(e.target.value);
  };

  const handleCompanySizeChange = (e) => {
    setCompanySize(e.target.value);
  };

  return (
    <SignupTablet768pxRoot>
      <TopNav>
        <Logo onClick={onLogoContainerClick}>
          <Shareh2ologoRemovebgPreviewIcon
            alt=""
            src="/shareh2ologoremovebgpreview-1@2x.png"
          />
        </Logo>
        <SignInParent>
          <SignIn onClick={onSignInTextClick}>Sign in</SignIn>
          <Button>
            <ButtonChild />
            <PrimaryButton>Sign up for free</PrimaryButton>
          </Button>
        </SignInParent>
      </TopNav>
      <SignInToDhiwiseParent>
        <SignInTo>Sign up to H20 Share</SignInTo>
        <Email>
          <label htmlFor="signupFullName" className="email-label">
            Full name
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupFullName"
            value={fullName}
            type="text"
            onChange={handleFullNameChange}
            placeholder="Enter full name"
            className="inputcontainersignup"
          />
        </Email>
        <Email>
          <label htmlFor="signupemail" className="email-label">
            Enter work email address
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupemail"
            value={workEmail}
            type="email"
            onChange={handleWorkEmailChange}
            placeholder=" Email address"
            className="inputcontainersignup"
          />
        </Email>
        <Email>
          <label htmlFor="signupCompanyName" className="email-label">
            Enter company name
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupCompanyName"
            value={companyName}
            type="text"
            onChange={handleCompanyNameChange}
            placeholder="CompanyName"
            className="inputcontainersignup"
          />
        </Email>
        <Email>
          <label htmlFor="signupCompanyNumber" className="email-label">
            Enter company phone
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupCompanyNumber"
            value={companyPhoneNumber}
            type="text"
            onChange={handleCompanyPhoneNumberChange}
            placeholder="9876543210"
            className="inputcontainersignup"
          />
        </Email>
        <Email>
          <label htmlFor="signupCompanySize" className="email-label">
            Enter company phone
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupCompanySize"
            value={companySize}
            type="number"
            onChange={handleCompanySizeChange}
            placeholder="58"
            className="inputcontainersignup"
          />
        </Email>
        <SubmitParent>
          <Submit>
            <SubmitChild />
            <LogIn>Sign up</LogIn>
          </Submit>
          <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
            {`Already have an account? `}
            <SignIn1>Sign in</SignIn1>
          </AlreadyHaveAnContainer>
        </SubmitParent>
      </SignInToDhiwiseParent>
    </SignupTablet768pxRoot>
  );
};

export default SignupTablet768px;
