import React from "react";
import Card from '../Card/Card.jsx';
import CardsCss from './Cards.module.css';
import FlechaIzquierda from '../../images/NaveFlechaIzquierda.png';
import FlechaDerecha from '../../images/NaveFlechaDerecha.png';


function Cards(props) {
     
     try{   
        let {characters, handleClickIzquierda, handleClickDerecha, handleClickDetail} = props;

        return(
                <div className={CardsCss.container}>
                        <button
                            className={CardsCss.buttonContainerIzquierda}
                            onClick={(e)=>handleClickIzquierda(e)}
                        >
                                <img 
                                        
                                        src={FlechaIzquierda}
                                />
                        </button> 
                                {characters.map((x, index) => {
                                        return <Card index={index}
                                                key={x["Name"]}
                                                data={x}
                                                handleClickDetail={handleClickDetail}
                                                //onClick={(e)=>handleClickDetail(x.Species)}
                                                />
                                        
                                })}

                        <button
                            className={CardsCss.buttonContainerDerecha}
                            onClick={(e)=>handleClickDerecha(e)}
                        >
                                <img 
                                        
                                        src={FlechaDerecha}
                                />
                        </button> 
                </div>
        )

        }catch (e) { 
                console.log(e);
        }          

}

export default Cards;