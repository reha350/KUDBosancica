import React from 'react';
import './App.css';

import hvala from "./images/hvala.jpg";

function Roditelji() {
  return (

    <div>

        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                          </h2>

                          
                          <h3 className="h3">
                            Podrška !!! Jedna riječ a govori tako mnogo. Riječ kojom možemo opisati prije svega naše prijatelje, roditelje
                            naše dijece, naših članova. Samo jedna riječ, a tako puno znači. Ne postoji prilika, druženje, fešta, roštilj, izlet,
                            kolačijada, a da oni nisu tu, kao učesnici, vodilja, pokretači, podrška u svakom smislu, materijalna i fizička. Sve u jednom.
                            Roditeljski odbor je pokretač i nosilac, ali naši roditelji su vrijedna "vojska" koja to sve iznese na najbolji mogući način. 
                            Hvala im od srca na tome, u ime cijelog odbora i svih članova KUDa Bosančice.
                          </h3>

                          <img className="about-pic"src={hvala} alt=""/>


                        </div>
                    </div>
          </div>

    
    
    </div>
  );
}


export default Roditelji;
