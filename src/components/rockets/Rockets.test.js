import renderer from 'react-test-renderer';
import Rockets from './Rockets';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

describe(' Rockets Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>)
    expect(tree).toMatchSnapshot();
  });
})