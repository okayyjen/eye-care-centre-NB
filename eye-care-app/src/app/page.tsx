import "./homepage.css"

import ImageBlock from "./components/ImageBlock";
import ContentBlockC from "./components/ContentBlockC";
import ContentBlockD from "./components/ContentBlockD";
import ImageCarousel from "./components/ImageCarousel";
import Card from "./components/Card";
import StatCard from "./components/StatCard";
import { contentBlockAData, statCardsData } from "./data/general";

export default function Home() {
  return (
    <div id="home-page">

            <div id="image-carousel">
              <ImageCarousel/>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-5 p-5 pt-5">
              {contentBlockAData.map((card, index) => (
                <Card key={index} title={card.title} text={card.text} link={card.link} />
              ))}
            </div>

            <div className="content-block-b">
              {statCardsData.map((card, index) => (
                <StatCard 
                key={index} 
                text={card.text} 
                id={card.id}
                />
              ))}
            </div>

            <ContentBlockC/>

            <ImageBlock/>

            <ContentBlockD/>

          </div>
  );
}
