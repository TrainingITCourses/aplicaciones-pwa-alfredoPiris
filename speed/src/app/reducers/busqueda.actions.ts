import { Action } from '@ngrx/store';

export enum BusquedaActionTypes {
  SearchAgencias = '[Busqueda] SearchAgencias',
  SearchMisiones = '[Busqueda] SearchMisiones',
  SearchEstados  = '[Busqueda] SearchEstados',
  Save  = '[Busqueda] Save',
  Saved  = '[Busqueda] Saved',
  NotSaved  = '[Busqueda] NotSaved'
}

export interface BusquedaState {
  resultado: Array <String>;
  _id?: String;
  message?: String;
}

export class SearchAgencias implements Action {
  readonly type = BusquedaActionTypes.SearchAgencias;
  constructor(public payload: string) {}
}

export class SearchMisiones implements Action {
  readonly type = BusquedaActionTypes.SearchMisiones;
  constructor(public payload: string) {}
}

export class SearchEstados implements Action {
  readonly type = BusquedaActionTypes.SearchEstados;
  constructor(public payload: string) {}
}

export class Save implements Action {
  readonly type = BusquedaActionTypes.Save;
  constructor(public payload: any) {}
}

export class Saved implements Action {
  readonly type = BusquedaActionTypes.Saved;
  constructor(readonly payload: any) {}
}

export class NotSaved implements Action {
  readonly type = BusquedaActionTypes.NotSaved;
  constructor(readonly payload: any) {}
}

export type BusquedaActions = SearchAgencias | SearchMisiones | SearchEstados | Save | Saved | NotSaved;
