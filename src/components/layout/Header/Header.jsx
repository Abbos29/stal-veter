import useModalStore from '../../../store/modalStore';
import Container from '../../ui/Container/Container';
import s from './Header.module.scss';

const Header = () => {
  const { openModal } = useModalStore();
  return (
    <>
      <header className={s.header} id="header">
        <Container>
          <nav className={s.nav}>
            <div className={s.top}>
              <a href="/" className={s.logo}>
                <img src="/img/logo.png" alt="Logo" />
              </a>

              <div className={s.socs}>
                <a href="#">
                  <img src="/img/icon-tg.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="/img/icon-vk.svg" alt="icon" />
                </a>
                <a href="#">
                  <img src="/img/icon-insta.svg" alt="icon" />
                </a>
              </div>
            </div>

            <div className={s.menu}>
              <a href="tel:+79995301639">+7 (999) 530-16-39</a>

              <button onClick={openModal}>Заказать звонок</button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
