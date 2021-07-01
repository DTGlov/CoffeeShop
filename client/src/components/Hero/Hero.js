import React from 'react';
import smile from '../../assets/smile.png'

function Hero() {
    return (
      <section className="home-section">
        <div className="home-container">
          <div className="home-left">
            <h1 className=" home-left-head">Smile Jamaica</h1>
            <h2 className="home-left-heading">MEDIUM ROAST</h2>
            <p className="home-left-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum veniam illo blanditiis ad eveniet consectetur molestias
              quasi aliquam placeat voluptatibus voluptatem dolores, recusandae
              obcaecati, tempore, fugit ea sint labore. Ea reiciendis adipisci
              quasi nesciunt. Sunt accusantium atque delectus officiis quaerat
              eos numquam consequatur. Similique, quam blanditiis ipsa earum sed
              cupiditate.
            </p>
          </div>
          <div className="home-image">
            <img src={smile} alt="" />
          </div>
          <div className="home-right">
            <h1 className="home-right-head">Feature Product</h1>
            <p className="home-right-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ea est eveniet rem quia cupiditate natus laudantium autem a in!
            </p>
          </div>
        </div>
      </section>
    );
}

export default Hero
