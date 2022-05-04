function hover(){
    const listButton= document.querySelectorAll("button");
    
    listButton.forEach(button=>{
        let bouton= window.getComputedStyle(button,null);
        let backcolor= bouton.getPropertyValue('background-color');
        let fontcolor=bouton.getPropertyValue('color');

        button.addEventListener('mouseover', ()=>{
            if( fontcolor === "rgb(255, 255, 255)"){
                button.style.backgroundColor="#ffff";
                button.style.color= "#b11313" ;
                button.style.fontWeight= "900" ;
                button.style.boxShadow= "10px 10px 20px #ffff";
    
            }
            else{
                    let backafter=fontcolor;
                    button.style.backgroundColor=backafter;
                    console.log(backafter);
                    button.style.color= backcolor;
                    button.style.boxShadow="10px 10px 20px #ffff";
                } 
        });

        button.addEventListener('mouseleave', ()=>{
            button.style.backgroundColor= backcolor;
            button.style.color= fontcolor;
            button.style.boxShadow= "";
            button.style.fontWeight= "" ;
    });

    });

    const listInput= document.querySelectorAll("input");
    listInput.forEach(input=>{
        if(input.type==="submit"){
            let bouton= window.getComputedStyle(input,null);
            let backcolor= bouton.getPropertyValue('background-color');
            let fontcolor=bouton.getPropertyValue('color');

            input.addEventListener('mouseover', ()=>{
                if( fontcolor === "rgb(255, 255, 255)"){
                    input.style.backgroundColor="#ffff";
                    input.style.color= "#b11313" ;
                    input.style.fontWeight= "900" ;
                    input.style.boxShadow= "10px 10px 20px #ffff";
        
                }
                else{
                        let backafter=fontcolor;
                        input.style.backgroundColor=backafter;
                        console.log(backafter);
                        input.style.color= backcolor;
                        input.style.boxShadow="10px 10px 20px #ffff";
                    } 
            });
    
            input.addEventListener('mouseleave', ()=>{
                input.style.backgroundColor= backcolor;
                input.style.color= fontcolor;
                input.style.boxShadow= "";
                input.style.fontWeight= "" ;
        });
    
        }
    });

    const listImg= document.querySelectorAll(".media img");
    listImg.forEach(img=>{
        img.addEventListener('mouseover',()=>{
            img.style.filter= "brightness(700%)";

        });
       

    });

   
}
hover();