var marks=prompt("Enter the marks");
switch(marks/10)
{
case 10:
case 9:document.write("Grade is A");
		break;
case 8:document.write("Grade is B");
		break;
case 7:document.write("Grade is C");
		break;
case 6:document.write("Grade is D");
		break;
case 5:document.write("Grade is E");
		break;
default:document.write("Invalid Grade");
		break;
}