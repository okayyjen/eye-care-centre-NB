import "./homepage.css"

import Reviews from "./components/Reviews";
import ImageBlock from "./components/ImageBlock";
import ContentBlockA from "./components/ContentBlockA";
import ContentBlockB from "./components/ContentBlockB";
import ContentBlockC from "./components/ContentBlockC";
import ContentBlockD from "./components/ContentBlockD";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <div id="home-page">

            <div id="image-carousel">
              <ImageCarousel/>
            </div>

            <ContentBlockA/>

            <ContentBlockB/>

            <ContentBlockC/>

            <ImageBlock/>

            <ContentBlockD/>

            <div id="reviews-wrapper">
              <Reviews/>
            </div>

          </div>
  );
}
