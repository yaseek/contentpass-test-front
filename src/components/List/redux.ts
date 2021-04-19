import { connect } from 'react-redux';

import { getItems } from '../../__data__/selectors';
import {
  fetchParagraph,
  deleteParagraph,
  createSentence,
  deleteSentence,
  changeSentence,
} from '../../__data__/actions';

const mapStateToProps = (state: TStore) => ({
  items: getItems(state),
});

export default connect(mapStateToProps, {
  fetchParagraph,
  deleteParagraph,
  createSentence,
  deleteSentence,
  changeSentence,
});
