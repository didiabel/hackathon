import './Cards.css'
import {Context} from '../../Store/appContext'
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Cards = () => {

    const {id} = useParams();
    const { api } = useContext(Context);
    const apinuevo = api.filter(pelis => pelis.id == id)
  

    return ( 
        <>
        {apinuevo.map(api =>(
          <div className='d-flex justify-content-center p-5' key={api.id}>
          <div key={api.id} className="card text-white col-12 " style={{width: '350px'}}>
          <img src={`https://image.tmdb.org/t/p/w500${api.poster_path}`} className="card-img-top" alt="imagen"/>
          </div>
          <div className="p-5 align-items-center">
              <h5 className="card-title">{api.title}:</h5>
              <p className="card-text">{api.overview}</p>
              <Link to={'/'}>
                <button className="btn btn-danger">Volver</button>
              </Link>
              
          </div>
          </div>
        ))}
        </>
     );
}
 
export default Cards;