import React, { useRef, useEffect, useState } from 'react';
import Container from '../../ui/Container/Container';
import s from './Gallery.module.scss';

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
          <h5>Галерея</h5>
          <div className={s.about}>
            <img src="/img/gallery_about.png" alt="about" />
            <div className={s.about_inner}>
              <h6>Компания «Стальной Ветер»</h6>
              <p>
                Нас выбирают как крупные организации региона, так и Федеральные
                группы компаний. На данный момент производственный потенциал
                компании позволяет быть постоянным партнером большому количеству
                компаний России и СНГ.{' '}
              </p>
              <p>
                Нас выбирают как крупные организации региона, так и Федеральные
                группы компаний. На данный момент производственный потенциал
                компании позволяет быть постоянным партнером большому количеству
                компаний России и СНГ.{' '}
              </p>
              <p>
                Мы помогаем решить полный спектр задач в сфере реверс
                инжиниринга, 3D печати, конструкторских работ в машиностроении.
                Нашими услугами могут воспользоваться как частные лица, так и
                компании.{' '}
              </p>
              <p>
                Мы помогаем решить полный спектр задач в сфере реверс
                инжиниринга, 3D печати, конструкторских работ в машиностроении.
                Нашими услугами могут воспользоваться как частные лица, так и
                компании.{' '}
              </p>
            </div>
          </div>

          <div className={s.slider}>
            <div className={s.slider_container} ref={containerRef}>
              <img src="/img/gallery_img5.png" alt="Gallery Image 1" />
              <img src="/img/gallery_img1.png" alt="Gallery Image 2" />
              <img src="/img/gallery_img2.png" alt="Gallery Image 3" />
              <img src="/img/gallery_img3.png" alt="Gallery Image 4" />
              <img src="/img/gallery_img4.png" alt="Gallery Image 5" />
            </div>

            {/* Ползунок */}
            <input
              type="range"
              className={s.slider_range}
              min="0"
              max="100"
              value={scrollValue}
              step="0.1"
              onChange={handleRangeChange}
            />
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
              </form>
              <p>
                Отправляя заявку, я соглашаюсь с условиями{' '}
                <span>Политики конфиденциальности</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
