import React from "react";
import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useRating } from "../context/ratings";
import { Bounce, toast } from "react-toastify";

const Return = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const [cleanrating, setCleanRating] = useState<number>(0);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

 const { ratings, setRatings } = useRating();
 
   const handleRating = (rate: string) => {
     setRatings((prevRatings) => ({
       ...prevRatings,
       return: rate
   }));
   };

   const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (ratings.return === '') {
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
      navigate('/section-five');
    }
  };


  return (
    <>
      <section className="flex justify-end px-5 md:px-0  m-0  overflow-x-hidden bg-[url('https://res.cloudinary.com/edifice-solutions/image/upload/v1732096027/dashboard-new_i7rtj6.jpg')] bg-cover bg-left-top  min-h-screen">
        <div className="flex flex-col justify-center bg-white w-full md:w-1/2 rounded-lg min-h-[60vh] md:min-h-[50vh]  py-8 md:py-8">
          {/* {errorMessage && ( <div className="p-4 mx-3 mb-4 text-sm text-red-800 rounded-lg text-center bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Error!</span> {errorMessage}.
                        </div>)} */}

<div className="m-auto">
            <img
              className="w-[60%] md:w-[30%] text-center m-auto"
              src="https://famacare.com/img/famacare.png"
              alt=""
            />
          </div>
          {/* <h2 className="text-center text-xl md:text-xl font-medium font-sans">
            At Famacare Clinic, your feedback matters!
          </h2> */}

          <div className="flex flex-col h-[50vh] mt-2 md:mt-10 justify-center px-10">
                    <p className="text-lg md:text-xl font-medium md:px-5 text-gray-800">
                    Would you return to us for future medical treatments or visits? {" "}
                    </p>

                <div className="flex-col space-y-5 md:space-y-0 md:flex md:flex-row justify-start ml-4 space-x-10 mt-4">
                    <label className="flex items-center py-3  border-cyan-400 border-1 md:border-2 rounded-lg px-8 md:px-14">
                        <input
                            type="radio"
                            name="satisfaction"
                            value="No"
                            checked={ratings.return === 'No'}
                            onChange={() => handleRating("No")}
                            className="form-radio"
                        />
                        <span className="ml-2">No</span>
                    </label>
                    <label className="flex items-center py-3 border-1 md:border-2 border-cyan-400 rounded-lg px-8 md:px-14">
                        <input
                            type="radio"
                            name="satisfaction"
                            value="Maybe"
                            checked={ratings.return === 'Maybe'}
                            onChange={() => handleRating("Maybe")}
                            className="form-radio"
                        />
                        <span className="ml-2">Maybe</span>
                    </label>
                    <label className="flex items-center py-3 border-1 md:border-2 border-cyan-400 rounded-lg px-8 md:px-14">
                        <input
                            type="radio"
                            name="satisfaction"
                            value="Yes"
                            checked={ratings.return === 'Yes'}
                            onChange={() => handleRating("Yes")}
                            className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                    </label>
                </div>



                        <div className="flex justify-between mt-auto ">

                        <button
                                className="bg-cyan-700 text-white font-bold text-sm md:text-base py-2 px-10 md:px-16 rounded hover:bg-[#f36e25] cursor-pointer"
                                onClick={() => navigate(-1)}
                            >
                                Prev
                            </button>


                                <button
                                className="bg-[#f36e25] text-white font-bold py-2 px-10 text-sm md:text-base md:px-16 rounded hover:bg-[#f36e25] cursor-pointer"
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

export default Return;
