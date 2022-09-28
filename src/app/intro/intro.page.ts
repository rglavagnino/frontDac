import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { BackcontrolService } from '../backcontrol.service';
import { cuerpoRespuesta } from '../interface/salida';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor( 
    public servicioControl: BackcontrolService
    ,private alertaCtrl: AlertController
    ,private modalCtrl: ModalController
    , private route: Router
    ) { }

  estaHabilitado = false
  hastaCuandoHabilitado = '¡Pronto!'
  versionDelSistema = ''

  private obtenerVersion(){
    let ver
    this.servicioControl.obtenerVersion().subscribe(
      version=>{
        ver = version.datos
        try{
          ver = ver[0]
          ver = ver.version
          if (ver.toUpperCase() === 'NO'){
            this.estaHabilitado=false
          }else {
            this.estaHabilitado = true
            this.versionDelSistema = ver
          }
        }catch(e){
          if (typeof(e) === 'string'){
            this.mostrarAlerta(e.toUpperCase(), 'ERROR')
          } else if (e instanceof Error)
          {
            this.mostrarAlerta(e.message, 'ERROR')
          }
        }

      }
    )
  }

  ngOnInit() {
     this.obtenerVersion()
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


private async mostrarAuth(){
  const modal = await this.modalCtrl.create({
    component: LoginPage
    
  });
  modal.onDidDismiss()
    .then(data => {
      const empleadoEscogido1 = data.data;
      let navParm: NavigationExtras =
      {
        state: {
        
        }
      };
      this.route.navigate(['/principal/principal-tabs/incidente/cambioEstado'], navParm)

    })
  await modal.present();
}


}
