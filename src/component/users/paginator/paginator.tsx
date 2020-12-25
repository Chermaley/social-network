import React, {useState} from 'react';
import styles from "./paginator.module.scss";
import cn from "classnames";
import next from './next.svg';
import prev from './prev.svg';
type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({
                                          totalItemsCount, pageSize, currentPage
                                          , onPageChanged, portionSize = 10
                                      }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    if (pagesCount < 2) {
        return null;
    }
    return (
        <div className={styles.paginator}>
        {portionNumber > 1 &&
        <span className={styles.navBtn + ' ' + styles.left} onClick={() => {
            setPortionNumber(portionNumber - 1);
        }}><img src={prev} alt="next"/></span>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>;
            })}
        {portionCount > portionNumber &&
        <span className={styles.navBtn + ' ' + styles.right} onClick={() => {
            setPortionNumber(portionNumber + 1);
        }}><img src={next} alt="next"/></span>}
    </div>
    );
};

export default Paginator;