var index = require("./index.js")

if (index.name === "Susan") {
    console.log("The name is correct")
} else if (index.name = "Joe") {
    console.log("The name is correct"+index.name)
}else {
    console.log("Expected: Susan, Received: "+index.name)
}



if (index.height === 70) {
    console.log("The height is correct")
} else if (index.height = 74) {
    console.log("The height is correct"+index.height)
}else {
    console.log("Expected: 70, Received: "+index.height)
}
