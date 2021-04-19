import React from 'react';

export type TParagraphActions = {
  deleteParagraph: (slug: string) => React.EventHandler<React.SyntheticEvent>;
  refreshParagraph: (slug: string) => React.EventHandler<React.SyntheticEvent>;
  deleteSentence: (slug: string, idx: number) => React.EventHandler<React.SyntheticEvent>;
  saveSentence: (slug: string, idx: number) => (sentence: string) => void;
}
