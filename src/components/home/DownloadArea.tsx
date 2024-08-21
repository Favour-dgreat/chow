
const DownloadArea = () => {
   return (
      <section className="download-area pt-130 pb-130">
         <div className="container">
            <div className="download-inner-wrap">
               <div className="row align-items-end">
                  <div className="col-lg-6">
                     <div className="download-content">
                        <div className="section-title mb-40">
                           <h2 className="title">About Chow Chow</h2>
                           <br/>
                           <h3>Chow Chow is charity-focused memecoin, using the power of community to support animal welfare and rescue organizations. <br></br> <br></br>Every holder contributes to making a difference in the lives of animals</h3>
                        </div>
                        {/* <div className="download-list">
                           <ul className="list-wrap">
                              <li><span>1</span>White Paper</li>
                              <li><span>2</span>Privacy & Policy</li>
                           </ul>
                        </div> */}
                        
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="download-img">
                        <img src="/assets/img/images/chow3.png" alt="" />
                        <img src="/assets/img/images/2.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="download-shape-wrap">
                  <img src="/assets/img/images/3.png" alt="" />
               </div>
            </div>
         </div>
      </section>
   )
}

export default DownloadArea
