import React from 'react'
import RegistrationButton from '../components/RegistrationButton'

function OptionSelect() {

    const [selectedOption, setSelectedOption] = useState(null)
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
      }
  return (
    <div>
          <div className='flex'>
          <div className='w-48 bg-white rounded-lg shadow p-6 hover:cursor-pointer mb-8 hover:bg-yellow-500 mr-5'>
            <div className='flex justify-between items-center mb-3'>
              <h1 className='uppercase text-blue-darker'>Model</h1>
              <div>
                <input
                  className=''
                  type="radio"
                  name="registration-type"
                  id="registration-type"
                  value="model"
                  onChange={handleOptionChange}
                />
              </div>
            </div>
            <div>
              <MdAccessibilityNew size={70}/>
            </div>
          </div>
          <div className='w-48 bg-white rounded-lg shadow p-6 hover:cursor-pointer mb-8 hover:bg-yellow-500'>
            <div className='flex justify-between items-center mb-3'>
              <h1 className='uppercase text-blue-darker'>Creative Agency</h1>
              <div>
                <input
                  className=''
                  type="radio"
                  name="registration-type"
                  id="registration-type-other"
                  value="creativeAgency"
                  onChange={handleOptionChange}
                />
              </div>
            </div>
            <div>
              <BsBuildingFillCheck size={70}/>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
        {selectedOption === "model" && (
          <RegistrationButton label="Register as Model" 
          
          />
        )}
        {selectedOption === "creativeAgency" && (
          <RegistrationButton label="Apply as Creative Agency" />
        )}
        </div>
    </div>
  )
}

export default OptionSelect