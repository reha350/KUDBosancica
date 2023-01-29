import React from 'react';
import './App.css';
import { render } from "react-dom";
import kolacijada1 from "./images/kolacijada/1.jpg";
import kolacijada2 from "./images/kolacijada/2.jpg";
import kolacijada3 from "./images/kolacijada/3.jpg";
import kolacijada4 from "./images/kolacijada/4.jpg";
import kolacijada5 from "./images/kolacijada/5.jpg";
import { Link } from 'react-router-dom';

import ImageGallery from 'react-image-gallery';

const images2 =
[{
        original: "https://i.ibb.co/6bRn3V2/6.jpg",
        thumbnail: "https://i.ibb.co/6bRn3V2/6.jpg",
        
},
{
        original: "https://i.ibb.co/dWcxwL2/3.jpg",
        thumbnail: "https://i.ibb.co/dWcxwL2/3.jpg",
        
},

{
        original: "https://i.ibb.co/xDfpr1L/4.jpg",
        thumbnail: "https://i.ibb.co/xDfpr1L/4.jpg",
        
},

{
  original: "https://i.ibb.co/hfqQNKQ/5.jpg",
  thumbnail: "https://i.ibb.co/hfqQNKQ/5.jpg",
  
},
{
  original: "https://i.ibb.co/k99F8Vn/8.jpg",
  thumbnail: "https://i.ibb.co/k99F8Vn/8.jpg",
  
},
{
  original: "https://i.ibb.co/2q7k9nM/7.jpg",
  thumbnail: "https://i.ibb.co/2q7k9nM/7.jpg",
  
},


]

const images1 =
[{
        original: "https://i.ibb.co/fSNyXyy/13.jpg",
        thumbnail: "https://i.ibb.co/fSNyXyy/13.jpg",
        
},
{
        original: "https://i.ibb.co/r0rw1yv/12.jpg",
        thumbnail: "https://i.ibb.co/r0rw1yv/12.jpg",
        
},

{
        original: "https://i.ibb.co/RN2jcLN/1.jpg",
        thumbnail: "https://i.ibb.co/RN2jcLN/1.jpg",
        
},

{
  original: "https://i.ibb.co/WtLXVff/11.jpg",
  thumbnail: "https://i.ibb.co/WtLXVff/11.jpg",
  
},
{
  original: "https://i.ibb.co/FbCT0Sz/4.jpg",
  thumbnail: "https://i.ibb.co/FbCT0Sz/4.jpg",
  
},
{
  original: "https://i.ibb.co/ByP3nBP/3.jpg",
  thumbnail: "https://i.ibb.co/ByP3nBP/3.jpg",
  
},


]


const images3 =
[{
        original: "https://i.ibb.co/Vwf9SH4/1.jpg",
        thumbnail: "https://i.ibb.co/Vwf9SH4/1.jpg",
        
},
{
        original: "https://i.ibb.co/hfbHH5v/2.jpg",
        thumbnail: "https://i.ibb.co/hfbHH5v/2.jpg",
        
},

{
        original: "https://i.ibb.co/KNZRKQG/3.jpg",
        thumbnail: "https://i.ibb.co/KNZRKQG/3.jpg",
        
},

{
  original: "https://i.ibb.co/4m5Cqf1/4.jpg",
  thumbnail: "https://i.ibb.co/4m5Cqf1/4.jpg",
  
},
{
  original: "https://i.ibb.co/PYBcYts/5.jpg",
  thumbnail: "https://i.ibb.co/PYBcYts/5.jpg",
  
},
{
  original: "https://i.ibb.co/CmQt5GK/6.jpg",
  thumbnail: "https://i.ibb.co/CmQt5GK/6.jpg",
  
},


]



