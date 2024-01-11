import React, {useState} from 'react'
import Modal from './Modal';

const Contact = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>

<h1 className='text-3xl font-semibold py-12 text-[#d97f38]'>Want to support this vision?</h1>

<button onClick={openModal} className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 bg-[#3c1f1b] text-[#d97f38] font-bold py-3 px-6 rounded-lg shadow-lg">
  Click Here
</button>
<div >
      <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-xl font-semibold text-gray-900">
                    You can donate to this Account
                </h3>
                

          
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                6453642874<br />
African Transformation Network owned by FAITH SOLOMON<br />
Moniepoint MFB
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                OR
                </p><br />
                <a href="https://selar.co/showlove/african-transformation-network" className='mt-5 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 bg-[#3c1f1b] text-[#d97f38] font-bold py-3 px-6 rounded-lg shadow-lg'>Support us on Selar</a>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Be a part of our journey to uplift Africa. Your financial support and time investment can shape a better tomorrow for our communities. With your contributions, we're nurturing innovation, driving sustainable development, and fostering growth across our diverse landscapes
                </p>
            </div>
           
            
       
        
      </Modal>
    </div>


  {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="w-full md:w-5/6 lg:w-2/3 xl:w-1/2 bg-[#3c1f1b] text-[#d97f38] font-bold py-3 px-6 rounded-lg shadow-lg">
  Click Here
</button>



<div id="default-modal" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
  
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    You can donate to this Account
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
          
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                6453642874<br />
African Transformation Network owned by FAITH SOLOMON<br />
Moniepoint MFB
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                OR
                </p><br />
                <a href="mailto:africantransformationnetwork1@gmail.com" className='mt-5 w-full md:w-5/6 lg:w-2/3 xl:w-1/2 bg-[#3c1f1b] text-[#d97f38] font-bold py-3 px-6 rounded-lg shadow-lg'>Send us an Email</a>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Be a part of our journey to uplift Africa. Your financial support and time investment can shape a better tomorrow for our communities. With your contributions, we're nurturing innovation, driving sustainable development, and fostering growth across our diverse landscapes
                </p>
            </div>
           
            
        </div>
    </div>
</div> */}




    </div>
  )
}

export default Contact