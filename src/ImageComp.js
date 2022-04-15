import React,{useState , useEffect} from 'react';
import './ImageStyle.css';

const ImageComp = () => {

    const [data , setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setData(data));
    })

    return (
        <>
        <h1 className='header'>Fetch Image Data</h1>
        <div className='cards'>
            {
                data.map((data) => ( 
                <div key = { data.id } className="card" >
                    <p className='img-id'>Image_ID: { data.id }</p> 
                    <p><span className='img-title'>Image_Title:</span> { data.title }</p>
                    <p className='img-title'>Image</p>
                    <img className='image' src={data.url} alt="img" />
                    <p className='img-title'>Thumbnail</p>
                    <img className='image' src={data.thumbnailUrl} alt="img" />
                </div>
                ))
        }
        </div>
        </>

    )
}

export default ImageComp;