import ReactDom from "react-dom";
import { useEffect } from "react";
import Portal2Css from './Portal2.module.css';

function Portal2() {

    const NewElement = document.createElement("section");
    
    useEffect(() => {
        document.body.appendChild(NewElement);
        return () => {
            NewElement.remove()
        };
    }, [NewElement]);
    
    return ReactDom.createPortal(
        <>
        <div
            className={Portal2Css.container}
            >
             <div className={Portal2Css.containerText}>
                <p className={Portal2Css.nameText}> FUTURAMA SEARCHER APP: </p>   
                <p className={Portal2Css.autorText}> JOSE ERNESTO GARCIA</p>
                <p className={Portal2Css.nameText}> FUTURAMA API (https://futuramaapi.herokuapp.com/):</p>
                <p className={Portal2Css.autorText}> KATE DAMERON </p>
                <p className={Portal2Css.nameText}> FUTURAMA:  </p>
                <p className={Portal2Css.autorText}> @20th Century Fox Film Corp </p>
             </div>   
        </div>
        <div className={Portal2Css.globo2}>
        </div>
        </>, NewElement




        // <>
        // <div
        //     className={Portal2Css.container}
        //     >
        //         PORTAL 2
        // </div>
        // <div className={Portal2Css.globo2}>
        // </div>
        // </>, NewElement
    )

}


export default Portal2;
