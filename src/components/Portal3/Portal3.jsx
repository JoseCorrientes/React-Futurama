import ReactDom from "react-dom";
import { useEffect } from "react";
import Portal3Css from './Portal3.module.css';

function Portal3() {

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
            className={Portal3Css.container}
            >
             <div className={Portal3Css.containerText}>
                <p className={Portal3Css.nameText}> JOSE ERNESTO GARCIA</p>   
                <p className={Portal3Css.mailText}> josernestogarcia609@gmail.com</p>
                <p className={Portal3Css.linkText}> https://www.linkedin.com/in/joseernestogarciadeveloper/</p>
                <p className={Portal3Css.gitText}> https://github.com/JoseCorrientes</p>
             </div>   
        </div>
        <div className={Portal3Css.globo2}>
        </div>
        </>, NewElement
    )

}


export default Portal3;
