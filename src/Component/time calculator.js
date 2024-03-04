let temp="2024-01-27T08:58:05Z";
let date1=new Date(temp);
let old_date=new Date();
console.log(date1);
console.log(old_date);
let diff=old_date-date1
console.log(diff);
let res="";
if(diff>100){
    diff=diff/100;
    res=diff+" seconds";
}
if(diff>60){
    diff=diff/60;
    res=diff+" minutes";
}
if(diff>60){
    diff=diff/60;
    res=diff+" hours";
}
if(diff>24){
    diff=diff/24;
    res=diff+" days";
}   
if(diff>7){
    diff=diff/7;
    res=diff+" weeks";
}
if(diff>4.3){
    diff=diff/4.3;
    res=diff+" months";
}
if(diff>52){
    diff=diff/52;
    res=diff+" years";
}
console.log(res);
