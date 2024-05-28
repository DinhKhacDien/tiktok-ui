import Button from '~/component/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onCLick }) {
    return (
        <Button
            className={cx('menu-item')}
            to={data.to}
            leftIcon={data.icon}
            onClick={onCLick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
