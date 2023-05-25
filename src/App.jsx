import React from 'react';
import Accordion from './Accordion';
import { accordionContent } from './utils/content';
import Carousel, {CarouselItem} from "./Carousel";

const App = () => {
  return (
    <div>
      <h1 className="title-top" >Everything Everywhere</h1>
      <h1 className="title-bottom" >All At Once</h1>
      <h2>Some of the best scenes</h2>
      <Carousel>
          <CarouselItem itemNumber="first"> 
          </CarouselItem>
          <CarouselItem itemNumber="second"></CarouselItem>
          <CarouselItem itemNumber="third"></CarouselItem>
          <CarouselItem itemNumber="fourth"></CarouselItem>
        </Carousel>
      {/* Container for the accordion component, accordion content is passed into component as title and content props */}
      <div className="accordion">
        {accordionContent.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;

