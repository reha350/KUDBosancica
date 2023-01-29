import React from 'react';
import m4 from "./images/mm4.jpg"
import m9 from "./images/mm9.jpg"
import Placeholder from "./images/mm_P.jpg"

function Team() {
  return (
    <div>
            
            
            <div class="team-section">
    <div class="inner-width">
      <h1>Stručni rukovodioci ansambla KUD-a</h1>
      <div class="pers">


        <div class="pe">
          <img src = {m4}  alt=""></img>
          <div class="p-name">Mersiha Botić</div>
          <div class="p-des">Umjetnički rukovodilac</div>
        </div>

        <div class="pe">
        <img src={m9}  alt=""></img>
          <div class="p-name">Ensar Kalić</div>
          <div class="p-des">Trener</div>
        </div>

        <div class="pe">
          <img src={Placeholder}  alt=""></img>
          <div class="p-name">Neila Kauković</div>
          <div class="p-des">Trener</div>
        </div>

        


          {/*<div class="p-sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>

          
        <div class="pe">
          <img src={m4}  alt=""></img>
          
          <div class="p-name">Mersiha Botić</div>
          <div class="p-des">Trenerica</div>
        </div>
          */}


      </div>

    </div>
  </div>
</div>
  );
}

export default Team;
