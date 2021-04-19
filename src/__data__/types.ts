import { Action } from 'redux';

export type TAxiosAction = Action<string> & {
  payload: TAxiosPayload;
}

export type TSimpleAction = Action<string> & {
  payload: {
    slug: string;
    idx: number;
    value: string | null;
  }
}

export type TAxiosSourceAction = Action<string> & {
  payload: TAxiosSourcePayload;
}

export type TAxiosPayload = {
  data?: unknown;
  config: {
    reduxSourceAction: TAxiosSourceAction;
  }
}

export type TAxiosSourcePayload = {
  request: {
    method: string;
    url: string;
  },
  slug: string;
  idx?: number;
}
