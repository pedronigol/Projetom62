function validaCampos(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario != "Juca" && senha != "123456"){
        alert("Usuário ou senha inválidos")
    }else{
        alert("Seja bem-vindo ", usuario);
    }
}