import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { State } from './state.service';

@Injectable({
  providedIn: 'root',
})

export class MainDataLoaderService {
  constructor(private state: State) {}

  public init() {
    return this.state.getData().pipe(tap((data) => this.state.setData(data)));
  }
}
