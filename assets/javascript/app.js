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
  sibObjects: {
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
}

var available = siblings.all;

function generatePairs(person) {
  console.log("running function...\n");
  var numPotentialMatches = available.length;
  function selectPair(max) {
    return Math.floor((Math.random() * max));
  }
    
  var match = selectPair(numPotentialMatches);
  console.log("Match: ", match);
  console.log("Available: ", available);

  if (
    available[match] === person.name ||
    available[match] === person.spouse ||
    available[match] === person.exclusions[0] ||
    available[match] === person.exclusions[1] ||
    available[match] === person.exclusions[2] ||
    available[match] === person.exclusions[3]
    ) {
      generatePairs(person);
    }
  else {
    console.log(`\n${person.name} buys for ${available[match]}\n`);
    available.splice(match, 1);
  }
}

generatePairs(siblings.sibObjects.daniel);
generatePairs(siblings.sibObjects.bigEmily);
generatePairs(siblings.sibObjects.kirk);
generatePairs(siblings.sibObjects.andrea);
generatePairs(siblings.sibObjects.evan);
generatePairs(siblings.sibObjects.kaseyJo);
generatePairs(siblings.sibObjects.cameron);
generatePairs(siblings.sibObjects.angel);
generatePairs(siblings.sibObjects.austin);
generatePairs(siblings.sibObjects.kristi);
generatePairs(siblings.sibObjects.breanna);
generatePairs(siblings.sibObjects.david);
generatePairs(siblings.sibObjects.emilyBrooke);
generatePairs(siblings.sibObjects.joelie);
generatePairs(siblings.sibObjects.kaseyLynn);
generatePairs(siblings.sibObjects.caleb);

console.log(available);