import s from './CallModal.module.scss';
import useModalStore from '../../../store/modalStore';
import clsx from 'clsx';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const CallModal = () => {
  const { closeModal, isModalOpen } = useModalStore();
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
  return (
    <div
      className={clsx(s.overlay, isModalOpen && s.active)}
      onClick={closeModal}
    >
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.close} onClick={closeModal}>
          <img src="/img/close_icon.svg" alt="close" />
        </button>
        <h2>Заказать звонок</h2>
        <p>
          Наши специалисты с радостью проконсультируют Вас и подберут наилучшее
          предложение
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
                  closeModal();
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
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Ваш телефон" required />
          <button type="submit">Оставить заявку</button>
          <p className={s.policy}>
            Отправляя заявку, я соглашаюсь с условиями{' '}
            <a href="/privacy-policy"> Политики конфиденциальности</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CallModal;
