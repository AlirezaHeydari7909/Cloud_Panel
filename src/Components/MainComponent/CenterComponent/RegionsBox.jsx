import React from 'react'

export default function RegionsBox(props) {
  // handler for selected box: selected box ---> border blue
  let region = document.getElementsByClassName('region')
  Object.values(region).forEach(element => {
    element.addEventListener('click', () => {
      document.querySelector('.border-blue').classList.remove('border-blue')
      element.classList.add('border-blue')
    })
  });
  return (
    <div
      className={`region border rounded flex items-center p-2 hover:shadow ${props.name === 'US' ? ('border-blue') : 'border'}`}
      id='region'>

      <img className='h-7 mr-2' src={`/img/${props.name}.svg`} alt={`${props.name}-flag`} />
      <span>{props.name}</span>
    </div>
  )
}
