import { Component } from '@angular/core';
import {Test} from './Models/test';
import {TestDataService} from './Services/test-data.service';
import {ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TestDataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  



}