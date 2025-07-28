import Container from '../../ui/Container/Container';
import s from './Types.module.scss';

const Types = () => {
    return (
        <>
            <section className={s.types}>
                <Container>
                    <h5>Типы оборудования</h5>

                    <div className={s.wrapper}>
                        <div className={s.card}>
                            <img src="/img/type-1.png" alt="image" />

                            <div className={s.box}>
                                <h3>Комби скрепер - Складной V-образный скребок, 3040мм</h3>
                                <p>А также базовые сценарии поведения пользователей указаны как претенденты на роль ключевых. А также базовые сценарии поведения пользователей указаны как претенденты на роль ключевых. А также базовые сценарии поведения пользователей.</p>

                                <div className={s.box_bottom}>
                                    <b>121 370 ₽</b>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>

                        <div className={s.card}>
                            <img src="/img/type-1.png" alt="image" />

                            <div className={s.box}>
                                <h3>Комби скрепер - Складной V-образный скребок, 3040мм</h3>
                                <p>А также базовые сценарии поведения пользователей указаны как претенденты на роль ключевых. А также базовые сценарии поведения пользователей указаны как претенденты на роль ключевых. А также базовые сценарии поведения пользователей.</p>

                                <div className={s.box_bottom}>
                                    <b>121 370 ₽</b>
                                    <button>Подробнее</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Types