const fs = require("fs");
const fse= require("fs-extra");
const path=require("path");
const {readTextFile} = require("./files.js");


function detectLinks(path,file){
    var text =readTextFile(path+file);
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
console.log(links);
return links.map(item=>{
     var n= item[0].match(/\.\.\//g);
    // console.log(item[0])
     temp_item=item[0].replace(/\.\.\//g,"").replace(/\.\//g,"").replace(/\/\.\.\//g,"/").replace(/\//g,"\\");
    // console.log(temp_item)
     temp_path=path.split("\\");
     res_path=""
     res_n=0;
     if(n) res_n+=n.length;
     for(i=0;i<temp_path.length-res_n;i++){
        res_path+=temp_path[i]+"\\";
     }
   return res_path+temp_item;//  console.log(res_path+temp_item)
})




}





module.exports = { detectLinks}