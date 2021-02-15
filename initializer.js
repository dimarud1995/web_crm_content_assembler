const fs = require("fs");
const INDEX="index.html";
const CSS="css\\";
const JS="js\\";
const SCSS="scss\\";
const IMG="img\\";
const RELEASE="release\\";

var text_index_0 =  
`<!--Assembler `+process.env.VERSION+`-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js"></script>
    <title>Document</title>
</head>
<body>

</body>
</html>
`
var text_index_1 =
`<!--Assembler `+process.env.VERSION+`-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js"></script>
    <title>Document</title>
</head>
<body>
<div class="page-content-container">
    <div class="page-content">
        
    </div>
</div>
</body>
</html>
`
var text_scss_1=
`.page-content-container {
    position: relative;
    font-family: "Lato", 'HelveticaNeueCyr', Arial, sans-serif;
    width: 100%;
    overflow: hidden;
    //  max-width: 1300px;
    // overflow-x: scroll;

    // -ms-overflow-style: none;
    // scrollbar-width: none;

    // &:-webkit-scrollbar {
    //     display: none;
    // }
    div,
    span,
    li,
    sup,
    sub {
        line-height: 140%;
        font-family: "Lato", 'HelveticaNeueCyr', Arial, sans-serif;
        font-size: 0.7em;

    }

    .page-content {
        margin: auto;
        max-width: 1000px;
        position: relative;
        min-height: 650px;
        .my-header {
            font-style: normal;
            font-weight: 500;
            font-size: 34px;
            line-height: 140%;
            text-transform: uppercase;
            color: #AD1380;
            position: relative;
            padding-left: 25px;
            margin-bottom: 40px;

          

            @media screen and(max-width:1024px) {
                margin-bottom: 20px;
                font-size: 24px;
            }

            &:before {
                content: "";
                width: 10px;
                background-color: #AD1380;
                position: absolute;
                left: 0px;
                bottom: 11px;
                top: 9px;

                @media screen and(max-width:1024px) {
                    bottom: 7px;
                    top: 6px
                }
            }

            &26 {
                font-style: normal;
                font-weight: bold;
                font-size: 26px;
                line-height: 140%;
                color:  #97409B;;
                margin-bottom: 40px;

                @media screen and(max-width:1024px) {
                    font-size: 20px;
                }

                &_purple {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 26px;
                    line-height: 140%;
                    color: #97409B;
                    margin-bottom: 30px;


                    @media screen and(max-width:1024px) {
                        font-size: 20px;
                    }
                }
            }

            &34 {
                font-style: normal;
                font-weight: bold;
                font-size: 26px;
                line-height: 140%;
                color: #97409B;
                margin-bottom: 40px;

                @media screen and(max-width:1024px) {
                    font-size: 20px;
                }

            }
        }
        .text {
            &18 {
                font-style: normal;
                font-weight: 300;
                font-size: 18px;
                line-height: 140%;
                align-items: center;
                color: #414141;
                margin-bottom: 20px;

                span {
                    font-size: 18px;

                    @media screen and(max-width:1024px) {
                        font-size: 14px;
                    }
                }

                b {
                    font-weight: 500;
                }

                @media screen and(max-width:1024px) {
                    font-size: 14px;
                }
            }

            &26 {
                font-style: normal;
                font-weight: 300;
                font-size: 26px;
                line-height: 140%;
                align-items: center;
                color: #414141;

                span {
                    font-size: 26px;

                    @media screen and(max-width:1024px) {
                        font-size: 16px;
                    }
                }

                @media screen and(max-width:1024px) {
                    font-size: 16px;
                }
            }
        }
        .links {
            margin-top: 40px;
            border-top: 4px solid #888;
            padding-top: 20px;

            &__header {
                font-family: "Roboto", Arial, Helvetica, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                color: #888888;
                margin-bottom: 20px;
            }

            .link {

                font-family: "Roboto", Arial, Helvetica, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                color: #888888;
                margin-bottom: 20px;

                a {
                    color: #5AA745;
                }
            }
        }


        
    }
    .my-row {
        display: flex;

        &_1100 {
            display: flex;

            @media screen and (max-width:1100px) {
                display: block;
            }
        }

        &_600 {
            display: flex;

            @media screen and (max-width:600px) {
                display: block;
            }
        }

        @media screen and (max-width:768px) {
            display: block;
        }
    }

    .my-col-2 {
        position: relative;
        width: 50%;


        &_600 {
            position: relative;
            width: 50%;

            @media screen and(max-width:600px) {
                width: 100%;
                margin-left: 0;
            }
        }

        &_ml {
            margin-left: 2%;
            width: 48%;

            &_1100 {
                margin-left: 2%;
                width: 48%;
                position: relative;

                @media screen and(max-width:1100px) {
                    width: 100%;
                    margin-left: 0;
                }
            }

            @media screen and(max-width:768px) {
                width: 100%;
                margin-left: 0;
            }
        }

        &_mr {
            margin-right: 2%;
            width: 48%;

            &_1100 {
                margin-right: 2%;
                width: 48%;
                position: relative;

                @media screen and(max-width:1100px) {
                    width: 100%;
                    margin-left: 0;
                }
            }

            @media screen and(max-width:768px) {
                width: 100%;
                margin-right: 0;
            }
        }

        @media screen and(max-width:768px) {
            width: 100%;
        }

        img {
            margin-bottom: 30px;
        }
    }

    .my-col-3 {
        position: relative;
        width: 33%;

        img {
            width: 100%;
        }

        @media screen and(max-width:768px) {
            width: 100%;
        }
    }

    .m {
        display: none !important;

        &_i {
            display: none !important;
        }

        &_f {
            display: none !important;
        }

        &_1100 {
            display: none !important;

            @media screen and(max-width:1100px) {
                display: block !important;
            }
        }
    }

    .d {
        display: block !important;

        &_1200 {
            display: block !important;

            @media screen and(max-width:1200px) {
                display: none !important;
            }
        }

        &_f {
            display: flex !important;
        }

        &_1100 {
            display: block !important;

            @media screen and(max-width:1100px) {
                display: none !important;
            }
        }
    }

    @media screen and(max-width:768px) {
        .d {
            display: none !important;



            &_f {
                display: none !important;
            }


        }

        .m {
            display: block !important;

            &_i {
                display: inline !important;
            }

            &_f {
                display: flex !important;
            }


        }
    }
}

`

