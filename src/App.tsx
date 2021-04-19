import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import List from './components/List';
import CreateNewParagraphForm from './components/CreateNewParagraphForm';

const App = ({ match }: RouteComponentProps<{ slug?: string; }>) => (
  <div>
    <section>
      <CreateNewParagraphForm />
    </section>
    <section>
      <List slug={match.params.slug} />
    </section>
  </div>
);

export default App;
