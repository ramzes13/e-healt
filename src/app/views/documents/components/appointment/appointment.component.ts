import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';

import { Appointment, AppointmentService, Document, Service, ServicesService } from '~/app/core';

@Component({
  selector: 'Appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  @Input() document: Document;
  @Input() last: boolean;
  @Input() attended: boolean = false;

  services$: Observable<Service[]>;

  ngOnInit(): void {

  }
}
