import React, { useRef, useEffect, useState } from 'react';
import Container from '../../ui/Container/Container';
import s from './Gallery.module.scss';
import { data } from './data';
import toast from 'react-hot-toast';
function Gallery() {
  const containerRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  // Прокрутка → Обновляем ползунок
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const percent = (el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100;
      setScrollValue(percent);
    };

    el.addEventListener('scroll', handleScroll);

    // Старт с середины
    el.scrollLeft = (el.scrollWidth - el.clientWidth) * 0;
    handleScroll();

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // Ползунок → Управляем прокруткой
  const handleRangeChange = (e) => {
    const percent = parseFloat(e.target.value);
    setScrollValue(percent);

    const el = containerRef.current;
    if (!el) return;
    el.scrollLeft = ((el.scrollWidth - el.clientWidth) * percent) / 100;
  };

  return (
    <section className={s.gallery}>
      <Container>
        <div className={s.wrapper}>
          {/* <h5>Галерея</h5> */}
          <div className={s.about}>
            <img src="/img/gallery_about.png" alt="about" />
            <div className={s.about_inner}>
              <h6>Компания «Стальной Ветер»</h6>
              <p>
                Нас выбирают как крупные организации региона, так и Федеральные
                группы компаний. На данный момент производственный потенциал
                компании позволяет быть постоянным партнером большому количеству
                компаний России и СНГ.
              </p>
              <p>
                В своей работе мы используем профессиональное
                металлообрабатывающее оборудование ЧПУ, 3D печать и лазерное 3D
                сканирование, а также качественный софт для моделирования и
                проектирования.
              </p>
              <p>
                Мы помогаем решить полный спектр задач в сфере реверс
                инжиниринга, 3D печати, конструкторских работ в машиностроении.
                Нашими услугами могут воспользоваться как частные лица, так и
                компании.
              </p>
              <p>Компания "Стальной ветер" была основана в 2019 году.</p>
            </div>
          </div>

          <div className={s.slider}>
            <div className={s.slider_container} ref={containerRef}>
              {data.map((link, index) => (
                <>
                  <img src={link} alt={'Gallery Image ' + (index + 1)} />
                </>
              ))}
            </div>

            {/* Ползунок */}
            {/* <input
              type="range"
              className={s.slider_range}
              min="0"
              max="100"
              value={scrollValue}
              step="0.1"
              onChange={handleRangeChange}
            /> */}
          </div>
          <div className={s.make_order}>
            <div className={s.info}>
              <h5>Сделать быстрый заказ</h5>
              <p>
                Наши специалисты с радостью проконсультируют Вас и подберут
                наилучшее предложение
              </p>
            </div>
            <div className={s.form_wrapper}>
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
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={s.input}
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон*"
                  className={s.input}
                  required
                />
                <button type="submit" className={s.btn}>
                  Отправить
                </button>
              </form>
              <p>
                Отправляя заявку, я соглашаюсь с условиями{' '}
                <a href="/privacy-policy">Политики конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
