import {Intro} from '../../lessons/nodejs/Intro';
import {CommonModule} from '../../lessons/nodejs/CommonModule';
import {Server} from '../../lessons/nodejs/Server';
import {Express} from '../../lessons/nodejs/Express';
import {MiddleWare} from '../../lessons/nodejs/MiddleWare';
import {Router} from '../../lessons/nodejs/Router';
import {Exercise} from '../../lessons/nodejs/Exercise';
const lessons = [
    {
        name: 'nodejs',
        text: 'NodeJs',
        menus: [
            {
                name: 'base',
                text: 'NodeJs基础',
                items: [
                    {name: 'No.1', text: '简介&安装', comp: Intro},
                    {name: 'No.2', text: '内置常用模块', comp: CommonModule},
                ]
            }, {
                name: 'server',
                text: 'Web服务器开发',
                items: [
                    {name: 'No.1', text: '基础知识', comp: Server},
                    {name: 'No.2', text: 'Express框架的使用', comp: Express},
                    {name: 'No.3', text: '中间件', comp: MiddleWare},
                    {name: 'No.4', text: '路由(get/post)', comp: Router},
                    {name: 'No.5', text: '练习(node实现遍历目录树)', comp: Exercise},
                ]
            }, {
                name: 'mongodb',
                text: 'MongoDB数据库安装',
                items: [
                    {name: 'No.1', text: '下载与安装'},
                    {name: 'No.2', text: '命令行操作'},
                    {name: 'No.3', text: 'Node.js连接MongoDB'},
                    {name: 'No.4', text: '整合MongoDB+Express'},
                    {name: 'No.5', text: '自动化测试'},
                ]
            },
            {
                name: 'register/login',
                text: '注册登录',
                items: [
                    {name: 'No.1', text: 'md5加密'},
                    {name: 'No.2', text: 'token验证JWT模块'},
                    {name: 'No.3', text: 'Cookie+Session'},
                ]
            },
            {
                name: 'upload',
                text: '文件上传',
                items: [
                    {name: 'No.1', text: 'multer 模块安装使用'},
                ]
            }
        ]
    },
    {
        name: 'vuejs',
        text: 'VueJs',
        menus: [
            {
                name: 'day1',
                text: 'day1',
                items: [
                    {name: 'exp1', text: 'exp1'},
                    {name: 'exp2', text: 'exp2'},
                    {name: 'exp3', text: 'exp3'},
                ]
            }, {
                name: 'day2',
                text: 'day2',
                items: [
                    {name: 'exp4', text: 'exp1'},
                    {name: 'exp5', text: 'exp2'},
                    {name: 'exp6', text: 'exp3'},
                ]
            }
        ]
    },
    {
        name: 'reactjs',
        text: 'ReactJs',
        menus: [
            {
                name: 'day1',
                text: 'day1',
                items: [
                    {name: 'exp1', text: 'exp1'},
                    {name: 'exp2', text: 'exp2'},
                    {name: 'exp3', text: 'exp3'},
                ]
            }, {
                name: 'day2',
                text: 'day2',
                items: [
                    {name: 'exp4', text: 'exp1'},
                    {name: 'exp5', text: 'exp2'},
                    {name: 'exp6', text: 'exp3'},
                ]
            }
        ]
    },
];

const initState = {
    lessons,
    currentLesson: lessons[0],
    currentItem: lessons[0].menus[0].items[0]
};
export function navReducer(state = initState, action) {
    switch( action.type ) {
        case 'switchNav':
            const lesson = state.lessons.find((lesson) => {
                return lesson.name === action.payload.navName
            });
            console.log('switch ' , action.payload);
            return {...state, currentLesson: lesson};
        case 'switchItem':
            return {...state, currentItem: action.payload.item};
        default:
            return state;
    }
}
