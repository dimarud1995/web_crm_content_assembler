const fs = require("fs");
const path=require("path");
const rimraf = require("rimraf");
const fse = require('fs-extra');
const RELEASE='../release/';
const INDEX="index.html";
const STYLE="css\\style.css";
const SCRIPT="js\\script.js";
    create_release();

function create_release(){
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
    var temp_style ="<style>\n"+readTextFile(res_p+STYLE)+"\n</style>\n";
    var temp_script ="<script>\n"+readTextFile(res_p+SCRIPT)+"\n</script>\n";
    var index_header=temp_index.match(/(?<=<head>)([\s\S]*)(?=<\/head>)/g)[0];
  //  var regex_index_header = new RegExp("/(<link)([\s\S]*)(" + p + "css\/style\.css[\"\']>[\n\r]*)/g");
   // index_header=index_header.replace(regex_index_header,"");
    index_header=index_header.replace("<link rel=\"stylesheet\" href=\"./css/style.css\">","");
    var index_body=temp_index.match(/(<body>)([\s\S]*)(<\/body>)/g)[0]
    index_header+=temp_style+temp_script;
    var res_index=("<!DOCTYPE html>\n<html lang='en'>\n<head>\n"+index_header+"</head>\n"+index_body+"\n</html>").replace(/[\r\n]{2,}/g,"\r\n");
   syntaxValidator(res_index);
   
    
    
    if (!fs.existsSync(res_p+"release")){
        fs.mkdirSync(res_p+"release");
    }
 //   rimraf.sync(res_p+"release\\img"); //видалить папку
copyFiles(res_p+"img",res_p+"release\\img");

    fs.writeFile(res_p+"release\\index.html", res_index, "utf8", (e)=>{
      if(e){
         console.log('\x1b[31m%s\x1b[0m',"Помилка при записуванні файла!");
         console.log(e);
        }else{
          console.log("\x1b[32m%s\x1b[0m","Зібрано "+res_p+"release\\index.html")
        }
      })
     // console.log(res_p+"img");

  
    
}
//copy files from dir to new dir
function copyFiles(path_from,path_to){
  //create dir if doesnt exist
  if (!fs.existsSync(path_to)){
    fs.mkdirSync(path_to);
  }
  //remove file in dir
  fs.readdir(path_to, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(path_to, file), err => {
        if (err) throw err;
      });
    }
    //copy files
    copy(path_from,path_to);
  });
}
//copy files
function copy(path_from,path_to){
  if (!fs.existsSync(path_to)){
      fs.mkdirSync(path_to);
  }         
  // To copy a folder or file  
  fse.copySync(path_from, path_to, { overwrite: true } ,function (err) {
    if (err) {                // ^
      console.error(err);     // |___{ overwrite: true } // add if you want to replace existing folder or file with same name
      return false;    
    } 
  });
  console.log("\x1b[32m%s\x1b[0m","Скопійовано "+path_from);
  return true
}


function readTextFile(file)
{
  try{
    let fileContent = fs.readFileSync(file, "utf8");
   // console.log(fileContent);
   console.log("Зчитано "+ file)
    return fileContent;

  }catch(e)
  {
      console.error('\x1b[31m%s\x1b[0m',"Не зчитано "+file);
    //   console.log('\x1b[31m',"ERROR! "+file);
    // console.error(e);
      return "";
  }
   // асинхронное чтение
// fs.readFile(file, "utf8", 
// function(error,data){
//     console.log("Асинхронное чтение файла");
//     if(error) throw error; // если возникла ошибка
//     console.log(data);  // выводим считанные данные
// });


}

function syntaxValidator(text_string){
  var isValid=true;
  var t1=text_string.match(/\{/g);
  var ammount_of_scopes_type_1_open=t1==null?0:t1.length;
  
  var t2=text_string.match(/\}/g);
  var ammount_of_scopes_type_1_close=t2==null?0:t2.length;

  var t3=text_string.match(/\[/g)
  var ammount_of_scopes_type_2_open=t3==null?0:t3.length;

  var t4=text_string.match(/\]/g);
  var ammount_of_scopes_type_2_close=t4==null?0:t4.length;

  var t5=text_string.match(/\(/g);
  var ammount_of_scopes_type_3_open=t5==null?0:t5.length;

  var t6=text_string.match(/\)/g);
  var ammount_of_scopes_type_3_close=t6==null?0:t6.length;

  var t7=text_string.match(/"/g);
  var ammount_of_quote_type_1=t7==null?0:t7.length;

  var t8=text_string.match(/'/g);
  var ammount_of_quote_type_2=t8==null?0:t8.length;

  var t9=text_string.match(/<div[> \r\n]/g);
  var ammount_of_div_open=t9==null?0:t9.length;

  var t10=text_string.match(/<\/div>/g);
  var ammount_of_div_close=t10==null?0:t10.length;

  var t11=text_string.match(/<span[> \r\n]/g);
  var ammount_of_span_open=t11==null?0:t11.length;

  var t12=text_string.match(/<\/span>/g);
  var ammount_of_span_close=t12==null?0:t12.length;

  var t13=text_string.match(/<b[> \r\n]/g);
  var ammount_of_b_open=t13==null?0:t13.length;

  var t14=text_string.match(/<\/b>/g);
  var ammount_of_b_close=t14==null?0:t14.length;

  var t15=text_string.match(/<p[> \r\n]/g);
  var ammount_of_p_open=t15==null?0:t15.length;

  var t16=text_string.match(/<\/p>/g);
  var ammount_of_p_close=t16==null?0:t16.length;

  // var ammount_of=text_string.match(/span/g).length;

    // console.log(ammount_of_scopes_type_1_open);
    // console.log(ammount_of_scopes_type_1_close);
    // console.log(ammount_of_scopes_type_2_open);
    // console.log(ammount_of_scopes_type_2_close);
    // console.log(ammount_of_scopes_type_3_open);
    // console.log(ammount_of_scopes_type_3_close);
    // console.log(ammount_of_quote_type_1);
    // console.log(ammount_of_quote_type_2);
   //  console.log(ammount_of_div_open);
    // console.log(ammount_of_div_close);
   
      if(ammount_of_scopes_type_1_open!==ammount_of_scopes_type_1_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! --> { }");
          isValid=false;
        }
      if(ammount_of_scopes_type_2_open!==ammount_of_scopes_type_2_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! --> [ ]");
          isValid=false;
        }
        if(ammount_of_scopes_type_3_open!==ammount_of_scopes_type_3_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! --> ( )");
          isValid=false;
        }
        if(ammount_of_quote_type_1%2!==0  ){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! --> \" ");
          isValid=false;
        }
        if(ammount_of_quote_type_2%2!==0 ){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! --> \' ");
          isValid=false;
        }
        if(ammount_of_div_open!==ammount_of_div_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! -->  div ");
          isValid=false;
        }
        if(ammount_of_span_open!==ammount_of_span_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! -->  span ");
          isValid=false;
        }
        if(ammount_of_b_open!==ammount_of_b_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! -->  b ");
          isValid=false;
        }
        if(ammount_of_p_open!==ammount_of_p_close){
          console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі! -->  p ");
          isValid=false;
        }
      if(isValid){
        console.log("\x1b[32m%s\x1b[0m","Синтаксис перевірено!")
      }
      return isValid;

}