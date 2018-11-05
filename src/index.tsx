import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

function update() {
  ReactDOM.render(
    <App tabId={window.location.hash} />,
    document.getElementById('root') as HTMLElement
  )
}

update()
window.addEventListener('hashchange', e => update())

registerServiceWorker()
