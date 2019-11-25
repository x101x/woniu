


function Element(tagname, props, children) {
  this.tagName = tagname;
  this.props = props;
  this.children = children;
}

Element.prototype.render = function () {
  let el = document.createElement(this.tagName),
    props = this.props
  for (let propName in props) {
    el.setAttribute(propName, props[propName])
  }
  this.children.forEach((child) => {
    let childEl = (typeof child === 'object') ? new Element(child.tagName, child.props, child.children) : document.createTextNode(child)
    el.appendChild(childEl)
  })
  return el
}