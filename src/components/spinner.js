import React, { Component } from 'react'
import Loading from './spinDark.gif'

export default class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading}  alt='loading'  ></img>
      </div>
    )
  }
}
