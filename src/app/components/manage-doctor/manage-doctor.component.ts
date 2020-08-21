import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateDoctorComponent } from '../create-doctor/create-doctor.component';
import { SearchDoctorComponent } from '../search-doctor/search-doctor.component';


@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.css']
})
export class ManageDoctorComponent implements OnInit {

  listDoctors = [
    {
      "id": 1,
      "nombre": "Doctor_1",
      "tipoIdentificacion": "CC",
      "identificacion": "123456678",
      "especialidad": "optometria",
      "pacientes": [
        "Paciente_1",
        "Paciente_2",
        "Paciente_3",
        "Paciente_4",
        "Paciente_5",
        "Paciente_6",
      ],
      "numCredencial": "111222333",
      "hospital": "Hospital_1"
    },
    {
      "id": 2,
      "nombre": "Doctor_2",
      "tipoIdentificacion": "CE",
      "identificacion": "8877665544",
      "especialidad": "pediatria",
      "pacientes": [
        "Paciente_7",
        "Paciente_8",
        "Paciente_9",
        "Paciente_1",
        "Paciente_2",
        "Paciente_3",
      ],
      "numCredencial": "7686885",
      "hospital": "Hospital_2"
    },
    {
      "id": 3,
      "nombre": "Doctor_3",
      "tipoIdentificacion": "CC",
      "identificacion": "55443322",
      "especialidad": "Ortopedia",
      "pacientes": [
        "Paciente_4",
        "Paciente_5",
        "Paciente_6",
        "Paciente_7",
        "Paciente_8",
        "Paciente_9",
      ],
      "numCredencial": "8887766655",
      "hospital": "Hospital_1"
    },
  ]
  
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  create() {
    const modalRef = this.modalService.open(CreateDoctorComponent);
    modalRef.componentInstance.title = 'Crear';
  }

  search(){
    const modalRef = this.modalService.open(SearchDoctorComponent);
    modalRef.componentInstance.title = 'Buscar';
  }

  delete(){
    let indice;
    var doc = document.getElementsByName('selectDoctor');
    let docSelect = null;
    for(var i=0; i < doc.length; i++){
      var uu = doc[i] as HTMLInputElement;
      if(uu.checked){
        indice = i;
        docSelect = uu.value;
        break;
      }
    }

    if(docSelect !== null){
      this.listDoctors.splice(indice,1);
    }
  }
}
