import { configure } from '@kadira/storybook'

function loadStories() {
  require('../stories/animate.js'),
  require('../stories/button.js'),
  require('../stories/chia-text.js'),
  require('../stories/form.js'),
  require('../stories/layout.js')
}

configure(loadStories, module)
