import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent implements OnInit {
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

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
