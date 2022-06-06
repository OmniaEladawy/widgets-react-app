import React, {useState , useEffect} from "react";
import axios from "axios";

function Search() {
    const [term,setTerm] = useState("programming");
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const search = async ()=>{
                const res = await axios.get('https://en.wikipedia.org/w/api.php' , {
                    params:{
                        action:'query',
                        list:'search',
                        origin: '*',
                        format:'json',
                        srsearch: term
                    }
                });
                setResults(res.data.query.search);
            }

        if(term && !results.length ){
            search();
        }else{
            const timeoutid = setTimeout(()=>{
                if(term){
                    search();
                } 
            },1000)  
    
            return ()=>{
                clearTimeout(timeoutid);
            }
        }

    },[term])
    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" type="text" value={term}  onChange={(e) => setTerm(e.target.value)}/>
                    <div className="ui celled list">
                        {results.map((result,index)=>{
                        return(
                            <div className="item" key={index}>
                                <div className="content">
                                    <a href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" rel="noreferrer" className="header">{result.title}</a>
                                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                                </div>
                            </div>
                        ) 
                        })}
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Search;