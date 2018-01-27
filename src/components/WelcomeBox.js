import React, { Component } from 'react';


class WelcomeBox extends Component {
  render() {
    return (
      <div className="welcome-box text-center padding-md color-light">
        <h2 className="hero-title-typo margin-xxs uppercase-style">tu cv siempre actualizado</h2>
        <p className="hero-larger-text-typo padding-xxs">Gracias a <span className="uppercase-style">ker</span> puedes realizar tu currículum de forma más sencilla. Introduce tus datos en el siguiente formulario y observa cómo se actualiza en tiempo real. Cuando hayas terminado podrás imprimirlo o guardarlo en formato PDF. Recuerda que siempre podrás volver y actualizarlo cada vez que lo necesitas.
        </p>
        <p className="hero-smaller-text-typo"><span className="uppercase-style"> ker</span> te cuida</p>
      </div>
    );
  }
}

export default WelcomeBox;
