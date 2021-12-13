import {render, screen} from '@testing-library/react';
import Post from './Post';

const removePost = jest.fn();

describe('Post component', ()=>{
    it('Post renders with data', function () {
        render(<Post id='1' message='Hello' likesCount={5} userImage='' removePost={removePost}/>);

        expect(screen.getByText('Hello')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Post renders without data', function () {
        render(<Post />);

        expect(screen.queryByRole('img')).toBeInTheDocument();
    });
    
    it('Post snapshot', ()=>{
        const post = render(<Post id='1' message='Hello' likesCount={5} userImage='' removePost={removePost} />);

        expect(post).toMatchSnapshot();
    })
})