import React from "react";

import "./index.css"

import { Button, Img, Input, Line, List, Text } from "components";

const FinalDesignH2OResponsive1500PlusPage = () => {
  return (
    <>
      <div className="flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-start justify-start pt-[3px] px-[3px] w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[267px] md:px-5 w-auto">
            <Img
              className="h-[148px] md:h-auto object-cover w-[182px] sm:w-full"
              src="images/img_shareh2ologoremovebgpreview.png"
              alt="shareh2ologorem"
            />
          </div>
          <div className="flex sm:flex-1 flex-row sm:gap-10 gap-[76px] items-start justify-start md:ml-[0] ml-[221px] md:mt-0 mt-[25px] md:px-5 px-[106px] py-[29px] w-auto sm:w-full">
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtPlusJakartaSansSemiBold16"
            >
              Advertise
            </Text>
            <Text
              className="text-base text-center text-white-A700 w-auto"
              size="txtPlusJakartaSansSemiBold16"
            >
              Pricing
            </Text>
            <a
              href="javascript:"
              className="text-base text-center text-white-A700 w-auto"
            >
              <Text size="txtPlusJakartaSansSemiBold16">Contact Us</Text>
            </a>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[291px] md:mt-0 mt-[43px] md:px-5 w-auto">
            <Button
              className="cursor-pointer font-medium min-w-[188px] rounded-[29px] text-base text-center"
              color="white_A700"
              size="md"
              variant="outline"
            >
              Login / Sign Up
            </Button>
          </div>
        </div>
        <div className="h-[6547px] sm:h-[7477px] md:h-[8827px] md:px-5 relative w-full">
          <div className="border border-black-900 border-solid flex flex-col h-full items-center justify-end m-auto w-full">
            <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[1044px] p-[3px] w-full">
              <div className="h-[709px] md:h-[801px] mb-[92px] md:ml-[0] ml-[162px] md:px-10 sm:px-5 px-[43px] relative w-[39%] md:w-full">
                <div className="h-[709px] m-auto w-[89%] md:w-full">
                  <Img
                    className="h-[709px] m-auto object-cover w-full"
                    src="images/img_ellipse2webp.png"
                    alt="ellipse2webp"
                  />
                  <Img
                    className="absolute bottom-[18%] h-3.5 right-[3%] w-3.5"
                    src="images/img_frame_light_green_a700.svg"
                    alt="frame"
                  />
                </div>
                <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[94px] justify-start right-[8%] w-[78%]">
                  <Img
                    className="h-[405px] sm:h-auto object-cover w-full"
                    src="images/img_depositphotos3.png"
                    alt="depositphotosThree"
                  />
                  <Img
                    className="h-[15px] md:ml-[0] ml-[492px] w-[15px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col justify-end mr-[115px] md:pr-10 sm:pr-5 pr-[79px] py-[79px] w-[39%] md:w-full">
                <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start ml-12 md:ml-[0] mr-[113px] mt-[47px] py-0.5 w-[534px] sm:w-full">
                  <Text
                    className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[334px]"
                    size="txtPlusJakartaSansSemiBold40"
                  >
                    How to Advertise
                  </Text>
                  <Text
                    className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-green-A200 w-[146px]"
                    size="txtPlusJakartaSansSemiBold40GreenA200"
                  >
                    With Us
                  </Text>
                </div>
                <div className="flex flex-col gap-[19px] items-start justify-start mr-[104px] mt-[54px] md:px-10 px-16 sm:px-5 w-[591px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[90%] md:w-full">
                  <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-3"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                    <Text
                      className="capitalize text-white-A700 text-xl"
                      size="txtPlusJakartaSansSemiBold20"
                    >
                      Distribute Free in your own business events
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[96%] md:w-full">
                  <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-3"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                    <Text
                      className="capitalize sm:mt-0 mt-1 text-white-A700 text-xl"
                      size="txtPlusJakartaSansSemiBold20"
                    >
                      Ask us to distribute Free to relevant Audience
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-[54%] md:w-full">
                  <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-3"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                    <Text
                      className="capitalize text-white-A700 text-xl"
                      size="txtPlusJakartaSansSemiBold20"
                    >
                      Sell bottles with your Ads
                    </Text>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-medium min-w-[174px] md:ml-[0] ml-[119px] mr-[401px] mt-[91px] text-base text-center"
                  shape="round"
                  color="deep_orange_A700"
                  variant="fill"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 sm:h-[587px] h-[764px] md:h-[790px] pb-[35px] sm:px-5 px-[35px] relative w-full">
              <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start max-w-[1433px] mx-auto py-[41px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[133px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="md:h-[162px] h-[186px] relative w-full">
                      <div className="absolute bottom-[0] flex h-[142px] md:h-[162px] inset-x-[0] justify-end mx-auto w-full">
                        <div className="bg-gray-900_01 h-[162px] mt-auto mx-auto rounded-[30px] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] justify-start mx-auto w-[87%]">
                          <div className="flex flex-row gap-1.5 items-start justify-start md:ml-[0] ml-[70px] pr-[3px] pt-[3px] w-[70%] md:w-full">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24"
                            >
                              Select Your
                            </Text>
                            <Text
                              className="capitalize mt-0.5 text-2xl md:text-[22px] text-orange-400 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              {" "}
                              Package
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start p-[3px] w-full">
                            <Text
                              className="leading-[28.00px] mr-4 text-base text-blue_gray-200 w-[85%] sm:w-full"
                              size="txtPlusJakartaSansMedium16"
                            >
                              Select from the pre made packages. Type and
                              quantity of container. Area of Distribution &
                              target customers
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute right-[10%] md:text-5xl text-[88px] text-gray-800 top-[0]"
                        size="txtPlusJakartaSansMedium88"
                      >
                        01{" "}
                      </Text>
                    </div>
                    <div className="md:h-[162px] h-[185px] relative w-full">
                      <div className="absolute bottom-[0] flex h-[140px] md:h-[162px] inset-x-[0] justify-end mx-auto w-full">
                        <div className="bg-gray-900_01 h-[162px] mt-auto mx-auto rounded-[30px] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] justify-start mx-auto w-[87%]">
                          <div className="flex flex-row gap-1.5 items-start justify-start md:ml-[0] ml-[70px] w-[70%] md:w-full">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24"
                            >
                              Make Your{" "}
                            </Text>
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-orange-400 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              Payment
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end p-[15px] w-full">
                            <Text
                              className="md:ml-[0] ml-[54px] mt-[3px] text-base text-blue_gray-200"
                              size="txtPlusJakartaSansMedium16"
                            >
                              Pay for your selected package
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute right-[10%] md:text-5xl text-[88px] text-gray-800 top-[0]"
                        size="txtPlusJakartaSansMedium88"
                      >
                        02{" "}
                      </Text>
                    </div>
                    <div className="md:h-[162px] h-[186px] relative w-full">
                      <div className="absolute bottom-[0] flex h-[142px] md:h-[162px] inset-x-[0] justify-end mx-auto w-full">
                        <div className="bg-gray-900_01 h-[162px] mt-auto mx-auto rounded-[30px] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] justify-start mx-auto w-[87%]">
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[70px] pr-1.5 pt-1.5 w-[70%] md:w-full">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24"
                            >
                              Select Tags
                            </Text>
                            <Text
                              className="capitalize ml-1 text-2xl md:text-[22px] text-orange-400 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              {" "}
                              Designs
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-end p-[15px] w-full">
                            <Text
                              className="md:ml-[0] ml-[54px] mt-[3px] text-base text-blue_gray-200"
                              size="txtPlusJakartaSansMedium16"
                            >
                              Select tag Design from our list or upload your
                              own.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute right-[7%] md:text-5xl text-[88px] text-gray-800 top-[0]"
                        size="txtPlusJakartaSansMedium88"
                      >
                        03{" "}
                      </Text>
                    </div>
                    <div className="md:h-[162px] h-[185px] relative w-full">
                      <div className="absolute bottom-[0] flex h-[140px] md:h-[162px] inset-x-[0] justify-end mx-auto w-full">
                        <div className="bg-gray-900_01 h-[162px] mt-auto mx-auto rounded-[30px] w-full"></div>
                        <div className="absolute bottom-[0] flex flex-col gap-2.5 inset-x-[0] justify-start mx-auto w-[87%]">
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[70px] w-[70%] md:w-full">
                            <Text
                              className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24"
                            >
                              Receive
                            </Text>
                            <Text
                              className="capitalize ml-1 text-2xl md:text-[22px] text-orange-400 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              Video & Clients
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start p-[3px] w-full">
                            <Text
                              className="leading-[28.00px] mr-4 text-base text-blue_gray-200 w-[85%] sm:w-full"
                              size="txtPlusJakartaSansMedium16"
                            >
                              <>
                                We will send you the recorded video of the
                                distribution Drive.
                                <br />
                                You should see improvement in your brand
                                awareness and ROI
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute right-[9%] md:text-5xl text-[88px] text-gray-800 top-[0]"
                        size="txtPlusJakartaSansMedium88"
                      >
                        04{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto pt-[3px] px-[3px] top-[7%] w-1/5">
                <Text
                  className="capitalize md:ml-[0] ml-[98px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPlusJakartaSansSemiBold40"
                >
                  Process
                </Text>
                <Img
                  className="h-1.5  md:ml-[0] ml-[120px]"
                  src="images/img_svg.svg"
                  alt="svg"
                />
              </div>
              <img
        class="animated-image"
        src="images/img_ellipseshadow3webp.png"
        alt="ellipseshadow3w"
    />

            </div>
            <div className="bg-gray-900 sm:h-[452px] h-[571px] md:h-[693px] p-[50px] md:px-10 sm:px-5 relative w-full">
              <div className="absolute bottom-[22%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto px-[15px] w-[64%]">
                <List
                  className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-gray-900_01 flex flex-col gap-[13px] items-center justify-end mb-10 sm:ml-[0] p-3 rounded-[30px] w-full">
                    <div className="h-20 md:h-[126px] mt-12 relative w-[90%]">
                      <div className="absolute h-20 md:h-[78px] inset-y-[0] my-auto right-[0] w-[36%]">
                        <Img
                          className="absolute h-[78px] inset-y-[0] my-auto right-[0] w-[77px]"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                        <Img
                          className="absolute bottom-[4%] h-[57px] left-[0] object-cover w-[57px]"
                          src="images/img_vector.png"
                          alt="vector"
                        />
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col items-start justify-start left-[0]">
                        <Text
                          className="capitalize leading-[28.00px] text-orange-400 text-xl"
                          size="txtPlusJakartaSansSemiBold20Orange400"
                        >
                          <>
                            Flexibale
                            <br />
                            Option{" "}
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start pt-[3px]">
                      <Text
                        className="leading-[28.00px] text-base text-blue_gray-200 w-full"
                        size="txtPlusJakartaSansMedium16"
                      >
                        Select quantity and type of container for Advertisement
                        according to your requirement
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-900_01 flex flex-col gap-[13px] items-center justify-center sm:ml-[0] sm:mt-0 mt-10 p-5 rounded-[30px] w-full">
                    <div className="h-20 md:h-[118px] mt-10 relative w-[96%]">
                      <div className="absolute h-20 md:h-[78px] inset-y-[0] my-auto right-[0] w-[35%]">
                        <Img
                          className="absolute h-[78px] inset-[0] justify-center m-auto w-[77px]"
                          src="images/img_globe.svg"
                          alt="globe"
                        />
                        <Img
                          className="absolute bottom-[6%] h-[51px] left-[0] object-cover w-[51px]"
                          src="images/img_vector_51x51.png"
                          alt="vector"
                        />
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col items-start justify-start left-[0]">
                        <Text
                          className="capitalize leading-[28.00px] text-orange-400 text-xl w-[71%] sm:w-full"
                          size="txtPlusJakartaSansSemiBold20Orange400"
                        >
                          Tag Designs
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-5 pr-[3px] py-[3px]">
                      <Text
                        className="leading-[28.00px] text-base text-blue_gray-200 w-[92%] sm:w-full"
                        size="txtPlusJakartaSansMedium16"
                      >
                        We will design and print your brand tags
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="bg-gray-900_01 md:h-[118px] h-[249px] mb-10 md:ml-[0] ml-[30px] p-5 relative rounded-[30px] w-[24%] md:w-full">
                  <div className="absolute h-20 md:h-[78px] right-[8%] top-[24%] w-[79px]">
                    <Img
                      className="absolute h-[78px] inset-[0] justify-center m-auto w-[77px]"
                      src="images/img_globe.svg"
                      alt="globe"
                    />
                    <Img
                      className="absolute bottom-[6%] h-[51px] left-[0] object-cover w-[51px]"
                      src="images/img_vector_1.png"
                      alt="vector"
                    />
                  </div>
                  <div className="absolute bottom-[22%] flex flex-col inset-x-[0] items-start justify-start mx-auto pr-[3px] py-[3px]">
                    <Text
                      className="leading-[28.00px] text-base text-blue_gray-200 w-[92%] sm:w-full"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Sell or Distribute for free. We will take care of that.
                    </Text>
                  </div>
                  <Text
                    className="absolute capitalize left-[10%] text-orange-400 text-xl top-[39%]"
                    size="txtPlusJakartaSansSemiBold20Orange400"
                  >
                    Distribution
                  </Text>
                </div>
                <div className="bg-gray-900_01 flex flex-col items-center justify-end md:ml-[0] ml-[30px] md:mt-0 mt-10 p-5 rounded-[30px] w-[24%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-center justify-start mb-5 mt-10 w-[97%] md:w-full">
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <div className="flex flex-col items-start justify-start mb-[3px] mt-[21px]">
                        <Text
                          className="capitalize leading-[28.00px] text-orange-400 text-xl"
                          size="txtPlusJakartaSansSemiBold20Orange400"
                        >
                          <>
                            Transparent
                            <br />
                            Policy{" "}
                          </>
                        </Text>
                      </div>
                      <div className="h-20 md:h-[78px] relative w-[33%]">
                        <Img
                          className="h-[78px] m-auto w-[77px]"
                          src="images/img_globe.svg"
                          alt="globe_One"
                        />
                        <Img
                          className="absolute bottom-[8%] h-[51px] left-[0] object-cover w-[51px]"
                          src="images/img_vector_2.png"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pr-[3px] py-[3px] w-full">
                      <Text
                        className="leading-[28.00px] text-base text-blue_gray-200 w-[92%] sm:w-full"
                        size="txtPlusJakartaSansMedium16"
                      >
                        Get the recorded video of the water distribution
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[9%] w-1/5">
                <div className="flex flex-col items-end justify-start pt-[7px] px-[7px] w-full">
                  <Text
                    className="capitalize mr-[43px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtPlusJakartaSansSemiBold40"
                  >
                    Advantages
                  </Text>
                </div>
                <Img
                  className="h-[49px]"
                  src="images/img_svg_orange_400.svg"
                  alt="svg_One"
                />
              </div>
              <Img
                className="absolute h-[452px] inset-y-[0] left-[4%] my-auto object-cover w-[22%]"
                src="images/img_ellipseshadow2webp.png"
                alt="ellipseshadow2w"
              />
            </div>
            <div className="bg-gray-900 flex flex-col md:gap-10 gap-[85px] items-center justify-start p-[97px] md:px-10 sm:px-5 w-full">
              <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-center pt-[3px] px-[3px] w-[24%] md:w-full">
                <Text
                  className="capitalize sm:ml-[0] ml-[46px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                  size="txtPlusJakartaSansSemiBold40"
                >
                  Trusted{" "}
                </Text>
                <Text
                  className="capitalize mr-[59px] sm:mt-0 mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-gray-500"
                  size="txtPlusJakartaSansSemiBold40Gray500"
                >
                  <span className="text-gray-500 font-plusjakartasans text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-green-A200 font-plusjakartasans text-left font-semibold">
                    Partners
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start mb-[27px] w-auto md:w-full">
                <Img
                  className="h-10 md:h-auto object-cover w-28 sm:w-full"
                  src="images/img_2024.png"
                  alt="2024"
                />
                <Img
                  className="h-10 md:h-auto object-cover w-[247px] sm:w-full"
                  src="images/img_2025.png"
                  alt="2025"
                />
                <Img
                  className="h-10 md:h-auto object-cover w-[133px] sm:w-full"
                  src="images/img_2026.png"
                  alt="2026"
                />
                <Img
                  className="h-10 md:h-auto object-cover w-[270px] sm:w-full"
                  src="images/img_2027.png"
                  alt="2027"
                />
                <Img
                  className="h-10 md:h-auto object-cover w-[152px] sm:w-full"
                  src="images/img_2028.png"
                  alt="2028"
                />
                <Img
                  className="h-10 md:h-auto object-cover w-[152px] sm:w-full"
                  src="images/img_2029.png"
                  alt="2029"
                />
              </div>
            </div>
            <div className="bg-gray-900_01 flex flex-col items-end justify-start p-[29px] sm:px-5 w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start mb-[17px] mr-[57px] w-4/5 md:w-full">
                <div className="md:h-[341px] h-[535px] relative w-full">
                  <div className="absolute bottom-[0] md:h-[333px] h-[413px] left-[0] w-[82%] md:w-full">
                    <div className="absolute bottom-[0] md:h-[333px] h-[353px] left-[0] w-[79%] md:w-full">
                      <div className="absolute bottom-[0] h-[333px] left-[0] w-[58%] sm:w-full">
                        <Img
                          className="absolute h-[333px] inset-y-[0] my-auto right-[0] w-[333px]"
                          src="images/img_svg_green_a200.svg"
                          alt="svg_Two"
                        />
                        <div className="absolute md:h-12 h-[58px] left-[0] p-[5px] top-[37%] w-[74%] sm:w-full">
                          <Img
                            className="absolute h-12 inset-[0] justify-center m-auto object-cover rounded-[10px] w-12"
                            src="images/img_vector_48x48.png"
                            alt="vector_Two"
                          />
                          <Text
                            className="absolute bottom-[22%] capitalize inset-x-[0] mx-auto text-center text-white-A700 text-xl w-max"
                            size="txtPlusJakartaSansSemiBold20"
                          >
                            Step 1{" "}
                          </Text>
                        </div>
                        <div className="absolute bottom-[20%] flex flex-col gap-2 items-center justify-start left-[14%] w-[47%]">
                          <Text
                            className="capitalize text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            Increase
                          </Text>
                          <div className="flex flex-col gap-2 justify-start w-[51%] md:w-full">
                            <Text
                              className="capitalize md:ml-[0] ml-[5px] text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              Foot Traffic
                            </Text>
                            <Line className="bg-orange-400 h-0.5 mr-[5px] w-[97%]" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute h-[333px] right-[0] top-[0] w-[58%] sm:w-full">
                        <Img
                          className="absolute h-[333px] inset-y-[0] my-auto right-[0] w-[333px]"
                          src="images/img_svg_green_a200_333x333.svg"
                          alt="svg_Three"
                        />
                        <div className="absolute md:h-12 h-[58px] inset-y-[0] left-[0] my-auto p-[5px] w-[74%] sm:w-full">
                          <Img
                            className="absolute h-12 inset-[0] justify-center m-auto object-cover rounded-[10px] w-12"
                            src="images/img_vector_48x48.png"
                            alt="vector_Three"
                          />
                          <Text
                            className="absolute bottom-[22%] capitalize inset-x-[0] mx-auto text-center text-white-A700 text-xl w-max"
                            size="txtPlusJakartaSansSemiBold20"
                          >
                            Step 2{" "}
                          </Text>
                        </div>
                        <div className="absolute bottom-[16%] flex flex-row items-start justify-center left-[14%] w-[46%]">
                          <Text
                            className="capitalize ml-1.5 mt-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                            size="txtPlusJakartaSansSemiBold24"
                          >
                            Improve
                          </Text>
                          <div className="h-8 md:h-[62px] mb-[31px] ml-[3px] mr-[92px] relative w-[26%]">
                            <Line className="absolute bg-orange-400 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
                            <Text
                              className="absolute capitalize right-[0] text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl top-[0]"
                              size="txtPlusJakartaSansSemiBold24Orange400"
                            >
                              Sales
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[1%] flex flex-col gap-2.5 items-center justify-start pb-[53px] right-[0] w-[34%]">
                      <div className="md:h-12 h-[58px] p-[5px] relative w-full">
                        <Img
                          className="absolute h-12 inset-[0] justify-center m-auto object-cover rounded-[10px] w-12"
                          src="images/img_vector_48x48.png"
                          alt="vector_Four"
                        />
                        <Text
                          className="absolute bottom-[22%] capitalize inset-x-[0] mx-auto text-center text-white-A700 text-xl w-max"
                          size="txtPlusJakartaSansSemiBold20"
                        >
                          Step 3{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-center justify-start p-1 w-[63%] md:w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                          size="txtPlusJakartaSansSemiBold24"
                        >
                          Gain Amazing
                        </Text>
                        <div className="flex flex-col items-start justify-start mb-2.5 w-[14%] md:w-full">
                          <Text
                            className="capitalize h-[31px] ml-1 md:ml-[0] text-2xl md:text-[22px] text-center text-orange-400 sm:text-xl"
                            size="txtPlusJakartaSansSemiBold24Orange400"
                          >
                            PR
                          </Text>
                          <div className="bg-orange-400 h-0.5 w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] justify-start mx-auto pt-[7px] px-[7px] top-[0] w-[39%]">
                      <Text
                        className="capitalize mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                        size="txtPlusJakartaSansSemiBold40"
                      >
                        Benefits of Advertising
                      </Text>
                      <div className="flex flex-row gap-0.5 items-start justify-start md:ml-[0] ml-[86px] px-[15px] py-2.5 w-auto">
                        <Text
                          className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[92px]"
                          size="txtPlusJakartaSansSemiBold40"
                        >
                          With
                        </Text>
                        <Text
                          className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-green-A200 w-[203px]"
                          size="txtPlusJakartaSansSemiBold40GreenA200"
                        >
                          ShareH2O
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[341px] object-cover right-[0] top-[0] w-[27%]"
                    src="images/img_ellipseshadow3webp_341x420.png"
                    alt="ellipseshadow3w_One"
                  />
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[505px] items-center justify-start p-[90px] md:px-10 sm:px-5 rounded-[40px] w-[82%] md:w-full"
                  style={{ backgroundImage: "url('images/img_section.png')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
                    <div className="flex flex-col items-center justify-start p-[15px] w-1/2 md:w-full">
                      <div className="bg-black-900_a0 flex flex-col gap-5 items-start justify-start mb-[15px] p-[34px] sm:px-5 rounded-[20px] shadow-bs1 w-full">
                        <div className="md:h-[101px] h-[117px] ml-1.5 md:ml-[0] pt-[15px] relative w-[93%] sm:w-full">
                          <Img
                            className="h-[46px]"
                            src="images/img_divtestistar.svg"
                            alt="divtestistar"
                          />
                          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto pt-9 w-full">
                            <Text
                              className="leading-[28.00px] text-base text-white-A700 w-full"
                              size="txtPlusJakartaSansMedium16WhiteA700"
                            >
                              <>
                                &quot;Our brand has been recognized like never
                                before by simple act of distribution of free
                                water. Advertising could be so simple, never
                                knew,
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-[89%] md:w-full">
                          <div className="flex flex-row gap-[15px] items-start justify-start w-[54%] md:w-full">
                            <Img
                              className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                              src="images/img_avatar2jpg.png"
                              alt="avatar2jpg"
                            />
                            <div className="flex flex-col gap-[9px] items-start justify-start mt-1">
                              <Text
                                className="capitalize text-lg text-white-A700"
                                size="txtPlusJakartaSansSemiBold18"
                              >
                                Jack M.Gomes
                              </Text>
                              <Text
                                className="capitalize text-sm text-white-A700"
                                size="txtPlusJakartaSansRegular14"
                              >
                                Myntra, CEO
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[63px] w-1/2 md:w-full">
                      <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                        <div className="flex flex-col items-start justify-start w-[82%] md:w-full">
                          <div className="flex flex-col items-center justify-center w-auto sm:w-full">
                            <Text
                              className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                              size="txtPlusJakartaSansSemiBold40"
                            >
                              24/7 we care about
                            </Text>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start mt-0.5 w-[92%] md:w-full">
                            <div className="flex flex-col items-center justify-center w-auto">
                              <Text
                                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-auto"
                                size="txtPlusJakartaSansSemiBold40"
                              >
                                Client
                              </Text>
                            </div>
                            <div className="md:h-[51px] h-[53px] relative w-[235px]">
                              <Text
                                className="absolute capitalize h-max inset-[0] m-auto sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-max"
                                size="txtPlusJakartaSansSemiBold40"
                              >
                                Satisfaction
                              </Text>
                              <Line className="absolute bg-white-A700 bottom-[0] h-0.5 inset-x-[0] mx-auto w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[13px] py-[3px]">
                        <Text
                          className="leading-[28.00px] mb-[34px] text-base text-white-A700 w-full"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          Drop us an email or leave a comment with out chatbot.
                          We will get back to you within 24 hours.
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[130px] w-full">
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[175px] text-base text-center"
                          shape="round"
                          color="deep_orange_A700"
                          variant="fill"
                        >
                          Contact Us
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-end p-[27px] sm:px-5 w-full ">
              <div className="md:h-[1102px] sm:h-[2240px] h-[859px] mt-[23px] pb-[33px] sm:px-5 px-[33px] relative w-[98%] md:w-full">
                <Img
                  className="absolute h-[430px] left-[4%] object-cover top-[0] w-[27%]"
                  src="images/img_ellipse2webp.png"
                  alt="ellipse2webp_One"
                />
                <div className="absolute flex flex-col gap-[5px] inset-x-[0] items-center justify-start mx-auto px-3 top-[3%] w-auto">
                  <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-[248px]"
                      size="txtPlusJakartaSansSemiBold40"
                    >
                      choose your{" "}
                    </Text>
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-green-A200 w-[82px]"
                      size="txtPlusJakartaSansSemiBold40GreenA200"
                    >
                      Plan
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-end w-auto">
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-auto"
                      size="txtPlusJakartaSansSemiBold40"
                    >
                      from our options
                    </Text>
                  </div>
                </div>
                <List
                  className="absolute bottom-[10%] sm:flex-col flex-row gap-[59px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 h-[557px] inset-x-[0] justify-start mx-auto md:px-10 sm:px-5 px-[285px] w-auto"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-col items-start justify-start p-[21px] sm:px-5 rounded-[30px] w-full ">
                      <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[21px] w-auto">
                        <Text
                          className="capitalize text-center text-white-A700 text-xl w-[155px]"
                          size="txtPlusJakartaSansSemiBold20"
                        >
                          Beginner Plastic
                        </Text>
                        <Text
                          className="sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 tracking-[-0.86px] w-36"
                          size="txtSpaceGroteskBold31"
                        >
                          Rs. 30000
                        </Text>
                      </div>
                      <Img
                        className="h-[158px] md:h-auto md:ml-[0] ml-[15px] mt-[35px] object-cover w-[158px]"
                        src="images/img_1litrepackage.png"
                        alt="1litrepackage"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start mb-[77px] ml-4 md:ml-[0] mt-2.5 w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            Plastic Bottles
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg_One"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            5000 Units
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_orange-A700 flex flex-col items-center justify-center md:ml-[0] ml-[54px] mr-[74px] md:px-10 px-11 sm:px-5 py-2.5 rounded-[14px] shadow-bs w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="capitalize text-base text-center text-white-A700 w-auto"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          select{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-col gap-[33px] items-center justify-start p-[15px] rounded-[30px] w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-center text-white-A700 text-xl w-[101px]"
                          size="txtPlusJakartaSansSemiBold20"
                        >
                          Pro Plastic{" "}
                        </Text>
                        <Text
                          className="sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 tracking-[-0.86px] w-36"
                          size="txtSpaceGroteskBold31"
                        >
                          Rs. 50000
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[18px] items-start justify-start mb-[83px] mr-[25px] w-[81%] md:w-full">
                        <Img
                          className="h-[165px] md:h-auto object-cover w-full"
                          src="images/img_istockphoto484.png"
                          alt="istockphoto484"
                        />
                        <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                          <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_listiconsvg.svg"
                              alt="listiconsvg"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtPlusJakartaSansMedium16WhiteA700"
                            >
                              Plastic Bottles
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                            <Img
                              className="h-[15px] w-[15px]"
                              src="images/img_listiconsvg.svg"
                              alt="listiconsvg_One"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtPlusJakartaSansMedium16WhiteA700"
                            >
                              10000 Units
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_orange-A700 flex flex-col items-center justify-center md:ml-[0] ml-[54px] mr-[74px] md:px-10 px-11 sm:px-5 py-2.5 rounded-[17px] shadow-bs w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="capitalize text-base text-center text-white-A700 w-auto"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          select{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-col items-start justify-start p-3.5 rounded-[30px] w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[19px] w-auto">
                        <Text
                          className="capitalize text-center text-white-A700 text-xl w-[157px]"
                          size="txtPlusJakartaSansSemiBold20"
                        >
                          Beginner Carton{" "}
                        </Text>
                        <Text
                          className="sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 tracking-[-0.86px] w-[145px]"
                          size="txtSpaceGroteskBold31"
                        >
                          Rs. 40000
                        </Text>
                      </div>
                      <Img
                        className="h-[124px] md:h-auto md:ml-[0] ml-[59px] mt-[63px] object-cover w-[24%] sm:w-full"
                        src="images/img_screenshot2023.png"
                        alt="screenshot2023"
                      />
                      <div className="flex flex-col gap-2.5 items-start justify-start mb-[84px] md:ml-[0] ml-[23px] mt-[30px] w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            Cardboard Cartons
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-[91%] md:w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg_One"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            5000 Units
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_orange-A700 flex flex-col items-center justify-center md:ml-[0] ml-[54px] mr-[74px] md:px-10 px-11 sm:px-5 py-2.5 rounded-[18px] shadow-bs w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="capitalize text-base text-center text-white-A700 w-auto"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          select{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="bg-gray-900_01 flex flex-col gap-2.5 items-center justify-start p-3.5 rounded-[30px] w-full">
                      <div className="flex flex-col gap-[42px] items-start justify-start w-[70%] md:w-full">
                        <div className="flex flex-col gap-3.5 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-center text-white-A700 text-xl w-[103px]"
                            size="txtPlusJakartaSansSemiBold20"
                          >
                            Pro Carton{" "}
                          </Text>
                          <Text
                            className="sm:text-[27px] md:text-[29px] text-[31px] text-white-A700 tracking-[-0.86px] w-[145px]"
                            size="txtSpaceGroteskBold31"
                          >
                            Rs. 60000
                          </Text>
                        </div>
                        <Img
                          className="h-[165px] md:h-auto md:ml-[0] ml-[3px] object-cover w-[66%] sm:w-full"
                          src="images/img_i290421638so.png"
                          alt="i290421638so"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start mb-[84px] mr-[26px] w-auto">
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            Cardboard Cartons
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-start pr-[3px] py-[3px] w-[78%] md:w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_listiconsvg.svg"
                            alt="listiconsvg_One"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            10000 Units
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-deep_orange-A700 flex flex-col items-center justify-center md:ml-[0] ml-[54px] mr-[74px] md:px-10 px-11 sm:px-5 py-2.5 rounded-[18px] shadow-bs w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="capitalize text-base text-center text-white-A700 w-auto"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          select{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-start p-[70px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[33px] w-[72%] md:w-full">
                <div className="flex flex-col gap-11 items-start justify-center md:mt-0 mt-3.5 p-2.5 w-[32%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start mt-40 py-0.5 w-auto sm:w-full">
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[173px]"
                      size="txtPlusJakartaSansSemiBold40"
                    >
                      Types Of{" "}
                    </Text>
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-green-A200 w-[212px]"
                      size="txtPlusJakartaSansSemiBold40GreenA200"
                    >
                      Containers
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-center md:ml-[0] ml-[26px] py-[3px] w-auto">
                    <Text
                      className="text-base text-blue_gray-200 w-auto"
                      size="txtPlusJakartaSansMedium16"
                    >
                      Select from our range of containers
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[15px] items-start justify-start mb-40 p-[17px] w-[96%] md:w-full">
                    <div className="flex flex-row items-start justify-end mt-[3px] p-[7px]">
                     

                    <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-4"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                     
                      <Text
                        className="capitalize text-white-A700 text-xl"
                        size="txtPlusJakartaSansSemiBold20"
                      >
                        Plastic 200ml PET Bottles
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-end p-[3px]">
                    <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-4"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                      <Text
                        className="capitalize text-white-A700 text-xl"
                        size="txtPlusJakartaSansSemiBold20"
                      >
                        Hard Cardbord 200 ml cartons
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-end mb-[3px] p-[7px]">
                    <Img
                                className="h-10 mb-[19px] mt-[3px] w-10 mr-4"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                      
                      <Text
                        className="capitalize text-white-A700 text-xl"
                        size="txtPlusJakartaSansSemiBold20"
                      >
                        Aluminum 200ml Bottles
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="md:h-[659px] h-[705px] mb-3.5 pb-[27px] sm:pl-5 pl-[27px] relative w-[52%] md:w-full">
                  <div className="absolute h-[645px] inset-x-[0] mx-auto top-[0] w-[645px] md:w-full">
                    <Img
                      className="h-[645px] m-auto object-cover w-[645px]"
                      src="images/img_ellipse2webp.png"
                      alt="ellipse2webp_Two"
                    />
                    <Img
                      className="absolute h-[15px] left-[12%] top-[17%] w-[15px]"
                      src="images/img_close.svg"
                      alt="close_One_yellow_dot"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[7%] h-3.5 left-[8%] w-3.5"
                    src="images/img_frame_light_green_a700.svg"
                    alt="frame_One_green_dot"
                  />
                  <div className="absolute h-[596px] inset-y-[0] my-auto right-[0] w-[89%] md:w-full">
                    <div className="absolute h-[596px] inset-y-[0] left-[11%] my-auto w-[74%] sm:w-full">
                      <Img
                        className="absolute h-[412px] object-cover right-[0] top-[13%] w-[36%]"
                        src="images/img_screenshot2023.png"
                        alt="screenshot2023"
                      />
                      <Img
                        className="absolute h-[596px] inset-y-[0] left-[0] my-auto object-cover w-[95%]"
                        src="images/img_1litrepackage.png"
                        alt="1litrepackage"
                      />
                    </div>
                    <Img
                      className="absolute h-[513px] inset-x-[0] mx-auto object-cover top-[1%] w-full"
                      src="images/img_freewater3removebgpreview.png"
                      alt="freewater3remov"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray-900 flex flex-col inset-x-[0] items-start justify-end mx-auto pr-[17px] py-[17px] top-[0] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[31px] py-[9px] w-[94%] md:w-full">
              <div className="sm:h-[1060px] md:h-[1334px] h-[916px] mb-[46px] relative w-[59%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[73%]">
                  <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 h-[331px] md:h-auto items-start justify-start w-auto md:w-full">
                      <div className="relative w-full">
                        <Text
                          className="capitalize leading-[78.00px] m-auto md:text-5xl text-6xl text-white-A700 w-full"
                          size="txtPlusJakartaSansBold60"
                        >
                          <>It&#39;s a mini billboard in your hands</>
                        </Text>
                        <Img
                          className="absolute bottom-[45%] h-2.5 inset-x-[0] mx-auto w-[397px]"
                          src="images/img_svg.svg"
                          alt="svg_Four"
                        />
                      </div>
                      <Text
                        className="leading-[28.00px] max-w-[703px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-200 sm:text-xl"
                        size="txtPlusJakartaSansMedium24"
                      >
                        ShareH2O is an innovative advertising platform that
                        utilizes premium spring water as a new type of
                        advertising medium while prioritizing sustainability
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[22px] items-start justify-start md:px-10 sm:px-5 px-[43px] w-auto md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 h-[78px] md:h-auto items-start justify-start max-w-[642px] w-full">
                        <div className="flex flex-col items-center justify-end">
                          <Text
                            className="capitalize mt-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtPlusJakartaSansSemiBold40"
                          >
                            Our Product is a Blank
                          </Text>
                        </div>
                        <div className="flex sm:flex-1 flex-col items-end justify-start pt-[3px] w-[23%] sm:w-full">
                          <Text
                            className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                            size="txtPlusJakartaSansSemiBold40"
                          >
                            Canvas
                          </Text>
                          <Img
                            className="h-[17px] mt-0.5"
                            src="images/img_vector_orange_400.svg"
                            alt="vector_Five"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                        <Text
                          className="leading-[28.00px] mb-[3px] text-blue_gray-200 text-xl w-[93%] sm:w-full"
                          size="txtPlusJakartaSansMedium20"
                        >
                          <>
                            Opposite of traditional advertising; we put a smile
                            on their face so they&#39;ll be excited to support
                            your brand.
                          </>
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-px w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="flex md:flex-1 flex-col items-start justify-start px-4 w-[48%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                              <Img
                                className="h-10 mb-[19px] mt-[3px] w-10"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <Text
                                className="capitalize text-white-A700 text-xl"
                                size="txtPlusJakartaSansSemiBold20"
                              >
                                10X
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                              <Text
                                className="leading-[28.00px] mb-[31px] text-base text-blue_gray-200 w-[67%] sm:w-full"
                                size="txtPlusJakartaSansMedium16"
                              >
                                more impressions than direct mail
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start sm:px-5 px-8 w-[53%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                              <Img
                                className="h-10 mb-[19px] mt-[3px] w-10"
                                src="images/img_clock.svg"
                                alt="clock_One"
                              />
                              <Text
                                className="capitalize text-white-A700 text-xl"
                                size="txtPlusJakartaSansSemiBold20"
                              >
                                Rs 300
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                              <Text
                                className="leading-[28.00px] mb-[31px] text-base text-blue_gray-200 w-[76%] sm:w-full"
                                size="txtPlusJakartaSansMedium16"
                              >
                                cheaper per ten impressions than direct mail
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                          <div className="flex md:flex-1 flex-col items-start justify-start px-4 w-[48%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-start pb-2.5 pr-2.5 w-full">
                              <Img
                                className="h-10 mt-[5px] w-10"
                                src="images/img_clock.svg"
                                alt="clock"
                              />
                              <div className="flex flex-col items-start justify-end pr-3.5 py-3.5">
                                <Text
                                  className="capitalize text-white-A700 text-xl"
                                  size="txtPlusJakartaSansSemiBold20"
                                >
                                  29%{" "}
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pr-[17px] py-[17px]">
                              <Text
                                className="mb-[29px] text-base text-blue_gray-200"
                                size="txtPlusJakartaSansMedium16"
                              >
                                return on investment
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-start justify-start sm:px-5 px-8 w-[53%] md:w-full">
                            <div className="flex flex-row gap-[15px] items-start justify-start pb-2.5 pr-2.5 w-full">
                              <Img
                                className="h-10 mt-[5px] w-10"
                                src="images/img_clock.svg"
                                alt="clock_One"
                              />
                              <div className="flex flex-col items-start justify-end pr-3.5 py-3.5">
                                <Text
                                  className="capitalize text-white-A700 text-xl"
                                  size="txtPlusJakartaSansSemiBold20"
                                >
                                  Priceless
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                              <Text
                                className="leading-[28.00px] mb-[31px] text-base text-blue_gray-200 w-[67%] sm:w-full"
                                size="txtPlusJakartaSansMedium16"
                              >
                                saving lives and helping the planet
                              </Text>
                            </div>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-row flex-wrap sm:gap-10 gap-[152px] items-start justify-start max-w-[694px] py-[3px] w-full">
                        <Button
                          className="capitalize cursor-pointer font-medium rounded-[27px] text-base text-center tracking-[0.40px] w-[233px]"
                          shape="round"
                          color="deep_orange_A700"
                          variant="fill"
                        >
                          Advertise with Us
                        </Button>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[149px]"
                          rightIcon={
                            <Img
                              className="mt-[5px] mb-[7px] ml-3"
                              src="images/img_frame.svg"
                              alt="Frame"
                            />
                          }
                          shape="round"
                        >
                          <div className="!text-white-A700 capitalize font-medium text-base text-left">
                            How To Process
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="background-container">
        <Img
          className="absolute bottom-0 h-[651px] left-0 object-cover w-[62%] moving-image"
          src="images/img_ellipseshadow2webp.png"
          alt="ellipseshadow2w"
        />
      </div>
              </div>
              <div className="h-[722px] md:mt-0 mt-[72px] relative w-[37%] md:w-full">
                <Img
                  className="absolute h-[668px] inset-[0] justify-center m-auto object-cover w-[668px]"
                  src="images/img_ellipseshadow2webp_668x668.png"
                  alt="ellipseshadow2w_Two"
                />
                <Img
                  className="absolute h-[722px] inset-y-[0] my-auto object-cover right-[10%] w-3/4"
                  src="images/img_1litrepackage.png"
                  alt="bottleOne"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900_02 flex flex-col items-center justify-end pt-[22px] w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[341px] items-start justify-start ml-14 md:ml-[0] md:px-5 w-[81%] md:w-full">
                <div className="md:h-[350px] h-[362px] relative w-[46%] md:w-full">
                  <div className="absolute bottom-[0] md:h-[178px] h-[329px] right-[0] w-[72%] sm:w-full">
                    <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[34%]">
                      <Img
                        className="h-[172px] md:h-auto object-cover w-full"
                        src="images/img_shareh2ologoremovebgpreview.png"
                        alt="shareh2ologorem_One"
                      />
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-start justify-start sm:pr-5 pr-[33px] py-[33px] right-[0]">
                      <Text
                        className="leading-[28.00px] text-base text-white-A700 w-[68%] sm:w-full"
                        size="txtPlusJakartaSansMedium16WhiteA700"
                      >
                        ShareH2O is an innovative way to advertsiement by
                        creating a win win situation for you and your target
                        audience
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[350px] inset-y-[0] left-[0] my-auto object-cover w-[52%]"
                    src="images/img_ellipseshadow3webp_350x382.png"
                    alt="ellipseshadow3w_Two"
                  />
                </div>
                <div className="flex flex-col gap-12 justify-start md:mt-0 mt-[54px] w-[34%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mr-[41px] w-auto sm:w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start px-3.5 w-[201px]">
                      <Text
                        className="capitalize text-[18.66px] text-white-A700 w-[115px]"
                        size="txtPlusJakartaSansSemiBold1866"
                      >
                        Get In Touch
                      </Text>
                      <Button
                        className="capitalize cursor-pointer font-medium min-w-[121px] rounded-[16px] text-base text-center"
                        color="deep_orange_A700"
                        size="xs"
                        variant="fill"
                      >
                        Contact Us
                      </Button>
                      <div className="flex flex-row items-center justify-start w-[88%] md:w-full">
                        <Img
                          className="h-5 w-5"
                          src="images/img_location.svg"
                          alt="location"
                        />
                        <div className="flex flex-col items-start justify-start ml-[5px] pl-[5px] pr-[2.48px] w-auto">
                          <Text
                            className="capitalize text-base text-white-A700 w-auto"
                            size="txtPlusJakartaSansMedium16WhiteA700"
                          >
                            Ghaziabd, India
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pr-[3px] py-[3px]">
                        <Text
                          className="capitalize mb-1 text-base text-white-A700"
                          size="txtPlusJakartaSansMedium16WhiteA700"
                        >
                          About Us
                        </Text>
                      </div>
                      <Text
                        className="text-base text-deep_orange-A700 w-[155px]"
                        size="txtPlusJakartaSansMedium16DeeporangeA700"
                      >
                        info@shareh2o.com
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start py-0.5 w-auto">
                      <Text
                        className="capitalize text-[18.66px] text-white-A700 w-[100px]"
                        size="txtPlusJakartaSansSemiBold1866"
                      >
                        Newsletter
                      </Text>
                      <div className="flex relative w-full">
                        <Input
                          name="input"
                          placeholder="Enter Email"
                          className="leading-[normal] p-0 placeholder:text-gray-600 text-base text-left w-full"
                          wrapClassName="ml-[undefinedpx] my-auto w-[77%] z-[1]"
                          type="email"
                        ></Input>
                        <Button
                          className="cursor-pointer min-w-[141px] ml-[-68.56px] my-auto rounded-[28px] text-[17px] text-center z-[1]"
                          color="cyan_800"
                          variant="fill"
                        >
                          Newsletter
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row font-montserratalternates gap-[21px] items-center justify-end ml-72 md:ml-[0] pb-1 w-[49%] md:w-full">
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtMontserratAlternatesMedium15"
                    >
                      Follow:
                    </Text>
                    <div className="flex flex-row gap-7 items-start justify-start py-[5px] w-auto">
                      <div className="flex flex-col h-4 md:h-auto items-start justify-start w-4">
                        <Img
                          className="h-4 w-4"
                          src="images/img_facebooksvg.svg"
                          alt="facebooksvg"
                        />
                      </div>
                      <div className="flex flex-col h-4 md:h-auto items-start justify-start w-4">
                        <Img
                          className="h-[15px] w-4"
                          src="images/img_twittersvg.svg"
                          alt="twittersvg"
                        />
                      </div>
                      <Img
                        className="h-4 w-4"
                        src="images/img_clock_white_a700.svg"
                        alt="clock"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_camera.svg"
                        alt="camera"
                      />
                      <Img
                        className="h-4 w-4"
                        src="images/img_bluetooth.svg"
                        alt="bluetooth"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_03 flex flex-col font-dmsans items-center justify-end p-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1389px] mt-[9px] mx-auto p-[7px] md:px-5 w-full">
                  <Text
                    className="ml-2 md:ml-[0] text-[15px] text-white-A700_b1"
                    size="txtDMSansMedium15"
                  >
                    2023. All rights reserved.
                  </Text>
                  <div className="flex sm:flex-1 flex-row gap-2.5 items-start justify-start p-2.5 w-auto sm:w-full">
                    <a
                      href="javascript:"
                      className="text-[15px] text-white-A700_b1 w-[153px]"
                    >
                      <Text size="txtDMSansMedium15">Terms and conditions</Text>
                    </a>
                    <Text
                      className="text-[15px] text-white-A700_b1 w-[57px]"
                      size="txtDMSansMedium15"
                    >
                      Cookies
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[15px] text-white-A700_b1 w-[99px]"
                    >
                      <Text size="txtDMSansMedium15">Privacy policy</Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalDesignH2OResponsive1500PlusPage;
