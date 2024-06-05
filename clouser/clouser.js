// A clouse is an inner function that has access to the outer (parent) encloing function variable.

// create outer function

const outerfunction = () => {
  var outer = "Outer Function";
  console.log(outer);
  //   this is the concept of clouser function
  const innerfunction = () => {
    var Inner = "Inner Function";
    console.log(
      "When outer Variable user in the inner function: ",
      outer,
      " ",
      Inner
    );
  };
  innerfunction();
};

outerfunction();
