import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/busqueda.reducer';
import { SearchAgencias, SearchMisiones, SearchEstados, Save} from '../reducers/busqueda.actions';

@Component({
  selector: 'app-busqueda-container',
  templateUrl: './busqueda-container.component.html',
  styleUrls: ['./busqueda-container.component.css']
})
export class BusquedaContainerComponent implements OnInit {
  public resultado;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.resultado = [];
    this.store.select('busqueda').subscribe(value => (this.resultado = value.resultado));
  }

  onBusquedaAgencias = (busqueda: any) => {
    this.store.dispatch(new SearchAgencias(busqueda));
  }

  onBusquedaMisiones = (busqueda: any) => {
    this.store.dispatch(new SearchMisiones(busqueda));
  }

  onBusquedaEstados = (busqueda: any) => {
    this.store.dispatch(new SearchEstados(busqueda));
  }

  onSave = () => this.store.dispatch(new Save(this.resultado));
}
