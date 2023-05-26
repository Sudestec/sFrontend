const roundConstant = 3;

export const currencyFormatter = Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumSignificantDigits: roundConstant, roundingMode: 'ceil' });

export function roundThree (input) {
  return Number( input.toPrecision(roundConstant) );
}

