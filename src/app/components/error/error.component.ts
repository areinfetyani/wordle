import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
  @Input() errorMessage: string = 'Error requesting data';
  @Input() errorDetails: string = 'There was an issue when contacting the server, please check your internet connection';
}
