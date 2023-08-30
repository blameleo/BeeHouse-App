import React, { useEffect, useState } from "react";
import ModelCardCarousel from "./ModelCardCarousel";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

import { useSelector, useDispatch } from "react-redux";
import { fetchApplicationSuccess } from "../Redux/slice/applicationsSlice";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail, MdWork } from "react-icons/md";
// import { FaUserAlt } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";

function AgencyModelCards() {
  // const [applications, setApplications] = useState(null);
  const user = useSelector((state) => state.user);
  const applications = useSelector((state) => state.application.applications);

  const dispatch = useDispatch();
  console.log(applications);
  console.log(user);
  const getApplications = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/jobs/model/applications/${user?.user_id}`
      );

      if (response.status === 200) {
        dispatch(fetchApplicationSuccess(response.data));
        // setApplications();
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      getApplications();
    }
  }, [user]);

  return (
    <div>
      {applications.map((application) => {
        const newUrl = application.modelUserId.displayPicUrl.replace(
          "public/",
          ""
        );
        const url1 = application.modelUserId.imageUrl1.replace("public/", "");
        const url2 = application.modelUserId.imageUrl3.replace("public/", "");
        const url3 = application.modelUserId.imageUrl3.replace("public/", "");

        return (
          <div>
            <div className=" hover:scale-105 transition duration-500  border mt-10 rounded-2xl bg-white shadow-2xl  w-[370px]  p-2 ">
              <div className="flex justify-between">
                <div className="   ">
                  <div className="flex ">
                    <img
                      src={`http://localhost:4000/${newUrl}`}
                      className="w-10 h-10  mt-2  rounded-full object-cover"
                      alt=""
                    />

                    <div className=" ml-3 ">
                      <div className="flex items-center">
                        <BsPersonCircle className="text-sm" />
                        <p className="ml-1  text-sm font-bold">
                          {`${application.modelUserId.firstName} ${application.modelUserId.lastName}`}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <BiPhoneCall className="text-sm" />
                        <p className=" ml-1 text-xs  text-gray-500">
                          {application.modelUserId.telephone}
                        </p>
                      </div>

                      <div className="flex items-center">
                        <MdEmail className="text-sm" />
                        <p className=" ml-1 text-xs  text-gray-500">
                          {application.modelUserId.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 px-4  text-gray-700 flex items-start ">
                    <MdWork className="text-lg" />
                    <p className="text-[12px] ml-2">
                      {application.jobId.description}
                    </p>
                  </div>
                </div>

                <div>
                  <Carousel
                    autoPlay="true"
                    infiniteLoop="true"
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    width={100}
                    className=" "
                  >
                    <img
                      className="rounded-xl shadow-xl border "
                      src={`http://localhost:4000/${url1}`}
                    />

                    <img
                      className="rounded-xl shadow-xl border"
                      src={`http://localhost:4000/${url2}`}
                    />

                    <img
                      className="rounded-xl shadow-xl border"
                      src={`http://localhost:4000/${url3}`}
                    />
                  </Carousel>
                </div>
              </div>

              {/* <p className="text-gray-400 ml-5">Tall dark Male model </p> */}
              {/* 
      <div className="grid grid-cols-3 ml-3 ">
        <div className="border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200">
          Tall
        </div>
        <div className="border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200">
          Fair
        </div>
        <div className="border  w-[80px] mt-3 text-center  rounded text-gray-500  bg-gray-200">
          Dark
        </div>
        <div className="border  w-[80px] mt-3 text-center rounded text-gray-500  bg-gray-200">
          Ugly
        </div>
      </div> */}

              <div className="flex justify-center   ">
                <button className="mr-5 bg-yellow-500  border-2 border-black h-[40px] w-[100px]">
                  Actions
                </button>
                <button className=" border border-yellow-500 h-[40px] w-[100px]">
                  Save
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AgencyModelCards;
