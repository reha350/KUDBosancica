import React from 'react';
import './App.css';
import ImageGallery from 'react-image-gallery';


const images =
[{
        original: "https://i.ibb.co/bmKyH4G/b7dbbc23-2a01-4470-b84a-23efaa84ab32.jpg",
        thumbnail: "https://i.ibb.co/bmKyH4G/b7dbbc23-2a01-4470-b84a-23efaa84ab32.jpgg",
        
},
{
        original: "https://i.ibb.co/0rnLsNY/afaf4870-27e1-4e2e-a0d9-32fe4dc13b46.jpg",
        thumbnail: "https://i.ibb.co/0rnLsNY/afaf4870-27e1-4e2e-a0d9-32fe4dc13b46.jpg",
        
},

{
        original: "https://i.ibb.co/6wx9w2j/9a058e3c-e174-4ac1-958b-732142498c32.jpg",
        thumbnail: "https://i.ibb.co/6wx9w2j/9a058e3c-e174-4ac1-958b-732142498c32.jpg",
        
},

{
  original: "https://i.ibb.co/z86T839/43319fd3-aac2-442b-9a84-7f34806b5556.jpg",
  thumbnail: "https://i.ibb.co/z86T839/43319fd3-aac2-442b-9a84-7f34806b5556.jpg",
  
},
{
  original: "https://i.ibb.co/5hq1RCD/abeba980-47cb-4842-bedf-9c6e8d3453d8.jpg",
  thumbnail: "https://i.ibb.co/5hq1RCD/abeba980-47cb-4842-bedf-9c6e8d3453d8.jpg",
  
},
{
  original: "https://i.ibb.co/Ky9D0b9/42353387-0c5a-4e08-96eb-55a7eb8845fd.jpg",
  thumbnail: "https://i.ibb.co/Ky9D0b9/42353387-0c5a-4e08-96eb-55a7eb8845fd.jpg",
  
},


]

function Nastupi() {

  

  return (

    <div>
       <div className="TitleBG">
            <div className="PageTitle">
                  <h1>Nastupi</h1>
            </div>
        </div>

        <div class="box-bg">
                   <div class="container"> 
                        <div class="box-a">

                          <h2 className="h2-title">
                          </h2>

                          <h3 className="h3">
                            München, Bavarska, Njemačka, Austrija, Švicerska...
                          </h3>
                          <h3 className="h3">
                            Radujemo se svakom nastupu i svake nedjelje se pripremamo kako bih smo naše koreografije što bolje i uigranije predstavili.
                            Viđeni smo kako u našem gradu, tako i u pokrajini na gostovanjima kod drughih društava, ali ne samo u bavarskoj, već i mnogo šire.
                            Radujemo se svakom pozivu, a bilo ih je mnogo. Hvala našim prijteljima koji su nam bili domaćini, iz Minhena, svih dijelova Njemačke,
                            Austrije i Švicerske ...
                          </h3>
                        </div>
                    </div>

                            
     </div>

     <div className="collage">

        <ImageGallery items={images} />;
     </div>
        

    </div>
  );
}


export default Nastupi;
