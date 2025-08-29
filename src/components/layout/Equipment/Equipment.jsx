import Container from '../../ui/Container/Container';
import s from './Equipment.module.scss';
import Head from '../../ui/Head';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import { data } from './data';
import EquipmentCard from './EquipmentCard';

function Equipment() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={s.equipment} id="equipment">
      <Head
        title={data[activeIndex]?.title || 'Запасные части для скреперного оборудования'}
        description="Запасные части для скреперного оборудования"
      />
      <Container>
        <div className={s.wrapper}>
          <div className={s.title}>
            <h5>Запасные части для скреперного оборудования</h5>
            <div className={s.nav}>
              <div className={`${s.prev} ${isBeginning ? s.disabled : ''}`}>←</div>
              <div className={`${s.next} ${isEnd ? s.disabled : ''}`}>→</div>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={4}
            onSwiper={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveIndex(swiper.activeIndex);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveIndex(swiper.activeIndex);
            }}
            navigation={{
              nextEl: `.${s.next}`,
              prevEl: `.${s.prev}`,
            }}
            breakpoints={{
              360: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i}>
                <EquipmentCard img={item.img} title={item.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default Equipment;
