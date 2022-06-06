import React, {useState} from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    {
      label: 'Afrikaans',
      value: 'af',
    },
    {
        label: 'English',
        value: 'en',
      },
    {
        label: 'Italian',
        value: 'it',
    },
    {
      label: 'Arabic',
      value: 'ar',
    },
    {
      label: 'Hindi',
      value: 'hi',
    },
]


function Translate() {
const [languages,setLanguages] = useState(options[0]);    
const [text,setText] = useState("");

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter your text</label>
                    <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
                </div>
            </div>
            <Dropdown label="Select a language" options={options} selected={languages} onSelectedChange={setLanguages}/>
            <h3 className="ui header">Output</h3>
            <Convert language={languages} text={text}/>
        </div>   
  );
}

export default Translate;