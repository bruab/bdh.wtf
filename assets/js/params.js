/* Customize copy based on query parameters demo */
// define custom copy per ad group
var adGroupCopy = {
  'abc123': {
    'heading': 'The product you need',
    'paragraph': '... at the prices you want'
  },
  'xyz789': {
    'heading': 'Get bargains for days',
    'paragraph': 'Quality you can depend on™'
  }
}

// read query params
var params = new URLSearchParams(window.location.search);
var adGroup = params.get('ad_group');
var heading = params.get('heading');
var paragraph = params.get('paragraph');

// replace generic copy if custom params in place
if (adGroup && adGroupCopy[adGroup]) {
  var copy = adGroupCopy[adGroup];
  updateHeading(copy['heading']);
  updateParagraph(copy['paragraph']);
} 

// if present, custom heading and/or paragraph override ad group copy
if (decodeURI(heading)) {
  updateHeading(decodeURI(heading));
}
if (paragraph) {
  updateParagraph(decodeURI(paragraph));
}

// helper functions
function updateHeading(text) {
  document.querySelector('h2').innerText = text;
}

function updateParagraph(text) {
  document.querySelector('p').innerText = text;
}
