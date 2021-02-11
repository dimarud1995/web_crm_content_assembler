const fs = require("fs");
const path=require("path");
const INDEX="index.html";
const STYLES="css\\";
const SCRIPTS="scripts\\";
const JS="js\\";
const IMG="img\\";
const RELEASE="release\\";
const  {syntaxValidator} = require("./validator.js");
const {copyFiles, readTextFile} = require("./files.js");
const {detectLinks} = require("./linker.js");

main();

function main(){
  var p=path.dirname(__filename);// Current directory
  // Check if user enter new directory val[2]
  var res_p="";
  var temp_p=p.split("\\");
  for(var i=0;i<temp_p.length-1;i++){
      res_p+=temp_p[i]+"\\";
  }
  if(process.argv[2]){
    res_p=process.argv[2]+"\\";
  };

  //console.log("res_p = "+ res_p);

    var temp_index =readTextFile(res_p+INDEX);
    if(temp_index==null){
      return false;
    }
   var links= detectLinks(res_p,INDEX);
console.log(links);
    var temp_style=""
    var temp_script =""

 
    for(i=0; i<links.length;i++){
      if(links[i].includes('.css')){
        temp_style +="<style>\n"+readTextFile(links[i])+"\n</style>\n";
      }
      if(links[i].includes('.js')){
        temp_script +="<script>\n"+readTextFile(links[i])+"\n</script>\n";
      }
    }
     //   if(fs.existsSync(res_p+STYLES)){
  //     var style_files = fs.readdirSync(res_p+STYLES);
  //     for(var i=0; i<style_files.length;i++){
  //       temp_style +="<style>\n"+readTextFile(res_p+STYLES+style_files[i])+"\n</style>\n";
  //     }
  //  }
    // if(fs.existsSync(res_p+SCRIPTS)){
    //   var script_files=fs.readdirSync(res_p+SCRIPTS);
    //   for(var i=0; i<script_files.length;i++){
    //     temp_script +="<script>\n"+readTextFile(res_p+SCRIPTS)+"\n</script>\n";
    //   }
    // }

  //  if(fs.existsSync(res_p+JS)){
  //     var script_files=fs.readdirSync(res_p+JS);
  //     for(var i=0; i<script_files.length;i++){
  //       temp_script +="<script>\n"+readTextFile(res_p+JS)+"\n</script>\n";
  //     }
  //   }

    var index_header=temp_index.match(/(?<=<head>)([\s\S]*)(?=<\/head>)/g)[0];
    //  var regex_index_header = new RegExp("/(<link)([\s\S]*)(" + p + "css\/style\.css[\"\']>[\n\r]*)/g");
    // index_header=index_header.replace(regex_index_header,"");
    index_header=index_header.replace("<link rel=\"stylesheet\" href=\"./css/style.css\">","");
    var index_body=temp_index.match(/(<body>)([\s\S]*)(<\/body>)/g)[0]
    index_header+=temp_style+temp_script;
    syntaxValidator(index_header,"brackets");
    syntaxValidator(index_body,"tags");

    var res_index=("<!DOCTYPE html>\n<html lang='en'>\n<head>\n"+index_header+"</head>\n"+index_body+"\n</html>").replace(/[\r\n]{2,}/g,"\r\n");
   
    
    
    if (!fs.existsSync(res_p+RELEASE)){
        fs.mkdirSync(res_p+RELEASE);
    }
    copyFiles(res_p+IMG,res_p+RELEASE+IMG);

    fs.writeFile(res_p+RELEASE+"index.html", res_index, "utf8", (e)=>{
      if(e){
         console.log('\x1b[31m%s\x1b[0m',"Помилка при записуванні файла!");
         console.log("Помилка: "+e);
        }else{
          console.log("\x1b[32m%s\x1b[0m","Зібрано "+res_p+RELEASE+"index.html")
        }
      })
}





