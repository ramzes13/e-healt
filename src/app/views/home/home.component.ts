import { Component, inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import enEU from '@angular/common/locales/en-150';

import { AppointmentService } from '~/app/core';
import { map, startWith, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

registerLocaleData(enEU, 'en-eu');

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _appointments = inject(AppointmentService);

  search = new FormControl('');

  appointmentsUpcoming$ = this._appointments.getByQuery({ params: {} }).pipe(
    map(({ items }) => items),
    switchMap((appointments) =>
      this.search.valueChanges.pipe(
        startWith(this.search.value),
        map((search) =>
          appointments.filter((appointment) =>
            formatDate(appointment.start, 'medium', 'en').toLowerCase().includes(search.toLowerCase().trim()),
          ),
        ),
      ),
    ),
  );

  appointmentsPast$ = this._appointments.getByQuery({ params: {} }).pipe(
    map(({ items }) => [...items, ...items]),
    switchMap((appointments) =>
      this.search.valueChanges.pipe(
        startWith(this.search.value),
        map((search) =>
          appointments.filter((appointment) =>
            formatDate(appointment.start, 'medium', 'en').toLowerCase().includes(search.toLowerCase().trim()),
          ),
        ),
      ),
    ),
  );

  add() {
    console.log('Add');
  }
}
