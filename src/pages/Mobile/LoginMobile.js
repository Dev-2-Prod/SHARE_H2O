import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { eye } from 'react-icons-kit/feather/eye';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { Icon } from 'react-icons-kit';

const IphoneXOrNewerlightdefa = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 375px;
  height: 47px;
  overflow: hidden;
`;
const HomeIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% - 66.5px);
  border-radius: 100px;
  background-color: #000910;
  width: 134px;
  height: 5px;
`;
const HomeIndicatorlight = styled.div`
  position: absolute;
  top: 892px;
  left: 0px;
  width: 375px;
  height: 34px;
`;
const ArrowLeftoutlineIcon = styled.img`
  position: absolute;
  top: 0px;
  left: 16px;
  width: 109.7px;
  height: 91px;
  overflow: hidden;
  cursor: pointer;
`;
const EmailSignIn = styled.div`
  position: absolute;
  top: 90px;
  left: calc(50% - 187.5px);
  line-height: 39px;
  font-weight: 600;
`;
const ArrowLeftoutlineParent = styled.div`
  position: absolute;
  top: 50px;
  left: 100px;
  width: 375px;
  height: 150px;
  font-size: var(--font-size-5xl);
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: 23.97px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.53px;
  background-color: var(--color-white);
  border: 0.9px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 329.8px;
  height: 40.6px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 20.44%;
  left: 2.09%;
  line-height: 23.97px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 27.7px;
  left: 1.5px;
  width: 329.8px;
  height: 40.6px;
  color: var(--color-darkslategray-100);
`;
const Email = styled.div`
  position: absolute;
  height: 27.7%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 72.3%;
  left: 0%;
`;
const EyeoutlineIcon = styled.img`
  position: absolute;
  top: 11.1px;
  left: 291.1px;
  width: 17.6px;
  height: 18.4px;
  overflow: hidden;
`;
const EnterPassword = styled.div`
  position: absolute;
  top: 20.44%;
  left: 2.37%;
  line-height: 23.97px;
`;
const Email1 = styled.div`
  position: absolute;
  height: 70.31%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 29.69%;
  left: 0%;
  font-size: var(--font-size-base);
`;
const InputLabelsmall = styled.div`
  position: absolute;
  top: 76px;
  left: 58%;
  line-height: 20.29px;
  text-align: right;
`;
const CheckboxChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.31px;
  background-color: var(--color-white);
  border: 0.8px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 18.4px;
  height: 18.4px;
`;
const Checkbox = styled.div`
  position: absolute;
  top: 0.5px;
  left: 0px;
  width: 22.3px;
  height: 18.4px;
`;
const InputLabelsmall1 = styled.div`
  position: absolute;
  width: 89.84%;
  top: 0px;
  left: 20.16%;
  line-height: 20.29px;
  display: inline-block;
`;
const CheckboxParent = styled.div`
  position: absolute;
  top: 76px;
  left: 1.5px;
  width: 126.5px;
  height: 21px;
  color: var(--color-silver);
`;
const Password = styled.div`
  position: absolute;
  height: 39.4%;
  width: 100%;
  top: 80px;
  right: 0%;
  bottom: 27.25%;
  left: 0%;
  font-size: var(--font-size-sm);
 
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.53px;
  background-color: var(--color-white);
  width: 329.8px;
  height: 46.1px;
`;
const SignIn = styled.div`
  position: absolute;
  top: calc(50% - 12.05px);
  left: calc(50% - 25.4px);
  line-height: 23.97px;
`;
const Login = styled.div`
  position: absolute;
  top: 200.1px;
  left: 1.5px;
  width: 329.8px;
  height: 46.1px;
  text-align: center;
  color: #111;
`;
const EmailParent = styled.div`
  position: absolute;
  height: 51.06%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 48.94%;
  left: 0%;
`;
const OrContinueWith = styled.div`
  position: absolute;
  top: 0px;
  left: 118.5px;
  line-height: 23.97px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 11.5px;
  left: 250.9px;
  background-color: var(--color-silver);
  border-top: 0.9px solid var(--color-silver);
  box-sizing: border-box;
  width: 80px;
  height: 0.9px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 11.5px;
  left: -0.5px;
  background-color: var(--color-silver);
  border-top: 0.9px solid var(--color-silver);
  box-sizing: border-box;
  width: 109.2px;
  height: 0.9px;
`;
const OrContinueWithParent = styled.div`
  position: absolute;
  top: 268.3px;
  left: 1.5px;
  width: 329.8px;
  height: 24px;
  font-size: var(--font-size-xs);
  color: var(--color-silver);
