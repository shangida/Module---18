var text = "Banladesh"
var br ="</br>"

for(var i=1; i<=10; i++)
{
    document.write(text + "</br>");
}
document.write("<h1>End program</h1>" + br);
//end

//1+2+3+4+5 sum using for loop
var sum = 0;
for(var i=1; i<=5; i++)
{
    sum = sum + i;
}
document.write("Result = " + sum + "</br>");
document.write("<h1>End program</h1>" + br);
//end


//1 - 50 even digit sum strats
var sum = 0;
var i = 2; //starting part

while(i<=50)  //condition part
{
 sum = sum + i;
 i+=2; //update part
}

document.write("Total even digit sum = " + sum + br);
document.write("<h1>End program</h1>" + br);
//end

//Task -6 (Anisul Islam) strats
var sum = 0;
var i = 1;
while(i<=100)
{
    if(i % 3== 0 && i % 5 == 0)
    {
        document.write(" " +  i  + " +");
        sum = sum + i;
        
    }
    i++;
}
document.write(" = " + sum + br);
document.write("<h1>End program</h1>" + br);

// do while loop use
document.write("do while loop use " + br)
var i = 1;

do{
    document.write(" " + i + br);
    i++;
}while(i<=20);
//end

//array use by for loop
document.write("array use by for loop" + br);

var numbers = [23, 45, 65, 75, 88, 45, 12, 32];

for(var i = 0; i<numbers.length; i++)
{
    var number = numbers[i]
    document.write(number + br);
}
//end

//break keyword use by for loop
document.write("break keyword use by for loop" + br);

for(var i=1; i<=50; i++)
{
    
    if(i==20){
        break;
    }
    document.write(i + br);
}
//end
document.write("break keyword use by array for loop" + br);

var numbers = [23, 45, 65, 75, 88, 45, 12, 32];

for(var i = 0; i<numbers.length; i++)
{
    var number = numbers[i]
    document.write(number + br);
   
    if(number>60){
        break;
    }
}
//end
document.write("break keyword use by array while loop" + br);

var numbers = [23, 45, 65, 75, 88, 45, 12, 32];
var i = 0;

while(i<numbers.length)
{
    var number = numbers[i];

    /* if(number > 60){
        continue;
    }
 */
    document.write(number + br)
    i++;
}

