import React from 'react';
import { ConnectedProps } from 'react-redux';

import { preventEventDefaults } from '../../__data__/utils';
import useCreateParagraph from './useCreateParagraph';
import withRedux from './redux';

import css from './create-paragraph.module.css';

type TProps = ConnectedProps<typeof withRedux>;

const Form = ({ createParagraph, fetchParagraph }: TProps) => {
  const {
    paragraphName,
    numSentences,
    createNewParagraph,
    onChangeParagraphName,
    onChangeNumSentences,
  } = useCreateParagraph({
    createParagraph,
    fetchParagraph,
  });

  return (
    <form
      className={css.form}
      onSubmit={preventEventDefaults(createNewParagraph)}
    >
      <div className={css.inputGroup}>
        <label htmlFor="paragraphName">
          {'New paragraph name:'}
        </label>
        <span>
          <input
            id="paragraphName"
            type="text"
            onChange={onChangeParagraphName}
            value={paragraphName}
          />
        </span>
      </div>
      <div  className={css.inputGroup}>
        <label>
          {'Number of new sentences:'}
        </label>
        <span>
          <input
            type="number"
            min={0}
            onChange={onChangeNumSentences}
            value={numSentences}
          />
        </span>
      </div>
      <div  className={css.inputGroup}>
        <button
          type="submit"
          disabled={!paragraphName || !numSentences}
        >
          {'CREATE NEW PARAGRAPH'}
        </button>
      </div>
    </form>
  )
}

export default withRedux(Form);
