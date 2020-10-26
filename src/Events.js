import React from 'react';
import './App.css';
import kolacijada1 from "./images/kolacijada/1.jpg";
import kolacijada2 from "./images/kolacijada/2.jpg";
import kolacijada3 from "./images/kolacijada/3.jpg";
import kolacijada4 from "./images/kolacijada/4.jpg";
import Gallery from "react-photo-gallery";
import { Link } from 'react-router-dom';


const photos = [
  {
    src: 'https://i.ibb.co/6bRn3V2/6.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://i.ibb.co/dWcxwL2/3.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://i.ibb.co/dWcxwL2/3.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://i.ibb.co/dWcxwL2/3.jpg',
    width: 1,
    height: 1
  }
];


function Events() {

  const navStyle = {
    color: "black"
}

  return (
    <div>

    <nav>
      <ul className="nav-links">
              <Link style={navStyle} to="/nastupi">
                <li className="nav-links-i">Naši nastupi</li>
              </Link>

              <Link style={navStyle} to="/roditelji">
                <li className="nav-links-i">Naši roditelji i prijatelji</li>
              </Link>
      </ul>
    </nav>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Oktoberfest 2019
                          </h2>

                          
                          <h3 className="h3">  
                            Tradicionalni kulturno zabavni sadržaj u srcu Bavarske je naravno Oktoberfest, koji okuplja ljude iz cijelog svijeta. Drugog
                            dana Oktoberfesta se održava tradicionalni Trachtenumzug, odnosno defile narodnih nošnji koji je sastavni dio Oktoberfesta. 
                            Da se bosansko-hercegovačka zastava zavihori i na ovome značajnom događaju, pobrinulo se rukovodstvo i naši članovi, i to ne 
                            jednom, već dva puta. 
                          </h3>
                          <h3 className="h3">
                            2017/2019 Godine članovi našeg društva su učestvovali na Trachtenumzug i tako predstavljali narode i nošnju Bosne i Hercegovine.
                            Događaj je prenošen na njemačkoj državnoj televiziji.
                          </h3>
                        </div>
                    </div>
                      
      </div>

      <div class="gallery-bg">
         <Gallery photos={photos} />;
      </div>
    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Probe
                          </h2>

                          <h3 className="h3">
                            Vikend !!! Nedjelja !!!
                          </h3>
                          <h3 className="h3">
                            Nekome dan za odmor i relaksaciju, a nama već standardno. Proba !!!
                          </h3>
                          <h3 className="h3">
                            Iz nedjelje u nedjelju se okupljamo sa našim članovima, družimo se, učimo, vježbamo i vrijedno radimo. Naši treneri prenose
                            svoje znanje na mlađe naraštaje. Uči se ne samo igra i pjesma, već i tradicija i običaji, njeguje se bosanski jezik, naša domaća
                            kuhinja. 
                          </h3>

                          <h3 className="h3">
                            
                          </h3>

                          <h3 className="h3">
                            Kolo, kolo, Naokolo, Vilovito, Plahovito, Napleteno, Navezano, Okićeno, Začinjeno
                          </h3>
                          <h3 className="h3">
                            Oj Bosanče, Stara slavo, Tvrdo Srce, Tvrda Glavo, Tvrd si kao kremen kamen
                          </h3>
                          <h3 className="h3">
                            Gdje stanuje živ plamen! 
                          </h3>

                        </div>
                    </div>
     </div>


    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Izleti i druženja
                          </h2>

                          <h3 className="h3">
                            Nije svaka nedjelja rezervisana samo za probu i vježbu. Trudimo se da pobjegnemo od svakodnevnice i spas pronađemo u prirodi,
                            jezeru, zabavnim parkovima, posjećujući druge gradove sa našim članovima i prijateljima.
                          </h3>
                        </div>
                    </div>
     </div>


    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Kolačijade
                          </h2>

                          <h3 className="h3">
                            2017.  Godine rodila se jedna plemenita ideja. Pomoći nekome u nevolji. Prodajom kolača naši članovi, jednom godišnje iskupljaju novac
                            i uplaćuju ga za liječenje teško oboljele dijece u Bosni i Hercegovini, kojima je ta pomoć potrebna.
                          </h3>

                          
                                <ul className="kolacijada-list">
                                <li>2017: Nail 5000€</li>
                                <li>2018: Armin i Ajla 5000€</li> 
                                <li>2019: Mehmed 10.000€</li> 
                                <li>2020: Online: 3000€ + 600€ (bajramski Paketići u BiH)</li>
                       
                                </ul> 
                        </div>
                    </div>
     </div>

     <div class="box-bg2">
       <div class="container">
         <div class="box-a">
                        <div className="kolacijada">
                            <img src={kolacijada1} alt="Kolacijada-poster" className="kposter"></img>
                            <img src={kolacijada2} alt="Kolacijada-poster" className="kposter"></img>
                            <img src={kolacijada3} alt="Kolacijada-poster" className="kposter"></img>
                            <img src={kolacijada4} alt="Kolacijada-poster" className="kposter"></img>
                          </div>
                        
         </div>
       </div>
     </div>



    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h3 className="h3">
                            Kompetnu galeriju i aktuelnog možete pronaći na našoj Facebook stranici <a  href="https://www.facebook.com/kudbosancica/" > KUD Bosančica</a>
                          </h3>
                        </div>
                    </div>
     </div>
      
    </div>
  );
}

export default Events;
