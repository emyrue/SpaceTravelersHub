import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Profile from './Profile';
import store from '../../redux/configureStore';

describe(' Profile Component Rendering ', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
