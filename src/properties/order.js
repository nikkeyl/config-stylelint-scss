import deprecated from './deprecated.js';
import experimental from './experimental.js';
import nonStandard from './non-standard.js';

import REGEXP from '../utils/regexps.js';

import createLogicalGroup from '../utils/create-logical-group.js';
import createAtRule from '../utils/create-at-rule.js';
import createRule from '../utils/create-rule.js';

const propertiesOrder = {
  'order/order': [
    'custom-properties',
    'dollar-variables',
    createAtRule('include', false),
    'declarations',
    createRule('::selection'),
    createRule('::backdrop'),
    createRule('::before'),
    createRule('::after'),
    createRule('::marker'),
    createRule('::first-line'),
    createRule('::first-letter'),
    createRule('::cue'),
    createRule('::cue-region'),
    createRule('::placeholder'),
    createRule('::file-selector-button'),
    createRule('::highlight'),
    createRule('::part'),
    createRule('::slotted'),
    createRule(experimental.pseudo.element.targetText),
    createRule(experimental.pseudo.element.spellingError),
    createRule(experimental.pseudo.element.grammarError),
    createRule(experimental.pseudo.element.viewTransition),
    createRule(experimental.pseudo.element.view.transition.group),
    createRule(experimental.pseudo.element.view.transition.imagePair),
    createRule(experimental.pseudo.element.view.transition.new),
    createRule(experimental.pseudo.element.view.transition.old),
    createRule(experimental.pseudo.element.webkit.slider.runnableTrack),
    createRule(experimental.pseudo.element.webkit.slider.thumb),
    createRule(experimental.pseudo.element.moz.focusInner),
    createRule(nonStandard.pseudo.element.webkit.innerSpinButton),
    createRule(nonStandard.pseudo.element.webkit.meter.bar),
    createRule(nonStandard.pseudo.element.webkit.meter.evenLessGoodValue),
    createRule(nonStandard.pseudo.element.webkit.meter.innerElement),
    createRule(nonStandard.pseudo.element.webkit.meter.optimumValue),
    createRule(nonStandard.pseudo.element.webkit.meter.subOptimumValue),
    createRule(nonStandard.pseudo.element.webkit.progress.bar),
    createRule(nonStandard.pseudo.element.webkit.progress.innerElement),
    createRule(nonStandard.pseudo.element.webkit.progress.value),
    createRule(nonStandard.pseudo.element.webkit.scrollbar),
    createRule(nonStandard.pseudo.element.webkit.search.resultsButton),
    createRule(nonStandard.pseudo.element.webkit.search.cancelButton),
    createRule(nonStandard.pseudo.element.moz.colorSwatch),
    createRule(nonStandard.pseudo.element.moz.list.bullet),
    createRule(nonStandard.pseudo.element.moz.list.number),
    createRule(nonStandard.pseudo.element.moz.page),
    createRule(nonStandard.pseudo.element.moz.pageSequence),
    createRule(nonStandard.pseudo.element.moz.pageSequence),
    createRule(nonStandard.pseudo.element.moz.progressBar),
    createRule(nonStandard.pseudo.element.moz.rangeTrack),
    createRule(nonStandard.pseudo.element.moz.rangeProgress),
    createRule(nonStandard.pseudo.element.moz.rangeThumb),
    createRule(nonStandard.pseudo.element.moz.scrolledPageSequence),
    createRule(':root'),
    createRule(':lang'),
    createRule(':scope'),
    createRule(':modal'),
    createRule(':past'),
    createRule(':current'),
    createRule(':future'),
    createRule(':where'),
    createRule(':is'),
    createRule(':has'),
    createRule(':not'),
    createRule(':empty'),
    createRule(':target'),
    createRule(':link'),
    createRule(':local-link'),
    createRule(':any-link'),
    createRule(':defined'),
    createRule(':buffering'),
    createRule(':placeholder-shown'),
    createRule(':right'),
    createRule(':left'),
    createRule(':host'),
    createRule(':host-content'),
    createRule(':only-of-type'),
    createRule(':first-of-type'),
    createRule(':nth-of-type'),
    createRule(':last-of-type'),
    createRule(':nth-last-of-type'),
    createRule(':only-child'),
    createRule(':first'),
    createRule(':first-child'),
    createRule(':nth-child'),
    createRule(':last-child'),
    createRule(':nth-last-child'),
    createRule(experimental.pseudo.class.targetWithin),
    createRule(experimental.pseudo.class.blank),
    createRule(':default'),
    createRule(':enabled'),
    createRule(':disabled'),
    createRule(':hover'),
    createRule(':focus'),
    createRule(':focus-within'),
    createRule(':focus-visible'),
    createRule(':active'),
    createRule(':checked'),
    createRule(':visited'),
    createRule(':indeterminate'),
    createRule(':in-range'),
    createRule(':out-of-range'),
    createRule(':valid'),
    createRule(':invalid'),
    createRule(':user-valid'),
    createRule(':user-invalid'),
    createRule(':read-only'),
    createRule(':read-write'),
    createRule(':optional'),
    createRule(':required'),
    createRule(':popover-open'),
    createRule(':fullscreen'),
    createRule(':picture-in-picture'),
    createRule(':autofill'),
    createRule(':playing'),
    createRule(':paused'),
    createRule(':stalled'),
    createRule(':muted'),
    createRule(':volume-locked'),
    createRule(':seeking'),
    createRule(nonStandard.pseudo.class.moz.broken),
    createRule(nonStandard.pseudo.class.moz.dragOver),
    createRule(nonStandard.pseudo.class.moz.firstNode),
    createRule(nonStandard.pseudo.class.moz.lastNode),
    createRule(nonStandard.pseudo.class.moz.handler.blocked),
    createRule(nonStandard.pseudo.class.moz.handler.crashed),
    createRule(nonStandard.pseudo.class.moz.handler.disabled),
    createRule(nonStandard.pseudo.class.moz.loading),
    createRule(nonStandard.pseudo.class.moz.localeDir),
    createRule(nonStandard.pseudo.class.moz.onlyWhitespace),
    createRule(nonStandard.pseudo.class.moz.submitInvalid),
    createRule(nonStandard.pseudo.class.moz.suppressed),
    createRule(nonStandard.pseudo.class.moz.userDisabled),
    createRule(nonStandard.pseudo.class.moz.windowInactive),
    createRule(REGEXP.NESTED.ATTRIBUTE),
    createRule(REGEXP.NESTED.CLASS),
    createRule(REGEXP.NESTED.MODIFIER),
    createRule(REGEXP.NESTED.PARENT),
    'rules',
    createAtRule('include', true),
    'at-rules',
  ],
  'order/properties-order': [
    [
      createLogicalGroup('All', ['all', 'page']),
      createLogicalGroup('Print', [
        'break-before',
        'break-inside',
        'break-after',
        'orphans',
        'widows',
      ]),
      createLogicalGroup('Actions', [
        'cursor',
        'pointer-events',
        'touch-action',
        'resize',
        nonStandard.property.zoom,
      ]),
      createLogicalGroup('User Actions', ['user-select', 'user-zoom']),
      createLogicalGroup('Content', ['content', 'quotes']),
      createLogicalGroup('Counter', [
        'counter-increment',
        'counter-set',
        'counter-reset',
      ]),
      createLogicalGroup('List', [
        'list-style',
        'list-style-type',
        'list-style-position',
        'list-style-image',
      ]),
      createLogicalGroup('Marker', [
        'marker',
        'marker-start',
        'marker-mid',
        'marker-end',
      ]),
      createLogicalGroup('Display', [
        'display',
        'opacity',
        'isolation',
        'visibility',
        'backface-visibility',
        'appearance',
        experimental.property.contentVisibility,
      ]),
      createLogicalGroup('Position', [
        'position',
        deprecated.property.float,
        deprecated.property.clear,
        'offset',
        'offset-position',
        'offset-path',
        'offset-distance',
        'offset-rotate',
        'offset-anchor',
        'inset',
        'inset-block',
        'inset-block-start',
        'inset-block-end',
        'inset-inline',
        'inset-inline-start',
        'inset-inline-end',
        deprecated.property.top,
        deprecated.property.right,
        deprecated.property.bottom,
        deprecated.property.left,
        'z-index',
      ]),
      createLogicalGroup('Outline', [
        'outline',
        'outline-width',
        'outline-style',
        'outline-color',
        'outline-offset',
      ]),
      createLogicalGroup('Shape', [
        'shape-outside',
        'shape-margin',
        'shape-image-threshold',
      ]),
      createLogicalGroup('Mask', [
        'mask',
        'mask-border',
        'mask-border-source',
        'mask-border-slice',
        'mask-border-width',
        'mask-border-outset',
        'mask-border-repeat',
        'mask-border-mode',
        'mask-image',
        'mask-clip',
        'mask-origin',
        'mask-type',
        'mask-size',
        'mask-position',
        'mask-repeat',
        'mask-mode',
        'mask-composite',
      ]),
      createLogicalGroup('Margin', [
        'margin',
        'margin-block',
        'margin-block-start',
        'margin-block-end',
        'margin-inline',
        'margin-inline-start',
        'margin-inline-end',
        deprecated.property.margin.top,
        deprecated.property.margin.right,
        deprecated.property.margin.bottom,
        deprecated.property.margin.left,
        experimental.property.marginTrim,
      ]),
      createLogicalGroup('Border', [
        'border',
        'border-width',
        'border-style',
        'border-color',
        'border-radius',
        'border-start-start-radius',
        'border-start-end-radius',
        'border-end-start-radius',
        'border-end-end-radius',
        'border-block',
        'border-block-width',
        'border-block-style',
        'border-block-color',
        'border-block-start',
        'border-block-start-width',
        'border-block-start-style',
        'border-block-start-color',
        'border-block-end',
        'border-block-end-width',
        'border-block-end-style',
        'border-block-end-color',
        'border-inline',
        'border-inline-width',
        'border-inline-style',
        'border-inline-color',
        'border-inline-start',
        'border-inline-start-width',
        'border-inline-start-style',
        'border-inline-start-color',
        'border-inline-end',
        'border-inline-end-width',
        'border-inline-end-style',
        'border-inline-end-color',
        deprecated.property.borderTop,
        deprecated.property.border.top.leftRadius,
        deprecated.property.border.top.rightRadius,
        deprecated.property.border.top.width,
        deprecated.property.border.top.style,
        deprecated.property.border.top.color,
        deprecated.property.borderRight,
        deprecated.property.border.right.width,
        deprecated.property.border.right.style,
        deprecated.property.border.right.color,
        deprecated.property.borderBottom,
        deprecated.property.border.bottom.leftRadius,
        deprecated.property.border.bottom.rightRadius,
        deprecated.property.border.bottom.width,
        deprecated.property.border.bottom.style,
        deprecated.property.border.bottom.color,
        deprecated.property.borderLeft,
        deprecated.property.border.left.width,
        deprecated.property.border.left.style,
        deprecated.property.border.left.color,
        'border-image',
        'border-image-source',
        'border-image-slice',
        'border-image-width',
        'border-image-outset',
        'border-image-repeat',
      ]),
      createLogicalGroup('Box', [
        'box-sizing',
        'box-decoration-break',
        'box-shadow',
      ]),
      createLogicalGroup('Object', ['object-fit', 'object-position']),
      createLogicalGroup('container', [
        'container',
        'container-name',
        'container-type',
      ]),
      createLogicalGroup('Contain', [
        'contain',
        'contain-intrinsic-size',
        'contain-intrinsic-block-size',
        'contain-intrinsic-inline-size',
        deprecated.property.contain.intrinsic.height,
        deprecated.property.contain.intrinsic.width,
      ]),
      createLogicalGroup('Dimensions', [
        'aspect-ratio',
        'block-size',
        'min-block-size',
        'max-block-size',
        'inline-size',
        'min-inline-size',
        'max-inline-size',
        deprecated.property.height,
        deprecated.property.min.height,
        deprecated.property.max.height,
        deprecated.property.width,
        deprecated.property.min.width,
        deprecated.property.max.width,
      ]),
      createLogicalGroup('Padding', [
        'padding',
        'padding-block',
        'padding-block-start',
        'padding-block-end',
        'padding-inline',
        'padding-inline-start',
        'padding-inline-end',
        deprecated.property.padding.top,
        deprecated.property.padding.right,
        deprecated.property.padding.bottom,
        deprecated.property.padding.left,
      ]),
      createLogicalGroup('Overflow', [
        'overflow',
        'overflow-clip-margin',
        'overflow-block',
        'overflow-inline',
        deprecated.property.overflow.y,
        deprecated.property.overflow.x,
        'overflow-wrap',
        'overflow-anchor',
      ]),
      createLogicalGroup('Overscroll', [
        'overscroll-behavior',
        'overscroll-behavior-block',
        'overscroll-behavior-inline',
        deprecated.property.overscroll.behavior.y,
        deprecated.property.overscroll.behavior.x,
      ]),
      createLogicalGroup('Scroll', [
        'scroll-margin',
        'scroll-margin-block',
        'scroll-margin-block-start',
        'scroll-margin-block-end',
        'scroll-margin-inline',
        'scroll-margin-inline-start',
        'scroll-margin-inline-end',
        deprecated.property.scroll.margin.top,
        deprecated.property.scroll.margin.right,
        deprecated.property.scroll.margin.bottom,
        deprecated.property.scroll.margin.left,
        'scroll-padding',
        'scroll-padding-block',
        'scroll-padding-block-start',
        'scroll-padding-block-end',
        'scroll-padding-inline',
        'scroll-padding-inline-start',
        'scroll-padding-inline-end',
        deprecated.property.scroll.padding.top,
        deprecated.property.scroll.padding.right,
        deprecated.property.scroll.padding.bottom,
        deprecated.property.scroll.padding.left,
        'scroll-snap-type',
        'scroll-snap-align',
        'scroll-snap-stop',
        'scroll-behavior',
        experimental.property.scroll.timeline,
        experimental.property.scroll.timelineName,
        experimental.property.scroll.timelineAxis,
      ]),
      createLogicalGroup('Scrollbar', [
        'scrollbar-gutter',
        'scrollbar-width',
        'scrollbar-color',
      ]),
      createLogicalGroup('Columns', [
        'columns',
        'column-width',
        'column-count',
        'column-fill',
        'column-span',
        'column-rule',
        'column-rule-width',
        'column-rule-style',
        'column-rule-color',
      ]),
      createLogicalGroup('Grid', [
        'grid',
        'grid-area',
        'grid-template',
        'grid-template-areas',
        'grid-template-columns',
        'grid-template-rows',
        'grid-auto-flow',
        'grid-auto-columns',
        'grid-column',
        'grid-column-start',
        'grid-column-end',
        'grid-auto-rows',
        'grid-row',
        'grid-row-start',
        'grid-row-end',
        'gap',
        'column-gap',
        'row-gap',
        experimental.property.masonryAutoFlow,
      ]),
      createLogicalGroup('Flex', [
        'flex',
        'flex-grow',
        'flex-shrink',
        'flex-basis',
        'flex-flow',
        'flex-direction',
        'flex-wrap',
        'order',
      ]),
      createLogicalGroup('Table', [
        'table-layout',
        'border-spacing',
        'border-collapse',
        'empty-cells',
        'vertical-align',
        'caption-side',
      ]),
      createLogicalGroup('Alignment', [
        'place-content',
        'place-items',
        'place-self',
        experimental.property.alignTracks,
        'align-content',
        'align-items',
        'align-self',
        experimental.property.justifyTracks,
        'justify-content',
        'justify-items',
        'justify-self',
      ]),
      createLogicalGroup('Image', [
        'image-orientation',
        'image-rendering',
        experimental.property.imageResolution,
      ]),
      createLogicalGroup('Typography', [
        'unicode-bidi',
        'unicode-range',
        'tab-size',
        'direction',
        'writing-mode',
        'white-space',
        experimental.property.whiteSpaceCollapse,
        'ruby-position',
        experimental.property.rubyAlign,
        'line-break',
        'line-height',
        experimental.property.lineHeightStep,
        'word-spacing',
        'word-wrap',
        'word-break',
        experimental.property.initial.letter,
        experimental.property.initial.letterAlign,
        'letter-spacing',
        'hyphens',
        'hyphenate-character',
        'hyphenate-limit-chars',
        'hanging-punctuation',
      ]),
      createLogicalGroup('Text', [
        'text-overflow',
        'text-rendering',
        'text-indent',
        'text-justify',
        'text-orientation',
        'text-shadow',
        'text-transform',
        'text-anchor',
        'text-wrap',
        'text-align',
        'text-align-last',
        experimental.property.text.sizeAdjust,
        'text-combine-upright',
        'text-decoration',
        experimental.property.text.decorationSkip,
        'text-decoration-skip-ink',
        'text-decoration-thickness',
        'text-decoration-line',
        'text-decoration-style',
        'text-decoration-color',
        'text-emphasis',
        'text-emphasis-position',
        'text-emphasis-style',
        'text-emphasis-color',
        'text-underline-position',
        'text-underline-offset',
      ]),
      createLogicalGroup('Font', [
        'src',
        'font',
        'font-family',
        'font-size',
        'font-size-adjust',
        'font-weight',
        'font-style',
        'font-display',
        'font-palette',
        'font-kerning',
        'font-stretch',
        nonStandard.property.fontSmooth,
        'font-optical-sizing',
        'font-language-override',
        'font-feature-settings',
        'font-synthesis',
        'font-synthesis-weight',
        'font-synthesis-style',
        'font-synthesis-small-caps',
        'font-variant',
        'font-variant-position',
        'font-variant-ligatures',
        'font-variant-numeric',
        'font-variant-emoji',
        'font-variant-caps',
        'font-variant-east-asian',
        'font-variant-alternates',
        'font-variation-settings',
      ]),
      createLogicalGroup('Math', [
        'math-depth',
        experimental.property.mathShift,
        'math-style',
      ]),
      createLogicalGroup('SVG', ['fill', 'stroke', 'paint-order']),
      createLogicalGroup('Color', [
        'color-scheme',
        'accent-color',
        'color',
        'caret-color',
        'forced-color-adjust',
        'print-color-adjust',
      ]),
      createLogicalGroup('Background', [
        'background',
        'background-image',
        'background-color',
        'background-origin',
        'background-size',
        'background-position',
        'background-position-y',
        'background-position-x',
        'background-repeat',
        'background-attachment',
        'background-clip',
        'background-blend-mode',
      ]),
      createLogicalGroup('Filter', [
        experimental.property.overlay,
        'filter',
        'backdrop-filter',
        'mix-blend-mode',
        'clip-path',
      ]),
      createLogicalGroup('Transform', [
        'transform',
        'transform-origin',
        'transform-box',
        'transform-style',
        'translate',
        'scale',
        'rotate',
        'will-change',
        'perspective',
        'perspective-origin',
      ]),
      createLogicalGroup('Transition', [
        'transition',
        'transition-property',
        'transition-duration',
        'transition-timing-function',
        'transition-delay',
        experimental.property.transitionBehavior,
      ]),
      createLogicalGroup('Animation', [
        'animation',
        'animation-name',
        'animation-duration',
        'animation-timing-function',
        'animation-delay',
        'animation-iteration-count',
        'animation-direction',
        'animation-fill-mode',
        'animation-play-state',
        'animation-composition',
        experimental.property.timelineScope,
        experimental.property.animation.timeline,
        experimental.property.animation.range,
        experimental.property.animation.rangeStart,
        experimental.property.animation.rangeEnd,
      ]),
      createLogicalGroup('View Timeline', [
        experimental.property.view.timeline,
        experimental.property.view.timelineName,
        experimental.property.view.timelineAxis,
        experimental.property.view.timelineInset,
        experimental.property.view.transitionName,
      ]),
    ],
    {
      unspecified: 'bottomAlphabetical',
    },
  ],
};

export default propertiesOrder;