const person = [
  {
    property: {
      objects: ["Car", "House"],
      Traits: { kidness: "kind", curiosity: "curious" },
    },
  },
]

// 1st way
const {
  property: {
    objects,
    Traits: { kidness, curiosity },
  },
} = person[0]

// // 2nd way
// const { property } = person[0]
// const { objects, Traits } = property
// const { kidness, curiosity } = Traits
// console.log(objects, kidness, curiosity)
