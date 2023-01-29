import React, { useState } from 'react';
import Slider from './slider';
import i2 from "./images/about/2.jpg";
import bosancica_slika from "./images/bosancica.jpg";
import last from "./images/about/last.jpg";


function Home() {

  const [isOpen, setIsOpen] = useState(false);
        
  return (
    <div> 

        <Slider />

        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <h3 className="h3">
                          Kulturno Umjetničko Društvo Bosančica München e.V. je nastalo kao odgovor na prepoznatu potrebu da se u gradu München pokrenu aktivnosti čiji glavni cilj je upoznavanje zainteresovanih sa tradicionalnim vrijednostima bosanskog naroda i kulture sa prostora Balkana. Društvo je registrovano 15.12.2012 godine  i proizvod je entuzijazma kreativnih i upornih ljudi čiji je cilj da se zainteresovanima predstavi i ponudi kvalitetan i sistematski pripremljen program koji uključuje upoznavanje sa tradicionalnim igrama, muzikom, jezikom, kulturom i drugim vrijednostima. Pored aktivnosti koje se tiču savladavanja predviđene materije važan element takođe predstavljaju i nastupi, tj. prezentacije ostvarenog napredka kao i učešća na događajima koje priređuju druga društva i organizacije. Sa ponosom ističemo da su ostvareni veliki uspjesi na planu saradnje sa društvima drugih nacionalnih i internacinionalnih drustava.
                          </h3>
                          <h3 className="h3">  Cilj našeg društva je temeljno i kvalitetno bavljenje bosanskom kulturom i tradicijom. Želja nam je da pronađemo dovoljan broj pravih čuvara tradicije koji bi svojim radom i zalaganjem obezbjedili da se bosanska kultura na adekvatan način predstavi u srcu Evrope i sačuva od zaborava,po najprije u današnjem vremenu i našoj djeci i omladini koji su rođeni i odrastaju u dijaspori.
                          </h3>
                        </div>
                    </div>
                      
        </div>

        <div class="container"> 
          <div class="box-a">
              <img src={i2} alt="about-pic" className="about-pic"></img>

            </div>
        </div>

        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <h3 className="h3">
                          Kako bismo ispunili zacrtane ciljeve održavamo časove folklora koji se odvijaju jednom nedjeljno. Način rada i sadržaj u okviru folklornih sekcija je osmišljen tako da članovima društva ponudi,ujedno i pomogne u savladavanju osnovnih elemenata narodnih igara karakterističnih za balkanski region.                         
                           </h3>
                          <h3 className="h3">  
                          Folklor kao jedna od osnovnih karakteristika svakog naroda predstavlja najbolji način da se kultura i tradicija prije svega jasno prepoznaju a zatim i da se u pojedincu, na osnovu ostvarenog utiska probudi želja za bližim upoznavanjem. Dječiji folklor funkcioniše po istom principu, gdje pored savladavanja folklornih elemenata, djeca takođe imaju mogućnost da kroz aktivno učešće na probama poboljšaju svoju fizičku spremnost, koordinaciju, motoriku i osjećaj za ritam.                          </h3>
                          <h3 className="h3">
                          Ukoliko imate ideje i željeli biste da se uključite u naše društvo, obratite nam se, jer zajedno možemo da postignemo mnogo.
                          </h3>
                        </div>
                    </div>
                      
        </div>

        <div class="container"> 
          <div class="box-a">
              <img src={bosancica_slika} alt="about-pic" className="about-pic"></img>

            </div>
        </div>


        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">
                          <h3 className="h3">
                          Aktivne članove društva čine trenutno djeca i omladina porijeklom iz Bosne i Hecegovine. Jedan od ciljeva projekta je da se sa takvom praksom nastavi, i da se uz pomoć kvalitetnije prezentacije bosanskog folklora omogući širenje interesovanja predhodno među djecom i omladinom. Društvo je otvoreno za sve zainteresovane.                           </h3>
                        </div>
                    </div>
                      
        </div>

        <div class="container"> 
          <div class="box-a">
              <img src={last} alt="about-pic" className="about-pic"></img>
            </div>
        </div>

                   <div class="container"> 
                          <h2 className="h2-title">
                          Lijepo lice Bosne i Hercegovine i našeg naroda, kao i svih dobrih ljudi zaslužuju da se prikažu na pravi način!
                         </h2>
                    </div>
        
         
    </div>
  );
}


export default Home;
