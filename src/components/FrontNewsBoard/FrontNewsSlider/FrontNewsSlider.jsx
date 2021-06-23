import c from './FrontNewsSlider.module.css';
import { Aboba2 , Aboba } from './FrontNewsSlider.js';
import './aboba.css';

const FrontNewsSlider = () => {
    return (
        <div>
            
            <div className={c.slider} id='slider'>
                <div className={c.wrapper} id='wrapper'>
                    <div  className={c.slider_items} id='slider_items'>
                    <a className={c.slider_text} >Махинации с регистарцией деревни. Обман Администарции.</a>
                      <div className={c.slider_item1} id='slider_item1'><img src='https://i.ibb.co/gJsC17N/3.png'></img><a className={c.slider_text} >Лучшие девушки Днепра. Подробнее далее..</a></div>
                      <div className={c.slider_item2} id='slider_item2'><img src='https://i.ibb.co/Kq2zgZL/124.png'></img><a className={c.slider_text} >Новый виток архитектурной мысли Соннектиона.</a></div>
                      <div className={c.slider_item3} id='slider_item3'><img src='https://i.ibb.co/44Yk448/11124.png'></img></div>
                      <div></div>
                    </div>
                   
                </div>
                
            </div>
            <div id='back' onClick={ Aboba2 } className={c.back}><img src='https://i.ibb.co/k413K6w/1212.png'></img></div>
                <div id='next' onClick={ Aboba } className={c.next}><img src='https://i.ibb.co/vspzHct/5.png'></img></div>
        </div>
    )
}

export default FrontNewsSlider;