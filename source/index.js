/*
 *  index入口文件
 */
import './css/style.scss'
import 'animate.css'
import 'csshake'
import EasyTyper from 'easy-typer-js'




const easyTyperTarget = '#word-chinese'
const easyTyperConfig = {
    output: '',
    isEnd: false,
    speed: 80,
    singleBack: false,
    sleep: 0,
    type: 'normal',
    backSpeed: 40,
    'sentencePause': false
}
new EasyTyper(
    easyTyperConfig, 
    `You can't fly if you never try.<br>不做尝试就永远无法飞翔.
    `, 
    () => {}, 
    (output, instance) => {
        $(easyTyperTarget).html(`${output}`);
    }
)

