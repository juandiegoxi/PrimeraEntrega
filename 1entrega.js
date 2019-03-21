//importacion del script de cursos
const {curso1, curso2, curso3, curso4} = require ('./cursos');
const fs = require('fs');

//insertar elementos para la inscripcion
let insertar=()=>{

    setTimeout(function(){
        const opciones ={
            id:{
           
               demand: true,
               alias: 'i'
           
            },
            nombre:{
           
                demand: true,
                alias: 'n'
            
             },
             cedula:{
           
                demand: true,
                alias: 'c'
            
             }
        }
        
        const argv = require('yargs')
        .command('inscribir','inscribir curso alias -i -n -c',opciones)
        .argv
        console.log(argv);


        xxx=argv.id;
        xxy=argv.nombre;
        xxz=argv.cedula;

        xx=argv.id;

        //verifica si el id ingresado es de algun curso
        if(xx==3540579 || xx==54138 || xx==984168 || xx==874138){
            xxx=argv.id;
            xxy=argv.nombre;
            xxz=argv.cedula;
            console.log('se creo el arhivo');
            console.log("id del curso   "+xxx);
            console.log("nombre   "+xxy);
            console.log("cedula  "+xxz);
            archivo(xxx,xxy,xxz);

        }else{
        
            console.log("curso no existe compruebe que el id que sea el correcto (3540579, 54138, 984168, 874138)");
            console.log("por tanto no puede inscribirse");
        }


        xxx=0;

    }, 9000)

} 

insertar();

//crear archivo
let archivo=(ii,nn,xxx)=>{

    setTimeout(function(){
        //verifica a que curso se inscribio
        if(ii==3540579)
        {
            texto="el estudiante se llama "+ nn + " con cedula " + xxx + " se matricula en el curso de codigo " + ii;
        }
        if(ii==54138)
        {
            texto="el estudiante se llama "+ nn + " con cedula " + xxx + " se matricula en el curso de codigo " + ii;
        }
        if(ii==984168)
        {
            texto="el estudiante se llama "+ nn + " con cedula " + xxx + " se matricula en el curso de codigo " + ii;        }
        if(ii==874138)
        {
            texto="el estudiante se llama "+ nn + " con cedula " + xxx + " se matricula en el curso de codigo " + ii;
        }
    
    //crear el archivo con los datos ingresados para la iscripcion del curso a un tiempo de 9 segundos
    fs.writeFile('curso.txt',texto,(err)=>{
     if(err)throw(err);
     console.log(+ '\n');
     console.log('se ha creado el archivo')
    });

    },9000);

}    
