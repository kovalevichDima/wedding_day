
import './App.css';
import { Image } from 'react-bootstrap';

import { scroller } from "react-scroll";


// import header_image_5 from "./assets/img/5.webp"
// import header_image_2 from "./assets/img/2.webp"
// import header_image_3 from "./assets/img/3.webp"
// import header_image_4 from "./assets/img/4.webp"
// import header_image_6 from "./assets/img/6.webp"
// import header_image_7 from "./assets/img/7.webp"
import header_image_5 from "./assets/imgSanya/5.JPG"
import header_image_1 from "./assets/imgSanya/1.JPG"

import header_image_2 from "./assets/imgSanya/2.JPG"
import header_image_4 from "./assets/imgSanya/4.JPG"
import header_image_6 from "./assets/imgSanya/6.JPG"
import header_image_7 from "./assets/imgSanya/7.JPG"


import up from "./assets/footer/up.png"

function App() {

  const scrollToAcquaintance = () =>
    scroller.scrollTo("acquaintanceScroll", {
      duration: 500,
      delay: 200,
      smooth: true,
      offset: -20, // Scrolls to element + 50 pixels down the page
    });
  const scrollToHeader = () =>
    scroller.scrollTo("header1", {
      duration: 500,
      delay: 200,
      smooth: true,
      offset: -20, // Scrolls to element + 50 pixels down the page
    });
  return (
    <div className="App" id="header1">

      <div className='title-block'>
        <div className='title'>
          <h1>САША И ЛЕРА</h1>
          <p>10 июня 2022 г.</p>
          <div style={{ marginTop: "30px" }} >
            <button onClick={scrollToAcquaintance} >Принять поздравления</button>
          </div>
        </div>
      </div>

      <div className='acquaintance'>
        <div className="acquaintance-title" id="acquaintanceScroll">
          <h1>
            <span>
              ПОЗДРАВЛЕНИЯ ОТ РАБОЧЕГО КОЛЛЕКТИВА
            </span>
          </h1>

        </div>
        <div className='rhombus-block'>
          <div className='rhombus' />

        </div>
        <div className='history-acquaintance'>
          <div className='history-acquaintance-text'>
            <p>
              Молодёж! У вас сегодня особый день - праздник рождения вашей семьи. В этот праздник мы желаем вам, чтобы с годами ваши отношения лишь крепли. Пусть с каждым годом ваша любовь разрастается, словно виноградная лоза под щедрым солнцем, чтобы всегда между вами царили мир, взаимопонимание и доверие.
              Будьте счастливы много-много лет, а день свадьбы ежегодно отмечайте как самый сладкий, самый важный семейный праздник.
              Горько!

            </p>
          </div>
          <div className='history-acquaintance-img' >
            <Image src={header_image_7} />
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
                    10 июня 2022 г., 10:00
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
                    Самое лучшее место
                  </div>
                </div>
              </div>

            </div>
            <button >Я ПРИДУ</button>
          </div>

        </div>
        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <Image src={header_image_5} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--2">
            <Image src={header_image_1} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--3">
            <Image src={header_image_4} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--4">
            <Image src={header_image_2} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--5">
            <Image src={header_image_7} className="gallery__img" />
          </figure>
          <figure className="gallery__item gallery__item--6">
            <Image src={header_image_6} className="gallery__img" />
          </figure>
        </div>
      </div>

      <div className='footer'>
        <div onClick={scrollToHeader}>
          <Image src={up} style={{ width: "50px", height: "50px" }} className="gallery__img" />
          <p>НАВЕРХ</p>
        </div>

      </div>
    </div>
  );
}

export default App;
