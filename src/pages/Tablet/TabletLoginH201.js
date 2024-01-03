import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = styled.span`
  text-decoration: underline;
`;
const DontHaveAnContainer = styled.div`
  position: absolute;
  top: 900px;
  left: calc(50% - 168.5px);
  line-height: 19.85px;
  text-align: right;
  cursor: pointer;
`;
const CheckboxParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 285px;
  left: 1.5px;
  width: 186.5px;
  height: 31px;
  color: #ffffff;
`;

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
  position: absolute;
  top: 11px;
  left: calc(50% + 22.65px);
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
  left: calc(50% - 25.15px);
  line-height: 24.29px;
`;
const Button = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 139.65px);
  width: 138.3px;
  height: 46.7px;
  text-align: left;
`;
const SignInParent = styled.div`
  position: absolute;
  top: 11px;
  left: calc(50% + 28.1px);
  width: 279.3px;
  height: 46.7px;
`;
const TopNav = styled.div`
  position: absolute;
  top: 32px;
  left: calc(50% - 324px);
  width: 614.8px;
  height: 82.1px;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: 36.65px;
  line-height: 53.38px;
  font-weight: 600;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: 29.77px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 8.21px;
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 542px;
  height: 53.4px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 24.91%;
  left: 2.27%;
  line-height: 26.69px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30.8px;
  left: 0px;
  width: 542px;
  height: 53.4px;
  color: var(--color-darkgray-100);
`;
const Email = styled.div`
  position: relative;
  width: 542px;
  height: 84.2px;
  text-align: left;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 30.8px;
  left: 0px;
  width: 542px;
  height: 53.4px;
  color: var(--color-silver);
`;
const InputLabelsmall = styled.div`
  position: relative;
  line-height: 29.77px;
  text-align: right;
  cursor: pointer;
  margin-left: 340px;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 6.16px;
  background-color: var(--color-firebrick);
  width: 542px;
  height: 51.3px;
`;
const LogIn = styled.div`
  position: absolute;
  top: 12.3px;
  left: calc(50% - 39.4px);
  line-height: 26.69px;
`;
const Submit = styled.div`
  position: relative;
  width: 542px;
  height: 51.3px;
`;
const OrContinueWith1 = styled.div`
  position: absolute;
  top: 0px;
  left: 201.2px;
  line-height: 26.69px;
`;
const OrContinueWithChild = styled.div`
  position: absolute;
  top: 12.8px;
  left: 341.3px;
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 184.8px;
  height: 1px;
`;
const OrContinueWithItem = styled.div`
  position: absolute;
  top: 12.8px;
  left: -0.5px;
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 185.8px;
  height: 1px;
`;
const OrContinueWith = styled.div`
  position: relative;
  width: 525.6px;
  height: 27px;
  text-align: left;
  font-size: 16.42px;
  color: var(--color-silver);
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 6.16px;
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  width: 542px;
  height: 51.3px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 542px;
  height: 51.3px;
`;
const SignInWith = styled.div`
  position: absolute;
  top: 0px;
  left: 30.8px;
  line-height: 26.69px;
