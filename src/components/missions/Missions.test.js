import renderer from 'react-test-renderer';
import Missions from './Missions';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

describe(' Missions Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>)
    expect(tree).toMatchSnapshot();
  });
})