import React from 'react';

function TopCardList() {
    return (
       <section className="top-cards">
    <div className="wrapper">
      <div className="grid">
        <article className="card facebook">
          <p className="card-title">
            <img src="images/icon-facebook.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">1483</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p className="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article className="card twitter">
          <p className="card-title">
            <img src="images/icon-twitter.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p className="card-followers">
            <span className="card-followers-number">28k</span>
            <span className="card-followers-title">Followers</span>
          </p>
          <p class="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article class="card instagram">
          <p class="card-title">
            <img src="images/icon-instagram.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p class="card-followers">
            <span class="card-followers-number">6k</span>
            <span class="card-followers-title">Followers</span>
          </p>
          <p class="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
        <article class="card youtube">
          <p class="card-title">
            <img src="images/icon-youtube.svg" alt=""/>
            @LeonidasEsteban
          </p>
          <p class="card-followers">
            <span class="card-followers-number">12k</span>
            <span class="card-followers-title">Followers</span>
          </p>
          <p class="card-today">
            <img src="images/icon-up.svg" alt=""/>
            12 Today
          </p>
        </article>
      </div>
    </div>
  </section> 
    );
}

export default TopCardList;