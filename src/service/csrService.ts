

import axios from "axios";

//get all registered patient

export async function createCSR(
    staff:number,
    clean:number,
    satisfaction:string,
    
    recommend:string,
    return_rating:string,
          
           
        
        
  ) {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_ENDPOINT}/api/crs`,
        { staff, clean, satisfaction, recommend, return_rating }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(
        error.response?.data?.error || "Unable to submit data"
      );
    }
  }
  
  