import MainCss from './Main.module.css';
import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Cards from '../Cards/Cards';
import Portal from '../Portal/Portal';
import Portal2 from '../Portal2/Partal2';
import Portal3 from '../Portal3/Portal3';

import {Howl, Howler} from "howler";
import Futurama from '../../media/FutThemeSong.mp3';
import ResetSound from '../../media/BenderWhyNot.mp3';
import SearchSound from '../../media/BenderYesSir.mp3';
import FooterSound from '../../media/BenderGotIt.mp3';

import ActiveSound from '../../images/activesound.png';
import InactiveSound from '../../images/nosound.png';
import IncreaseSound from '../../images/loudsound.png';
import DecreaseSound from '../../images/lowersound.png';
import Logo from '../../images/futuramalogoTransparente.png';
import Banner from '../../images/futuramaTitulo.png';
import Searcher from '../../images/Searcher.png';

function Main() {
   const [characters, setCharacters] = useState([]);          //trae todos los caracteres de la busqueda general
   const [backupCharacters, setbackupCharacters] = useState([]);      //resguardo para no tener que acceder a la api cada rato    

   const [showCards, setShowCards]=useState([]);              //arreglo de los 8 caracteres a mostrar en pantalla 
   const [visible, setVisible]=useState(0);                   //posicion inicial del arreglo de 8 visibles 
  
   const [showOne, setShowOne]=useState(false);               //muestra o no la tarjeta de detalles
   const [bigCard, setBigCard]=useState(""); 
   
   const [showFooterContact, setShowFooterContact]=useState(false);           //muestra o no los detalles de contact me  
   const [showFooterCredits, setShowFooterCredits]=useState(false);           //muestra o no los detalles de credits   

   const [newText, setNewText]=useState("");                  //caracteres a buscar en el input
   
   const [sound, setSound] = useState(false);               //musica activa o no   
   const [volume, setVolume] =useState(.5);               //volumne de la musica ambiente

   let backgroundSound;  

   useEffect(() => {
        let personajes =Axios.get("https://futuramaapi.herokuapp.com/api/v2/characters")
        .then(respuesta => {
             let resultado = respuesta.data.map((x) => ({
                  Name : x.Name,
                  Species : x.Species,
                  Age : x.Age,
                  Planet : x.Planet,
                  Profession : x.Profession,
                  Status : x.Status,
                  FirstAppearance : x.FirstAppearance,
                  Relatives : x.Relatives,
                  VoicedBy : x.VoicedBy,
                  PicUrl : x.PicUrl,
               }))
               setCharacters(resultado);   
               setbackupCharacters(resultado);

               let showArray=[];
               for (let n=visible; n<=visible+7; n++) {
                    showArray.push(respuesta.data[n]);
               }
               setShowCards(showArray);
          })
          .catch(e => {
               console.log(e);
          })
     },[]);

   useEffect(()=>{
          let showArray=[];
          characters.map(x=> {
               showArray.push(x);
          })
          setVisible(0);
          setShowCards(showArray);
   },[characters]);

   useEffect (()=> {
               let showArray=[];
               for (let n=visible; n<=visible+7; n++) {
                    showArray.push(characters[n]);
               }
               setShowCards(showArray);
   }, [visible]);
   

   useEffect(()=>{
          if(!sound) {
               Howler.stop();
          }
          else {
               backgroundSound = new Howl({
                    src: Futurama,
                    loop: true,
               }) 
               backgroundSound.play();
          }
     }, [sound]);


  useEffect(()=> {
     Howler.volume(volume);
  },[volume])
             

  function handleClickIzquierda (e) {
     if(visible>0) setVisible(oldvisible=>visible-1);
  }

  function handleClickDerecha (e) {
     if(visible+7<characters.length-1) setVisible(oldvisible=>visible+1);
  }
       
  function handleOnClickDetail(data){
     setShowOne(prevState=>true);
     setBigCard(prevState=>data);
  }

  function handleOnClickClose(){
     setShowOne(prevState=>false);
  }   

  const onChangeInput =(e)=>{
     e.preventDefault();
     setNewText(oldvalue=>e.target.value);
  }






  const onClickReset=()=>{
     setCharacters(oldValue=>backupCharacters);
     let resetSound = new Howl({
      src: ResetSound,
 }) 
 resetSound.play();
  }








  const handleSound =()=>{
     setSound(oldValue=>!sound);
  }

  const handleSoundUp =()=>{
     let tempo = Number((volume+.1).toFixed(1));
     if (volume<1) setVolume(oldValue=>tempo);
  }
  const handleSoundDown =()=>{
     let tempo = Number((volume-.1).toFixed(1));
     if (volume>0) setVolume(oldValue=>tempo);
  }

  const handleOnClickCredits=()=>{
     setShowFooterCredits(oldValue=>!showFooterCredits);
     let footerSound = new Howl({
      src: FooterSound,
      volume: 1,
  }) 
  footerSound.play();
  }

  const handleOnClickContact=()=>{
     setShowFooterContact(oldValue=>!showFooterContact);
     let footerSound = new Howl({
      src: FooterSound,
      volume: 1,
  }) 
  footerSound.play();
  }




  async function  handleSubmitSearchCharacter(e) {
     e.preventDefault();
     let searchFounded= await Axios.get(`https://futuramaapi.herokuapp.com/api/v2/characters?search=${newText}`)
          .then(respuesta2=> {

               let resultado2 = respuesta2.data.map((x) => ({
                    Name : x.Name,
                    Species : x.Species,
                    Age : x.Age,
                    Planet : x.Planet,
                    Profession : x.Profession,
                    Status : x.Status,
                    FirstAppearance : x.FirstAppearance,
                    Relatives : x.Relatives,
                    VoicedBy : x.VoicedBy,
                    PicUrl : x.PicUrl,
                 }))
                 setCharacters(anterior=>resultado2);
               })
               setNewText("");
               let searchSound = new Howl({
                   src: SearchSound,
                   volume: 0.6,
               }) 
               searchSound.play();
               












  }
  
  return (
  <div className={MainCss.wrapper}>
    {showOne && <div className={MainCss.veil}></div>}
    
    <div className={MainCss.header}  >
         <div className={MainCss.tituloHeader}>
          <img
               className={MainCss.tituloBanner}
               src={Banner}
          />
          <img
               className={MainCss.searcherBanner}
               src={Searcher}
          />

          </div>
         <button 
               className={MainCss.soundOnButton}
               onClick={()=>handleSound()}>
               {sound && <img className = {MainCss.activeSound} src={ActiveSound} alt="Sound On" />}
               {!sound && <img className = {MainCss.activeSound} src={InactiveSound} alt="Sound Off" />}
         </button>
         <button
               className={MainCss.soundUpButton}
               onClick={()=>handleSoundUp()}>
               <img className = {MainCss.upSound} src={IncreaseSound} alt="Sound Up" />
         </button>
         <button 
               className={MainCss.soundDownButton}
               onClick={()=>handleSoundDown()}>
               <img className = {MainCss.downSound} src={DecreaseSound} alt="Sound Down" />
         </button>
    </div>
    <div className={MainCss.opciones}>
          <div className={MainCss.logoContainer}>
               <img className={MainCss.logoImage}
                    src={Logo}
               />
          </div>
          <form 
             className={MainCss.inputForm}
             onSubmit={(e)=>handleSubmitSearchCharacter(e)}  
             >  
             <input 
               className={MainCss.inputSearch}
               placeholder="?"
               value={newText}
               onChange={(e)=>onChangeInput(e)}
               />
             <button 
               className={MainCss.inputButton}>
               SEARCH CHARACTER
            </button>
          </form>  
          <button 
               className={MainCss.reset}
               onClick={()=>onClickReset()}>
               RESET
            </button>
    </div>

    <div className={MainCss.info}>
         <Cards characters={showCards}
                handleClickDetail={handleOnClickDetail}
                handleClickIzquierda={handleClickIzquierda}
                handleClickDerecha={handleClickDerecha} 
                />
    </div>
    <div className={MainCss.footer}>
       <div className={MainCss.footerContainer}>
         <button 
               className={MainCss.credits}
               onClick={()=>handleOnClickCredits()}
         >
          Credits
         </button>
         <button
               className={MainCss.contactMe}
               onClick={()=>handleOnClickContact()}
         >
          Contact Me
         </button>
       </div>    
    </div>
     
     {showOne && <Portal data={bigCard}
                         handleOnClickClose={handleOnClickClose}/>}

     {showFooterCredits && <Portal2/>}                    
     {showFooterContact && <Portal3/>} 
  </div>
  );
}

