import { dark } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import python from 'react-syntax-highlighter/languages/prism/python'

export default {
  ...dark,
  prism: {
    style: okaidia,
    languages: { python }
  }
}
