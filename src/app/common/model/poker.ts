/**
     * 扑克牌花色种类
     */
export enum pokerType {
    square = 0, // 方块 ♦
    club = 1, // 梅花 ♣
    hearts = 2, // 红桃 ♥
    spade = 3, // 黑桃 ♠
    queen = 4, // 王后
    king = 5, // 大王
    reverse = 6 // 封面
}

/**
     * 扑克牌字段
     * @param name 显示名称
     * @param field 字段名
     * @param value 值
     * @param class 对应样式类
     * @param kind 花色类别
     */
export class Poker {
    name: string;
    field: string;
    value: number;
    kind: pokerType;
    class: string;
}
