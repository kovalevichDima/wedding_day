import './App.css';
import { Image } from 'react-bootstrap';

import header_image_5 from "./assets/img/5.webp"
import header_image_2 from "./assets/img/2.webp"
import header_image_3 from "./assets/img/3.webp"
import header_image_4 from "./assets/img/4.webp"
import header_image_6 from "./assets/img/6.webp"
import header_image_7 from "./assets/img/7.webp"

function App() {
  return (
    <div className="App">

      <div className='title-block'>
        <div className='title'>
          <h1>МЫ ЖЕНИМСЯ</h1>
          <p>23 сент. 2023 г., 19:00
            Усадьба «Кусково»</p>
          <div style={{ marginTop: "30px" }}>
            <button >Я ПРИДУ</button>

          </div>

        </div>
      </div>

      <div className='acquaintance'>
        <div className="acquaintance-title">
          <h1>
            <span>
              Как мы познакомились
            </span>
          </h1>

        </div>
        <div className='rhombus-block'>
          <div className='rhombus' />

        </div>
        <div className='history-acquaintance'>
          <div className='history-acquaintance-text'>
            <p>
              Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе. Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Здесь вы можете рассказать посетителям подробнее о себе. Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды.
            </p>
          </div>
          <div className='history-acquaintance-img' >
            <Image src={header_image_5} />
          </div>
        </div>
        <div className='wedding'>
          <div className='wedding-block'>
            <div>
              <h1>Свадьба</h1>
            </div>
            <div className='rhombus-block'>
              <div className='rhombus' />
            </div>
            <div className='when-where'>
              <div className='row'>
                <div className='col-5'>
                  <div className='when'>
                    Когда
                  </div>
                  <div className='date'>
                    23 сент. 2023 г., 19:00
                  </div>
                </div>
                <div className='col-2'>
                  <div className="when-where-line" />
                </div>
                <div className='col-5'>
                  <div className='where'>
                    Где
                  </div>
                  <div className='address'>
                    Усадьба «Кусково»,
                    ул. Арбат, 1а, Москва, Россия, 119019
                  </div>
                </div>
              </div>

            </div>
            <button >Я ПРИДУ</button>
          </div>

        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <Image src={header_image_6} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <Image src={header_image_7} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <Image src={header_image_4} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <Image src={header_image_2} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <Image src={header_image_3} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <Image src={header_image_5} className="gallery__img" />
          </figure>
        </div>
        {/* <div className='collage'>
          
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-6">
                  <Image src={header_image_6} />
                </div>
                <div className="col-6">
                  <Image src={header_image_7} />
                </div>
              </div>
              <div className="">
                <Image src={header_image_4} />
              </div>
            </div>
            <div className="col-2">
              <div className="">
                <Image src={header_image_2} />
              </div>

              <div className="">
                <Image src={header_image_3} />
              </div>
            </div>
            <div className="col-6">
              <Image src={header_image_5} />
            </div>
          </div>


        </div> */}
      </div>

    </div>
  );
}

export default App;
