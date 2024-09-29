import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, combineLatest, map, switchMap } from 'rxjs';

import { Appointment, AppointmentService, Service, ServicesService } from '~/app/core';

@Component({
  selector: 'Appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
  @Input() appointment: Appointment;
  @Input() last: boolean;
  @Input() attended: boolean = false;

  services$: Observable<Service[]>;

  private _services = inject(ServicesService);
  private _appointment = inject(AppointmentService);

  ngOnInit(): void {
    this.services$ = this._appointment
      .getById<{ services: Service[] }>({
        params: { item: { id: this.appointment.id } },
        beforeSuccess: ({ services }) => this._services.set({ params: { items: services } }),
      })
      .pipe(
        map(({ item }) => item),
        switchMap(({ servicesIds }) => combineLatest(servicesIds.map((id) => this._services.byId({ id })))),
      );
  }
}
