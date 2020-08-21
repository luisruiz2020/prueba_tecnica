import { Component, OnInit } from '@angular/core';
import { NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  listDoctors = [
    "Doctor_1",
    "Doctor_2",
    "Doctor_3",
    "Doctor_4",
    "Doctor_5",
    "Doctor_6",
    "Doctor_7",
    "Doctor_8",
    "Doctor_9",
  ]

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
