import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperPropper } from '~/component/Propper';
import styles from './Header.module.scss';
import images from '~/assets/img';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo tik tok" />
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(Attr) => (
                        <div
                            className={cx('search__result')}
                            tabIndex="-1"
                            {...Attr}
                        >
                            {' '}
                            <WrapperPropper>
                                <h4 className={cx('search__title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPropper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search ..." spellCheck={false} />
                        <button className={cx('search__clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('search__spinner')}
                            icon={faSpinner}
                        />

                        <button className={cx('search__btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
