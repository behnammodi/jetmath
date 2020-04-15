interface Point {
  x: number,
  y: number
}

function percent(a: number, b: number): number {
  return (a / b) * 100;
}

function baseLog(a: number, b: number): number {
  return Math.log(b) / Math.log(a);
}

function circleX(radians: number, radius: number): number {
  return Math.cos(radians) * radius;
}

function circleY(radians: number, radius: number): number {
  return Math.sin(radians) * radius;
}

function distance(startPoint:Point, endPoint:Point) {
  return Math.hypot(endPoint.x - startPoint.x, endPoint.y - startPoint.y);
}

export { percent, baseLog, circleX, circleY, distance };
