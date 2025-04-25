function verificar_nombre(nombre_usuario){
    const el_nombre_esta_vacio = nombre_usuario === "" || nombre_usuario === undefined
    let el_nombre_es_valido = true
    
    if (el_nombre_esta_vacio){
        el_nombre_es_valido = false
    }

    
    return el_nombre_es_valido
}
function verificar_ci(ci_usuario)
{
    return false
}

export {verificar_nombre, verificar_ci}