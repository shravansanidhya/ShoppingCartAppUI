import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('');
  password = new FormControl('');

  constructor(private service:ServiceService) { }

  ngOnInit() {
  }

}
