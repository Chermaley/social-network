import React from "react";
import PropTypes from 'prop-types';
import classes from "./paginator.module.scss";
const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pagesBtn = [];
    for (let i = 1; i <= pagesCount; i++) {
        const className = currentPage === i ? classes.selectedPage : '';
        const btn = <span
            key={i}
            className={className}
            onClick={() => onPageChanged(i)}
        >{i}</span>;
        pagesBtn.push(btn);
    }
    return (
        <div>
            {pagesBtn}
        </div>

    );
};
Paginator.propTypes = {
    totalUsersCount: PropTypes.number,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChanged: PropTypes.number
};
export default Paginator;