const images4 =
[{
        original: "https://i.ibb.co/4fXZPxJ/1.jpg",
        thumbnail: "https://i.ibb.co/4fXZPxJ/1.jpg",
        
},
{
        original: "https://i.ibb.co/BCmPDy9/2.jpg",
        thumbnail: "https://i.ibb.co/BCmPDy9/2.jpg",
        
},

{
        original: "https://i.ibb.co/qy3Wr8V/3.jpg",
        thumbnail: "https://i.ibb.co/qy3Wr8V/3.jpg",
        
},

{
  original: "https://i.ibb.co/hWncdsP/4.jpg",
  thumbnail: "https://i.ibb.co/hWncdsP/4.jpg",
  
},
{
  original: "https://i.ibb.co/RH3BLbF/5.jpg",
  thumbnail: "https://i.ibb.co/RH3BLbF/5.jpg",
  
},
{
  original: "https://i.ibb.co/bdbB5FM/6.jpg",
  thumbnail: "https://i.ibb.co/bdbB5FM/6.jpg",
  
},


]

const images6 =
[{
        original: "https://i.ibb.co/m9pyy1K/1.jpg",
        thumbnail: "https://i.ibb.co/m9pyy1K/1.jpg",
        
},
{
        original: "https://i.ibb.co/vvhWwph/2.jpg",
        thumbnail: "https://i.ibb.co/vvhWwph/2.jpg",
        
},

{
        original: "https://i.ibb.co/cbvmSV3/3.jpg",
        thumbnail: "https://i.ibb.co/cbvmSV3/3.jpg",
        
},

{
  original: "https://i.ibb.co/jJ4NLsd/4.jpg",
  thumbnail: "https://i.ibb.co/jJ4NLsd/4.jpg",
  
},
{
  original: "https://i.ibb.co/whcct9d/5.jpg",
  thumbnail: "https://i.ibb.co/whcct9d/5.jpg",
  
},


]

const images5 =
[{
        original: "https://i.ibb.co/rF17WHx/1.jpg",
        thumbnail: "https://i.ibb.co/rF17WHx/1.jpg",
        
},
{
        original: "https://i.ibb.co/F5v54Cw/2.jpg",
        thumbnail: "https://i.ibb.co/F5v54Cw/2.jpg",
        
},

{
        original: "https://i.ibb.co/7t4mqxY/3.jpg",
        thumbnail: "https://i.ibb.co/7t4mqxY/3.jpg",
        
},

{
  original: "https://i.ibb.co/J5SKvc6/4.jpg",
  thumbnail: "https://i.ibb.co/J5SKvc6/4.jpg",
  
},
{
  original: "https://i.ibb.co/89YN84n/5.jpg",
  thumbnail: "https://i.ibb.co/89YN84n/5.jpg",
  
},
{
  original: "https://i.ibb.co/sjKvVKQ/6.jpg",
  thumbnail: "https://i.ibb.co/sjKvVKQ/6.jpg",
  
},
{
  original: "https://i.ibb.co/HBHcqCq/7.jpg",
  thumbnail: "https://i.ibb.co/HBHcqCq/7.jpg",
  
},
{
  original: "https://i.ibb.co/9czZSKH/8.jpg",
  thumbnail: "https://i.ibb.co/9czZSKH/8.jpg",
  
},
]

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

    <div className="collage">

<ImageGallery items={images1} />
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

     <div className="collage">

<ImageGallery items={images2} />
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

     <div className="collage">

<ImageGallery items={images3} />
    </div>


    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Naša Fešta 10 Godina Postojanja
                          </h2>
                          <h3 className="h3">
                            Specijalni Gost - Nihad Alibegović
                          </h3>
                        </div>
                    </div>
     </div>

     <div className="collage">

<ImageGallery items={images5} />
    </div>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Basel - Švajcarska
                          </h2>
                        </div>
                    </div>
     </div>

     <div className="collage">

<ImageGallery items={images6} />
    </div>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Izleti Garmisch
                          </h2>

                        </div>
                    </div>
     </div>

     <div className="collage">

<ImageGallery items={images4} />
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
                                <li>2022: Ferzija Hajirić 8000€</li>
                       
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
                            <img src={kolacijada5} alt="Kolacijada-poster" className="kposter"></img>
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
