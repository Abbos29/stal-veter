import Container from '../../ui/Container/Container';
import s from './Hero.module.scss';

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <Container>
                    <div className={s.wrapper}>
                        <div className={s.box}>
                            <h1>Уникальность скреперов нашего
                                производства в том, что в их конструкции
                                мы используем элементы из износостойкой
                                марки стали импортного производства
                            </h1>

                            <p>Дополнительно производим запасные части</p>

                            <button>Оставить заявку</button>
                        </div>

                        <img className={s.image} src="/img/hero-img-11.png" alt="img" />
                    </div>

                    <div className={s.inner}>
                        <div className={s.inner_box}>
                            <img src="/img/hero-inner-1.svg" alt="icon" />
                            <p>Бесплатная доставка до ТК</p>
                        </div>

                        <div className={s.inner_box}>
                            <img src="/img/hero-inner-2.svg" alt="icon" />
                            <p>Собственное производство</p>
                        </div>

                        <div className={s.inner_btn}>
                            <img className={s.icon_pc} src="/img/hero-inner-3.svg" alt="icon" />

                            <button>
                                <img src="/img/hero-inner-3.svg" alt="icon" className={s.icon} />
                                Запчасти
                                <img src="/img/hero-inner-arrow.svg" alt="arrow" className={s.arrow} />
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero