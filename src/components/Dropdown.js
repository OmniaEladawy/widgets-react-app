import React, {useState , useEffect, useRef} from "react";

function Dropdown(props) {
    const [open,setOpen]=useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)){
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener(
          "click",onBodyClick,
          { capture: true }
        );

        return()=>{
            document.body.removeEventListener(
                "click",onBodyClick,
                { capture: true }
            );
        }
      }, []);
      
    const renderedOptions = props.options.map((option,index)=>{

        if (props.selected.value === option.value){
            return null;
        }
        
        return <div className="item" key={index} onClick={()=>{props.onSelectedChange(option)}}>{option.label}</div>
    })

    return (
        <div className="ui container" style={{margin:'50px auto'}}>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">{props.label}</label>
                    <div onClick={()=>{setOpen(!open)}} className={`ui selection dropdown ${open ? 'visible active' : " " }`}>
                        <i className="dropdown icon"></i>
                        <div className="text">{props.selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : "" }`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Dropdown;