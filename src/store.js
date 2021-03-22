import { writable } from 'svelte/store';

export const graphViewConfigStore = writable({});
export const embeddingViewConfigStore = writable({});
export const tableViewConfigStore = writable({});
export const instanceViewConfigStore = writable({});
export const mapViewConfigStore = writable({});
export const lowerMapViewConfigStore = writable({});

export const tooltipConfigStore = writable({
  show: false,
  html: '',
  left: 0,
  top: 0,
  width: 0,
  maxWidth: 0,
  fontSize: '1em'
});

export const svgStore = writable(undefined);
export const currInstanceStore = writable(23);

export const hoverTokenStore = writable();
export const wordToSubwordMapStore = writable({});

export const attentionHeadColorStore = writable({});

export const modalStore = writable({
  show: false,
  attention: null,
  layer: null,
  head: null
});

export const sideStore = writable({
  show: false,
  attention: null,
  layer: null,
  head: null
});