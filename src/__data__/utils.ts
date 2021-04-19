import { SyntheticEvent, ChangeEvent } from "react";

import { TAxiosPayload, TAxiosSourceAction } from './types';

export const preventEventDefaults = (action: () => void) =>
  (event: SyntheticEvent) => {
    event.preventDefault();
    action();
  }

export const getSourceAction = (payload: TAxiosPayload): TAxiosSourceAction =>
  payload.config.reduxSourceAction;

export const wrapEventValue = (action: (value: string) => void) =>
  (event: ChangeEvent<HTMLInputElement>) =>
    action(event.target.value);
