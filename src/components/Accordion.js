import React, {useState} from "react";

function Accordion(props) {
    
    const [activeIndex , setActiveIndex] = useState(null);

    const onTitledClicked = (i) => {
        setActiveIndex(i);
    } 

    return (
        <div className="ui styled accordion" style={{margin:'50px auto'}}>
            {props.items.map((item,index) => {
                const active = index === activeIndex ? "active" : "";
                
                return(
                    <React.Fragment key={index}>
                    <div
                        onClick={() => onTitledClicked(index) }
                        className={`title ${active}`}
                    >
                        <i className="dropdown icon"></i>
                        {item.title}</div>
                    <p className={`content ${active}`}>{item.content}</p>
                    </React.Fragment>
                )        
            })} 
        </div>
  );
}

export default Accordion;