`;
const Google1Icon = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 24.6px;
  height: 24.6px;
  overflow: hidden;
`;
const SignInWithGoogleParent = styled.div`
  position: absolute;
  top: 12.3px;
  left: 181px;
  width: 180.8px;
  height: 27px;
`;
const SignInWithFacebookParent = styled.div`
  position: absolute;
  top: 12.3px;
  left: 169.8px;
  width: 201.8px;
  height: 27px;
`;
const LoginGroup = styled.div`
  position: absolute;
  top: 67.8px;
  left: 0px;
  width: 542px;
  height: 51.3px;
`;
const SignInWith2 = styled.div`
  position: absolute;
  top: 0px;
  left: 36.9px;
  line-height: 26.69px;
`;
const Linkedin11 = styled.img`
  position: absolute;
  top: 2.7px;
  left: 0px;
  width: 25.8px;
  height: 24.9px;
  overflow: hidden;
`;
const SignInWithLinkedinParent = styled.div`
  position: absolute;
  top: 12.3px;
  left: 173.2px;
  width: 196.9px;
  height: 27.5px;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 135.5px;
  left: 0px;
  width: 542px;
  height: 51.3px;
`;
const GroupParent = styled.div`
  position: relative;
  width: 542px;
  height: 186.8px;
  font-size: 16.42px;
`;
const SignInToRechargeDirectParent = styled.div`
  position: absolute;
  top: 181px;
  left: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20.58px;
  text-align: center;
  font-size: 20.58px;
`;
const TabletLoginH20Root = styled.div`
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

const TabletLoginH201 = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onInputLabelSmallTextClick = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);
  const [loginMail, setMail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <TabletLoginH20Root>
      <TopNav>
        <Logo onClick={onLogoContainerClick}>
          <Shareh2ologoRemovebgPreviewIcon
            alt=""
            src="/shareh2ologoremovebgpreview-1@2x.png"
          />
        </Logo>
        <SignInParent>
          <SignIn onClick={onSignInTextClick}>Sign up for free</SignIn>
          <Button>
            <ButtonChild />
            <PrimaryButton>Sign in</PrimaryButton>
          </Button>
        </SignInParent>
      </TopNav>
      <SignInToRechargeDirectParent>
        <SignInTo>Sign in to H20 Share</SignInTo>
        <Email>
          <label htmlFor="loginMailMob" className="email-label">
            Email
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="loginMailMob"
            value={loginMail}
            type="email"
            onChange={handleMailChange}
            placeholder="Email address"
            className="inputcontainersignup"
          />
        </Email>
        <Email>
          <label htmlFor="loginPasswordMob" className="email-label">
            Password
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="loginPasswordMob"
            value={loginPassword}
            type="password"
            onChange={handlePasswordChange}
            placeholder="**********"
            className="inputcontainersignup"
          />
        </Email>
        <CheckboxParent>
          {/* <Checkbox>
                <CheckboxChild /> 
              </Checkbox>
             <InputLabelsmall1>Remember me</InputLabelsmall1> */}
          <input id="checkbox1" type="checkbox" />
          <label htmlFor="checkbox1">Remember me</label>
        </CheckboxParent>
        <InputLabelsmall onClick={onInputLabelSmallTextClick}>
          Forgot Password?
        </InputLabelsmall>
        <Submit>
          <SubmitChild />
          <LogIn>Sign in</LogIn>
        </Submit>
        <OrContinueWith>
          <OrContinueWith1>Or continue with</OrContinueWith1>
          <OrContinueWithChild />
          <OrContinueWithItem />
        </OrContinueWith>
        <GroupParent>
          <LoginParent>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithGoogleParent>
              <SignInWith>Sign in with Google</SignInWith>
              <Google1Icon alt="" src="/google-1.svg" />
            </SignInWithGoogleParent>
          </LoginParent>
          <LoginGroup>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithFacebookParent>
              <SignInWith>Sign in with Facebook</SignInWith>
              <Google1Icon alt="" src="/facebook-1.svg" />
            </SignInWithFacebookParent>
          </LoginGroup>
          <LoginContainer>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithLinkedinParent>
              <SignInWith2>Sign in with Linkedin</SignInWith2>
              <Linkedin11 alt="" src="/linkedin-1-1.svg" />
            </SignInWithLinkedinParent>
          </LoginContainer>
        </GroupParent>
      </SignInToRechargeDirectParent>
      <Link to="/signup">
        <DontHaveAnContainer>
          {`Don’t have an account? `}
          <SignUp>Sign up</SignUp>
        </DontHaveAnContainer>
      </Link>
    </TabletLoginH20Root>
  );
};

export default TabletLoginH201;
