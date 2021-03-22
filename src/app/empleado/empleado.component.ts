import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: '<p>Hola mundo</p>',
  styleUrls: ['./empleado.component.css']
  //styles: ['p{background-color: red;'] 
})
export class EmpleadoComponent implements OnInit {

  nombre= 'Sara';

  apellido= 'Díez';

  private edad= 18;

  empresa='Google';

  HabilitarEntrada=false;

  registrado=true;

  textoDeRegistro='No hay nadie registrado';

   /**
   * cambiaEmpresa
   
    public cambiaEmpresa(event:Event) {
      this.empresa=(<HTMLInputElement>event.target).value;
    }
  */
  /**
   * getRegistro
   */
  public getRegistro() {
    this.registrado=false;
  }

  public setUsuarioRegistrado(event:Event) {
    //alert("El usuario se acaba de registrar")
    //this.textoDeRegistro='El usuario se acaba de registrar';
    //alert(event.target);

    if ((<HTMLInputElement>event.target).value == 'Si') {
      this.textoDeRegistro='El usuario se acaba de registrar';
    }else{
      this.textoDeRegistro='No hay nadie registrado';
    }
  }
  public getEdad(){

    return this.edad;

  }
  
  public ObtenEmpresa(value:String){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
