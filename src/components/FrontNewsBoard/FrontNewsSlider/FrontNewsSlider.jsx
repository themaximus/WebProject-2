import c from './FrontNewsSlider.module.css';


const FrontNewsSlider = () => {
    return (
        <div>
            <div className={c.slider} id='slider'>
                <div className={c.wrapper} id='wrapper'>
                    <div id='slider_items'>
                        <div id='slider_item'><img src='https://img1.akspic.ru/originals/3/1/7/9/4/149713-purpur-grafika-fioletovyj-voda-kompaniya_huawei_mediapad_na_m6-1920x1080.jpg'></img></div>
                        <div id='slider_item'></div>
                        <div id='slider_item'></div>
                    </div>
                    
                </div>
            </div>
            <div id='back' className={c.back}>b</div>
                <div id='next'className={c.next}>n</div>
        </div>
    )
}

export default FrontNewsSlider;