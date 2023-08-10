 import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';
 import style from '../styles/Registrarse.module.css'

 const Registrarse = () => {
   return (
     
        <form>
          <div class= {style.flexbox}>
          <h1 className={style.title}>CREA TU CUENTA</h1>

          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="Nombre Completo" />
          </div>


          <div className={style.contenedorflotante}>
            <input type="INPUT" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com" />
          </div>

           
            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" />
            </div>

            <div className={style.contenedorflotante}>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Repita la Contraseña" />
            </div>

            </div>

          <div>
            <label className={style.seguimiento}>
            Hay alguna persona que te hará un seguimiento en tu app?
            </label>
          </div>

          <div>
            <label>
              <input type="checkbox" value="yes" /> SI
            </label>
          </div>




          <div className={style.boton}>
          <button className="w-100 btn btn-lg btn-primary" type="submit">IR</button>
            <label className={style.cuenta}>
            ¿Ya tienes cuenta? 
            </label>
            <Link href="/InicioSesion"> Iniciar sesion </Link>
          </div>

          </form>
    

   )
 }
 
 export default Registrarse
 