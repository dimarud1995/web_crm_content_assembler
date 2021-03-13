function syntaxValidator(text_string,part){
    var isValid=true;
  
    if(part=="brackets"){
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
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
      if(ammount_of_scopes_type_1_open!==ammount_of_scopes_type_1_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! --> { }");
        isValid=false;
      }
    if(ammount_of_scopes_type_2_open!==ammount_of_scopes_type_2_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! --> [ ]");
        isValid=false;
      }
      if(ammount_of_scopes_type_3_open!==ammount_of_scopes_type_3_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! --> ( )");
        isValid=false;
      }
      if(ammount_of_quote_type_1%2!==0  ){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! --> \" ");
        isValid=false;
      }
      if(ammount_of_quote_type_2%2!==0 ){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! --> \' ");
        isValid=false;
      }
    }
  
    if(part=="tags"){
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
  
      var t17=text_string.match(/<a[> \r\n]/g);
      var ammount_of_a_open=t17==null?0:t17.length;

      var t18=text_string.match(/<\/a>/g);
      var ammount_of_a_close=t18==null?0:t18.length;
    

      // var t19=text_string.match(/[<script]()/g);
      // var ammount_of_script_open=t19==null?0:t19.length;
  
      // var t20=text_string.match(/>/g);
      // var ammount_of_tag_close=t18==null?0:t20.length;
      // console.log(t19)
      // console.log(t20)
    /////////////////////////////
    /////////////////////////////
    /////////////////////////////
     if(ammount_of_div_open!==ammount_of_div_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  div ");
        isValid=false;
      }
      if(ammount_of_span_open!==ammount_of_span_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  span ");
        isValid=false;
      }
      if(ammount_of_b_open!==ammount_of_b_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  b ");
       // (?<=<b[^>]*>)([\s\S]*)(?=<\/b>)
        // var start=text_string.match(/<b>/g);
        // var end=text_string.match(/<\/b>/g);
        isValid=false;
      }
      if(ammount_of_p_open!==ammount_of_p_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  p ");
        isValid=false;
      }
      if(ammount_of_a_open!==ammount_of_a_close){
        console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  a ");
        isValid=false;
      }
      // if(ammount_of_tag_open!==ammount_of_tag_close){
      //   console.log('\x1b[31m%s\x1b[0m',"Є помилки в синтаксисі "+part+"! -->  <> ");
      //   isValid=false;
      // }
        if(isValid){
        console.log("\x1b[32m%s\x1b[0m","Синтаксис перевірено!")
        }
    }
   return isValid;
}

  module.exports = { syntaxValidator }