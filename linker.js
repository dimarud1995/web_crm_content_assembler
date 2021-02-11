const fs = require("fs");
const fse= require("fs-extra");
const path=require("path");
const {copyFiles, readTextFile} = require("./files.js");


function detectLinks(path,file){
    var text =readTextFile(path+file);
    if(text==null){
      return false;
    }
//console.log(text.length);
var links=[];
try{
    links=text.match(/(<link)([^>]*)(>)/g).map(item=>{
        return item.match(/(?<=href=")([\s\S]*)(?=")/g);
        })
}catch(e){
    console.log(e);
}

try{
var t=text.match(/(<script)([^>]*)(>)/g).map(item=>{
        return item.match(/(?<=src=")([\s\S]*)(?=")/g);
        })
        console.log(t)
        for(i=0;i<t.length;t++){
            links.push(t[i])
        }

}catch(e)
{
    console.log(e);
}
console.log(links);
return links.map(item=>{
     var n= item[0].match(/\.\.\//g);
     console.log(item[0])
     temp_item=item[0].replace(/\.\.\//g,"").replace(/\.\//g,"").replace(/\/\.\.\//g,"/").replace(/\//g,"\\");
     console.log(temp_item)
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