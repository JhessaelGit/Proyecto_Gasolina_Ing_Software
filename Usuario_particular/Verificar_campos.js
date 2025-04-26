function El_string_no_esta_vacio(nombre_usuario){
    const el_string_esta_vacio = nombre_usuario === "" || nombre_usuario === undefined
    
    let el_string_es_valido = !el_string_esta_vacio
    
    return el_string_es_valido
}
function verificar_ci(ci_usuario)
{
    const el_ci_esta_vacio = ci_usuario === "" || ci_usuario === undefined
    let el_ci_es_valido = true
    
    if (el_ci_esta_vacio){
        el_ci_es_valido = false
    }


    return el_ci_es_valido
}

export {El_string_no_esta_vacio, verificar_ci}