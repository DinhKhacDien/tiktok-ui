import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import { Wrapper as WrapperPropper } from '~/component/Propper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    //get value input
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();
    const handlChange = (value) => {
        setInput(value);
    };
    const handlClear = () => {
        setInput('');
        inputRef.current.focus();
    };
    const handlHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);
    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
            render={(Attr) => (
                <div className={cx('search__result')} tabIndex="-1" {...Attr}>
                    {' '}
                    <WrapperPropper>
                        <h4 className={cx('search__title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </WrapperPropper>
                </div>
            )}
            onClickOutside={handlHideResult}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => setShowResult(true)}
                    ref={inputRef}
                    value={input}
                    onChange={(e) => {
                        handlChange(e.target.value);
                    }}
                    placeholder="Search ..."
                    spellCheck={false}
                />
                {!!input && (
                    <button
                        className={cx('search__clear')}
                        onClick={handlClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* <FontAwesomeIcon
                    className={cx('search__spinner')}
                    icon={faSpinner}
                /> */}

                <Tippy delay={[0, 200]} placement="bottom" content="Search">
                    <button className={cx('search__btn')}>
                        <SearchIcon className={cx('search-icon')} />
                    </button>
                </Tippy>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
