import React from 'react';
import s from './Footer.module.scss';
import Container from '../../ui/Container/Container';
import useModalStore from '../../../store/modalStore';


function Footer() {
  const { openModal } = useModalStore();

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.top}>
          <a href="#header" className={s.logo}>
            <img src="/img/logo-footer.svg" alt="logo" />
          </a>
          <div className={s.top_item}>
            <p className={s.address}>
              г. Липецк, Поперечный проезд, <br /> д. 25, стр. 39
            </p>

            <a href="tel:+79995301639" className={s.phone}>
              +7 (999) 530-16-39
            </a>
            <a href="mailto:info-sv48@yandex.ru" className={s.email}>
              info-sv48@yandex.ru
            </a>
            <div className={s.social}>
              <span>Мы в соц. сетях</span>
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
          </div>
          <button className={s.btn} onClick={openModal}>
            Обратный звонок
          </button>
        </div>
        <div className={s.bottom}>
          <p>© Стальной ветер 2025</p>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
