const units = {
  'px': (nb) => nb + 'px',
  'cm': (nb) => nb + 'cm',
  'mm': (nb) => nb + 'mm',
  'in': (nb) => nb + 'in',
  'pt': (nb) => nb + 'pt',
  'pc': (nb) => nb + 'pc',
  'pct': (nb) => nb + '%',
  'em': (nb) => nb + 'em',
  'ex': (nb) => nb + 'ex',
  'ch': (nb) => nb + 'ch',
  'rem': (nb) => nb + 'rem',
  'vw': (nb) => nb + 'vw',
  'vh': (nb) => nb + 'vh',
  'deg': (nb) => nb + 'deg',
  'vmin': (nb) => nb + 'vmin',
  'vmax': (nb) => {
    // TODO : display warning for IE
    return nb + 'vmax';
  }
};

export default units;
