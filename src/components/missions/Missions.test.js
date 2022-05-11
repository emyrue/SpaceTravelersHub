import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from './Missions';
import store from '../../redux/configureStore';

describe(' Missions Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
