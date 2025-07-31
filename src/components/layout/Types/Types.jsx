import Container from '../../ui/Container/Container';
import { data } from './data';
import s from './Types.module.scss';
const Types = () => {
  return (
    <section className={s.types}>
      <Container>
        <h5>Типы оборудования</h5>

        <div className={s.wrapper}>
          {data.map((item) => (
            <div key={item.id} className={s.card}>
              <img src={item.image} alt="image" />

              <div className={s.box}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className={s.box_bottom}>
                  <b>{item.price}</b>
                  {/* <button>Подробнее</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Types;
