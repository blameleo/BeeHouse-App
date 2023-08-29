import React, { useState }, { useState } from "react";
import { RiAdvertisementFill } from "react-icons/ri";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { useEffect } from "react";

function AgencyJobs() {
  const [tags,setTags] =  useState([]);
  const [tagInput,setTagInput]= useState('');
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(null);

  const [formInfo, setFormInfo]= useState({
    gender:"",
    complexion:"",
    stature:"",
    jobDescription:"",
    
   

  })

 

  const handleTagInputChange = (event)=>{
    setTagInput(event.target.value);
  }

  const handleTagInputKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const newTag = tagInput.trim();
      if (newTag !== '' && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setTagInput('');
      }
     
    }
    
  };

  const removeTag = (tagToRemove) => {
   
    setTags(tags.filter(tag => tag !== tagToRemove));
  };






  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Include the current tags in the formInfo object


    const formWithTags = {
      ...formInfo,
      tags: tags,
    };
  
    console.log(formWithTags);
  };

  return (
    <div className="flex flex-col ml-20 lg:ml-60  items-center   font-volkhorn bg-[url('/img/beehive-bg1.jpeg')] ">
        <div className='flex'> 
          <h1 className='mt-20 text-xl '>Post an</h1>
          <RiAdvertisementFill className='mt-12 ml-2 text-6xl text-yellow-500'/>
          </div>
        
         <form action="">

         <label className="" htmlFor="">
            Gender:
          </label>
          <br></br>

          <ul className="grid grid-cols-3 mb-5  text-black gap-x-5 mt-3 max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer "
                type="radio"
                onChange={handleInputChange}
                value="male"
                name="gender"
                id="male"
                required
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="male"
              >
                Male
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                onChange={handleInputChange}
                value="female"
                name="gender"
                id="female"
              />
              <label
                className="flex p-4  w-[100px] hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="female"
              >
                Female
              </label>
            </li>
            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                onChange={handleInputChange}
                value="bothGenders"
                name="gender"
                id="both genders"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="both genders"
              >
                Unisex
              </label>
            </li>
          </ul>

          <label htmlFor="">Complexion:</label>

<br></br>
<ul className="grid grid-cols-3 gap-x-5 pb-3 text-white    max-w-md ">
  <li className="relative">
    <input
      className="sr-only peer"
      onChange={handleInputChange}
      type="radio"
      value="dark"
      name="complexion"
      id="dark"
    />
    <label
      className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
      htmlFor="dark"
    >
      Dark
    </label>
  </li>

  <li className="relative">
    <input
      className="sr-only peer"
      type="radio"
      value="fair"
      onChange={handleInputChange}
      name="complexion"
      id="fair"
    />
    <label
      className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border text-black border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
      htmlFor="fair"
    >
      Fair
    </label>
  </li>
</ul>
        <h1>Stature</h1>
          <ul className="grid grid-cols-3 gap-x-5 pb-10  max-w-md ">
            <li className="relative">
              <input
                className="sr-only peer"
                onChange={handleInputChange}
                type="radio"
                value="slim"
                name="stature"
                id="slim"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="slim"
              >
                Slim
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="Average"
                onChange={handleInputChange}
                name="stature"
                id="Average"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="Average"
              >
                Average
              </label>
            </li>

            <li className="relative">
              <input
                className="sr-only peer"
                type="radio"
                value="chubby"
                onChange={handleInputChange}
                name="stature"
                id="chubby"
              />
              <label
                className="flex p-4 w-[100px]  hover:bg-purple-500 hover:text-white border border-black rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-4 peer-checked:border-transparent"
                htmlFor="chubby"
              >
                Chubby
              </label>
            </li>
          </ul>

          <div className="tag-input">
    
      <input
        className='border border-black border-outline-none h-[40px] p-3 mb-3'
        type="text"
        placeholder="Enter tags..."
        value={tagInput}
        onChange={handleTagInputChange}
        onKeyDown={handleTagInputKeyDown}
      />
        <div className=" flex">
        {tags.map((tag, index) => (
          <div key={index} className="border flex justify-around  w-[80px] rounded rounded-full mr-3">
            {tag}
            <button className='text-red-500' onClick={() => removeTag(tag)}>x</button>
          </div>
        ))}
      </div>
    </div>

          <div className='flex flex-col mt-10'>
            <label htmlFor="">Job description</label>
            <textarea
              className="border border-black rounded rounded-lg"
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            className="mr-5 mt-5 bg-yellow-500 hover:bg-purple-600 border-2 text-black hover:text-white  h-[50px] rounded-lg w-[340px]  w-full lg:w-[500px] "
            onClick={handleSubmit}
          >
            POST
          </button>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}

export default AgencyJobs;
