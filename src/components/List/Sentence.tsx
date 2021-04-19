import React, { HTMLAttributes, SyntheticEvent } from 'react';

import { wrapEventValue } from '../../__data__/utils';

import css from './list.module.css';

type TProps = {
  componentClass: 
    | React.ComponentClass<HTMLAttributes<SyntheticEvent>>
    | keyof JSX.IntrinsicElements;
  value: string;
  onChange: (sentence: string) => void;
  onSave: (sentence: string) => void;
  onDelete: React.EventHandler<React.SyntheticEvent>;
};

const Sentence = ({
  componentClass: Component,
  value,
  onChange,
  onSave,
  onDelete,
}: TProps) => (
  <Component>
    <div className={css.sentence}>
      <input type="text" {...{ value }} onChange={wrapEventValue(onChange)} />
      <button type="button" onClick={() => onSave(value)}>Save</button>
      <button type="button" onClick={onDelete}>Delete</button>
    </div>
  </Component>
);

export default React.memo(Sentence);
