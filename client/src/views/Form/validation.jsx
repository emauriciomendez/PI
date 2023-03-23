export function validate(form){

    let errors={}
    if(/^[a-zA-Z\s]{1,60}$/.test(form.name)){
        errors.name='';
        }else{
        errors.name='Hay un error en el Nombre. Digite solo letras'; 
        if(form.name==='')errors.name='Nombre  vacio 2';
        }
   

    if(/^[1-5]{1}$/.test(form.difficulty)){
        errors.difficulty='';
        }else{
        if(typeof form.difficulty !== 'number')errors.difficulty='Solo se puede digitar numeros';
        if(form.difficulty <1 ||form.difficulty >5 )errors.difficulty='El rango es de 1 a 5';
        if(form.difficulty==='')errors.difficulty='No le ha asignado la dificultad';
        }            
     if(/^\d*\.\d+$/.test(form.duration)){
        errors.duration='';
        }else{
        errors.duration='Solo se puede digitar numeros';
        if(form.duration==='')errors.duration='Sin Duración.';
        }
    

    if(form.season==='-1'){errors.season='Se debe seleccionar una opcion.'
        }else
   { errors.season=''}

return errors;
}

// if(/^[a-zA-Z\s]{2,30}$/.test(form.name)){
//     setErrors({...errors.name:''})
//     }else{
//     setErrors({...errors,name:'Hay un error en el Nombre'}) 
//     if(form.name==='')setErrors({...errors,name:' Nombre  vacio'})
//     }


// if(/^[1-5]{1}$/.test(form.difficulty)){
//     setErrors({...errors,difficulty:''})
//     }else{
//     if(typeof form.difficulty !== 'number')setErrors({...errors,difficulty:'Solo se puede digitar numeros'})
//     if(form.difficulty <1 ||form.difficulty >5 )setErrors({...errors,difficulty:'El rango es de 1 a 5'})
//     if(form.difficulty==='')setErrors({...errors,difficulty:'No le ha asignado la dificultad'})


// }            
//      // if(/^[0-9]{5}$/.test(form.duration)){
// //     setErrors({...errors,duration:''})
// //     }else{
// //     if(typeof form.duration !== 'number')setErrors({...errors,duration:'Solo se puede digitar numeros'})
   
// //     }
// // if(form.duration==='')setErrors({...errors,duration:'Sin Duración.'})

// //     if(form.season==='-1'){setErrors({...errors,season:'Se debe seleccionar una opcion.'})
// //         }else
// //    { setErrors({...errors,season:''})}