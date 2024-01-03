import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 109.7px;
  height: 91px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 54.5px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: 22.57px;
  line-height: 48.91px;
  font-weight: 600;
`;
const PleaseEnterYour = styled.div`
  position: relative;
  font-size: 11.29px;
  line-height: 21.63px;
  display: inline-block;
  width: 324.5px;
  height: 48.9px;
  flex-shrink: 0;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 166px);
  line-height: 27.28px;
  display: inline-block;
  width: 74.8px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 166px);
  border-radius: 7.52px;
  background-color: var(--color-white);
  border: 0.9px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 332px;
  height: 48.9px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 24.95%;
  left: calc(50% - 158.5px);
  line-height: 24.46px;
  display: inline-block;
  width: 141.1px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 28.2px;
  left: calc(50% - 166px);
  width: 332px;
  height: 48.9px;
  font-size: 15.05px;
  color: var(--color-darkgray-100);
`;
const Email = styled.div`
  position: relative;
  width: 332px;
  height: 77.1px;
  text-align: left;
  font-size: 16.93px;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 166px);
  border-radius: 5.64px;
  background-color: var(--color-firebrick);
  width: 332px;
  height: 47px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 12.2px);
  left: calc(50% - 26.8px);
  line-height: 24.46px;
  display: inline-block;
  width: 53.6px;
`;
const Submit = styled.div`
  position: relative;
  width: 332px;
  height: 47px;
  cursor: pointer;
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: relative;
  line-height: 24.46px;
  text-align: left;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 155px;
  left: calc(50% - 166.5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 22.57px;
`;
const ForgotPasswordMobileRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-200);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  font-size: 15.05px;
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const ForgotPasswordMobile = () => {
  const navigate = useNavigate();

  const onSubmitContainerClick = useCallback(() => {
    navigate("/set-my-password-and-login-desktop");
  }, [navigate]);
  const onAlreadyClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const [forgotEmail, setEmail] = useState("");
  const handleForgotEmailChange = (e) => {
    setEmail(e.taget.value);
  };

  return (
    <ForgotPasswordMobileRoot>
      <Logo>
        <Shareh2ologoRemovebgPreviewIcon
          alt=""
          src="/shareh2ologoremovebgpreview-1@2x.png"
        />
      </Logo>
      <SignInToDhiwiseParent>
        <SignInTo>Forgot your password?</SignInTo>
        <PleaseEnterYour>
          Please enter your email address below to receive a password retrieval
          link.
        </PleaseEnterYour>
        <Email>
          {/* <InputLabelmedium>Email address</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter email address
            </InputPlaceholdermediumon>
          </RectangleParent> */}
          <label htmlFor="signupemail" className="email-label">
            Enter work email address
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="signupemail"
            value={forgotEmail}
            type="email"
            onChange={handleForgotEmailChange}
            placeholder="viswa00007@gmail.com"
            className="inputcontainer"
          />
        </Email>
        <Submit
        // onClick={onSubmitContainerClick}
        >
          <SubmitChild />
          <LogIn>Submit</LogIn>
        </Submit>
        <AlreadyHaveAnContainer onClick={onAlreadyClick}>
          {`Already have an account? `}
          <SignIn>Sign in</SignIn>
        </AlreadyHaveAnContainer>
      </SignInToDhiwiseParent>
    </ForgotPasswordMobileRoot>
  );
};

export default ForgotPasswordMobile;
