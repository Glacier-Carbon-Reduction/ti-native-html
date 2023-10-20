function transformAndStoreAccordions() {
  const accordions = document.querySelectorAll('div[x-data]')

  accordions.forEach((accordion, index) => {
    if(accordion){
        const id = index + 1
        transformAccordionElement(accordion, id)
    }
  })
}

function transformAccordionElement(accordion, id) {
  if (accordion) {
    accordion.removeAttribute('x-data')
    accordion.removeAttribute('role')
    accordion.id = `accordion-${id}`
  }

  const button = accordion.querySelector('button')
  if (button) {
    button.removeAttribute('@click')
    button.removeAttribute(':aria-expanded')
    button.setAttribute('onclick', `toggleAccordion(${id})`)
  }

  const content = accordion.querySelector('div[x-show="expanded"]')
  if (content) {
    content.removeAttribute('x-show')
    content.removeAttribute('x-collapse')
    content.removeAttribute('style')
    if (id === 1) {
      content.classList.add('accordion-content')
    } else {
      content.classList.add('accordion-content', 'accordion-hidden')
    }
    content.hidden = false
  }

  const showIcon = accordion.querySelector('span[x-show="expanded"]')
  if (showIcon) {
    showIcon.removeAttribute('style')
    showIcon.removeAttribute('x-show')
    showIcon.classList.add('accordion-icon', 'hidden')
  }

  const hideIcon = accordion.querySelector('span[x-show="!expanded"]')
  if (hideIcon) {
    hideIcon.removeAttribute('style')
    hideIcon.removeAttribute('x-show')
    hideIcon.classList.add('accordion-icon')
  }
}

transformAndStoreAccordions()
