import React from "react";
import {Pagination, PaginationItem} from '@mui/material';
import {RouteComponentProps, withRouter, Link as NavLink} from "react-router-dom";

type PropsType = RouteComponentProps & {
    onPageChanged: (p: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
}

const Paginator = React.memo((props: PropsType) => {
    const {
        onPageChanged,
        pageSize,
        currentPage,
        totalItemsCount,
    } = props;

    const pageQty = Math.ceil(totalItemsCount / pageSize);

    return (
        <Pagination count={pageQty}
                    page={currentPage}
                    showFirstButton
                    showLastButton
                    onChange={(_, num) => onPageChanged(num)}
                    sx={{marginY: 3, marginX: 'auto'}}
                    renderItem={
                        item => (<PaginationItem
                            component={NavLink}
                            to={`/users/?page=${item.page}`}
                            {...item}
                        />)}
        />

    )
})

export default withRouter(Paginator);
