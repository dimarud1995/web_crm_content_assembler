const fs = require("fs");
const fse= require("fs-extra");
const path=require("path");
const {readTextFile} = require("./files.js");


function detectLinks(path_to_file,file){
    var text =readTextFile(path_to_file+file);
    if(text==null){
      return false;
    }
//console.log(text.length);
var links=[];
try{
    links_1=text.match(/(<link)([^>]*)(>)/g);
    if(links_1){
   links= links_1.map(item=>{
        return item.match(/(?<=href=")([\s\S]*)(?=")/g);
        })
    }
}catch(e){
    console.log(e);
}

try{
    scripts_1=text.match(/(<script)([^>]*)(>)/g);
    if(scripts_1){
    scripts=scripts_1.map(item=>{
        return item.match(/(?<=src=")([\s\S]*)(?=")/g);
        })
        for(i=0;i<scripts.length;i++){
            links.push(scripts[i])
        }
    }

}catch(e)
{
    console.log(e);
}

 var res_links=links.map(item=>{
    if(item[0].match(/http:/g)||item[0].match(/https:/g)){
        return item[0];
    }
   return path.join(path_to_file,item[0]);
    //var n= item[0].match(/\.\.\//g);
    //  temp_item=item[0].replace(/\.\.\//g,"").replace(/\.\//g,"").replace(/\/\.\.\//g,"/").replace(/\//g,"\\");
    // // console.log(temp_item)
    //  temp_path=path_to_file.split("\\");
    //  res_path=""
    //  res_n=1;
    //  if(n) res_n+=n.length;
    //  for(i=0;i<temp_path.length-res_n;i++){
    //     res_path+=temp_path[i]+"\\";
    //  }
    //return res_path+temp_item;//  console.log(res_path+temp_item)
})
if(res_links){
    console.log("\x1b[32m%s\x1b[0m","Знайдено посилань: "+ res_links.length);
    console.log(res_links);
    }
return res_links;



}





module.exports = { detectLinks}