import { Component, Input } from '@angular/core';

import { Service } from '~/app/core';

@Component({
  selector: 'Services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  @Input() services: Service[];
}
