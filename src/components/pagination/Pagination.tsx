import classnames from 'classnames';
import React from 'react';
import {DOTS, usePagination} from "./usePagination";
import './pagination.css';

type PropsType = {
    onPageChanged: (page: number) => void
    totalCount: number
    pageSize: number
    siblingCount: number
    currentPage: number
    className: string
}

const Pagination = ( {onPageChanged, totalCount, pageSize, siblingCount =1, currentPage, className}: PropsType) => {
    const paginationRange = usePagination({
        totalCount, pageSize, siblingCount, currentPage
    });
    if (paginationRange){
        if (currentPage === 0 || paginationRange.length < 2){
            return null;
        }

    }
    const onNext = () => {
        onPageChanged( currentPage + 1);
    }
    const onPrevious = () => {
        onPageChanged(currentPage - 1);
    }
    // @ts-ignore
    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={classnames('pagination-container', { [className]: className}) }>
            <li
                className={classnames('pagination-item', {disabled: currentPage === 1})}
                onClick={onPrevious}
            >
                <div className='arrow left' />
            </li>
            {paginationRange && paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className='pagination-item dots'>&#8230;</li>
                }
                return (
                    <li className={classnames('pagination-item', {
                        selected: pageNumber === currentPage})}
                        onClick={()=> onPageChanged(pageNumber as number)}
                    >
                        {pageNumber}
                    </li>
                )
            })}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className='arrow right' />
            </li>
        </ul>
    )
}
export default Pagination;