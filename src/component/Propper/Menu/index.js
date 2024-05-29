import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import MenuItem from './MenuItem';
import { Wrapper as WrapperPropper } from '~/component/Propper';
import Header from './Header';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const defaultFn = () => {};
function Menu({ items = [], children, onChange = defaultFn }) {
    const [display, setDisplay] = useState([{ data: items }]);
    const currentItem = display[display.length - 1];
    const renderItems = () => {
        return currentItem.data.map((item, index) => {
            const checkChildren = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onCLick={() => {
                        if (checkChildren) {
                            setDisplay((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            offset={[12, 10]}
            delay={[0, 700]}
            placement="bottom-end"
            onHide={() => {
                setDisplay((prev) => prev.slice(0, 1));
            }}
            render={(Attr) => (
                <div className={cx('content')} tabIndex="-1" {...Attr}>
                    <WrapperPropper className={cx('custom-menu')}>
                        {display.length > 1 && (
                            <Header
                                title={currentItem.title}
                                onBack={() => {
                                    setDisplay((prev) =>
                                        prev.slice(0, prev.length - 1),
                                    );
                                }}
                            />
                        )}
                        {renderItems()}
                    </WrapperPropper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
