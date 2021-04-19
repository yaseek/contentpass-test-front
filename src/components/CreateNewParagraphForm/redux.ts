import { connect, ConnectedProps } from 'react-redux';

import { createParagraph, fetchParagraph } from '../../__data__/actions';

const withRedux = connect(null, {
  createParagraph,
  fetchParagraph,
})

export type TConnectedProps = ConnectedProps<typeof withRedux>;

export default withRedux;