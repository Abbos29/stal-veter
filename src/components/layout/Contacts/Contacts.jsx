import React from 'react';
import s from './Contacts.module.scss';
import Container from '../../ui/Container/Container';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contacts() {
  return (
    <section className={s.contacts}>
      <Container>
        <h5>Контакты</h5>
        <div className={s.contacts_list}>
          <div className={s.list_item}>
            <div className={s.item_icon}>
              <img src="/img/phone.svg" alt="phone" />
            </div>
            <h6>Телефон</h6>
            <p>+7 (999) 530-16-39</p>
          </div>
          <div className={s.list_item}>
            <div className={s.item_icon}>
              <img src="/img/email.svg" alt="email" />
            </div>
            <h6>E-mail</h6>
            <p>info-sv48@yandex.ru</p>
          </div>
          <div className={s.list_item}>
            <div className={s.item_icon}>
              <img src="/img/pin.svg" alt="pin" />
            </div>
            <h6>Адрес</h6>
            <p>г. Липецк, Поперечный проезд, д. 25, стр. 39</p>
          </div>
        </div>

        <div className={s.cart_container}>
          <YMaps>
            <Map
              defaultState={{ center: [52.6109, 39.5948], zoom: 15 }}
              width="100%"
              height="400px"
              className={s.map}
            >
              <Placemark geometry={[52.6109, 39.5948]} />
            </Map>
          </YMaps>

          <div className={s.extra_info}>
            <div className={s.extra_text}>
              <p>ООО «Стальной ветер»</p>
              <p>ИНН: 4802013668</p>
              <p>ОГРН: 1194827007275</p>
            </div>
            <div className={s.extra_logo}>
              <img src="/img/logo.png" alt="logo" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contacts;
