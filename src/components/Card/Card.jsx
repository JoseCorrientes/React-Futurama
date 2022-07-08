import CardCss from './Card.module.css';

function Card(props) {
    try {
        const {data, index,handleClickDetail}= props;
        
        if(index==0)    
        return(
            <div className={CardCss.card1} onClick={()=>handleClickDetail(data)}>
                        <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                        <span className={CardCss.name}>{data.Name.toUpperCase()}</span>  
                        <span className={CardCss.status}>STATUS: {data.Status}</span>
                        <span className={CardCss.species}>SPECIE: {data.Species}</span>
                        <span className={CardCss.age}>AGE: {data.Age}</span>
                        <span className={CardCss.planet}>PLANET: {data.Planet}</span>
                </div>); 
        if(index==1)       
        return(
            <div className={CardCss.card2} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div>) 
        if(index==2)       
        return(
            <div className={CardCss.card3} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div>)
        if(index==3)       
        return(
            <div className={CardCss.card4} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div>) 
        if(index==4)       
        return(
            <div className={CardCss.card5} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div> )      
        if(index==5)       
        return(
            <div className={CardCss.card6} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div> )                
        if(index==6)       
        return(
            <div className={CardCss.card7} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div>)                
        if(index==7)       
        return(
            <div className={CardCss.card8} onClick={()=>handleClickDetail(data)}>
                    <img className={CardCss.characterImage} src={data.PicUrl} alt="Imagen del Personaje" />
                    <p className={CardCss.name}>{data.Name.toUpperCase()}</p>  
                    <span className={CardCss.status}>STATUS: {data.Status}</span>
                    <p className={CardCss.species}>SPECIE: {data.Species}</p>
                    <p className={CardCss.age}>AGE: {data.Age}</p>
                    <p className={CardCss.planet}>PLANET: {data.Planet}</p>
            </div>)                
        }catch(e) {return e    }
}

export default Card;