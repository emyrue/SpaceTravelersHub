import renderer from 'react-test-renderer';
import Profile from './Profile';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

describe(' Profile Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>)
    expect(tree).toMatchSnapshot();
  });
})