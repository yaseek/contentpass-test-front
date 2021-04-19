/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { ConnectedProps } from 'react-redux';

import withRedux from './redux';
import Paragraph from './Paragraph';

import css from './list.module.css';

type TProps = ConnectedProps<typeof withRedux> & {
  slug?: string;
};

const List = ({
  slug,
  items,
  fetchParagraph
}: TProps) => {
  useEffect(() => {
    if (!slug) return;
    fetchParagraph(slug);
  }, []);

  return (
    <div className={css.list}>
      {Object.keys(items).map((slug) => (
        <Paragraph
          key={slug}
          {...{ slug }}
          {...items[slug]}
        />
      ))}
    </div>
  );
};

export default withRedux(List);
