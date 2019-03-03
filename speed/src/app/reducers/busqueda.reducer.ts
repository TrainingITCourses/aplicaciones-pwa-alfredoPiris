import { Action } from '@ngrx/store';
import { BusquedaActions, BusquedaActionTypes } from './busqueda.actions';
import launchesJson from '../../assets/data/launches.json';



export interface State {
  resultado: Array <String>;
  _id?: String;
  message?: String;
}

export const initialState: State = {
  resultado: [],
  _id: '',
  message: ''
};

export function reducer(state = initialState, action: BusquedaActions): State {
  state.resultado = [];
  switch (action.type) {
    case BusquedaActionTypes.SearchAgencias:
      for (let i = 0; i < launchesJson.launches.length; i++) {
        if (launchesJson.launches[i].location.pads[0].name.toLowerCase().search(action.payload) !== -1 && (state.resultado.includes('pad: ' + launchesJson.launches[i].location.pads[0].name) === false)) {
          state.resultado.push('pad: ' + launchesJson.launches[i].location.pads[0].name);
        }
        if (launchesJson.launches[i].rocket.name.toLowerCase().search(action.payload) !== -1 && (state.resultado.includes('roket: ' + launchesJson.launches[i].rocket.name) === false)) {
          state.resultado.push('roket: ' + launchesJson.launches[i].rocket.name);
        }
        if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
          if (launchesJson.launches[i].missions[0].agencies != null && launchesJson.launches[i].missions[0].agencies.length > 0) {
            if (launchesJson.launches[i].missions[0].agencies[0].name.toLowerCase().search(action.payload) !== -1 && (state.resultado.includes('agency: ' + launchesJson.launches[i].missions[0].agencies[0].name) === false)) {
              state.resultado.push('agency: ' + launchesJson.launches[i].missions[0].agencies[0].name);
            }
          }
        }
      }
      return {...state};
      break;

    case BusquedaActionTypes.SearchEstados:
      for (let i = 0; i < launchesJson.launches.length; i++) {
        if (launchesJson.launches[i].status === parseInt(action.payload, 10)) {
          state.resultado.push('launchStatus: ' + launchesJson.launches[i].name);
        }
      }
      return {...state};
      break;

    case BusquedaActionTypes.SearchMisiones:
      for (let i = 0; i < launchesJson.launches.length; i++) {
        if (launchesJson.launches[i].missions != null && launchesJson.launches[i].missions.length > 0) {
          if (launchesJson.launches[i].missions[0].type === parseInt(action.payload, 10)) {
            state.resultado.push('missionStatus: ' + launchesJson.launches[i].missions[0].name);
          }
        }
      }
      return {...state};
    break;

    case BusquedaActionTypes.Save:
      return state;
    break;

    case BusquedaActionTypes.Saved:
      return action.payload;
    break;

    case BusquedaActionTypes.NotSaved:
      return {...state, message: action.payload};
    break;

    default:
      return state;
  }
}
