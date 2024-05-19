import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside>
            <div className={cx('wrapper')}>
                <h2>SideBar</h2>
            </div>
        </aside>
    );
}

export default SideBar;
