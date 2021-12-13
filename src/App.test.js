import SNGlobalApp from "./App";
import ReactDOM from 'react-dom';

it('renders without crashing', function () {
    const div = document.createElement('div');
    ReactDOM.render(<SNGlobalApp />, div);
    ReactDOM.unmountComponentAtNode(div);
});

