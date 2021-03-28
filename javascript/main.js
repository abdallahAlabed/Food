var food = prompt("Please enter the food name", "mansf,shawrma");

var num = prompt("Please enter the of meals", 1);

        while (!(food == "mansf" || food== "shawrma")) {

                food = prompt("Please enter the food name", "mansf,shawrma");

        }



        if (food == "shawrma") {
                for (i = 0; num > i; i++) {

                        document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxfIRq170fiMZeqzcEbH9NPSIgI18tzjEvw&usqp=CAU'>");
                }

        } else if (food == "mansf") {
                for (i = 0; num > i; i++) {

                        document.write("<img src='https://www.tareekaa.com/wp-content/uploads/2014/12/%D9%85%D9%86%D8%B3%D9%811.jpg'>");
                }
        }
