/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import BasicElement from './Elements'
import { globalContext } from '../../index'
const Element = props => {
  const { index, time, style, styleBase, title, start, end, classes, dataSet, tooltip, clickElement } = props

  const handleClick = () => {
    clickElement(props)
  }
  const elementStyle = {
    ...time.toStyleLeftAndWidth(start, end),
    ...(clickElement ? { cursor: 'pointer' } : {}),
  }
  const { now } = useContext(globalContext)

  return (
    <div className="rt-track__element" style={{
      ...elementStyle,
      color: '#fff',
    }} onClick={clickElement && handleClick && handleClick}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '40px',
        backgroundColor: '#bbb',
        filter: (index % 2 == 0) ? 'brightness(1.15)' : '',
        ...styleBase
      }}></div>
      <div style={{
        position: 'absolute',
        width: Math.max(0, Math.min(time.toX(end) - time.toX(start), time.toX(now) - time.toX(start))),
        height: '40px',
        backgroundColor: '#1890ff',
        filter: (index % 2 == 0) ? 'brightness(1.15)' : '',
        ...style
      }}></div>
      <BasicElement
        title={title}
        start={start}
        end={end}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
      />
    </div>
  )
}

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  styleBase: PropTypes.shape({}),
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  tooltip: PropTypes.string,
  clickElement: PropTypes.func,
}

Element.defaultTypes = {
  clickElement: undefined,
}

export default Element