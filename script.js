/*question 1*/

 function xyz()
{
    console.log("Welcome")
}
xyz()

/* question 2 */
function sum(a,b)
    {
        console.log(a+b);
    }
sum(3,4)

/* question 3 */
let arrow = () => {
    console.log("Prepbytes");
    console.log("Welcome");
 }
 arrow()
       
/* question 4 */
var x = 21;
var girl = function () {
    
    console.log(x);
    var x = 20;
};
girl ();

/* question 5 */

var y = 21;

girl ();

console.log(y)
function girl() {
    console.log(y);
    var y = 20;
};

/* question 6 */
var z = 21;
a();
b();

  function a() {
    
   z = 20;
  console.log(z);
};
 function b() {
    
    z = 40;
   console.log(z);
};

/* question 7 */

function factorial(n) 
{
    let fact = 1;
    while (n!=0)
    {
    //    let fact = 1;
        for (let i=1 ; i<=n; i++)
        {
            fact = fact *i;
        }
        n=0;    
    }
    
    return fact;
}
const num = factorial(4);
console.log(`factorial of 4 = `,num)
