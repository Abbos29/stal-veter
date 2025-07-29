import Container from '../../ui/Container/Container';
import s from './Equipment.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { data } from './data';
function Equipment() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={s.equipment} id="equipment">
      <Container>
        <div className={s.wrapper}>
          <div className={s.title}>
            <h5>Запасные части для скреперного оборудования</h5>

            <div className={s.nav}>
              <div className={`${s.prev} ${isBeginning ? s.disabled : ''}`}>
                ←
              </div>
              <div className={`${s.next} ${isEnd ? s.disabled : ''}`}>→</div>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            navigation={{
              nextEl: `.${s.next}`,
              prevEl: `.${s.prev}`,
            }}
            breakpoints={{
              360: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <div className={s.card}>
                  <img src={item.img} alt="" />
                  <h6>{item.title}</h6>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={s.nav}>
            <div className={`${s.prev} ${isBeginning ? s.disabled : ''}`}>
              ←
            </div>
            <div className={`${s.next} ${isEnd ? s.disabled : ''}`}>→</div>
          </div>

          <div className={s.info}>
            <div className={s.info_text}>
              <p>
                Задача организации, в особенности же дальнейшее развитие
                различных форм деятельности, в своём классическом представлении,
                допускает внедрение первоочередных требований. Учитывая ключевые
                сценарии поведения, курс на социально-ориентированный
                национальный проект прекрасно подходит для реализации
                первоочередных требований. Противоположная точка зрения
                подразумевает, что явные признаки победы институционализации
                призваны к ответу. Как уже неоднократно упомянуто, многие
                известные личности указаны как претенденты на роль ключевых
                факторов.
              </p>
              <p>
                Задача организации, в особенности же дальнейшее развитие
                различных форм деятельности, в своём классическом представлении,
                допускает внедрение первоочередных требований. Учитывая ключевые
                сценарии поведения, курс на социально-ориентированный
                национальный проект прекрасно подходит для реализации
                первоочередных требований.
              </p>
            </div>
            <div className={s.info_form}>
              <h6>Сделать быстрый заказ</h6>
              <p>
                Наши специалисты с радостью проконсультируют Вас и подберут
                наилучшее предложение
              </p>
              <form
                className={s.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('Form submitted');
                }}
              >
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={s.input}
                  required
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className={s.input}
                  required
                />
                <button type="submit" className={s.btn}>
                  Отправить
                </button>
                <p>
                  Отправляя заявку, я соглашаюсь с условиями{' '}
                  <span>Политики конфиденциальности</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Equipment;
