function El_string_no_esta_vacio(cadena){
    const el_string_esta_vacio = cadena === "" || cadena === undefined
    
    let el_string_es_valido = !el_string_esta_vacio
    
    return el_string_es_valido
}

function El_string_solo_tiene_numeros(cadena){
    const el_string_tiene_solo_numeros = /^\d+$/.test(cadena)
    
    return el_string_tiene_solo_numeros
}

function verificar_ci(ci_usuario)
{
    let el_ci_no_esta_vacio = El_string_no_esta_vacio(ci_usuario)
    let el_ci_tiene_solo_numeros = El_string_solo_tiene_numeros(ci_usuario)    
    let el_ci_tiene_8_digitos = (ci_usuario || "").length === 8 
    let el_ci_es_valido = el_ci_no_esta_vacio && el_ci_tiene_solo_numeros && el_ci_tiene_8_digitos

    return el_ci_es_valido
}

export {El_string_no_esta_vacio, verificar_ci}