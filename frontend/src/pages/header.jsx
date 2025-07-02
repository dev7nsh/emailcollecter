import React from 'react'

const header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
        
                        <div className="navbar bg-base-100 shadow-sm flex  justify-between px-12">
            <a className="btn btn-ghost text-xl">EmailEater</a>


<div className="live flex items-center gap-2">
    <div className="inline-grid *:[grid-area:1/1]">
                                <div className="status status-error animate-ping"></div>
                                 <div className="status status-error"></div>
                                 
                                  </div> 
                                <div className="mianliv font-bold text-gray-400">Working</div>
                            
</div>
                                 


            </div>
           
                                   

    </header>
    
  )
}

export default header