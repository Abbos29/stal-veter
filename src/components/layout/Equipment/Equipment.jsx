import Container from '../../ui/Container/Container';
import s from './Equipment.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { data } from './data';
import toast from 'react-hot-toast';
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
                  <div className={s.imgWrapper}>
                    <img src={item.img} alt="" />
                  </div>
                  <h6>{item.title}</h6>
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
                  const form = e.target;
                  const name = form[0].value;
                  const phone = form[1].value;
                  const message = `📝 <b>Новая заявка</b>\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;
                  fetch(
                    `https://api.telegram.org/bot8179904872:AAEsfjpX2jpVpANpy9vKAA7NLO2TlqABtgk/sendMessage`,
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        chat_id: '-1002793514701',
                        text: message,
                        parse_mode: 'HTML',
                      }),
                    },
                  )
                    .then((res) => {
                      if (res.ok) {
                        console.log('✅ Отправлено!');
                        toast.success('Заявка отправлена!');
                        form.reset();
                      } else {
                        toast.error('Что то пошло не так. Попробуйте позже!');
                        console.error('❌ Telegram error');
                      }
                    })
                    .catch((err) => {
                      toast.error('Что то пошло не так. Попробуйте позже!');
                      console.error('❌ Ошибка запроса:', err);
                    });
                }}
              >
                <input type="text" placeholder="Ваше имя" className={s.input} />
                <input
                  type="tel"
                  placeholder="Ваш телефон*"
                  className={s.input}
                  required
                />
                <button type="submit" className={s.btn}>
                  Отправить
                </button>
                <p>
                  Отправляя заявку, я соглашаюсь с условиями{' '}
                  <a href="/privacy-policy">Политики конфиденциальности</a>
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
