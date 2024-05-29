import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                alt="namme"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Dinh Khac Dien</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCircleCheck}
                    ></FontAwesomeIcon>
                </h4>
                <p className={cx('username')}>Dienkk</p>
            </div>
        </div>
    );
}

export default AccountItem;