function initialize(path){

    if (!fs.existsSync(path+SCSS)){
        fs.mkdirSync(path+SCSS);
    }
    if (!fs.existsSync(path+SCSS+"style.scss")){
        fs.writeFile(path+SCSS+"style.scss",text_scss_1,"utf8",e=>{
            console.log("\x1b[32m%s\x1b[0m","Створено "+path+"style.scss")

        });
    }
    if (!fs.existsSync(path+CSS)){
        fs.mkdirSync(path+CSS);
    }
    if (!fs.existsSync(path+CSS+"style.css")){
        fs.writeFile(path+CSS+"style.css","","utf8",e=>{
            console.log("\x1b[32m%s\x1b[0m","Створено "+path+"style.css")

        });
    }
    if (!fs.existsSync(path+JS)){
        fs.mkdirSync(path+JS);
    }
    if (!fs.existsSync(path+JS+"script.js")){
        fs.writeFile(path+JS+"script.js","","utf8",e=>{
            console.log("\x1b[32m%s\x1b[0m","Створено "+path+"script.js")

        });

    }
    if (!fs.existsSync(path+IMG)){
        fs.mkdirSync(path+IMG);
    }
    if (!fs.existsSync(path+RELEASE)){
        fs.mkdirSync(path+RELEASE);
        
    }




    fs.writeFile(path+"index.html", text_index_1, "utf8", (e)=>{
        if(e){
          // console.log('\x1b[31m%s\x1b[0m',"Помилка при записуванні файла!");
           console.log("Помилка: "+e);
          }else{
            console.log("\x1b[32m%s\x1b[0m","Створено "+path+"index.html")
          }
        })


    return 1;
}

module.exports={ initialize }