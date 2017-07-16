// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
//console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let total = 0;
    for (let i=0; i < data.length; i++) {
      total += data[i].price;
      }
    total/=data.length;
    return total;
}
  console.log(question1());


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let midlvl = [];
    for (let i=0; i < data.length; i++) {
      if(data[i].price >= 14 && data[i].price <= 18) {
        midlvl.push(data[i]);
        }
    }
    return midlvl;
}
console.log(question2());



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
    for (let i=0; i < data.length; i++) {
      if (data[i].currency_code === "GBP") {

        return data[i];
      }

    }

}
console.log(question3().title);
console.log(question3().price);


// 4: Display a list of all items who are made of wood.
function question4() {
  let wood = [];
    for (let i=0; i < data.length; i++) {
      for(let j=0; j < data[i].materials.length; j++) {
        if(data[i].materials[j] == "wood") {
          wood.push(data[i]);
        }
      }

    }
    return wood;
  // Answer:
}
  console.log(question4());

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let mat8 =[];
  for (let i=0; i < data.length; i++) {
      if(data[i].materials.length >= 8)
        mat8.push(data[i]);
      }
  return mat8;
}
console.log(question5());



// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let c = 0;
  for (let i=0; i < data.length; i++) {
    if(data[i].who_made === "i_did") {
      c = c+1;
    }



  }

    return c;


  // Answer:
}
  console.log(question6());
