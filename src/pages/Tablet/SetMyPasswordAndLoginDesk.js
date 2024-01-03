import { useCallback } from "react";
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
  top: 40px;
  left: calc(50% - 296px);
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
  text-align: left;
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
  left: calc(50% - 102px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: relative;
  width: 528px;
  height: 50px;
  font-size: var(--font-size-base);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: calc(50% - 173px);
  left: calc(50% - 296px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 32px;
  gap: var(--gap-5xl);
`;
const SetMyPasswordAndLoginDeskRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-300);
  width: 100%;
  height: 682px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const SetMyPasswordAndLoginDesk = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SetMyPasswordAndLoginDeskRoot>
      <Logo onClick={onLogoContainerClick}>
        <Shareh2ologoRemovebgPreviewIcon
          alt=""
          src="/shareh2ologoremovebgpreview-1@2x.png"
        />
      </Logo>
      <SignInToDhiwiseParent>
        <SignInTo>Change password</SignInTo>
        <Email>
          <InputLabelmedium>New password</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter new password
            </InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Email>
          <InputLabelmedium>Confirm new password</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Confirm new password
            </InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Submit>
          <SubmitChild />
          <LogIn>Set my password and login</LogIn>
        </Submit>
      </SignInToDhiwiseParent>
    </SetMyPasswordAndLoginDeskRoot>
  );
};

export default SetMyPasswordAndLoginDesk;
