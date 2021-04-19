declare global {
  type TParagraph = {
    complete: boolean;
    sentences: (string | null)[];
  }

  type TStore = {
    items: Record<string, TParagraph>;
  };
}

export {};
