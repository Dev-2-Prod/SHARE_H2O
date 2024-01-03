import styled from "styled-components";

const Shareh2ologoRemovebgPreviewIcon = styled.img`
  position: relative;
  width: 109.7px;
  height: 91px;
  object-fit: cover;
`;
const Logo = styled.div`
  position: absolute;
  top: 34px;
  left: calc(50% - 55px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 52px;
  font-weight: 600;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 174px);
  line-height: 29px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
  width: 348px;
  height: 52px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 158.8px);
  line-height: 26px;
  display: inline-block;
  width: 195.6px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 174px);
  width: 348px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray-100);
`;
const Email = styled.div`
  position: relative;
  width: 348px;
  height: 82px;
  text-align: left;
`;
const InputPlaceholdermediumon1 = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 158.8px);
  line-height: 26px;
  display: inline-block;
  width: 221px;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: 6px;
  background-color: var(--color-firebrick);
  width: 348px;
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
  width: 348px;
  height: 50px;
  font-size: var(--font-size-base);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 122px;
  left: calc(50% - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
`;
const SetMyPasswordAndLoginDeskRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-200);
  width: 100%;
  height: 682px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
  font-family: var(--font-inter);
`;

const SetMyPasswordAndLoginDeskMobile = () => {
  return (
    <SetMyPasswordAndLoginDeskRoot>
      <Logo>
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
            <InputPlaceholdermediumon1>
              Confirm new password
            </InputPlaceholdermediumon1>
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

export default SetMyPasswordAndLoginDeskMobile;
