export default (props) => {
  const {
    timestring,
    gratitudes,
    visions,
  } = props

  const content = [
    {
      text: 'Grateful',
      style: ['header', 'section1'],
    },
    {
      text: 'Vision',
      style: ['header', 'section2'],
    },
    {
      text: `${timestring}`,
      style: ['header', 'section3'],
    },
    {
      text: 'Gratitude',
      style: ['header', 'section4']
    },
    {
      text: 'Vision',
      style: ['header', 'section4'],
    }
  ]

  if (Object.keys(gratitudes).length > 0) {
    Object.keys(gratitudes).map((key, index) => {
      let gratitude = {
        text: gratitudes[key],
        style: ['section5']
      }
      // just start at index 5 as there are several headings (currently 4) inserted first
      content.splice(index + 4, 0, gratitude)
    })
  }

  if (Object.keys(visions).length > 0) {
    Object.keys(visions).map((key, index) => {
      let vision = {
        text: visions[key],
        style: ['section5']
      }
      // visions are currently at the end, so we can just push
      content.push(vision)
    })
  }

  return {
    info: {
      title: 'Grateful Vision',
      author: 'Grateful Vision',
      subject: 'Grateful Vision',
      keywords: 'Grateful Vision',
    },
    pageMargins: [0, 0, 0, 0],
    content,
    styles: {
      header: {
        fontSize: 22,
        alignment: 'center',
      },
      section1: {
        color: '#5190a5',
        font: 'Righteous',
        margin: [0, 20, 0, 0]
      },
      section2: {
        color: '#5190a5',
        font: 'Snippet',
      },
      section3: {
        color: '#5190a5',
        font: 'CodyStar-Light',
        margin: [0, 20, 0, 0]
      },
      section4: {
        color: '#5190a5',
        font: 'CodyStar-Light',
        margin: [0, 20, 0, 0]
      },
      section5: {
        color: '#5190a5',
        font: 'OpenSans-Regular',
        margin: [180, 20, 180, 0],
        fontSize: 14,
        alignment: 'center'
      }
    }
  }
}