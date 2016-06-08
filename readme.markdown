## Example OpenShare Usage

### The purpose of this repo is to show how easily one can integrate with social networks using OpenShare.

---
In this example OpenShare is being used to create a Facebook share button and also returns a count of how many times http://openshare.social has been shared on Facebook.

#### example code

```js
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


```

#### quick start

```
git clone https://github.com/jekrb/example-open-share.git
```

```
cd example-open-share
```

```
npm install
```

```
npm start
```

Now navigate to http://localhost:9966 in your browser.
