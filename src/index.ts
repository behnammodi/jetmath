function percent(a: number, b: number): number {
  return (a / b) * 100;
}

function baseLog(a: number, b: number): number {
  return Math.log(b) / Math.log(a);
}

export { percent, baseLog };
