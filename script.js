// 1]The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let arr=[]
class movie {
    constructor(title, studio, rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
getPG(){
    let data=`
    Title: ${this.title}
    Studio: ${this.studio}
    Rating: ${this.rating}
    `
if (this.rating=="PG") {
    arr.push(data)
} else {
    return data
}
    
}
}
let pic= new movie("thor","marvel","PG13")
let pic1= new movie("aquaman","dc","PG13")
let pic2= new movie("casino royale","eon productions","PG13")
let pic3= new movie("minions","Illumination Entertainment")
console.log(pic3.getPG())
console.log(arr)
// Title: minions
// Studio: Illumination Entertainment
// Rating: PG

// [ '\n    Title: minions\n    Studio: Illumination Entertainment\n    Rating: PG\n    ' ]

// Title: casino royale
// Studio: eon productions
// Rating: PG13


//2]
class Circle {
    constructor(radius,color) {
        this.setRadius(radius);
        this.setColor(color);
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        newRadius = newRadius;
        this.radius = newRadius;
    }
    getColor() {
        return this.color;
    }
    setColor(newColor) {
        newColor = newColor.trim();
        this.color = newColor;
    }
   
  
    Circle(radius,color){
        this.radius=radius
        this.color=color
        return `
        radious: ${this.radius}
        color: ${this.radius}
        `
    }
    toString(){
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
    getArea(){
        return Math.PI*Math.pow(this.radius, 2)
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }
}

let circle1 = new Circle(1.0,"red");
console.log(circle1); // Jane Doe

circle1.setColor('blue');
console.log(circle1.getColor()); 
console.log(circle1.Circle(2.4,'green'));
console.log(circle1.toString());
console.log(circle1.getArea());
console.log(circle1.getCircumference());

// Circle { radius: 1, color: 'red' }
// blue

//         radious: 2.4
//         color: 2.4
        
// Circle[radius=2.4,color=green]
// 18.09557368467721
// 15.079644737231007


//3] Write a “person” class to hold all the details
class person{
    constructor(name,age,gender,profession,dob){
        this.name=name
        this.age=age
        this.gender=gender
        this.profession=profession
        this.dob=dob
    }
    getDetails(){
        let data=`
        Name:${this.name}
        Age: ${this.age}
        Gender: ${this.gender}
        Profession: ${this.profession}
        DOB: ${this.dob} 
        `
    return data
}
}
let employe=new person("Akash",23,"male","engineer","30 Dec 1999")
console.log(employe.getDetails())
// Name:Akash
// Age: 23
// Gender: male
// Profession: engineer
// DOB: 30 Dec 1999 

//4] write a class to calculate the uber price.
class uberPricing{
    constructor(distance){
      this.distance=distance
      }
      getprice(){
        let minDist=2
        let minPrice=50
        let for1KM=10
        if(minDist>=this.distance){
          return minPrice}
          else{
            return minPrice+this.distance*for1KM}
        }
  }
  let customer= new uberPricing(5)
  console.log(customer.getprice())//100