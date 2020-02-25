import _ from 'lodash'
// import { Nijou, NAME } from './utilities'
import * as utilities from './utilities'

console.log(utilities.Nijou(2))

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!!', `by ${utilities.NAME}`]
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())