import React from 'react'
import {FaForumbee} from 'react-icons/fa'

function AgencyOnBoardingPage() {

  const [formData, setFormData] = React.useState({
    user_id: cookies.UserId,
    agencyName:"",
    about:"",
    location:"",
    telephone: "",
    displayPicUrl:"",
    businessCerUrl:""



  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
   
        
        <div className="bg-neutral-950 font-volkhorn  ">
      <div className=" px-5 py-5  flex">
        <FaForumbee className="text-yellow-500 mr-1 text-3xl" />
        <h1 className="text-yellow-500 text-3xl">BeeHouse</h1>
      </div>
      <div className="flex justify-center mb-12">
        <h1 className=" font-volkhorn text-4xl text-yellow-500 mt-12 text-bold">
          Create Account
        </h1>
      </div>
      <form
        action=""
        className="px-20 text-white  justify-between "
      >
        <div className="">
          <label htmlFor="" className="mb">
            Agency Name :
          </label>
          <br></br>

          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            onChange={handleInputChange}
            value={formData.agencyName}
            placeholder="Agency Name"
            name="agencyName"
            id=""
          />
          <br></br>
          <br />
          <label htmlFor="">About :</label>
          <br />
          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "
            placeholder="last name"
            type="textarea"
            onChange={handleInputChange}
            name="about"
            value={formData.about}
            id=""
          />
          <br></br>
          <br />

          <label className="" htmlFor="">
            Location :
          </label>
          <br></br>
          <input
            className=" border px-3 border-yellow-500 outline-none bg-black  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg "
            type="text"
            onChange={handleInputChange}
            value={formData.location}
            placeholder="location"
            name="location"
            id=""
          />

         
          <br></br>

          <label htmlFor="" className="font-volkhorn">
            Telephone Number:
          </label>
          <br></br>
          <input
          className="border mb-5 outline-none px-3 border-yellow-500 bg-black  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg"
          type="tel" 
          placeholder='+233 Phone Number'
          name="telephone"
          value={formData.telephone}
          onChange={handleInputChange}
          id="phoneNumber"
          pattern="[0-9]*" 
          minLength="10" 
          maxLength="15" 
          
/>

          

        
          <br></br>
          </div>
          <br></br>
        <div>
          <label htmlFor="">Profile picture ? :</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload"
              className="relative rounded bg-neutral-550 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              <span className="text-gray-400 text-3xl">+</span>
            </label>
            <input
              type="file"
              id="upload"
              name="displayPicUrl"
              className="hidden"
              onChange={handleInputChange}
              value="displayPicUrl"
            />
          </div>
          <br></br>

          <label htmlFor="">Business Certificate:</label>
          <br></br>
          <div className="flex items-center">
            <label
              htmlFor="upload"
              className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer"
            >
              <span className="text-gray-400 text-3xl">+</span>
            </label>
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={handleInputChange}
              name="businessCerUrl"
            />
          </div>

        
        </div>
        
      </form>

      
      <div className="flex justify-center pb-10">
      <button onClick={handleSubmit} className='mr-5 mt-5 bg-yellow-500 border border-2 border-black h-[50px] rounded-lg w-[150px]'>Continue</button>
      </div>

      
     
    </div>

        
    
  )
}

export default AgencyOnBoardingPage