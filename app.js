const OpenShare = require('open-share')

new OpenShare.share({
  type: 'facebook',
  link: 'http://openshare.social',
  appendTo: document.body,
  innerHTML: 'Share OpenShare on facebook!',
  element: 'button'
})

new OpenShare.count({
  type: 'facebook',
  url: 'http://openshare.social',
  appendTo: document.body
}, node => {
  console.log(`OpenShare has been shared on Facebook ${node.innerHTML} times!`)
  node.style.color = 'blue'
})
