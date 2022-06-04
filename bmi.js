 function calculateBMI() {
            let weight, height, bmi;
            weight = document.getElementById("weight").value;
            height = document.getElementById("height").value;
            bmi = weight / (height / 100) ** 2;

            document.write("<strong style=font-size:18px>Your BMI ( Body Mass Index ) = <strong style=" + "color:#FFBD5B; >" + bmi + "</strong></strong><br>");

            if (bmi <= 18.5) {

                document.write("<b style=font-size:18px;color:#C246FF;>Underweight</b><br><br>");
                document.write(" <button ><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
            else if (bmi >= 18.5 && bmi <= 24.9) {
                document.write("<b style=font-size:18px;color:#35E55A;>Normal weight</b><br><br>");
                document.write(" <button ><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
            else if (bmi >= 25 && bmi <= 29.9) {
                document.write("<b style=font-size:18px;color:#FF7171;>Overweight</b><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
            else if (bmi >= 30 && bmi <= 34.9) {

                document.write("<b style=font-size:18px;color:#F04444;>Obesity Class I</b><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
            else if (bmi >= 35 && bmi <= 39.9) {
                document.write("<b style=font-size:18px;color:#FA4F4F;>Obesity Class II</b><br><br>");
                document.write(" <button ><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
            else {
                document.write("<strong style=font-size:18px;color:#FF0000;>Obesity Class III</strong><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/bmi.html ><strong style=font-size:15px;color:black; >Calculate Another BMI</strong></a></button>");
            }
        }
