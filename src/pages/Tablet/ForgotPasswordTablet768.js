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
  top: 32px;
  left: calc(50% - 281px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  line-height: 52px;
  font-weight: 600;
`;
const PleaseEnterYour = styled.div`
  position: relative;
  line-height: 52px;
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
  font-size: var(--font-size-lg);
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-7xs);
  background-color: var(--color-firebrick);
  width: 528px;
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 26px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: relative;
  width: 528px;
  height: 50px;
  text-align: center;
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: relative;
  line-height: 26px;
  cursor: pointer;
`;
const EmailParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
  text-align: left;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 155px;
  left: calc(50% - 281px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const ForgotPasswordTablet768Root = styled.div`
  position: relative;
  background-color: var(--color-gray-300);
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const ForgotPasswordTablet768 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const [forgotEmail, setEmail] = useState("");
  const handleForgotEmailChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <ForgotPasswordTablet768Root>
      <Logo onClick={onLogoContainerClick}>
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
        <EmailParent>
          <Email>
            <label htmlFor="loginMailMob" className="email-label">
              Email
            </label>
            <input
              style={{ borderRadius: "5px" }}
              id="loginMailMob"
              value={forgotEmail}
              type="email"
              onChange={handleForgotEmailChange}
              placeholder="viswa0007@gmail.com"
              className="inputcontainersignup"
            />
          </Email>
          <Submit>
            <SubmitChild />
            <LogIn>Submit</LogIn>
          </Submit>
          <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
            {`Already have an account? `}
            <SignIn>Sign in</SignIn>
          </AlreadyHaveAnContainer>
        </EmailParent>
      </SignInToDhiwiseParent>
    </ForgotPasswordTablet768Root>
  );
};

export default ForgotPasswordTablet768;
