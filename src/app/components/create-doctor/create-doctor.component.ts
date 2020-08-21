import { Component, OnInit } from '@angular/core';
import { NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  listPatients = [
    "Patient_1",
    "Patient_2",
    "Patient_3",
    "Patient_4",
    "Patient_5",
    "Patient_6",
    "Patient_7",
    "Patient_8",
    "Patient_9",
  ]

  listHospitals = [{
      "id":1,
      "nombre": "Hospital_1"
    },
    {
      "id":2,
      "nombre": "Hospital_2"
    },
    {
      "id":3,
      "nombre": "Hospital_3"
    },
    {
      "id":4,
      "nombre": "Hospital_4"
    },
    {
      "id":5,
      "nombre": "Hospital_5"
    },
    {
      "id":6,
      "nombre": "Hospital_6"
    }
  ]

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
