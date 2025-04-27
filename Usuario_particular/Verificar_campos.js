function El_string_no_esta_vacio(cadena){
    const el_string_esta_vacio = cadena === "" || cadena === undefined
    
    const el_string_es_valido = !el_string_esta_vacio
    return el_string_es_valido
}

function verificar_nombre(nombre_usuario){
    
    return El_string_no_esta_vacio(nombre_usuario)
}

function El_string_solo_tiene_numeros(cadena){

    const el_string_tiene_solo_numeros = /^\d+$/.test(cadena)
    return el_string_tiene_solo_numeros
}

function verificar_ci(ci_usuario)
{
    const el_ci_no_esta_vacio = El_string_no_esta_vacio(ci_usuario)
    const el_ci_tiene_solo_numeros = El_string_solo_tiene_numeros(ci_usuario)    
    const el_ci_tiene_8_digitos = (ci_usuario || "").length === 8 
    
    const el_ci_es_valido = el_ci_no_esta_vacio && el_ci_tiene_solo_numeros && el_ci_tiene_8_digitos
    return el_ci_es_valido
}

function verificar_correo(correo_usuario){
    const el_correo_no_esta_vacio = El_string_no_esta_vacio(correo_usuario)
    const el_correo_tiene_una_arroba = (correo_usuario || "").includes('@')
    
    const el_correo_es_valido = el_correo_no_esta_vacio && el_correo_tiene_una_arroba
    return el_correo_es_valido
}
function verificar_contrasenia(contrasenia_usuario){
    return false
}

export {verificar_nombre, verificar_ci, verificar_correo, verificar_contrasenia}