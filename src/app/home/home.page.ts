import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  rutadetabla: any;
  luzEstado: boolean=false;
  luzCo: boolean=false;
  luzCBanio: boolean = false;
  luzCDormiotorio: boolean = false;
  luzCCocina: boolean = false;
  luzCGaraje: boolean = false;
  luzCPatioBajo: boolean = false;
  luzCSala: boolean = false;

  constructor(private database:Database) {}
  ngOnInit() {
    const route = ref(this.database,'casa'); /*direccion a donde ir dentro de la base de datos */
    object(route).subscribe(attributes => {
    const valores_db = attributes.snapshot.val();
    console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 

    this.luzCBanio = valores_db.banio;
    this.luzCDormiotorio = valores_db.dormitorio;
    this.luzCCocina = valores_db.cocina;
    this.luzCGaraje = valores_db.garaje;
    this.luzCPatioBajo = valores_db.patioBajo;
    this.luzCSala = valores_db.sala;
    }); 
  }
  async banio(){
    this.luzCo=!this.luzCo;
    const routeBanio = ref(this.database, '/casa/banio');
    set(routeBanio, this.luzCo);
    this.luzCBanio = this.luzCo;
    console.log('Estado del Baño|Luz en: ', this.luzCo)
  }
  async dormitorio(){
    this.luzCo=!this.luzCo;
    const routeDormitorio = ref(this.database, '/casa/dormitorio');
    set(routeDormitorio, this.luzCo);
    this.luzCDormiotorio = this.luzCo;
    console.log('Estado del Dormitorio|Luz en: ', this.luzCo)
  }
  async cocina(){
    this.luzCo=!this.luzCo;
    const routeCocina = ref(this.database, '/casa/cocina');
    set(routeCocina, this.luzCo);
    this.luzCCocina = this.luzCo;
    console.log('Estado de la Cocina|Luz en: ', this.luzCo)
  }
  async garaje(){
    this.luzCo=!this.luzCo;
    const routeGaraje = ref(this.database, '/casa/garaje');
    set(routeGaraje, this.luzCo);
    this.luzCGaraje = this.luzCo;
    console.log('Estado del Garaje|Luz en: ', this.luzCo)
  }
  async patioBajo(){
    this.luzCo=!this.luzCo;
    const routePatioBajo = ref(this.database, '/casa/patioBajo');
    set(routePatioBajo, this.luzCo);
    this.luzCPatioBajo = this.luzCo;
    console.log('Estado del Patio Bajo|Luz en: ', this.luzCo)
  }
  async sala(){
    this.luzCo=!this.luzCo;
    const routeSala = ref(this.database, '/casa/sala');
    set(routeSala, this.luzCo);
    this.luzCSala = this.luzCo;
    console.log('Estado de la Sala|Luz en: ', this.luzCo)
  }

}