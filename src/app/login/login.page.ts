import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private alertaCtrl: AlertController
  ) { }

  ngOnInit() {
  }


  onClickIngreso(usuario:string, contraseña:string){
    this.mostrarAlerta(usuario,contraseña)
  }


  enSubmit(enform: NgForm) {
    if (!enform.valid)
    { return;}
    const user = enform.value.iUsuario;
    const pass = enform.value.ipass;
   
    this.onClickIngreso(user,pass);  
  }
  
 /**
* ANCHOR Alerta
* *Muestra una alerta en la ventana
* @param _mensaje El mensaje que se quiere poner en la pantalla
* @param _titulo  El titulo que se quiere poner en la alerta
*/
private mostrarAlerta(_mensaje: string, _titulo) {
  this.alertaCtrl
    .create({
      header: _titulo,
      message: _mensaje,
      buttons: ['Aceptar']
    })
    .then(alertEl => alertEl.present());
}

}
