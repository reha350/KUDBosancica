import React from 'react';
import { render } from "react-dom";
import { ReactPhotoCollage } from "react-photo-collage";

const setting = {
  width: '600px',
  height: ['350px', '200px'],
  layout: [1, 4],
  photos: [
    { src: 'https://i.ibb.co/fSNyXyy/13.jpg'},
    { src: 'https://i.ibb.co/r0rw1yv/12.jpg'},
    { src: 'https://i.ibb.co/RN2jcLN/1.jpg'},
    { src: 'https://i.ibb.co/WtLXVff/11.jpg'},
    { src: 'https://i.ibb.co/FbCT0Sz/4.jpg'},
    { src: 'https://i.ibb.co/ByP3nBP/3.jpg'},
    { src: 'https://i.ibb.co/9Vfpvzz/9.jpg'},
    { src: 'https://i.ibb.co/T2909Kw/8.jpg'},
    { src: 'https://i.ibb.co/LnKdBB9/7.jpg'},
    { src: 'https://i.ibb.co/FbCT0Sz/4.jpg'}
  ],

showNumOfRemainingPhotos: true
};

const setting2 = {
  width: '600px',
  height: ['350px', '200px'],
  layout: [2, 3],
  photos: [
    { src: 'https://i.ibb.co/6bRn3V2/6.jpg'}, 
    { src: 'https://i.ibb.co/dWcxwL2/3.jpg'}, 
    { src: 'https://i.ibb.co/xDfpr1L/4.jpg'}, 
    { src: 'https://i.ibb.co/hfqQNKQ/5.jpg'}, 
    { src: 'https://i.ibb.co/k99F8Vn/8.jpg'}, 
    { src: 'https://i.ibb.co/2q7k9nM/7.jpg'},
    { src: 'https://i.ibb.co/CzVC7Dt/1.jpg'}, 
    { src: 'https://i.ibb.co/mvvpM6n/2.jpg'} 
  ],

showNumOfRemainingPhotos: true
};

const setting3 = {
  width: '600px',
  height: ['350px', '200px'],
  layout: [1, 2, 1],
  photos: [
    { src: 'https://i.ibb.co/Vwf9SH4/1.jpg'}, 
    { src: 'https://i.ibb.co/hfbHH5v/2.jpg'}, 
    { src: 'https://i.ibb.co/KNZRKQG/3.jpg'}, 
    { src: 'https://i.ibb.co/4m5Cqf1/4.jpg'}, 
    { src: 'https://i.ibb.co/PYBcYts/5.jpg'}, 
    { src: 'https://i.ibb.co/CmQt5GK/6.jpg'},
    { src: 'https://i.ibb.co/8748RD5/7.jpg'}, 
    { src: 'https://i.ibb.co/CPTCwf2/8.jpg'},
    { src: 'https://i.ibb.co/xDw7bVQ/9.jpg'},
    { src: 'https://i.ibb.co/k4tGKqK/10.jpg'} 
  ],

showNumOfRemainingPhotos: true
};


function Events() {
  return (
    <div>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Oktoberfest 2019
                          </h2>

                          <h3 className="h3">
                          22.9.2019 u Minhenu, glavnom gradu Bavarske otvoren tradicionalni 186. Oktoberfest                           
                          </h3>
                          <h3 className="h3">  
                          Drugog dana Oktoberfesta odrzava se tradicionalni Trachtenumzug, odnosno defile narodnih nosnji koji se neprekidno odrzava od 1948 godine i od tada je sastavni dio festivala. 

                          Prvi put se odrzao 1835 godine u cast vjencanja kralja Ludviga I i 25. godisnjice Oktoberfesta, i do 1948 godine odrzao se jos 4 puta, 1842, 1895, 1910 i 1935.                          
                          </h3>
                          <h3 className="h3">
                          Koliko je interesovanje javnosti za ovaj defile govori i cinjenica da se isti uzivo prenosi na njemackoj drzavnoj televiziji.                          
                          </h3>

                          <h3 className="h3">
                          Na defileu po drugi put, zahvaljujuci clanovima i rukovodstvu Kulturno-umjetnickog drustva Bosancica iz Minhena, kao ravnopravan clan medju oko 9000 ucesnika ponosno se viorila i zastava Bosne i Hercegovine. Prvi put su clanovi Bosancice na ovoj manifestaciji ucestvovali  2017 godine. 
                          </h3>

                          <h3 className="h3">
                          U defileu je ucestvovalo 40 clanova KUD-a Bosancica obucenih u  tradicionalnu Bosansku narodnu nosnju, a paznju prisutnih privlacili su najmladji clanovi koji su ponosno defilirali obuceni u narodnu nosnju.
                          </h3>
                        </div>
                    </div>
                      
      </div>

    <div className="collage">
      <ReactPhotoCollage {...setting} /> 
    </div>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Probe
                          </h2>
                        </div>
                    </div>
     </div>

    <div className="collage">
      <ReactPhotoCollage {...setting2} /> 
    </div>

    <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                            Izleti i druženja
                          </h2>

                          <h3 className="h3">
                            Skylinepark, Bayernpark, Airhop, Kletterwald, Salzburg, Nürnberg ...
                          </h3>
                        </div>
                    </div>
     </div>

    <div className="collage">
      <ReactPhotoCollage {...setting3} /> 
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
