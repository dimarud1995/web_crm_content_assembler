const fs = require("fs");
const fse= require("fs-extra");
const path=require("path");

//copy files from dir to new dir
function copyFiles(path_from,path_to){
    //create dir if doesnt exist
    if(fs.existsSync(path_from)){
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
      return null;
  }
   // асинхронное чтение
// fs.readFile(file, "utf8", 
// function(error,data){
//     console.log("Асинхронное чтение файла");
//     if(error) throw error; // если возникла ошибка
//     console.log(data);  // выводим считанные данные
// });


}
  module.exports = { copyFiles, readTextFile }