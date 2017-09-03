import * as _ from 'lodash';
import { Poker, pokerType } from './model/poker';


const pokers: Array<Poker> = [
    { name: '方块2', field: 'square2', value: 2, kind: pokerType.square, class: 'poker-square-2' },
    { name: '方块3', field: 'square3', value: 3, kind: pokerType.square, class: 'poker-square-3' },
    { name: '方块4', field: 'square4', value: 4, kind: pokerType.square, class: 'poker-square-4' },
    { name: '方块5', field: 'square5', value: 5, kind: pokerType.square, class: 'poker-square-5' },
    { name: '方块6', field: 'square6', value: 6, kind: pokerType.square, class: 'poker-square-6' },
    { name: '方块7', field: 'square7', value: 7, kind: pokerType.square, class: 'poker-square-7' },
    { name: '方块8', field: 'square8', value: 8, kind: pokerType.square, class: 'poker-square-8' },
    { name: '方块9', field: 'square9', value: 9, kind: pokerType.square, class: 'poker-square-9' },
    { name: '方块10', field: 'square10', value: 10, kind: pokerType.square, class: 'poker-square-10' },
    { name: '方块J', field: 'squareJ', value: 11, kind: pokerType.square, class: 'poker-square-J' },
    { name: '方块Q', field: 'squareQ', value: 12, kind: pokerType.square, class: 'poker-square-Q' },
    { name: '方块K', field: 'squareK', value: 13, kind: pokerType.square, class: 'poker-square-K' },
    { name: '方块A', field: 'squareA', value: 14, kind: pokerType.square, class: 'poker-square-A' },
    { name: '红桃2', field: 'hearts2', value: 2, kind: pokerType.hearts, class: 'poker-hearts-2' },
    { name: '红桃3', field: 'hearts3', value: 3, kind: pokerType.hearts, class: 'poker-hearts-3' },
    { name: '红桃4', field: 'hearts4', value: 4, kind: pokerType.hearts, class: 'poker-hearts-4' },
    { name: '红桃5', field: 'hearts5', value: 5, kind: pokerType.hearts, class: 'poker-hearts-5' },
    { name: '红桃6', field: 'hearts6', value: 6, kind: pokerType.hearts, class: 'poker-hearts-6' },
    { name: '红桃7', field: 'hearts7', value: 7, kind: pokerType.hearts, class: 'poker-hearts-7' },
    { name: '红桃8', field: 'hearts8', value: 8, kind: pokerType.hearts, class: 'poker-hearts-8' },
    { name: '红桃9', field: 'hearts9', value: 9, kind: pokerType.hearts, class: 'poker-hearts-9' },
    { name: '红桃10', field: 'hearts10', value: 10, kind: pokerType.hearts, class: 'poker-hearts-10' },
    { name: '红桃J', field: 'heartsJ', value: 11, kind: pokerType.hearts, class: 'poker-hearts-J' },
    { name: '红桃Q', field: 'heartsQ', value: 12, kind: pokerType.hearts, class: 'poker-hearts-Q' },
    { name: '红桃K', field: 'heartsK', value: 13, kind: pokerType.hearts, class: 'poker-hearts-K' },
    { name: '红桃A', field: 'heartsA', value: 14, kind: pokerType.hearts, class: 'poker-hearts-A' },
    { name: '梅花2', field: 'club2', value: 2, kind: pokerType.club, class: 'poker-club-2' },
    { name: '梅花3', field: 'club3', value: 3, kind: pokerType.club, class: 'poker-club-3' },
    { name: '梅花4', field: 'club4', value: 4, kind: pokerType.club, class: 'poker-club-4' },
    { name: '梅花5', field: 'club5', value: 5, kind: pokerType.club, class: 'poker-club-5' },
    { name: '梅花6', field: 'club6', value: 6, kind: pokerType.club, class: 'poker-club-6' },
    { name: '梅花7', field: 'club7', value: 7, kind: pokerType.club, class: 'poker-club-7' },
    { name: '梅花8', field: 'club8', value: 8, kind: pokerType.club, class: 'poker-club-8' },
    { name: '梅花9', field: 'club9', value: 9, kind: pokerType.club, class: 'poker-club-9' },
    { name: '梅花10', field: 'club10', value: 10, kind: pokerType.club, class: 'poker-club-10' },
    { name: '梅花J', field: 'clubJ', value: 11, kind: pokerType.club, class: 'poker-club-J' },
    { name: '梅花Q', field: 'clubQ', value: 12, kind: pokerType.club, class: 'poker-club-Q' },
    { name: '梅花K', field: 'clubK', value: 13, kind: pokerType.club, class: 'poker-club-K' },
    { name: '梅花A', field: 'clubA', value: 14, kind: pokerType.club, class: 'poker-club-A' },
    { name: '黑桃2', field: 'spade2', value: 2, kind: pokerType.spade, class: 'poker-spade-2' },
    { name: '黑桃3', field: 'spade3', value: 3, kind: pokerType.spade, class: 'poker-spade-3' },
    { name: '黑桃4', field: 'spade4', value: 4, kind: pokerType.spade, class: 'poker-spade-4' },
    { name: '黑桃5', field: 'spade5', value: 5, kind: pokerType.spade, class: 'poker-spade-5' },
    { name: '黑桃6', field: 'spade6', value: 6, kind: pokerType.spade, class: 'poker-spade-6' },
    { name: '黑桃7', field: 'spade7', value: 7, kind: pokerType.spade, class: 'poker-spade-7' },
    { name: '黑桃8', field: 'spade8', value: 8, kind: pokerType.spade, class: 'poker-spade-8' },
    { name: '黑桃9', field: 'spade9', value: 9, kind: pokerType.spade, class: 'poker-spade-9' },
    { name: '黑桃10', field: 'spade10', value: 10, kind: pokerType.spade, class: 'poker-spade-10' },
    { name: '黑桃J', field: 'spadeJ', value: 11, kind: pokerType.spade, class: 'poker-spade-J' },
    { name: '黑桃Q', field: 'spadeQ', value: 12, kind: pokerType.spade, class: 'poker-spade-Q' },
    { name: '黑桃K', field: 'spadeK', value: 13, kind: pokerType.spade, class: 'poker-spade-K' },
    { name: '黑桃A', field: 'spadeA', value: 14, kind: pokerType.spade, class: 'poker-spade-A' },
    { name: '王后', field: 'queen', value: 15, kind: pokerType.queen, class: 'poker-queen' },
    { name: '大王', field: 'king', value: 16, kind: pokerType.king, class: 'poker-king' }
];

export class Helper {

    // 随机获取扑克牌的中一张(一副牌共有54张)
    public static getPoker(count: number): Array<Poker> {
        const randomPokers: Array<Poker> = [];
        for (let i = 0; i < count; i++) {
            const j = _.random(0, 53);
            randomPokers.push(pokers[j]);
        }
        return randomPokers;
    }

}
