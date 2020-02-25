import _ from 'lodash'
import { Nijou, NAME } from './utilities'
import './style.css'
import './style.scss'
import logo from './logo.png'

console.log(Nijou(2))

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!!', `by ${NAME}`]
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())
document.body.classList.add('haikei')

const image = new Image()
image.src = logo
document.body.appendChild(image)
