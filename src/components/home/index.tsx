import DocumentArea from "../common/DocumentArea";
import Banner from "./Banner";
import ChartArea from "./ChartArea";
import DownloadArea from "./DownloadArea";
import {Element} from 'react-scroll';

const Home = () => {
   return (
      <>
      <Element name="home" id="home">
      <Banner />
      </Element>

      <Element name="about" id="about">
      <DownloadArea />
      </Element>
  

      <Element name="chownomics" id="chownomics">
      <ChartArea />
      </Element>

      <Element name="links" id="links">
         <DocumentArea></DocumentArea>
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
