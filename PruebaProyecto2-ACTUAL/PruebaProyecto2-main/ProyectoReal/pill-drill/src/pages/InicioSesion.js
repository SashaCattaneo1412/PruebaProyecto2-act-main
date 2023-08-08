import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import PhotoCarousel from '../components/PhotoCarousel.js';
 import style from '../styles/Registrarse.module.css'
 const InicioSesion = () => {
   return (
    <div>
      <h1 className={style.title}>BIENVENIDO A PILL-DRILL</h1>
       
     <div className={style.flexbox}>
        <form>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Mail" />
          </div>


            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder=" Contraseña" />
            </div>

        
           <div className={style.contenedor}>

          <div>
            <label className={style.cuenta}>
            ¿Olvidaste tu contraseña? 
            </label>
            <Link href="/InicioSesion"> Recuperala</Link>
          </div>

          <div>
            <label className={style.cuenta}>
            ¿No tenes cuenta?
            </label>
            <Link href="/Registrarse">  Crea cuenta nueva</Link>
          </div>
           
          <button className="w-100 btn btn-lg btn-primary" type="submit" href="/compartieminto">IR</button>

          </div>

        </form>
      </div>


    </div>
   )
 }
 
 export default InicioSesion