import React,{useState,useEffect} from 'react';
import './ApiStyle.css';

const ApiComp = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.error("error : ",err));
    },[])
    return (
        <>
        <h1 className='header'>Fetch Post Data</h1>
        <div className='cards'>
        {
                data.map((data) => ( 
                <div key = { data.id } className="card" >
                    <p className='post-id'>Post_ID: { data.id }</p> 
                    <p><span className='post-title'>Post_Title:</span> { data.title }</p>
                    <p><span className='post-body'>Post_Body:</span> { data.body }</p> 
                </div>
                ))
        }
        </div>
        </>
    )
}

export default ApiComp;