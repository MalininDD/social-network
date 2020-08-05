import React from 'react';

const Main = () =>{
  return(
    <div class="main">
      <div class="container">
        <div class="main__row">

          <div class="sidebar">
            <div class="sidebar__row">
              <div class="sidebar__body">
                <div class="sidebar__point">
                  <a href="#">Profile</a>
                </div>
                <div class="sidebar__point">
                  <a href="#">Messages</a>
                </div>
                <div class="sidebar__point">
                  <a href="#">News</a>
                </div>
                <div class="sidebar__point">
                  <a href="#">Music</a>
                </div>
                <div class="sidebar__point sidebar__setting">
                  <a href="#">Settings</a>
                </div>
              </div>
            </div>
          </div>

          <div class="hat">
            <div class="hat__row">
              <div class="hat__image">
                <img src="http://universum.com.ru/wp-content/uploads/2017/10/pexels-photo-269138.jpeg" alt="hat-photo"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main;