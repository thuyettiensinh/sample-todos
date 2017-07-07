const loadingElement = document.createElement('p')
loadingElement.innerHTML = 'Loading...'

function onUpdate(element, binding) {
    if (binding.value) {
        element.appendChild(loadingElement)
    } else if (loadingElement.parentNode) {
        element.removeChild(loadingElement)
    }
}

export default {
    bind: onUpdate,

    update: onUpdate
}
