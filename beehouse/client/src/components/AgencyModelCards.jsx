import React, { useEffect, useState } from "react";
import ModelCardCarousel from "./ModelCardCarousel";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

import { useSelector, useDispatch } from "react-redux";
import { fetchApplicationSuccess } from "../Redux/slice/applicationsSlice";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail, MdWork } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import Loader from "./Loader";
import ProgressBar from "./ProgressBar";
import PayButton from "./PayButton";

function AgencyModelCards() {
  const [loading, setLoading] = useState(null);
  const user = useSelector((state) => state.user);
  const applications = useSelector((state) => state.application.applications);
  const [updatedStep, setUpdatedStep] = useState("Pending");
  const [buttonAvailabilities, setButtonAvailabilities] = useState({});
  console.log(updatedStep);
  const dispatch = useDispatch();
  console.log(applications);
  console.log(user);
  const getApplications = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/jobs/model/applications/${user?._id}`
      );

      if (response.status === 200) {
        setLoading(false);
        dispatch(fetchApplicationSuccess(response.data));
        // setApplications();
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (user) {
      getApplications();
    }
  }, [user]);

  return (
    <div>
      {loading ? (
        <Loader loaderStyle="h-full  flex justify-center pt-20" />
      ) : (
        <div className=" gap-10 grid grid-cols-1 ml-[5%] sm:grid-cols-2 border   md:grid-cols-2 lg:grid-cols-3 ">
          {applications.map((application) => {
            const newUrl = application.modelUserId.displayPicUrl.replace(
              "public/",
              ""
            );
            const url1 = application?.modelUserId?.imageUrl1?.replace(
              "public/",
              ""
            );
            const url2 = application?.modelUserId?.imageUrl2?.replace(
              "public/",
              ""
            );
            const url3 = application?.modelUserId?.imageUrl3?.replace(
              "public/",
              ""
            );

            return (
              <div className="">
                <div className="   border mt-5 rounded-2xl bg-white shadow-2xl  w-[100%]  p-2 ">
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

                          <div className="flex items-center hover:text-blue-500">
                            <BiPhoneCall className="text-sm" />
                            <a
                              href={`tel:${application.modelUserId.telephone}`}
                            >
                              <p className=" ml-1 text-xs  text-gray-500 hover:text-blue-500">
                                {application.modelUserId.telephone}
                              </p>
                            </a>
                          </div>

                          <div className="flex items-center hover:text-blue-500">
                            <MdEmail className="text-sm" />
                            <a href={`mailto:${application.modelUserId.email}`}>
                              <p className=" ml-1 text-xs  text-gray-500 hover:text-blue-500">
                                {application.modelUserId.email}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 px-4  text-gray-700 flex items-start ">
                        <MdWork className="text-lg" />
                        <p className="text-[12px] ml-2">
                          {application.jobId.description}
                        </p>
                      </div>

                      <div className="flex justify-center   pt-4">
                        <button
                          className="mr-5 bg-red-500 font-bold text-white rounded border-black px-2
                "
                        >
                          Reject
                        </button>

                        <PayButton
                          status={application.status}
                          application={application}
                          updatedStep={updatedStep}
                          buttonAvailability={
                            buttonAvailabilities[application._id] || false
                          }
                        />
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

                  <div className="">
                    <ProgressBar
                      id={application._id}
                      status={application.status}
                      setUpdatedStep={setUpdatedStep}
                      setButtonAvailability={(id, value) =>
                        setButtonAvailabilities((prevAvailabilities) => ({
                          ...prevAvailabilities,
                          [id]: value,
                        }))
                      }
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AgencyModelCards;