export default Main;










































// import MainCss from './Main.module.css';
// import React, {useState, useEffect} from 'react';
// import Axios from "axios";
// import Cards from '../Cards/Cards';



// function Main() {
//    const [characters, setCharacters] = useState([]);
//    const [showCards, setShowCards]=useState([]);
//    const [visible, setVisible]=useState(0);
//    const [bigCard, setBigCard]=useState("hola");  

//    useEffect(() => {
//         let personajes =Axios.get("https://futuramaapi.herokuapp.com/api/v2/characters")
//         .then(respuesta => {
//              let resultado = respuesta.data.map((x) => ({
//                   Name : x.Name,
//                   Species : x.Species,
//                   Age : x.Age,
//                   Planet : x.Planet,
//                   Profession : x.Profession,
//                   Status : x.Status,
//                   FirstAppearance : x.FirstAppearance,
//                   Relatives : x.Relatives,
//                   VoicedBy : x.VoicedBy,
//                   PicUrl : x.PicUrl,
//                }))
//                setCharacters(resultado);   

//                let showArray=[];

//                for (let n=visible; n<=visible+7; n++) {
//                     showArray.push(respuesta.data[n]);
//                }
//                setShowCards(showArray);

//           })
//           .catch(e => {
//                console.log(e);
//           })
//      },[]);

//      useEffect (()=> {
//                let showArray=[];
//                for (let n=visible; n<=visible+7; n++) {
//                     showArray.push(characters[n]);
//                }
//                setShowCards(showArray);
//      }, [visible]);
     

//   function handleClickIzquierda (e) {
//      if(visible>0) setVisible(oldvisible=>visible-1);
//      }
     

//   function handleClickDerecha (e) {
//      if(visible+7<characters.length-1) setVisible(oldvisible=>visible+1);
//      }
  
//   function handleClickDetail (data) {
//      // setBigCard(oldBigCard=>e.target);
//      // console.log(data)
//      // Portal(<p>data.Species</p>);
     
//   }        

      

     
//   return (
//   <div className={MainCss.wrapper}>
//     <div className={MainCss.header}  >
//          header
//     </div>
//     <div className={MainCss.opciones}>
//          Opciones
//     </div>
//     <div className={MainCss.info}>
//          <Cards characters={showCards}
//                 handleClickDetail={handleClickDetail}
//                 handleClickIzquierda={handleClickIzquierda}
//                 handleClickDerecha={handleClickDerecha}/> 
//     </div>
//     <div className={MainCss.footer}>
//          Footer
//     </div>
    
//   </div>
//   );
// }

// export default Main;
