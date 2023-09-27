document.addEventListener("DOMContentLoaded", ()=>{
    const myForm = document.getElementsByTagName("form")[0];
    const nameInput = document.getElementById("name");
    const edadInput = document.getElementById("edad");
    const longTextInput = document.getElementById("longtext");
    myForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        const nameValue = nameInput.value;
        const edadValue = edadInput.value;
        const longTextValue = longTextInput.value;
        /*
        console.log({
            nameValue, edadValue, longTextValue
        });
        */
        const isEmpty = /^\s*$/; //Si la cadena esta vacia Expresiones Regulares
        const isEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
        if( isEmpty.test(nameValue)){
            alert("El nombre no puede ir vacio");
            nameInput.focus();
            return;
        }
        if ( parseInt(edadValue) < 18){
            alert("No se permiten menores")
            edadInput.focus();
            return;
        }
        if(isEmpty.test(longTextValue)){
            alert("Debe agregar una descripcion")
            longTextInput.focus();
            return;
        }
        if(!isEmail.test(longTextValue)){
            alert("Debe se un correo valido")
            longTextInput.focus();
            return;
        }
        myForm.submit();
    
    })
})