import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';
import { SearchPatientComponent } from '../search-patient/search-patient.component';

@Component({
  selector: 'app-manage-patient',
  templateUrl: './manage-patient.component.html',
  styleUrls: ['./manage-patient.component.css']
})
export class ManagePatientComponent implements OnInit {

  listPatients = [
    {
      "id": 1,
      "nombre": "Paciente_1",
      "tipoIdentificacion": "CC",
      "identificacion": "12345678",
      "numContacto": "23241322",
      "codPostal": "12345",
      "numSeguroSocial": "1111999",
      "doctores": [
        "Doctor_1",
        "Doctor_2",
        "Doctor_3",
        "Doctor_4",
        "Doctor_5",
        "Doctor_6",
      ]
    },
    {
      "id": 2,
      "nombre": "Paciente_2",
      "tipoIdentificacion": "CE",
      "identificacion": "3456754",
      "numContacto": "987656765",
      "codPostal": "234",
      "numSeguroSocial": "7676543",
      "doctores": [
        "Doctor_7",
        "Doctor_8",
        "Doctor_9",
        "Doctor_1",
        "Doctor_2",
        "Doctor_3",
      ]
    },
    {
      "id": 3,
      "nombre": "Paciente_3",
      "tipoIdentificacion": "TI",
      "identificacion": "56876564",
      "numContacto": "2343243456",
      "codPostal": "685",
      "numSeguroSocial": "9988766",
      "doctores": [
        "Doctor_4",
        "Doctor_5",
        "Doctor_6",
        "Doctor_7",
        "Doctor_8",
        "Doctor_9",
      ]
    },
    {
      "id": 4,
      "nombre": "Paciente_4",
      "tipoIdentificacion": "TI",
      "identificacion": "346543",
      "numContacto": "98765",
      "codPostal": "545",
      "numSeguroSocial": "456789",
      "doctores": [
        "Doctor_1",
        "Doctor_2",
        "Doctor_3",
        "Doctor_4",
        "Doctor_5",
        "Doctor_6",
      ]
    },
  ]

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  create() {
    const modalRef = this.modalService.open(CreateUserComponent);
    modalRef.componentInstance.title = 'Crear';
  }

  search(){
    const modalRef = this.modalService.open(SearchPatientComponent);
    modalRef.componentInstance.title = 'Buscar';
  }

  delete(){
    let indice;
    var pat = document.getElementsByName('selectPatient');
    let patSelect = null;
    for(var i=0; i < pat.length; i++){
      var uu = pat[i] as HTMLInputElement;
      if(uu.checked){
        indice = i;
        patSelect = uu.value;
        break;
      }
    }

    if(patSelect !== null){
      this.listPatients.splice(indice,1);
    }
  }
}
