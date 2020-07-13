import Quill from 'quill'

import Shortcode from './Shortcode'
import GrammarlyInline from './GrammarlyInline'
import lineHeight from './lineHeight'
// import TableModule from 'quill/modules/table'

// Quill.register('modules/table', TableModule)

Quill.register(Shortcode)
Quill.register(GrammarlyInline)
Quill.register({ 'formats/lineHeight': lineHeight }, true)
