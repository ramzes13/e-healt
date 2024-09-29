import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Routine, RoutinesService, Service } from '~/app/core';

@Component({
  selector: 'Routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.scss'],
})
export class RoutineComponent implements OnInit {
  @Input() service: Service;

  routine$: Observable<Routine>;

  private _routines = inject(RoutinesService);

  ngOnInit(): void {
    this.routine$ = this._routines
      .getById({ params: { item: { id: this.service.routineId } } })
      .pipe(map(({ item }) => item));
  }
}
