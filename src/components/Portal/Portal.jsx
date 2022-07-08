import React, {useEffect} from 'react';
import ReactDOM  from 'react-dom';
import PortalCSS from "./Portal.module.css";

function Portal({data, handleOnClickClose}) {

    const portalNode = document.createElement("section");
    
    
    useEffect(() => {
        document.body.appendChild(portalNode);
    
        return ()=> {
            portalNode.remove();
        };
    }, [portalNode]);


    return ReactDOM.createPortal(
            <div className={PortalCSS.portal}>  
                <img className={PortalCSS.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                 <span className={PortalCSS.name}>{data.Name.toUpperCase()}</span>  
                <span className={PortalCSS.species}>SPECIE: {data.Species}</span>
                <span className={PortalCSS.age}>AGE: {data.Age}</span>
                <span className={PortalCSS.planet}>PLANET: {data.Planet}</span> 
                <span className={PortalCSS.profession}>PROFESSION: {data.Profession}</span> 
                <span className={PortalCSS.status}>STATUS: {data.Status}</span>
                <span className={PortalCSS.firstAppearance}>FIRST APPEARANCE: {data.FirstAppearance}</span> 
                <span className={PortalCSS.relatives}>RELATIVES: {data.Relatives}</span>
                <span className={PortalCSS.voicedBy}>VOICED BY: {data.VoicedBy}</span>
                <button 
                        className={PortalCSS.closeButton}
                        onClick={()=>handleOnClickClose()}>
                        X</button>
            </div>,
            portalNode);

    // return(
    //     <>
    //     {
    //     ReactDOM.createPortal(
    //     <div className={PortalCss.container}>
    //             Esto es portal
    //     </div>,
    //     document.querySelector("#portal"))
    //     }
    // </>)
}

export default Portal;