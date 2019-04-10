import React, {useState, useEffect }from 'react';
import Data from './Data';
import axios from 'axios';

export default function Listado(){
    const [data, setData] = useState({hits:[]})
    const [url, setUrl] = useState('http://hn.algolia.com/api/v1/search_by_date?query=nodejs');    
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);    
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);          
            try {
                const result = await axios(url);        
               setData(result.data);               
              } catch (error) {
                setIsError(true);
              }
          setIsLoading(false);
        };    
          fetchData();
      }, [url]);  
    if(data.hits.length>0){
        return(    
                        <>
                        <div>                
                        {data.hits.map((obj, i)=>(
                              <Data  index = {i+1}
                                  url={url}
                                  id={obj.objectID}
                                  story_title={obj.story_title}
                                  title={obj.title}
                                  created_at={obj.created_at}
                                  author={obj.author}
                                  story_url={obj.story_url}
                             />
                        ))} 
                        </div>
                        </>
                    )  
         }else{
             return(
                 <>
                 <h4>cargando...</h4>
                 </>
             )
         }
    }
   
 