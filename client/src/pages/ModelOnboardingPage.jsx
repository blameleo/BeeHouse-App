<<<<<<< HEAD
import React from 'react'
import Logo from '../components/Logo'

function ModelOnboardingPage() {

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    height: '',
    location: '',
    complexion: '',
    idCardUrl: '',
    displayPicUrl:'',
    imageUrl1:'',
    imageUrl2:'',
    imageUrl3:'',


    
    
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='bg-neutral-950 font-volkhorn '>
        <div className=' px-5'>
        <Logo/>
        </div>
        <div className='flex justify-center mb-12'>
            <h1 className=' font-volkhorn text-4xl text-yellow-500 mt-12 text-bold'>Create Account </h1>
        </div>
        <form action="" className='px-20 text-white flex flex-col md:flex-row justify-between '>
          <div className=''>
            <label htmlFor="" className='mb'>First Name :</label>
            <br></br>
            
            <input  className=" border px-3 border-yellow-500 bg-neutral-950  mt-1 w-[400px]  md:w-[500px] h-14 rounded rounded-lg " type="text" onChange={handleInputChange} value={formData.value} placeholder='First Name' name="first name" id="" />
            <br></br>
            <br />
            <label htmlFor="">Last Name :</label>
            <br />
            <input className=" border px-3 border-yellow-500 bg-neutral-950  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg "  placeholder='last name' type="text" onChange={handleInputChange} name="" id="" />
            <br></br>
            <br />

            <label className='' htmlFor="">Gender:</label>
            <br></br>
            
<ul class="grid grid-cols-3 gap-x-5 mt-3 max-w-md ">

  <li class="relative">
    <input class="sr-only peer" type="radio" onChange={handleInputChange} value="male" name="gender" id="male"/>
    <label class="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="male">Male</label>
    </li>

  <li class="relative">
    <input class="sr-only peer" type="radio" onChange={handleInputChange} value="female" name="gender" id="female"/>
    <label class="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="female">Female</label>
</li>

 
</ul>
            <br></br>

            <label htmlFor="" className='font-volkhorn'>Telephone Number:</label>
            <br></br>
            <input  className=" border px-3 border-yellow-500 bg-neutral-950  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg " type="number" onChange={handleInputChange} placeholder='+233' name="location" id="" />
            <br></br>

            <label htmlFor="">Date of Birth:</label>
            <br></br>
            <input  className=" border px-3 border-yellow-500 bg-neutral-950  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg " type="date" placeholder='DOB' onChange={handleInputChange} name="Date Of Birth" id="" />
            <br></br>

            <label htmlFor="" className='font-volkhorn'>Height:</label>
            <br></br>
            <input  className=" border px-3 border-yellow-500 bg-neutral-950  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg " type="number" placeholder='height' onChange={handleInputChange} name="location" id="" />
            <br></br>

            <label htmlFor="">Location:</label>
            <br></br>
            <input  className=" border px-3 border-yellow-500 mb-3 bg-neutral-950  mt-1 w-[400px] md:w-[500px] h-14 rounded rounded-lg " type="text" placeholder='Location' onChange={handleInputChange} name="location" id="" />
            <br></br>

            <label htmlFor="">Complexion:</label>
            
            <br></br>
            <ul class="grid grid-cols-3 gap-x-5 pb-20  max-w-md ">

<li class="relative">
  <input class="sr-only peer" onChange={handleInputChange} type="radio" value="dark" name="complexion" id="dark"/>
  <label class="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="dark">Dark</label>
  </li>

<li class="relative">
  <input class="sr-only peer" type="radio" value="fair" onChange={handleInputChange} name="complexion" id="fair"/>
  <label class="flex p-5 bg-neutral-950 border border-gray-300 rounded-lg cursor-pointer focus:outline-none  peer-checked:ring-yellow-500 peer-checked:ring-2 peer-checked:border-transparent" for="fair">Fair</label>
</li>


</ul>

</div>


            <br></br>
        <div>
            <label htmlFor="">Identification Card :</label>  
            <br></br>
            <div class="flex items-center">
             <label htmlFor="upload" className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer">
             <span class="text-gray-400 text-3xl">+</span>
             </label>
              <input type="file" id="upload" name='idCardUrl' class="hidden" onChange={handleInputChange}/>
         </div>
            <br></br>

            <label htmlFor="">Profile pic:</label>
            <br></br>
            <div class="flex items-center">
             <label htmlFor="upload" className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer">
             <span class="text-gray-400 text-3xl">+</span>
             </label>
              <input type="file" id="upload" className="hidden"  onChange={handleInputChange} name='displayPicUrl'/>
         </div>

            <br></br>

            <label htmlFor="">Images Upload :</label>
            <br></br>
            <div className='flex '>
            <div class="flex items-center mr-5">
             <label htmlFor="upload" className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer">
             <span class="text-gray-400 text-3xl">+</span>
             </label>
              <input type="file" id="upload"  onChange={handleInputChange} className="hidden" name='imageUrl1'/>

            </div> 

            <div class="flex items-center mr-5">
             <label htmlFor="upload" className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer">
             <span class="text-gray-400 text-3xl">+</span>
             </label>
              <input type="file" id="upload" className="hidden" onChange={handleInputChange} name='imageUrl1'/>

            </div>

            <div class="flex items-center">
             <label htmlFor="upload" className="relative rounded bg-neutral-950 border-dashed border-4 border border-yellow-500 h-40 w-32 flex items-center justify-center cursor-pointer">
             <span class="text-gray-400 text-3xl">+</span>
             </label>
              <input type="file" id="upload" className="hidden" onChange={handleInputChange} name='imageUrl2'/>

            </div>
         </div>
         </div>               
        </form>
    </div>
  )
}

export default ModelOnboardingPage
=======
import React from "react";

function ModelOnboardingPage() {
  return <div>ModelOnboardingPage</div>;
}

export default ModelOnboardingPage;
>>>>>>> e750a6030c569e86bdfd1c8abc6fd00484e5338a
