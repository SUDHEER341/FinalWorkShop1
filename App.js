function save_Details()
{
    var student_Name = document.getElementById('student_name').value;

    if(localStorage.getItem("student_Name") === student_Name)
    {
        alert('You have already applied for the scholarship , Please check ');
    }
    
    
    var student_Name = document.getElementById('student_name').value;
    var father_Name = document.getElementById('father_name').value;
    var income = document.getElementById('annual_income').value;
   
    check_Annual_Income();

    localStorage.setItem('student_Name' , student_Name);
    localStorage.setItem('father_Name' , father_Name);
    localStorage.setItem('Annual_Income' , income);
}

function check_Annual_Income()
{
    var income = document.getElementById('annual_income').value;

    
    if(income > 500000)
    {
        alert('SORRY! Annual income above 5Lakh candidates are not eligible');
    }

    var scholarship = 0.1 * income;
    alert(`Congratulations! you are eligible for scholarship of ${scholarship} rupees for your studies`);
    
}