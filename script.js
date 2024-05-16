// document.write("hello external");

var xyz = "value-javascript, react.js node.js";
document.write("value= "+ xyz);
document.write("value= "+xyz);
document.write("ERROR");        
console.log(xyz);
var fname="dhruv";
var fname="raj";
document.write(fname+ "data type"+ typeof fname);
let age=23;
 let tage=25;
 const ans=true;
    document.write(fname+ "data type"+ typeof age);
 document.write(ans+ "data type"+ typeof ans);
console.log(tage);
document.write(age);
//arithmetic operator
var a = 5;
var b = 10;

var c= a + b;
var d= a - b;
var e= a * b;
var f= a / b;


document.write("A + B=  " + c);
document.write("A - B=  " + d);
document.write("A * B=  " + e);
document.write("A / B=  " + f);
document.write("<br>");
document.write("A="+ a+ "B=" +b);
a +=b;
document.write(" A="+a+"B="+b);
a -=b;
document.write("A="+ a+ "B=" +b);
a *=b;
document.write(" A="+a+"B="+b);
a /=b;
document.write(" A="+a+"B="+b);
a++;
document.write("A="+a);
b--;
document.write("A="+b);

var v="web";
var u="web";
var x=5;
var y=5;
// comparison operator
document.write(x===y);//value and data type
document.write(v==u);//string check
document.write(x<=y);
document.write(x>=y);
document.write(x<y);
document.write(x>y);
document.write(x !=y);
//if condition
var number=8;
if (number %2==0)
    {document.write("Even");
}
else
    {document.write("Odd");
    }
    
var number=9;
if (number%2 ==0)
    {document.write("Even");
    }
    else
        {document.write("Odd");
        }

        document.write("<br>");

var mark=45;
if(mark <=100 && mark >=95)
    { document.write("A+");}
    else if(mark <=94 && mark >=85)
    { document.write("A");}
    else if(mark <=84 && mark >=75)
    { document.write("B+");}
    else if(mark <=74 && mark >=65)
    { document.write("B");}
    else if(mark <=64 && mark >=55)
    { document.write("C+");}
    else if(mark <=54 && mark >=45)
    { document.write("C");}
    else if(mark <=44 && mark >=33)
    { document.write("D");}
    else if(mark <=34 && mark >=0)
    { document.write("F");}
else {document.write("INVALID MARKS")}
 

var r=3;
var s=9;
if(r==s && r==s){
    document.write("&&");
}
else if(r>=s || r>s){
    document.write("||");
}
else if(!(r>=s)){
    document.write("!");
}
else {
    document.write("ERROR");
}
