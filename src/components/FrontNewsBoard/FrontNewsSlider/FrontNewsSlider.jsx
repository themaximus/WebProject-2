import c from './FrontNewsSlider.module.css';
import { Aboba2 , Aboba } from './FrontNewsSlider.js';
import './aboba.css';

const FrontNewsSlider = () => {
    return (
        <div>
            
            <div className={c.slider} id='slider'>
                <div className={c.wrapper} id='wrapper'>
                    <div  className={c.slider_items} id='slider_items'>
                      <div className={c.slider_item1} id='slider_item1'><img src='https://i.ibb.co/gJsC17N/3.png'></img></div>
                      <div className={c.slider_item2} id='slider_item2'><img src='https://i.ibb.co/Kq2zgZL/124.png'></img></div>
                      <div className={c.slider_item3} id='slider_item3'><img src='https://i.ibb.co/44Yk448/11124.png'></img></div>
                      <div></div>
                    </div>
                   
                </div>
                
            </div>
            <div id='back' onClick={ Aboba2 } className={c.back}><img src='https://i.ibb.co/P5gCMs9/1212.png'></img></div>
                <div id='next' onClick={ Aboba } className={c.next}><img src='https://i.ibb.co/Tg0rkg8/1212-2.png'></img></div>
        </div>
    )
}

export default FrontNewsSlider;