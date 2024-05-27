import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as WrapperPropper } from '~/component/Propper';
const cx = classNames.bind(styles);
function Menu({ items = [], children }) {
    const renderItems = (items) => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />;
        });
    };
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(Attr) => (
                <div className={cx('content')} tabIndex="-1" {...Attr}>
                    <WrapperPropper className={cx('custom-menu')}>
                        {renderItems(items)}
                    </WrapperPropper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
