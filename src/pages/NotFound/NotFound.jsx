import Footer from '../../components/layout/Footer/Footer';
import Header from '../../components/layout/Header/Header';
import s from './NotFound.module.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className={s.wrap}>
        <div className={s.content}>
          <h1>404</h1>
          <h2>Страница не найдена</h2>
          <p>
            Возможно, вы ввели неправильный адрес. Вернитесь на главную, чтобы
            продолжить.
          </p>
          <Link to="/" className={s.button}>
            Вернуться на главную
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
