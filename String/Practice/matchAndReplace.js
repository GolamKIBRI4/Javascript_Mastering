let date = "2020-03-25";
let regex= /(\d{4})\-(\d{2})\-(\d{2})/;


if(regex.test(date)){
    let newDate = date.replace(regex, '$2-$1-$3');
    console.log("Confirmed Date: ",newDate);
    flag = 1;
}else{
    console.log("Date Format Did Not Match");
}

