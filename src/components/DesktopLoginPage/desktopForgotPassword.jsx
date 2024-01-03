import React from "react";

import { Button, Img, Input, Text } from "components";
import { Link } from "react-router-dom";

const ForgotpassworddesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto p-[45px] md:px-10 sm:px-5 w-full">
        <Link to="/" className="flex flex-col items-start justify-start w-auto">
          <Img
            className="h-[143px] md:h-auto object-cover w-[172px] sm:w-full"
            src="images/img_shareh2ologoremovebgpreview.png"
            alt="shareh2ologorem"
          />
        </Link>
        <div className="flex flex-col gap-[35.75px] items-center justify-start mb-[211px] min-w-[650px]  w-auto md:w-full">
          <Text
            className="sm:text-[37.66px] md:text-[43.66px] text-[43.66px] text-center text-white-A700 w-auto"
            size="txtInterSemiBold4766"
          >
            Forgot your password?
          </Text>
          <Text
            className="sm:text-[19.83px] md:text-[21.83px] text-[23.83px] text-center text-white-A700 w-auto"
            size="txtInterRegular2383"
          >
            Please enter your email address below to receive a password
            retrieval link.
          </Text>
          <div className="flex flex-col gap-[52.13px] items-center justify-start min-w-[650px]  md:w-full ">
          <div className="flex flex-col gap-[10px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-end pr-0.5 py-0.5 w-full">
                <Text
                  className="mt-0.5 sm:text-[18.85px] md:text-[20.85px] text-[22.85px] text-white-A700"
                  size="txtInterRegular2285"
                >
               Email address
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter email address"
                      className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                      wrapClassName="w-[99%]"
                      type="email"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <Button
                  className="cursor-pointer mt-[20px] h-[63px] max-w-[650px] rounded-[7px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-center w-full"
                  color="deep_orange_A700"
                  size="md"
                  variant="fill"
                >
                Submit
                </Button>
            <a
              href="javascript:"
              className="sm:text-[19.83px] md:text-[21.83px] text-[23.83px] text-white-A700 w-auto"
            >
              <Text size="txtInterRegular2383">
                <span className="text-white-A700 font-inter text-left font-normal">
                  Already have an account?{" "}
                </span>
                <Link  to="/login"
                  className="text-white-A700 font-inter text-left font-normal underline"
                >
                  Sign in
                </Link>
              </Text>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpassworddesktopPage;
