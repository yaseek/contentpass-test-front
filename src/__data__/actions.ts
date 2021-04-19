export const fetchParagraph = (slug: string) => (
  {
    payload: {
      request: {
        method: 'get',
        url: `/paragraph/${slug}`,
      },
      slug,
    },
    type: 'GET_PARAGRAPH',
  }
);

export const createParagraph = (slug: string, numSentences: number) => (
  {
    payload: {
      request: {
        method: 'post',
        url: `/paragraph/${slug}`,
        data: {
          numSentences,
        }
      },
      slug,
    },
    type: 'CREATE_PARAGRAPH',
  }
);

export const deleteParagraph = (slug: string) => (
  {
    payload: {
      request: {
        method: 'delete',
        url: `/paragraph/${slug}`,
      },
      slug,
    },
    type: 'DELETE_PARAGRAPH',
  }
);

export const createSentence = (slug: string, idx: number, sentence: string) => (
  {
    payload: {
      request: {
        method: 'post',
        url: `/paragraph/${slug}/sentence/${idx}`,
        data: {
          sentence,
        }
      },
      slug,
    },
    type: 'CREATE_SENTENCE',
  }
)

export const deleteSentence = (slug: string, idx: number) => (
  {
    payload: {
      request: {
        method: 'delete',
        url: `/paragraph/${slug}/sentence/${idx}`,
      },
      slug,
      idx,
    },
    type: 'DELETE_SENTENCE',
  }
)

export const changeSentence = (slug: string, idx: number, value: string | null) => (
  {
    payload: {
      slug,
      idx,
      value,
    },
    type: 'CHANGE_SENTENCE',
  }
)