`;
const LoginItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.53px;
  border: 0.9px solid var(--color-white);
  box-sizing: border-box;
  width: 328.9px;
  height: 46.1px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 328.9px;
  height: 46.1px;
`;
const SignInWith = styled.div`
  position: absolute;
  top: 0px;
  left: 27.4px;
  line-height: 23.97px;
  display: inline-block;
  width: 141.4px;
`;
const Google1Icon = styled.img`
  position: absolute;
  top: 0.9px;
  left: 0px;
  width: 23.2px;
  height: 22.1px;
  overflow: hidden;
`;
const SignInWithGoogleParent = styled.div`
  position: absolute;
  top: 11.1px;
  left: 87.8px;
  width: 168.8px;
  height: 24px;
`;
const SignInWith1 = styled.div`
  position: absolute;
  top: 0px;
  left: 27.7px;
  line-height: 23.97px;
  display: inline-block;
  width: 154.1px;
`;
const Facebook1Icon = styled.img`
  position: absolute;
  top: 0.9px;
  left: 0px;
  width: 22.1px;
  height: 22.1px;
  overflow: hidden;
`;
const SignInWithFacebookParent = styled.div`
  position: absolute;
  top: 11.1px;
  left: 83.9px;
  width: 181.8px;
  height: 24px;
`;
const LoginGroup = styled.div`
  position: absolute;
  top: 60.9px;
  left: 0px;
  width: 328.9px;
  height: 46.1px;
`;
const SignInWith2 = styled.div`
  position: absolute;
  top: 0px;
  left: 26.8px;
  line-height: 23.97px;
  display: inline-block;
  width: 148.3px;
`;
const Linkedin11 = styled.img`
  position: absolute;
  top: 0.9px;
  left: 0px;
  width: 23px;
  height: 22.1px;
  overflow: hidden;
`;
const SignInWithLinkedinParent = styled.div`
  position: absolute;
  top: 11.1px;
  left: 90.5px;
  width: 175.1px;
  height: 24px;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 121.7px;
  left: 0px;
  width: 328.9px;
  height: 46.1px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 314.4px;
  left: 2.3px;
  width: 328.9px;
  height: 167.8px;
  text-align: center;
  font-size: 14.75px;
`;
const GroupParent = styled.div`
  position: absolute;
  height: 52.07%;
  width: 88.35%;
  top: 200px;
  right: 5.79%;
  bottom: 32.6%;
  left: 5.87%;
  text-align: left;
`;
const SignUp = styled.span`
  text-decoration: underline;
`;
const DontHaveAnContainer = styled.div`
  position: absolute;
  top: 855px;
  left: calc(50% - 118.5px);
  line-height: 19.85px;
  text-align: right;
  cursor: pointer;
`;
const LoginWithMagixdbRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-200);
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-inter);
`;
const RectangleParent2 = styled.div`
  position: relative;
  text-align: center;
  width: 348px;
  height: 44.2px;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 200px;
  left: calc(50% - 174px);
  text-align: center;
  border-radius: 4.68px;
  background-color: var(--color-firebrick);
  border: 0.6px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 330px;
  height: 46.2px;
`;
const InputPlaceholdermediumon5 = styled.div`
  position: absolute;
  top: 215px;
  left: calc(50% - 30px);
  line-height: 15.2px;
  display: inline-block;
  width: 60px;
  height: 22.1px;
`;
const LogInWithMagixdb = () => {
  const navigate = useNavigate();

  const onArrowLeftOutlineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onForogtPassword = useCallback(() => {
    navigate("/forgot-password");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const [loginMail, setMail] = useState("");
  const [loginPassword, setPassword] = useState("");

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <LoginWithMagixdbRoot>
      {/* <IphoneXOrNewerlightdefa
        alt=""
        src="/iphone-x-or-newerlightdefault.svg"
      /> */}
      <HomeIndicatorlight>
        <HomeIndicator />
      </HomeIndicatorlight>
      <ArrowLeftoutlineParent>
       <Link to="/">
       <ArrowLeftoutlineIcon
          alt=""
          src="/shareh2ologoremovebgpreview-1@2x.png"
          onClick={onArrowLeftOutlineIconClick}
        />
       </Link> 
        <EmailSignIn>Sign in to H20 Share</EmailSignIn>
      </ArrowLeftoutlineParent>
      <GroupParent>
        <EmailParent>
          <label htmlFor="loginMailMob" className="email-label">
            Email
          </label>
          <input
            style={{ borderRadius: "5px" }}
            id="loginMailMob"
            value={loginMail}
            type="email"
            onChange={handleMailChange}
            placeholder="Email"
            className="inputcontainer"
          />

          <Password>
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
              className="inputcontainer"
            />
             
            {/* <Email1>
              <InputLabelmedium>Password</InputLabelmedium>
              <RectangleParent>
                <GroupChild />
                <EyeoutlineIcon alt="" src="/eyeoutline.svg" />
                <EnterPassword>Enter Password</EnterPassword>
              </RectangleParent>
            </Email1> */}
            <InputLabelsmall onClick={onForogtPassword}>
              Forgot Password?
            </InputLabelsmall>
            <CheckboxParent>
              {/* <Checkbox>
                <CheckboxChild /> 
              </Checkbox>
             <InputLabelsmall1>Remember me</InputLabelsmall1> */}
              <input id="checkbox1" type="checkbox" />
              <label htmlFor="checkbox1" className="remember-checkbox">
                Remember me
              </label>
            </CheckboxParent>
          </Password>
          <RectangleParent2>
            <GroupChild1 />
            <InputPlaceholdermediumon5>Sign in</InputPlaceholdermediumon5>
          </RectangleParent2>
        </EmailParent>
        <OrContinueWithParent>
          <OrContinueWith>Or continue with</OrContinueWith>
          <GroupInner />
          <LineDiv />
        </OrContinueWithParent>
        <GroupContainer>
          <LoginParent>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithGoogleParent>
              <SignInWith>Sign in with Google</SignInWith>
              <Google1Icon alt="" src="/google-1.svg" />
            </SignInWithGoogleParent>
          </LoginParent>
          <LoginGroup>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithFacebookParent>
              <SignInWith1>Sign in with Facebook</SignInWith1>
              <Facebook1Icon alt="" src="/facebook-1.svg" />
            </SignInWithFacebookParent>
          </LoginGroup>
          <LoginContainer>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithLinkedinParent>
              <SignInWith2>Sign in with Linkedin</SignInWith2>
              <Linkedin11 alt="" src="/linkedin-1-1.svg" />
            </SignInWithLinkedinParent>
          </LoginContainer>
        </GroupContainer>
      </GroupParent>
      <DontHaveAnContainer onClick={onDontHaveAnClick}>
        {`Don’t have an account? `}
        <SignUp>Sign up</SignUp>
      </DontHaveAnContainer>
      
    </LoginWithMagixdbRoot>
  );
};

export default LogInWithMagixdb;
