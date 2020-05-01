function verificar(){
    let nome = document.getElementById('texto')
    let idade = document.getElementById('idade')
    let peso = document.getElementById ('peso')
    let resdados = document.getElementById('resdados') 

    if(nome.value.length == 0 || idade.value.length == 0 || peso.value.length == 0 ) {
        alert('[ERRO] Peço que coloque todos dados para peder continua.')
    }else{
         resdados.innerHTML = 'Verificando ... ' 
         let idda = Number(idade.value)
         let pes = Number(peso.value)
         let nom = String(nome.value)

         resdados.style.background = 'turquoise';
         resdados.style.width = 100;
         resdados.style.length = 100;
         resdados.style.padding = 50;
         resdados.style.paddingTop = 20;
         resdados.style.marginTop = 50;


         if(idda < 16 || pes <=50){
             resdados.innerHTML = ` Infelizmente ${nom}, você não tem idade ou peso adequado para a doação.</BR>`
             resdados.innerHTML += `Verifique sua idade ou peso.`
             
             
         }else if ( idda <=17 && pes >50) {
             resdados.innerHTML = ` COM  ${idda} ANOS A DOAÇÃO SERÁ PERMITIDA APENAS COM AUTORIZAÇÂO DO RESPONSAVEL LEGAL. `

         }else if (idda >=18 || pes >50){
             resdados.innerHTML= `Parabens ${nom} ,você esta dentro do padrão para doaçao de sangue</br>`
             resdados.innerHTML+= `AGORA INFORME SEU TIPO SANGUINEO PARA DOAR OU RECEBER.`
         } 

         
}

var linkelemento= document.createElement('a')
linkelemento.setAttribute('href',)
}

function doar(){
    let sang= document.getElementsByName('sangue')
    let dar = document.getElementById('resdoar')
    let nome = document.getElementById('texto')
    
   

    if (sang[0].checked){
        let nom = String(nome.value)
      
        dar.innerHTML = `olá ${nom},  você pode doar para AB+ e A+ `
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
          
    }else if( sang[1].checked){
        let nom = String(nome.value)
        dar.innerHTML =`Olá ${nom}, você pode doar para A+, A-, AB+ e AB-`
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
       
    }else if (sang[2].checked){
        let nom = String(nome.value)
        dar.innerHTML=`Olá ${nom}, você pode doar para B+ e AB+	`
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';

    }else if(sang[3].checked){
        let nom = String(nome.value)
        dar.innerHTML =` Olá ${nom}, você pode doar para B+, B-, AB+ e AB- `
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
    
    }else if( sang[4].checked){
        let nom = String(nome.value)
        dar.innerHTML=`Olá ${nom}, você pode doar para AB+ `
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
    
    }else if(sang[5].checked){
        let nom = String(nome.value)
        dar.innerHTML=`Olá ${nom}, você pode doar para AB+ e AB-`
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
    
    } else if (sang[6].checked){
        let nom = String(nome.value)
        dar.innerHTML = `Olá ${nom}, você pode doar para A+, B+, O+ e AB+ `
        dar.style.background = 'slateblue';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
    
    }else if(sang[7].checked){
        let nom = String(nome.value)
        dar.innerHTML = `Olá ${nom}, você pode doar para TODOS!</br>`
        dar.innerHTML += `Você é um doador universal!`
        dar.style.background = 'mediumvioletred';
        dar.style.width = 100;
        dar.style.length= 100;
        dar.style.padding= 50 ;
        dar.style.fontFamily= 'Times New Roman';
        dar.style.fontSize= 30;
    } 


}

function receber(){
    let sang= document.getElementsByName('sangue')
    let recebe= document.getElementById('resdoar')
    let nome = document.getElementById('texto')
    if(sang[0].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de A+, A-, O+ e O-. `
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }   else if (sang[1].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de A- e O-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }else if (sang[2].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de 	B+, B-, O+ e O-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }else if(sang[3].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de B- e O-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }else if (sang[4].checked){
        let nom = String(nome.value)
        recebe.innerHTML =`Olá ${nom}, você pode RECEBER de TODOS!</br>`
        recebe.innerHTML += `Você é um recepitor universal!`
        recebe.style.background = 'mediumvioletred';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }else if(sang[5].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de A-, B-, O- e AB-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;


    }else if (sang[6].checked){
        let nom = String(nome.value) 
        recebe.innerHTML = `Olá ${nom}, você pode receber de O+ e O-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;

    }else if (sang[7].checked){
        let nom = String(nome.value)
        recebe.innerHTML = `Olá ${nom}, você pode receber de O-.`
        recebe.style.background= 'skyblue';
        recebe.style.width = 100;
        recebe.style.length= 100;
        recebe.style.padding= 50 ;
        recebe.style.fontFamily= 'Times New Roman';
        recebe.style.fontSize= 30;


    }

}