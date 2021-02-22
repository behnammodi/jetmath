interface Point {
    x: number;
    y: number;
}
declare function percent(a: number, b: number): number;
declare function baseLog(a: number, b: number): number;
declare function circleX(radians: number, radius: number): number;
declare function circleY(radians: number, radius: number): number;
declare function distance(startPoint: Point, endPoint: Point): number;
export { percent, baseLog, circleX, circleY, distance };
