import Banner from "./Banner";
import ChartArea from "./ChartArea";
import DownloadArea from "./DownloadArea";
import {Element} from 'react-scroll';

const Home = () => {
   return (
      <>
      <Element name="home">
      <Banner />
      </Element>

      <Element name="about">
      <DownloadArea />
      </Element>
      
      <Element name="chownomics">
      <Banner />
      </Element>

      <Element name="links">
      <ChartArea />
      </Element>

      

         {/* <Contribution /> */}
         {/* <Brand /> */}
         {/* <FeatureOne />
         <FeatureTwo /> */}
         {/* <RoadMapArea /> */}
         {/* <Team /> */}
         {/* <FAQ /> */}
      </>
   )
}

export default Home;
