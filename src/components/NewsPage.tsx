import React, {useEffect, useState} from 'react';
import {Link as NavLink, withRouter} from 'react-router-dom';
import axios from "axios";
import {Container, Pagination, PaginationItem, TextField, Stack, Link} from '@mui/material';
import {RouteComponentProps} from "react-router-dom";

const BASE_URL = 'http://hn.algolia.com/api/v1/search?';
type DataType = {
    hits: [],
    nbPages: number
}
type PostType = {
    title: string
    story_title: string
    objectID: string
    url: string | undefined
}

const NewsPage = React.memo((props: RouteComponentProps ) => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [query, setQuery] = useState('react');
    const [page, setPage] = useState(parseInt(props.location.search?.split('=')[1]) || 1); //current page
    const [pageQty, setPageQty] = useState(0); // pagesCount = totalItemsCount / pageSize

    useEffect(() => {
        axios.get<DataType>(BASE_URL + `query=${query}&page=${page - 1}`).then(
            ({data}) => {
                console.log(data)
                setPosts(data.hits)
                setPageQty(data.nbPages)

                if (data.nbPages < page) {
                    setPage(1);
                    props.history.replace('/news')
                }
            }
        )
    }, [query, page, props.history])

    return (
        <Container sx={{marginTop: 5, justifyContent: 'center'}} maxWidth='md'>
            <TextField fullWidth
                       label='query'
                       value={query}
                       onChange={e => setQuery((e.target.value))}
            />
            <Stack spacing={2}>
                {!!pageQty && (
                    <Pagination
                        count={pageQty}
                        page={page}
                        showFirstButton
                        showLastButton
                        onChange={(_, num) => setPage(num)}
                        sx={{marginY: 3, marginX: 'auto'}}
                        renderItem={
                            item => (<PaginationItem
                                component={NavLink}
                                to={`/news/?page=${item.page}`}
                                {...item}
                            />)}
                    />
                )}
                {
                    posts.map(post => (
                            <Link
                                key={post.objectID}
                                href={post.url}
                            >
                                {post.title || post.story_title}
                            </Link>
                        )
                    )
                }
            </Stack>
        </Container>
    );
}) ;

export default withRouter(NewsPage);