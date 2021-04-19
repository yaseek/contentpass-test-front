/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from 'react';

import { TConnectedProps } from './redux';

const useCreateParagraph = ({
  createParagraph,
  fetchParagraph,
}: TConnectedProps) => {
  const [paragraphName, setParagraphName] = useState<string>('');
  const [numSentences, setNumSentences] = useState<number>(0);

  const onChangeParagraphName = useCallback((event) => {
    setParagraphName(event.target.value)
  }, []);

  const onChangeNumSentences = useCallback((event) => {
    setNumSentences(parseInt(event.target.value));
  }, []);

  const createNewParagraph = useCallback(async () => {
    await createParagraph(paragraphName, numSentences);
    await fetchParagraph(paragraphName);
  }, [paragraphName, numSentences]);

  return {
    paragraphName,
    numSentences,
    onChangeParagraphName,
    onChangeNumSentences,
    createNewParagraph,
  }
}

export default useCreateParagraph;
