var intlNumberFormatValues = ['de-DE', 'currency', 'EUR'];

export var formatter = new Intl.NumberFormat(intlNumberFormatValues[0], {
  style: intlNumberFormatValues[1],
  currency: intlNumberFormatValues[2],
});

export function rangeMap(n: number, fn: (i: number) => any) {
  const arr = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}