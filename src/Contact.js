import React from 'react';
import './App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Contact() {
  return (

    <div>
          
          <div className="TitleBG">
            <div className="PageTitle">
                  <h1>Kontakt</h1>
            </div>
          </div>
          <div class="box-bg">
          <div className="container-termine">
              <h2>Termine</h2> 
                <ul className="time-list">

                  <li>
                    Die Proben finden Sonntags in der  IG Feuerwache Ganghoferstr. 41 
                    80339 München, von 12:30 Uhr bis 17:30 Uhr statt.
                  </li> 
                </ul>  
                  
                  
                  
                  
                </div>      
            </div>


          <div className="bodydiv">
              <div class="card">
                <a href="mailto:kudbosancica@web.de">
                  <FontAwesomeIcon icon="envelope" className="fIcon"/>
                  <div class="card-content">
                      <h3>Email</h3>
                      <span>kudbosancica@web.de</span>
                  </div>
                  </a>
              </div>

              <div class="card">
                <a href="https://www.facebook.com/kudbosancica/">
                  <i class="fab fa-2x fa-facebook-f"></i>
                  <div class="card-content">
                      <h3>Facebook</h3>
                      <span>kudbosancica</span>
                  </div>
                  </a>
              </div>
                <div class="card">
                <a href="https://www.google.com/maps/place/Ganghoferstra%C3%9Fe+41,+80339+M%C3%BCnchen/@48.13043,11.54037,15z/data=!4m5!3m4!1s0x479dd8adcc184b01:0x10941b38af7560b2!8m2!3d48.13043!4d11.54037?hl=de">

                    <FontAwesomeIcon icon="map-marker-alt" className="fIcon"/>
                    <div class="card-content">
                        <h3>Ganghoferstr 41</h3>
                        <span>80339 München</span>
                    </div>
                    </a>
                </div>
              
                
              </div>        
                                                                                      
          
    </div>
  );
}

export default Contact;


