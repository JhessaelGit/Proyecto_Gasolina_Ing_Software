function El_string_no_esta_vacio(nombre_usuario){
    const el_string_esta_vacio = nombre_usuario === "" || nombre_usuario === undefined
    
    let el_string_es_valido = !el_string_esta_vacio
    
    return el_string_es_valido
}
function verificar_ci(ci_usuario)
{
    let el_ci_no_esta_vacio = El_string_no_esta_vacio(ci_usuario)
    let el_ci_tiene_solo_numeros = /^\d+$/.test(ci_usuario)    
    let el_ci_es_valido = el_ci_no_esta_vacio && el_ci_tiene_solo_numeros

    return el_ci_es_valido
}

export {El_string_no_esta_vacio, verificar_ci}