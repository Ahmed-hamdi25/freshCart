import React from 'react'
import "./Footer.module.css"
export default function Footer() {
    return (

        <footer className='text-center '>
        <div className="container">
           <div className="row p-3">
              <div className="col-md-4">
                 <div className='m-3'>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive Clark, MO 65243</p>
                 </div>
              </div>
              <div className="col-md-4">
                 <div className=''>
                    <h3>AROUND THE WEB</h3>
                    <ul className='list-unstyled d-flex p-0 justify-content-center gap-3'>
                       <li>
                          <a target='_blank' href="#"><i className="fa-brands fa-facebook"></i></a>
                       </li>
                       <li>
                          <a target='_blank' href="#"><i className="fa-brands fa-twitter"></i></a>
                       </li>
                       <li>
                          <a target='_blank' href="#"><i className="fa-brands fa-linkedin"></i></a>
                       </li>
                       <li>
                          <a target='_blank' href="#"><i className="fa-solid fa-globe"></i></a>
                       </li>
                    </ul>
                 </div>
              </div>
              <div className="col-md-4">
                 <div> 
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                 </div>
              </div>
           </div>
        </div>
        <p className='Copyright py-4 mb-0'>Copyright © Your Website 2021</p>

     </footer>
        
    )
}


{/* <footer className=''>
            <div className={`upper-part ${style.upperPartPadd} ${style.upperPartColor} d-flex align-items-center justify-content-center`}>
                <div className="container-fluid">
                    <div className={`row ${style.leftPaddRightPadd}`}>
                        <div className="col-md-4">
                            <div className={`${style.card} text-white text-center`}>
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${style.card} text-white text-center`}>
                                <h3>AROUND THE WEB</h3>
                                <div className='d-flex justify-content-center'>

                                    <div className={`${style.iconBorder} d-flex justify-content-center `}><i className={`fa-brands fa-facebook align-self-center ${style.iconSize}`}></i></div>

                                    <div className={`${style.iconBorder} d-flex justify-content-center `}><i className={`fa-brands fa-twitter align-self-center`}></i></div>

                                    <div className={`${style.iconBorder} d-flex justify-content-center `}><i className={`fa-brands fa-linkedin-in align-self-center`}></i></div>

                                    <div className={`${style.iconBorder} d-flex justify-content-center `}><i className={`fa-solid fa-globe align-self-center`}></i></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={`${style.card} text-white text-center`}>
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` bootom-part text-white text-center ${style.bootomPart}`}>
                <p>Copyright © Your Website 2021</p>
            </div>
        </footer> */}


