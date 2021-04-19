import { TAxiosAction, TSimpleAction } from './types';
import { getSourceAction } from './utils';

const initialState: TStore = {
  items: {},
}

type TAction = TAxiosAction | TSimpleAction;

const reducer = (state = initialState, action: TAction): TStore => {
  switch (action.type) {
    case 'GET_PARAGRAPH_SUCCESS': {
      const actualAction = action as TAxiosAction;
      const sourceAction = getSourceAction(actualAction.payload);
      return {
        items: {
          ...state.items,
          [sourceAction.payload.slug]: actualAction.payload.data as TParagraph,
        }
      }
    }
    case 'DELETE_PARAGRAPH_SUCCESS': {
      const actualAction = action as TAxiosAction;
      const sourceAction = getSourceAction(actualAction.payload);
      delete state.items[sourceAction.payload.slug];
      return {
        items: {
          ...state.items,
        }
      }
    }
    case 'DELETE_SENTENCE_SUCCESS': {
      const actualAction = action as TAxiosAction;
      const sourceAction = getSourceAction(actualAction.payload);
      if (sourceAction.payload.idx === undefined) {
        throw new Error('Inconsistence in data')
      }
      state.items[sourceAction.payload.slug].complete = false;
      state.items[sourceAction.payload.slug].sentences[sourceAction.payload.idx] = null;
      return {
        items: {
          ...state.items,
        }
      }
    }
    case 'CHANGE_SENTENCE': {
      const actualAction = action as TSimpleAction;
      const { slug, idx, value } = actualAction.payload;
      state.items[slug].sentences[idx] = value;

      return {
        items: {
          ...state.items,
        }
      }
    }
    default:
      return state;
  }
};

export default reducer;

