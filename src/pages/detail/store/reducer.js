import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    title: '戴望舒——在最美的时光里错过',
    content: '<img src="//upload-images.jianshu.io/upload_images/23488806-8ebae730d29122c4.JPG?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp"/> <p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p> <p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p> <p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p> <p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p><p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p> <p>你是否记得，那个在雨巷中独自哀愁的丁香一样的姑娘？戴望舒的一生，都在追寻那个丁香一样的姑娘</p>'
});

export default (state = defaultState,action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}