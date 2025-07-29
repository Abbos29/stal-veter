import s from './CallModal.module.scss';
import useModalStore from '../../../store/modalStore';
import clsx from 'clsx';

const CallModal = () => {
  const { closeModal, isModalOpen } = useModalStore();
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
            closeModal();
            console.log('Form submitted');
          }}
        >
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Ваш телефон" required />
          <button type="submit">Оставить заявку</button>
          <p className={s.policy}>
            Отправляя заявку, я соглашаюсь с условиями{' '}
            <span>Политики конфиденциальности</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CallModal;
