import './Cards.css'
import {Context} from '../../Store/appContext'
import React, { useContext, useEffect } from 'react';

const Cards = () => {

    const { api } = useContext(Context);

    return ( 
        <>
            <div className="card" style={{width: "18rem"}}>
              <img src='...' className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="btn btn-danger">Leer mas</a>
              </div>
            </div>
        </>
     );
}
 
export default Cards;