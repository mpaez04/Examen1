import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Peliculas.css';

export default function Peliculas (props) {
        return (
            <div className="Cartelera">
                <h4 style={{marginBottom:'5vmin' }}>Cartelera</h4>
                  {
                    props.cartelera.map((p,i)=>{
                      return (
                         <div className="Peliculas" key={i}>
                            <div  className="Poster">
                              <img style={{width:'70%'}}src={p.url} alt={p.nombre} />
                            </div>
                            <div className="Descripcion">
                                <p>{p.nombre}</p>
                                <p>{p.idioma}</p>
                                <p>{p.clasificacion}</p>
                                <p>{p.duracion}</p>
                                <div className="Horarios">
                                  {p.horarios.map((h,ind)=><Button variant="dark" key={ind} onClick={()=>props.agregar(p,h)}style={{margin:'3vmin'}}>{h}</Button>)}
                                </div>
                            </div>
                          </div>
                          )
                    })
                  }
            </div>
        )
        

}
