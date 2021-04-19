/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { TAxiosSourceAction } from '../../__data__/types';

type TParagraphAction = (slug: string) => TAxiosSourceAction;
type TSentenceAction = (slug: string, idx: number) => TAxiosSourceAction;
type TSentenceTextAction = (slug: string, idx: number, sentence: string) => TAxiosSourceAction;
type TSentenceChangeAction = (slug: string, idx: number, sentence: string | null) => void;

const useParagraph = ({
  fetchParagraph,
  deleteParagraph,
  createSentence,
  deleteSentence,
  changeSentence,
}: {
  fetchParagraph: TParagraphAction;
  deleteParagraph: TParagraphAction;
  createSentence: TSentenceTextAction;
  deleteSentence: TSentenceAction;
  changeSentence: TSentenceChangeAction;
}) => ({
  onRefresh: useCallback((slug: string) =>
    async () => {
      await fetchParagraph(slug);
    }
  , []),
  deleteParagraph: useCallback((slug: string) =>
    async () => {
      void await deleteParagraph(slug);
    }
  , []),
  deleteSentence: useCallback((slug: string, idx: number) =>
    async () => {
      void await deleteSentence(slug, idx);
      changeSentence(slug, idx, null);
    }
  , []),
  saveSentence: useCallback((slug: string, idx: number) =>
    async (sentence: string) => {
      void await createSentence(slug, idx, sentence);
      void await fetchParagraph(slug); // to refresh complete state
    }
  , []),
  onChangeSentence: useCallback((slug: string, idx: number) =>
    (sentence: string) => {
      changeSentence(slug, idx, sentence);
    }
  , []),
});

export default useParagraph;
