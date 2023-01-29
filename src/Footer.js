import React from 'react';
import { Link } from 'react-router-dom';
import s1 from "./images/sponsor1.png"
import s2 from "./images/atrium.png"
import s3 from "./images/sponsor3.png"
import './App.css';




function Footer() {
  return (
    <div className="FooterBG">
      <div className="sponsors">
        <ul className="s-list">
            <li> <a href="http://kfz-gutachter-begovic.de/"><img className="SponsorLogo" src={s1} alt=""/> </a> </li>
            <li> <img className="SponsorLogo" src={s2} alt=""/></li>
            <li> <a href="https://www.edeka.de/eh/s%C3%BCdbayern/edeka-jusic-balanstra%C3%9Fe-105/index.jsp"><img className="SponsorLogo" src={s3} alt=""/></a></li>
       </ul>

        <div className="footer">
          <p>KUD Bosančica Copyright 2012-2020 Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist: KUD Bosančica München </p>
          
          
          <Link to="/datenschutz" ><a href=""><p>Datenschutz</p></a> </Link>

          <p className="signature">Erstellt von: &copy;  Haris Berbic 2020, <a href="mailto:Haris.Berbic@uni-bayreuth.de">Haris.Berbic@uni-bayreuth.de</a>   im Auftrag von KUD Bosančica München </p>
        </div> 
      </div>
    </div>
  );
}

export default Footer;
