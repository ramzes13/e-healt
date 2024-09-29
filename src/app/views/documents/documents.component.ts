import { Component, inject } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import enEU from '@angular/common/locales/en-150';

import { DocumentService } from '~/app/core';

import { map, startWith, switchMap, tap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { formatDate } from '@angular/common';

registerLocaleData(enEU, 'en-eu');

@Component({
  selector: 'Documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  private _documents = inject(DocumentService);

  search = new FormControl('');

  documents$ = this._documents.getByQuery({ params: {} }).pipe(
    tap((tapLog) => console.log(tapLog)),
    map(({ items }) => items),
    switchMap((documents) =>
      this.search.valueChanges.pipe(
        startWith(this.search.value),
        tap((tapLog) => console.log(tapLog)),
        map((search) =>
          documents.filter((document) =>
            formatDate(document.readyAt, 'medium', 'en').toLowerCase().includes(search.toLowerCase().trim()),
          ),
        ),
      ),
    ),
  );

  constructor() {
    this.documents$.subscribe()

  }
  
}
