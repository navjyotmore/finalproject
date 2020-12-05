let myImageArray1 = ["images/aboutus/Aboutus.jpg", 
"images/aboutus/aboutus1.jpg", "images/aboutus/aboutus2.jpg", "images/aboutus/aboutus3.jpg",
"images/aboutus/aboutus4.jpg", "images/aboutus/aboutus5.jpg"];
let ImageNumber1 = 0;
let difference1 = myImageArray1.length-1;
function ChangeImage1(direction1){
    ImageNumber1 = ImageNumber1 + direction1;
    if (ImageNumber1 > difference1){
        ImageNumber1 = 0;
    }
    if (ImageNumber1 < 0){
        ImageNumber1 = difference1;
    }
    document.getElementById('slideshow1').src= myImageArray1[ImageNumber1];
}

let myImageArray2 = ["images/aboutus/Ingredients.jpg", 
"images/aboutus/Ingredients1.jpg", "images/aboutus/Ingredients2.jpg", "images/aboutus/Ingredients3.jpg",
"images/aboutus/Ingredients4.jpg", "images/aboutus/Ingredients5.jpg"];
let ImageNumber2 = 0;
let difference2 = myImageArray2.length-1;
function ChangeImage2(direction2){
    ImageNumber2 = ImageNumber2 + direction2;
    if (ImageNumber2 > difference2){
        ImageNumber2 = 0;
    }
    if (ImageNumber2 < 0){
        ImageNumber2 = difference2;
    }
    document.getElementById('slideshow2').src= myImageArray2[ImageNumber2];
}

let myImageArray3 = ["images/aboutus/suppliers.jpg", 
"images/aboutus/suppliers1.jpg", "images/aboutus/suppliers2.jpg", "images/aboutus/suppliers3.jpg",
"images/aboutus/suppliers4.jpg", "images/aboutus/suppliers5.jpg"];
let ImageNumber3 = 0;
let difference3 = myImageArray3.length-1;
function ChangeImage3(direction3){
    ImageNumber3 = ImageNumber3 + direction3;
    if (ImageNumber3 > difference3){
        ImageNumber3 = 0;
    }
    if (ImageNumber3 < 0){
        ImageNumber3 = difference3;
    }
    document.getElementById('slideshow3').src= myImageArray3[ImageNumber3];
}

let myImageArray4 = ["images/aboutus/CoummityActivities.jpg", 
"images/aboutus/CoummityActivities1.jpg", "images/aboutus/CoummityActivities2.jpg", "images/aboutus/CoummityActivities3.jpg",
"images/aboutus/CoummityActivities4.jpg", "images/aboutus/CoummityActivities5.jpg"];
let ImageNumber4 = 0;
let difference4 = myImageArray4.length-1;
function ChangeImage4(direction4){
    ImageNumber4 = ImageNumber4 + direction4;
    if (ImageNumber4 > difference4){
        ImageNumber4 = 0;
    }
    if (ImageNumber4 < 0){
        ImageNumber4 = difference4;
    }
    document.getElementById('slideshow4').src= myImageArray4[ImageNumber4];
}