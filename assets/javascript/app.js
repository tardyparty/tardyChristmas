const siblings = {
  all: [
    "Daniel",
    "Emily Waters",
    "Kirk",
    "Andrea",
    "Evan",
    "Kasey Jo",
    "Cameron",
    "Angel",
    "Austin",
    "Kristi",
    "Breanna",
    "David",
    "Emily Brooke",
    "Joelie",
    "Kasey Lynn",
    "Caleb"
  ],
  daniel: {
    name: "Daniel",
    spouse: "Emily Waters",
    exclusions: [
      "Cameron",
      "Joelie",
      "Austin",
      "Joelie"
    ],
  },
  bigEmily: {
    name: "Emily Waters",
    spouse: "Daniel",
    exclusions: [
      "Joelie",
      "Cameron",
      "Kasey Lynn",
      "Kristi"
    ]
  },
  kirk: {
    name: "Kirk",
    spouse: "Andrea",
    exclusions: [
      "Emily Waters",
      "Daniel",
      "Kasey Jo",
      "Kasey Lynn"
    ]
  },
  andrea: {
    name: "Andrea",
    spouse: "Kirk",
    exclusions: [
      "Kasey Lynn",
      "Breanna",
      "Emily Brooke",
      "Evan"
    ]
  },
  evan: {
    name: "Evan",
    spouse: "Kasey Jo",
    exclusions: [
      "Emily Brooke",
      "Caleb",
      "Joelie",
      "Emily Brooke"
    ]
  },
  kaseyJo: {
    name: "Kasey Jo",
    spouse: "Evan",
    exclusions: [
      "Angel",
      "Emily Brooke",
      "David",
      "Caleb"
    ]
  },
  cameron: {
    name: "Cameron",
    spouse: "Angel",
    exclusions: [
      "Caleb",
      "Kasey Jo",
      "Kristi",
      "Breanna"
    ]
  },
  angel: {
    name: "Angel",
    spouse: "Cameron",
    exclusions: [
      "Kirk",
      "Evan",
      "Caleb",
      "Daniel"
    ]
  },
  austin: {
    name: "Austin",
    spouse: "Kristi",
    exclusions: [
      "Andrea",
      "Kasey Jo"
    ]
  },
  kristi: {
    name: "Kristi",
    spouse: "Austin",
    exclusions: [
      "Breanna",
      "Angel",
      "Daniel",
      "Cameron"
    ]
  },
  breanna: {
    name: "Breanna",
    spouse: "",
    exclusions: [
      "Evan",
      "Kasey Lynn",
      "Kirk",
      "Andrea"
    ]
  },
  david: {
    name: "David",
    spouse: "",
    exclusions: [
      "Kirk",
      "Evan",
      "Angel"
    ]
  },
  emilyBrooke: {
    name: "Emily Brooke",
    spouse: "",
    exclusions: [
      "Kasey Jo",
      "Andrea",
      "Cameron",
      "Kirk"
    ]
  },
  joelie: {
    name: "Joelie",
    spouse: "",
    exclusions: [
      "Kristi",
      "David",
      "Angel",
      "David"
    ]
  },
  kaseyLynn: {
    name: "Kasey Lynn",
    spouse: "",
    exclusions: [
      "Andrea",
      "Kristi",
      "Breanna",
      "Emily Waters"
    ]
  },
  caleb: {
    name: "Caleb",
    spouse: "",
    exclusions: [
      "Daniel",
      "Emily Waters",
      "Breanna",
      "Austin"
    ]
  }
}

function selectPair() {
  return Math.floor((Math.random() * 16) + 1)
}

function generatePairs() {

  var available = siblings.all;

  for (var i = 1; i < siblings.length; i++) {
    
    console.log(selectPair());
  }
}
console.log(selectPair());