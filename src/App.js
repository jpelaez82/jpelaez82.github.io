import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import bg from './background.png';
import logoSmreina from './logo_smreina.png';
import './App.css';
import axios from "axios";
const config = require('./config.json');


class App extends Component {

  state = {
    newvisit : {      
      "Nombre": "",
      "Email": "",
      "Celular": "",
      "Plataforma": ""
    },
    visits: []
  }

  handleAddVisit = async(event) => {
    event.preventDefault();

    try {
      const params = {
        "Nombre": this.state.newvisit.Nombre,
        "Email": this.state.newvisit.Email,
        "Celular": this.state.newvisit.Celular,
        "Plataforma": this.state.newvisit.Plataforma
      };
      await axios.post(`${config.api.invokeUrl}`, params);
      this.setState({ visits: [...this.state.visits, this.state.newvisit] });
      this.setState({ newvisit: {"Nombre": "", "Email": "", "Celular": "", "Plataforma": ""} });

    } catch (err) {
      console.log(`An error has ocurred: ${err}`);
    }
  }

  onAddNameChange = event => this.setState({ newvisit: { ...this.state.newvisit, "Nombre": event.target.value } });
  onAddEmailChange = event => this.setState({ newvisit: { ...this.state.newvisit, "Email": event.target.value } });
  onAddPhoneChange = event => this.setState({ newvisit: { ...this.state.newvisit, "Celular": event.target.value } });
  onAddPlatformChange = event => this.setState({ newvisit: { ...this.state.newvisit, "Plataforma": event.target.value } });


  render() {
  return (
    <div className="container-contact100">
		  <div className="wrap-contact100">

    <form onSubmit = {event => this.handleAddVisit(event)} className="contact100-form validate-form">
				<span className="contact100-form-title">
					¿ Estarías interesado en recibir la Visita Misionera Virtual desde la comodidad de tu hogar? <br />Llena el siguiente formulario para agendar nuestra visita.
				</span>

				<label className="label-input100">Escribe tu nombre completo</label>
				<div className="wrap-input100 validate-input" data-validate="Tu nombre aquí">
          <input 
              id="first-name" 
              className="input100" 
              type="text" name="Nombre" 
              placeholder="Tu nombre aquí"
              value={this.state.newvisit.Nombre}
              onChange={this.onAddNameChange}
              required 
          />
					<span className="focus-input100"></span>
				</div>
				
				<label className="label-input100">Escribe tu correo electrónico</label>
				<div className="wrap-input100 validate-input" data-validate = "Direccion de correo debe ser valida">
          <input 
              id="email" 
              className="input100" 
              type="email" 
              name="Email" 
              placeholder="Tu correo electrónico aquí"
              value={this.state.newvisit.Email}
              onChange={this.onAddEmailChange}
              required 
          />
					<span className="focus-input100"></span>
				</div>

				<label className="label-input100">Escribe tu numero de contacto</label>
				<div className="wrap-input100">
          <input 
              id="phone" 
              className="input100" 
              type="phone" 
              name="Celular" 
              placeholder="Tu numero de celular aquí"
              value={this.state.newvisit.Celular}
              onChange={this.onAddPhoneChange}
              required 
          />
					<span className="focus-input100"></span>
				</div>

        <label className="label-input100">Cuál plataforma para videollamadas sueles usar?</label>
        <div className="wrap-input100 validate-input" data-validate = "Debes seleccionar una de las opciones">
          <input type="radio" id="zoom" name="Plataforma" value="Zoom" onChange={this.onAddPlatformChange} />
          <label>&nbsp;&nbsp;Zoom</label><br />
          <input type="radio" id="facebook" name="Plataforma" value="Facebook" onChange={this.onAddPlatformChange} />
          <label>&nbsp;&nbsp;Facebook</label><br />
          <input type="radio" id="meet" name="Plataforma" value="Google Meet" onChange={this.onAddPlatformChange} />
          <label>&nbsp;&nbsp;Google Meet</label><br />
          <input type="radio" id="whatsapp" name="Plataforma" value="Whatsapp" onChange={this.onAddPlatformChange} />
          <label>&nbsp;&nbsp;Whatsapp</label><br />
          <input type="radio" id="other" name="Plataforma" value="Otra" onChange={this.onAddPlatformChange} />
          <label>&nbsp;&nbsp;Otra</label><br />

        </div>			

				<div className="container-contact100-form-btn">
          <Popup
            trigger={<button type="submit" className="contact100-form-btn">Enviar datos </button>}
            closeOnDocumentClick
            modal
            position="bottom-center"
          >
            <span className="confirm-data">
              Te agradecemos por llenar el formulario. 
              En proximos dias nos estaremos comunicando para agendar la Visita Misionera. <strong>GRACIAS!</strong>
            </span>
          </Popup>                   
				</div>
        
			</form>            

    <div className="contact100-more flex-col-c-m" style={{ backgroundImage:`url(${bg})` }}>
    <img src={ logoSmreina } alt="Logo Santa Maria Reina" /><br />
    <div className="flex-w size1 p-b-47">
      <div className="txt1 p-r-25">
        <span className="lnr lnr-book"></span>
      </div>

      <div className="flex-col size2">
        <span className="txt1 p-b-20">
          <i>"He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz entraré y cenaré con él."
          </i><br />Ap 3, 20 
        </span>
      </div>
    </div>
    <br />

    <div className="dis-flex size1 p-b-47">
      <div className="txt1 p-r-25">
        <span className="lnr lnr-users"></span>
      </div>
      <div className="flex-col size2">
        <span className="txt1 p-b-20">
          Te conectarás con 2 personas del Grupo Misionero
        </span>        
      </div>
    </div>

    <div className="dis-flex size1 p-b-47">
      <div className="txt1 p-r-25">
        <span className="lnr lnr-laptop-phone"></span>
      </div>

      <div className="flex-col size2">
        <span className="txt1 p-b-20">
          En Modo Videollamada sin salir de tu hogar
        </span>        
      </div>
    </div>

    <div className="dis-flex size1 p-b-47">
      <div className="txt1 p-r-25">
        <span className="lnr lnr-calendar-full"></span>
      </div>

      <div className="flex-col size2">
        <span className="txt1 p-b-20">
          Visita agendada previamente
        </span>        
      </div>
    </div>

    <div className="dis-flex size1 p-b-47">
      <div className="txt1 p-r-25">
        <span className="lnr lnr-clock"></span>
      </div>

      <div className="flex-col size2">
        <span className="txt1 p-b-20">
          Tiempo estimado: 20 a 30 minutos
        </span><br />        
      </div>
    </div>

    </div>
    </div>
  </div>
  );
}

}


export default App;
