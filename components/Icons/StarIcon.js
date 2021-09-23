import Icon from '@ant-design/icons'

const StarSvg = () => (
  <svg width="2em" height="2em" id="em9dw3vulqB1" viewBox="0 0 200 200" fill='currentColor' shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
    <polygon
      id="em9dw3vulqB2"
      points="0,-170.880075 50.220394,-69.122442 162.516609,-52.804847 81.258304,26.402424 100.440788,138.244885 0,85.440037 -100.440788,138.244885 -81.258304,26.402424 -162.516609,-52.804847 -50.220394,-69.122442 0,-170.880075"
      transform="matrix(0.476666 0 0 0.476666 100 108.506526)"
      stroke="none"
      stroke-width="0"
    />
  </svg>
)

const StarIcon = ({
  className = '',
  onClick = () => { }
}) => {
  return (
    <div onClick={onClick} className={className}>
      <Icon component={StarSvg} />
    </div>
  )
}

export default StarIcon;



