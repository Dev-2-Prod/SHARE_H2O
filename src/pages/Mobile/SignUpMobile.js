import { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignInTo = styled.div`
  position: relative;
 
  line-height: 30.4px;
  font-weight: 600;
  text-align: center;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 174px);
  line-height: 16.95px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: 4.68px;
  background-color: var(--color-white);
  border: 0.6px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 348px;
  height: 33.4px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 26.95%;
  left: calc(50% - 159.1px);
  line-height: 15.2px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 20.9px;
  left: calc(50% - 174px);
  width: 348px;
  height: 33.4px;
  color: var(--color-darkgray-100);
`;
const InputLabelmediumParent = styled.div`
  position: relative;
  width: 348px;
  height: 54.3px;
`;
const Component2Child = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 4.68px;
  background-color: var(--color-white);
  border: 0.6px solid var(--color-gainsboro-100);
  box-sizing: border-box;
`;
const InputPlaceholdermediumon4 = styled.div`
  position: absolute;
  top: 26.95%;
  left: 4.28%;
  line-height: 15.2px;
`;
const IconParkOutlinedown = styled.img`
  position: absolute;
  height: 66.77%;
  width: 6.41%;
  top: 16.77%;
  right: 3.59%;
  bottom: 16.47%;
  left: 90%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 174px);
  border-radius: 4.68px;
  background-color: var(--color-firebrick);
  border: 0.6px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 330px;
  height: 46.2px;
`;
const InputPlaceholdermediumon5 = styled.div`
  position: absolute;
  top: calc(50%);
  left: calc(50% - 30px);
  line-height: 15.2px;
  display: inline-block;
  width: 60px;
  height: 22.1px;
`;
const RectangleParent2 = styled.div`
  position: relative;
  width: 348px;
  height: 46.2px;
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: absolute;
  top:725px;
  bottom: 20px;
  line-height: 15.2px;
  cursor: pointer;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 122px;
  left: calc(50% - 164px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25.06px;
`;
const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 109.7px;
  height: 91px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: calc(50% - 55px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SignupMobileRoot = styled.div`
  position: relative;

  background-color: var(--color-gray-200);
  width: 100%;
  height: 900px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: left;
  font-size: var(--font-size-base-7);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const SignupMobile = () => {
  const navigate = useNavigate();

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
    <SignupMobileRoot>
      <SignInToDhiwiseParent>
        <SignInTo>Sign up to H20 Share</SignInTo>
        <InputLabelmediumParent>
          {/* <InputLabelmedium>Full name</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>Enter full name</InputPlaceholdermediumon>
          </RectangleParent> */}
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
            className="inputcontainer"
          />
        </InputLabelmediumParent>

        <InputLabelmediumParent>
          {/* <InputLabelmedium>Work email address</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter work email address
            </InputPlaceholdermediumon>
          </RectangleParent> */}

          <label htmlFor="signupemail" className="email-label">
            Enter work email address
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupemail"
            value={workEmail}
            type="email"
            onChange={handleWorkEmailChange}
            placeholder="Enter email address"
            className="inputcontainer"
          />
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          {/* <InputLabelmedium>Company name</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter company name
            </InputPlaceholdermediumon>
          </RectangleParent> */}

          <label htmlFor="signupCompanyName" className="email-label">
            Enter company name
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupCompanyName"
            value={companyName}
            type="text"
            onChange={handleCompanyNameChange}
            placeholder="company name"
            className="inputcontainer"
          />
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          {/* <InputLabelmedium>Company phone</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter company phone
            </InputPlaceholdermediumon>
          </RectangleParent> */}

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
            className="inputcontainer"
          />
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          {/* <InputLabelmedium>Company size</InputLabelmedium>
          <RectangleParent>
            <Component2Child />
            <InputPlaceholdermediumon4>
              Select company size
            </InputPlaceholdermediumon4>
            <IconParkOutlinedown alt="" src="/iconparkoutlinedown1.svg" />
          </RectangleParent> */}
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
            className="inputcontainer"
          />
        </InputLabelmediumParent>
        <RectangleParent2>
          <GroupChild1 />
          <InputPlaceholdermediumon5>Sign up</InputPlaceholdermediumon5>
        </RectangleParent2>
        <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
          {`Already have an account? `}
          <SignIn>Sign in</SignIn>
        </AlreadyHaveAnContainer>
      </SignInToDhiwiseParent>
      <Link to="/">
        <Logo>
          <Shareh2ologoRemovebgPreviewIcon
            alt=""
            src="/shareh2ologoremovebgpreview-1@2x.png"
          />
        </Logo>
      </Link>
    </SignupMobileRoot>
  );
};

export default SignupMobile;
