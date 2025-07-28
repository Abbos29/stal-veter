import Container from '../../ui/Container/Container';
import s from './FreeWrap.module.scss';

const FreeWrap = () => {
    return (
        <>
            <section className={s.freeWrap}>
                <Container>
                    <div className={s.wrapper}>
                        <img className={s.image} src="/img/free-img.png" alt="img" />

                        <div className={s.box}>
                            <h2>Бесплатная консультация <br /> инженера-конструктора</h2>

                            <div className={s.inner}>
                                <div className={s.timer}>
                                    <span>1</span>
                                    <span>2</span>
                                    <b>:</b>
                                    <span>2</span>
                                    <span>0</span>
                                </div>

                                <p>Есть идея, но не знаете, с чего начать? Бесплатная консультация специалиста — в подарок</p>
                            </div>

                            <div className={s.btns}>
                                <button>Получить консультацию</button>
                                <button>Заказать звонок</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default FreeWrap