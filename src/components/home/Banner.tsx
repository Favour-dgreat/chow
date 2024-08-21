import { Link } from "react-router-dom"

const Banner = () => {
   return (
      <section className="banner-area banner-bg" style={{ backgroundImage: `url(/assets/img/banner/banner_bg.png)` }}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-10">
                  <div className="banner-content text-center">
                     <h2 className="title">Chow Chow is China's oldest and most famous dog breeds, known for its majestic, lion-like appearance and centuries of loyalty.</h2>
                     <div className="banner-countdown-wrap">
                     <div className="contribution-btn">
                     <Link to="/#" className="btn">Buy on Sushiswap</Link>
                     <Link to="/#" className="btn btn-two">Learn More</Link>
                  </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="banner-scroll-down">
               <a href="#contribution" className="section-link">
                  <span></span>
                  <span></span>
                  <span></span>
               </a>
         </div>
         <div className="banner-shape-wrap">
            <img src="/assets/img/images/chow1.png" alt="" className="leftToRight" />
            <img src="/assets/img/images/chow4.png" alt="" className="alltuchtopdown" />
         </div>
      </section>
   )
}

export default Banner
