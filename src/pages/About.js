import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Pedro’s Pizza is all about quality you can trust. As one of the
          original founding Pizza brands and the 3rd largest Pizza chain 
          in India, our sole mission is making the freshest, tastiest and
          funnest Pizza around. Our classic pan pizza will always be a fan
          favorite, with a soft and chewy crust perfectly balancing out the
          healthy tomato pure and mozzarella - cheddar blended cheese. Our 
          authentic Italian crust for those who would prefer a light and airy
          crust to more fully enjoy the toppings. Thin, light and delicious
          . Our newest addition of Puree sauces will blow your mind. Choose 
          between a spicy buffalo, sweet bbq, tangy chipotle can creamy makhni
          to perfectly compliment your toppings and crust. Our suggestions of
          combinations might be helpful but ultimately the power lies with you.
          Contrary to industry standard strategy, USPizza, since 1996, has been
          committed to growing our brand slowly and steadily. Every outlet is 
          carefully selected on strict criteria. To be a USPizza franchise is a
          privilege unto itself. The same commitment to product and service
          perfection we practice is expected from our partners. Our outlets
          designed by leading architects to reflect our philosophy of being open
          and inviting, while putting our customer comfort on priority.
          Everywhere we go, we hear ‘Your pizza is the tastiest pizza around,
          why aren’t you open in my location’. The answer is simple, every outlet
          opened is a promise to our customer, and not one we take lightly.
        </p>
      </div>
    </div>
  );
}

export default About;
