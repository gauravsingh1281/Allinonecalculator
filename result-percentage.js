
        function resultCalculate() {


            var P, a, b, c, d, e, C, M, E, PE, T, Percentage;
            a = (document.getElementById("1stsub").value).toUpperCase();
            P = Number (document.getElementById("1stmarks").value);
            b =  (document.getElementById("2ndsub").value).toUpperCase();
            C = Number (document.getElementById("2ndmarks").value);
            c = (document.getElementById("3rdsub").value).toUpperCase();
            M = Number( document.getElementById("3rdmarks").value);
            d = (document.getElementById("4thsub").value).toUpperCase();
            E = Number( document.getElementById("4thmarks").value);
            e = (document.getElementById("5thsub").value).toUpperCase();
            PE = Number (document.getElementById("5thmarks").value);
            T = P + C + M + E + PE;

            document.write("<h1 style=font-size:22px;color:blue;>Result's Percentage Calculator</h1>");
            document.write("<br>");
            document.write("<p style=font-size:16px;line-height:0.5;>Marks of <b style= color:red;>" + a + "</b> = <b style= color:red;>" + P + "</b><br></p>");
            document.write("<p style=font-size:16px;line-height:0.5;>Marks of <b style= color:purple;>" + b + "</b> = <b style= color:purple;>" + C + "</b><br></p>");
            document.write("<p style=font-size:16px;line-height:0.5;>Marks of <b style= color:#0BEB0B;>" + c + "</b> = <b style= color:#0BEB0B;>" + M + "</b><br></p>");
            document.write("<p style=font-size:16px;line-height:0.5;>Marks of <b style= color:magenta;>" + d + "</b> = <b style= color:magenta;>" + E + "</b><br></p>");
            document.write("<p style=font-size:16px;line-height:0.5;>Marks of <b style= color:#59CBFF;>" + e + "</b> = <b  style= color:#59CBFF;>" + PE + "</b><br><br></p>");
            document.write("<p style=font-size:16px;line-height:0.5;>Total Marks = <b style= color:olive;>" + T + "</b><br></p>");
            Percentage = T / 5;
            document.write("<p style=font-size:16px;line-height:0.5;>Percentage = <b style= color:orange;>" + Percentage + "%</b> &nbsp;<br></p>");
            if (Percentage >= 75){
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>" + "1st Division - Distinction" + "</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            else if (Percentage <= 74.999 && Percentage >= 60){
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>" + "1st Division" + "</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            else if (Percentage <= 59.999 && Percentage >= 50){
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>" + "2nd Division" + "</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            else if (Percentage <= 49.999 && Percentage >= 40){
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>3rd Division</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            else if (Percentage <= 39.999 && Percentage >= 33){
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>4th Division &ndash; Just Pass</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            else{
                document.write("<b style=font-size:16px;color:#FF485C;line-height:0.5;>Fail</b><br><br><br>");
                document.write(" <button><a style=text-decoration:none; href=https://gauravsingh1281.github.io/Allinonecalculator/result-percentage.html ><strong style=font-size:15px;color:black; >Calculate Another Result</strong></a></button>");
            }
            
        }
