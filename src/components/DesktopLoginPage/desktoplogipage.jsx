import { useState } from "react";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import styled from "styled-components";

import { Button, Img, Input, Line, Text } from "components";
import { Link } from "react-router-dom";
const CheckboxParent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 500px;
  left: 680px;
  width: 186.5px;
  height: 31px;
  color: #ffffff;
  font-size: 22px;
`;

const DesktoploginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto p-[53px] md:px-10 sm:px-5 w-full">
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[847px] items-center justify-between max-w-[1258px] mx-auto w-full">
          <Link
            to="/"
            className="flex flex-col items-start justify-start w-auto"
          >
            <Img
              className="h-[109px] md:h-auto object-cover w-[132px] sm:w-full"
              src="images/img_shareh2ologoremovebgpreview.png"
              alt="shareh2ologorem"
            />
          </Link>
          <div className="flex flex-row gap-6 items-center justify-start w-auto">
            <Button
              className="cursor-pointer min-w-[138px] text-base text-center"
              color="deep_orange_A700"
              size="xs"
              variant="fill"
            >
              Sign in
            </Button>
            <div className="flex flex-col items-center justify-start">
              <Link to="/signup" className="text-base text-white-A700">
                <Text size="txtInterRegular16">Sign up for free</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[38.09px] items-start justify-start my-0.5 w-auto md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[34px] items-center justify-end pt-3 w-full">
              <Text
                className="sm:text-[30.630000000000003px] md:text-[36.63px] text-[40.63px] text-white-A700"
                size="txtInterMedium4062"
              >
                Sign in to H20 Share
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-end pr-0.5 py-0.5 w-full">
                    <Text
                      className="mt-0.5 sm:text-[18.85px] md:text-[20.85px] text-[22.85px] text-white-A700"
                      size="txtInterRegular2285"
                    >
                      Email
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                        <Input
                          name="groupThree"
                          placeholder="jane@gmail.com"
                          className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                          wrapClassName="w-[99%]"
                          type="email"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-end pr-0.5 py-0.5 w-full">
                    <Text
                      className="mt-0.5 sm:text-[18.85px] md:text-[20.85px] text-[22.85px] text-white-A700"
                      size="txtInterRegular2285"
                    >
                      Password
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                        <Input
                          name="groupThree"
                          placeholder="Enter Password"
                          className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                          wrapClassName="w-[99%]"
                          type={isPasswordVisible ? "text" : "password"}
                        ></Input>
                      </div>
                      <div className="!border-colors !rounded-[12px] ">
                        <span
                          className="flex  justify-end items-center"
                          onClick={togglePasswordVisibility}
                        >
                          <Icon
                            icon={isPasswordVisible ? eye : eyeOff}
                            size={20}
                          />
                        </span>
                      </div>
                    </div>
                    {/* <CheckboxParent>
                      <input id="checkbox1" type="checkbox" />
                      <label
                        htmlFor="checkbox1"
                        className="p-1 remember-checkbox"
                      >
                        Remember me
                      </label>
                    </CheckboxParent> */}
                    <Link
                      to="/forgot-password"
                      className="sm:text-[18.85px] md:text-[20.85px] text-[22.85px] text-right text-white-A700"
                    >
                      <Text size="txtInterRegular2285">Forgot Password?</Text>
                    </Link>
                  </div>
                </div>
                <Button
                  className="cursor-pointer h-[63px] max-w-[650px] rounded-[7px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-center w-full"
                  color="deep_orange_A700"
                  size="md"
                  variant="fill"
                >
                  Sign in
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[34px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[78%] md:w-full">
              <Line className="bg-blue_gray-200 h-px sm:mt-0 my-[11px] w-[33%]" />
              <a
                href="javascript:"
                className="ml-2.5 sm:ml-[0] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-blue_gray-200"
              >
                <Text size="txtInterRegular2031">Or continue with</Text>
              </a>
              <Line className="bg-blue_gray-200 h-px ml-1 sm:ml-[0] sm:mt-0 my-[11px] w-[33%]" />
            </div>
            <div className="flex flex-col  justify-start min-w-[650px] w-full">
              <div className="border border-solid border-white-A700 flex flex-col items-center justify-start mt-[21px] p-4 rounded-[7px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-center w-[39%] md:w-full">
                  <div className="bg-light_blue-800 flex flex-col h-[30px] items-center justify-start p-[5px] w-[30px]">
                    <Img
                      className="h-[30px] mr-2.5"
                      src="images/img_google_1.svg"
                      alt="google 1"
                    />
                  </div>
                  <Text
                    className="mt-1 sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700"
                    size="txtInterRegular2031WhiteA700"
                  >
                    Sign in with Google
                  </Text>
                </div>
              </div>

              <div className="border border-solid border-white-A700 flex flex-col items-center justify-start mt-[21px] p-4 rounded-[7px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-center w-[39%] md:w-full">
                  <div className="bg-light_blue-800 flex flex-col h-[30px] items-center justify-start bg-blue-700 p-[5px] w-[30px]">
                    <Img
                      className="h-[19px] w-[19px] "
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                  </div>
                  <Text
                    className="mt-1 sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700"
                    size="txtInterRegular2031WhiteA700"
                  >
                    Sign in with Facebook
                  </Text>
                </div>
              </div>

              <div className="border border-solid border-white-A700 flex flex-col items-center justify-start mt-[21px] p-4 rounded-[7px] w-full">
                <div className="flex flex-row gap-2.5 items-start justify-center w-[39%] md:w-full">
                  <div className="bg-blue-700 flex flex-col h-[30px] items-center justify-start p-[5px] w-[30px]">
                    <Img
                      className="h-[19px] w-[19px]"
                      src="images/img_linkedin.svg"
                      alt="link"
                    />
                  </div>
                  <Text
                    className="mt-1 sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-white-A700"
                    size="txtInterRegular2031WhiteA700"
                  >
                    Sign in with Linkedin
                  </Text>
                </div>
              </div>

              <Text
                className="mt-[37px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-center text-gray-900_01"
                size="txtInterRegular2031Gray90001"
              >
                <span className="text-white-A700 font-inter font-normal">
                  Don’t have an account?{" "}
                </span>
                <Link
                  to="/signup"
                  className="text-white-A700 font-inter font-normal underline"
                >
                  Sign up.
                </Link>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktoploginPage;
