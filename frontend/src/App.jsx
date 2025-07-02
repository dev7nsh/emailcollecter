import React from 'react'
import { useState } from 'react';
import { axiosIntance } from './lib/axios';
import toast , {Toaster} from "react-hot-toast";
import RecentEmails from './pages/Getmail.jsx';


const App = () => {
  
  const [form, setform] = useState({
    email:""
  });


  const formdatapost = async (data) =>{
    try {
      const res = await axiosIntance.post("/submitemail",data);
      console.log("Data posted successfully:", res.data );

      if (res.status === 201) {
        console.log("Email submitted successfully -- frontend console");
        toast.success("Account created successfully -- frontend");
      }
      
    } catch (error) {
      console.error("Error posting data:", error.response?.data?.maggi);
      if (error.response?.status === 400) {
        toast.error(error.response.data.maggi || "Email already exists");
      } else {
        toast.error("An error occurred while submitting the email");
      }

      
    }
  }

  const handleform = (e) => {
    e.preventDefault();
    formdatapost(form);
  };

  return (<>
    
    
 <div className="flex flex-col  justify-center h-[715px] p-20 mb-10   "  >


  <form onSubmit={handleform} className='flex flex-col gap-4 items-center '>

      <div className="join flex-col justify-center  gap-6">
        <div>
          <label className="input validator join-item ">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email"
            placeholder="mail@site.com"  
            value={form.email}
              onChange={(e) => setform({...form, email: e.target.value})}
            
            
            required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
        </div>
        <button type='submit'
        className="btn btn-neutral join-item">Join</button>
            </div>

           
  </form>

  
  <Toaster />
    <RecentEmails/>   
 </div>
 </>
  )
}

export default App