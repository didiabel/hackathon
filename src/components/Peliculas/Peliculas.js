import './Peliculas.css'
import { useContext } from 'react'
import {Context} from '../../Store/appContext.js'
import { Link } from 'react-router-dom'


const Peliculas = () => {
    const { api, agregarAFavoritos } = useContext(Context)

    return ( 
        <div className='row justify-content-evenly '>
            {api.map(api => (
                <div className="card col-3 mt-4" key={api.id}>
                <Link to={'/peliculas/' + api.id} key={api.id}  style={{width: "18rem"}}>
                <img src={`https://image.tmdb.org/t/p/w500${api.poster_path}`} className="card-img-top"/>
              </Link>
                <div className="card-body">
                  <h5 className="card-title">{api.title}</h5>
                </div>
              <button onClick={(e)=> agregarAFavoritos(api.id)} href="#" className="btn btn-danger"> Añadir a Favoritos</button> 
              </div>
            ))
            }
        </div>
     );
}
 
export default Peliculas;