import React from "react";

import { Button, Img, Input, Text } from "components";
import { Link } from "react-router-dom";

const SignupdesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter gap-[27px] items-center justify-start mx-auto p-[39px] sm:px-5 w-full">
      <div className="flex sm:flex-col flex-row md:gap-10 gap-[847px] items-center justify-between max-w-[1258px] mx-auto w-full">
          <Link  to="/" className="flex flex-col items-start justify-start w-auto">
            <Img
              className="h-[109px] md:h-auto object-cover w-[132px] sm:w-full"
              src="images/img_shareh2ologoremovebgpreview.png"
              alt="shareh2ologorem"
            />
          </Link>
          <div className="flex flex-row gap-6 items-center justify-start w-auto">
           
            <div className="flex flex-col items-center justify-start">
              <Link to="/login" className="text-base text-white-A700">
                <Text size="txtInterRegular16">  Sign in</Text>
              </Link>
            </div>
            <Button
              className="cursor-pointer min-w-[138px] text-base text-center"
              color="deep_orange_A700"
              size="xs"
              variant="fill"
            >
            Sign up for free
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[28.45px] items-center justify-start mb-[29px] md:px-5 w-auto md:w-full">
          <Text
            className="sm:text-[33.94px] md:text-[35.94px] text-[37.94px] text-center text-white-A700 w-auto"
            size="txtInterSemiBold3794"
          >
            Sign up to H20 Share
          </Text>
          <div className="flex flex-col gap-[25px] items-center justify-start min-w-[650px]  w-full">


            <div className="flex flex-col gap-[10px] items-center justify-start w-full">
              <div className="flex flex-col items-start justify-end pr-0.5 py-0.5 w-full">
                <Text
                  className="mt-0.5 sm:text-[18.85px] md:text-[20.85px] text-[22.85px] text-white-A700"
                  size="txtInterRegular2285"
                >
                  Full Name
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter Full Name"
                      className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                      wrapClassName="w-[99%]"
                      type="text"
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
                 Work email address
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter work email address"
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
                Company name
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter company name"
                      className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                      wrapClassName="w-[99%]"
                      type="text"
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
               Company phone
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Enter company phone"
                      className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                      wrapClassName="w-[99%]"
                      type="text"
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
               Company size
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-end justify-start w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex md:flex-col flex-row md:gap-5 h-[66px] md:h-auto items-center justify-start max-w-[650px] px-[15.23px] rounded-[10px] w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-end pr-[5px] py-[5px] w-[96%] md:w-full">
                    <Input
                      name="groupThree"
                      placeholder="Select company size"
                      className="md:text-[18.31px] p-0 placeholder:text-blue_gray-300 sm:text-[16.31px] text-[20.31px] text-blue_gray-300 text-left w-full"
                      wrapClassName="w-[99%]"
                      type="number"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] items-center justify-start w-full">
             
            <Button
                  className="cursor-pointer mt-[20px] h-[63px] max-w-[650px] rounded-[7px] sm:text-[16.31px] md:text-[18.31px] text-[20.31px] text-center w-full"
                  color="deep_orange_A700"
                  size="md"
                  variant="fill"
                >
                Sign up
                </Button>
            </div>
            
            <div className="flex flex-col gap-[33px] items-center justify-start mt-7 w-full">
           
              <a href="javascript:" className="text-[18.97px] text-white-A700">
                <Text size="txtInterRegular1897">
                  <span className="text-white-A700 font-inter text-left font-normal">
                    Already have an account?{" "}
                  </span>
                  <Link
                   to="/login"
                    className="text-white-A700 font-inter text-left font-normal underline"
                  >
                    Sign in
                  </Link>
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupdesktopPage;
