import React, {useState , useEffect} from "react";
import Dropdown from "./Dropdown";
import axios from "axios";


function Convert({language , text}) {
    const [translateText,setTranslateText] = useState("");
    const [debouncedText,setdebouncedText] = useState(text);

    useEffect(() => {
        const timeoutId = setTimeout(()=>{
            setdebouncedText(text);
        },500)

        return()=>{
            clearTimeout(timeoutId);
        }
        
      }, [text]);

    useEffect(() => {
        const translations = async () => {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2' , {} , {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslateText(res.data.data.translations[0].translatedText);
        }
        translations();    
    }, [language,debouncedText]);

    return (
        <div className="ui container">
           <p>{translateText}</p>
        </div>   
  );
}

export default Convert;