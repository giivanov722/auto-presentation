$(document).ready(
    function(){

        $("#moto").hover(function(){
            $(this).css("color", "black");
        },function(){
            $(this).css("color", "");
        });  

         $('#news1').css("background-image", "url('img/news/m3-4.jpg')");

         $('#news2').css("background-image", "url('img/news/X7.jpg')");

         $('#news3').css("background-image", "url('img/news/I8.jpg')");

         $('#news4').css("background-image", "url('img/news/safety.jpg')");

         $("#bignews1").css("background-image", "url('img/news/X3.jpg')");

         $("#bignews2").css("background-image", "url('img/news/M5.jpg')");


        //cars change rims
          $('#white_stock_rim').click(function(){
            $('#white_car_main').attr(
                'src','/img/config/2-white-stock.png'
            );
            console.log();
         });

         $('#white_m_rim').click(function(){
            $('#white_car_main').attr(
                'src','/img/config/2-white-m.png'
            );
            console.log();
         });

         $('#red_stock_rim').click(function(){
            $('#red_car_main').attr(
                'src','/img/config/2-red-stock.png'
            );
            console.log();
         });

         $('#red_m_rim').click(function(){
            $('#red_car_main').attr(
                'src','/img/config/2-red-m.png'
            );
            console.log();
         });

         $('#blue_stock_rim').click(function(){
            $('#blue_car_main').attr(
                'src','/img/config/2-blue-stock.png'
            );
            console.log();
         });

         $('#blue_m_rim').click(function(){
            $('#blue_car_main').attr(
                'src','/img/config/2-blue-m.png'
            );
            console.log();
         });

     });

