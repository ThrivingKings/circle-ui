/* eslint-disable */
import { keyframes } from 'glamor'

export default {
  // Animations
  bounce: keyframes({
    'from, 20%, 53%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      transform: 'translate3d(0,0,0)'
    },
    '40%, 43%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
      transform: 'translate3d(0, -30px, 0)'
    },
    '70%': {
      animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
      transform: 'translate3d(0, -15px, 0)'
    },
    '90%': {
      transform: 'translate3d(0,-4px,0)'
    }
  }),
  flash: keyframes({
    'from, 50%, to': {
      opacity: 1
    },
    '25%, 75%': {
      opacity: 0
    }
  }),
  pulse: keyframes({
    'from': {
      transform: 'scale3d(1, 1, 1)'
    },
    '50%': {
      transform: 'scale3d(1.2, 1.2, 1.2)'
    },
    'to': {
      transform: 'scale3d(1, 1, 1)'
    }
  }),
  rubberBand: keyframes({
    'from': {
      transform: 'scale3d(1, 1, 1)'
    },
    '30%': {
      transform: 'scale3d(1.25, 0.75, 1)'
    },
    '40%': {
      transform: 'scale3d(0.75, 1.25, 1)'
    },
    '50%': {
      transform: 'scale3d(1.15, 0.85, 1)'
    },
    '65%': {
      transform: 'scale3d(.95, 1.05, 1)'
    },
    '75%': {
      transform: 'scale3d(1.05, .95, 1)'
    },
    'to': {
      transform: 'scale3d(1, 1, 1)'
    }
  }),
  shake: keyframes({
    'from, to': {
      transform: 'translate3d(0, 0, 0)'
    },
    '10%, 30%, 50%, 70%, 90%': {
      transform: 'translate3d(-10px, 0, 0)'
    },
    '20%, 40%, 60%, 80%': {
      transform: 'translate3d(10px, 0, 0)'
    }
  }),
  swing: keyframes({
    '20%': {
      transform: 'rotate3d(0, 0, 1, 15deg)'
    },
    '40%': {
      transform: 'rotate3d(0, 0, 1, -10deg)'
    },
    '60%': {
      transform: 'rotate3d(0, 0, 1, 5deg)'
    },
    '80%': {
      transform: 'rotate3d(0, 0, 1, -5deg)'
    },
    'to': {
      transform: 'rotate3d(0, 0, 1, 0deg)'
    }
  }),
  tada: keyframes({
    'from': {
      transform: 'scale3d(1, 1, 1)'
    },
    '10%, 20%': {
      transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)'
    },
    '30%, 50%, 70%, 90%': {
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
    },
    '40%, 60%, 80%': {
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
    },
    'to': {
      transform: 'scale3d(1, 1, 1)'
    }
  }),
  wobble: keyframes({
    'from': {
      transform: 'none'
    },
    '15%': {
      transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)'
    },
    '30%': {
      transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)'
    },
    '45%': {
      transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)'
    },
    '60%': {
      transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)'
    },
    '75%': {
      transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)'
    },
    'to': {
      transform: 'none'
    }
  }),

  // Reveals
  bounceIn: keyframes({
    'from, 20%, 40%, 60%, 80%, to': {
      animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'cale3d(.3, .3, .3)'
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)'
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.03, 1.03, 1.03)'
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)'
    },
    'to': {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)'
    }
  }),
  fadeIn: keyframes({
    'from': {
      opacity: 0
    },
    'to': {
      opacity: 1
    }
  }),
  slideInUp: keyframes({
    'from': {
      transform: 'translate3d(0, 100%, 0)',
      visibility: 'visible'
    },
    'to': {
      transform: 'translate3d(0, 0, 0)'
    }
  }),
  zoomIn: keyframes({
    'from': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)'
    },
    '50%': {
      opacity: 1
    }
  })
}
