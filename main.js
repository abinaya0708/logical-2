//1.Find an array containing a specific element or not


function find(arr,n){
	for(i=0;i<arr.length;i++){
		if(arr[i]===n){
			document.write("Element present"+"<br>")
		}
	}
}
find([1,5,8],5);

//-----------------------------------------------------------------------

//2.Find a given year is leap year or not


let year=1996;

if(year%4==0&&year%100!=0||year%400==0){
	document.write("leap year")
}
else{
	document.write("Not a leap year")
}