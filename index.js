
    let outputscreen=document.getElementById('output')

   function Clear()
   {
     output.value=" ";
   }

   function del()
   { 
    output.value=output.value.slice(0,-1)
   }

   function display(txt)
   {
    output.value=output.value+txt;
    console.log(output.value);
   }

   function calculate( )
   {

    output.value=eval(output.value);
   }



   function triangle( )
   {
      let b=prompt('enter the breath:');
      let h=prompt('enter the height:');
      let res=0.5*b*h;
      alert('The Area of triangel is:',res);
   }


   function circle( )
   {
    const pi=3.14;
    const r=prompt('enter radius:');
    
    const result= pi * r *r;
    
    alert('the area of cir is:', result);
    
     
   }


   function square( )
   {
      const a=prompt('enter the Area:');
      
      const res=a*a;
      alert('The Area of square is:',res);
   }
