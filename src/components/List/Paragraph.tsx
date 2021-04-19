import React from 'react';
import { ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';

import withRedux from './redux';

import Sentence from './Sentence';
import useParagraph from './useParagraph';

import css from './list.module.css';

type TProps = {
  slug: string;
}
  & TParagraph
  & ConnectedProps<typeof withRedux>;

const Paragraph = ({
  slug, complete, sentences, items,
  ...paragraphActions
}: TProps) => {
  const {
    deleteParagraph, onRefresh, saveSentence, deleteSentence,
    onChangeSentence,
  } = useParagraph(paragraphActions);
  
  return (
    <div className={`${css.paragraph} ${complete ? css.complete : ''}`}>
      <div className={css.paragraphActions}>
        <button type="button" onClick={deleteParagraph(slug)}>{'DELETE'}</button>
        <button type="button" onClick={onRefresh(slug)}>{'REFRESH'}</button>
      </div>
      <h3>
        <Link to={`/${slug}`}>{slug}</Link>
      </h3>
      <ol
        className={css.sentences}
        start={0}
      >
        {sentences.map((value, idx) => (
          <Sentence
            key={`${slug}${idx}`}
            componentClass="li"
            value={value || ''}
            onChange={onChangeSentence(slug, idx)}
            onSave={saveSentence(slug, idx)}
            onDelete={deleteSentence(slug, idx)}
          />
        ))}
      </ol>
    </div>
  )
}

export default withRedux(Paragraph);
