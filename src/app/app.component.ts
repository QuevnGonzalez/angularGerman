import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: String = "Crud con Angular :)";

    msg : String = "";
    hideUpdate: boolean = true;

    empleados = [
      {name : 'Jhony', position : 'manager', email : 'morales@gmail.com'},
      {name : 'yessi', position : 'diseñador', email : 'morales@gmail.com'},
      {name : 'juan', position : 'desarrolador', email : 'morales@gmail.com'}
    ];

    model: any = {};
    model2: any = {};

    addEmpleado(): void{
       this.empleados.push(this.model);
       this.msg = "Campo agregado";
    }

    deleteEmpleado(i): void{
       var result = confirm("Seguro quieres eliminarlo?");
       if (result) {
         this.empleados.splice(i,1);
       }
       this.msg = "Campo eliminado";
    }

    myValue;
    editEmpleado(i): void{
      this.hideUpdate = false;
      this.model2.name = this.empleados[i].name;
      this.model2.position = this.empleados[i].position;
      this.model2.email = this.empleados[i].email;
      this.myValue = i;
      
    }

    updateEmpleado(): void{
      let i = this.myValue;
      for (let j = 0; j < this.empleados.length; j++) {
          if (i == j) {
            this.empleados[i] = this.model2;
            this.model2 = {};
          }
      }
      this.msg = "Campo actualizado";
    }

    closeAlert(){
      this.msg = "";
    }
}
