import { useEffect, useState } from 'react';
import Container from '../../ui/Container/Container';
import s from './FreeWrap.module.scss';
import useModalStore from '../../../store/modalStore';


const FreeWrap = () => {
  const { openModal } = useModalStore();
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 20);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return [...minutes, ':', ...seconds];
  };

  const display = formatTime(timeLeft);

  return (
    <>
      <section className={s.freeWrap}>
        <Container>
          <div className={s.wrapper}>
            <img className={s.image} src="/img/free-img.png" alt="img" />
            <div className={s.box}>
              <h2>
                Бесплатная консультация <br /> инженера-конструктора
              </h2>

              <div className={s.inner}>
                <div className={s.timer}>
                  {display.map((char, i) =>
                    char === ':' ? (
                      <b key={i}>:</b>
                    ) : (
                      <span key={i}>{char}</span>
                    ),
                  )}
                </div>

                <p>
                  Есть идея, но не знаете, с чего начать? Бесплатная
                  консультация специалиста — в подарок
                </p>
              </div>

              <div className={s.btns}>
                <button>Получить консультацию</button>
                <button onClick={openModal}>Заказать звонок</button>
              </div>
            </div>
            <div className={s.btns}>
              <button>Получить консультацию</button>
              <button>Заказать звонок</button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FreeWrap;
