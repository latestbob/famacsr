import React from "react";



import { useNavigate } from "react-router-dom";
import { useRating } from "../context/ratings";

import { Bounce, toast } from 'react-toastify';

const Home = (): JSX.Element => {
 

  const navigate = useNavigate();

  const { ratings, setRatings } = useRating();

    // const handleUpdateStaff = (newStaffRating: number) => {
    //     setRatings((prevRatings) => ({
    //         ...prevRatings,
    //         staff: newStaffRating,
    //     }));
    // };



  const handleRating = (rate: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      staff: rate
  }));
  };


  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ratings.staff === 0) {
      toast.error("Please provide a rating before proceeding.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        transition: Bounce,

       
      });
    } else {
      navigate('/section-two');
    }
  };
 

  return (
    <>
      <section className="flex justify-end px-5 md:px-0  m-0  overflow-x-hidden bg-[url('https://res.cloudinary.com/edifice-solutions/image/upload/v1732096027/dashboard-new_i7rtj6.jpg')] bg-cover bg-left-top  min-h-screen">
        <div className="flex flex-col justify-center bg-white w-full md:w-1/2 rounded-lg min-h-[60vh] md:min-h-[50vh]  py-8 md:py-8">
          {/* {errorMessage && ( <div className="p-4 mx-3 mb-4 text-sm text-red-800 rounded-lg text-center bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Error!</span> {errorMessage}.
                        </div>)} */}

          <div className="p-3 m-auto">
            <img
              className="w-[60%] md:w-[30%] text-center m-auto"
              src="https://famacare.com/img/famacare.png"
              alt=""
            />
          </div>
          {/* <h2 className="text-center text-xl md:text-xl font-medium font-sans">
            At Famacare Clinic, your feedback matters!
          </h2> */}

          <div className="flex flex-col h-[50vh] mt-5 md:mt-10 justify-center px-10">
                    <p className="text-lg md:text-xl font-medium md:px-5 text-gray-800">
                    Please rate your level of satisfaction with the care you received
                    from our medical staff.{" "}
                    </p>

                    <div className="flex justify-start mt-5 md:ml-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`w-10 h-10 cursor-pointer ${
                            star <= ratings.staff ? "text-yellow-500" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                    ))}
                    </div>



                        <div className="flex justify-end mt-auto ">

                       

                                <button
                                className="bg-[#f36e25] text-sm md:text-base text-white font-bold py-2 px-10 md:px-16 rounded hover:bg-[#f36e25] cursor-pointer"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </div>
                   
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

