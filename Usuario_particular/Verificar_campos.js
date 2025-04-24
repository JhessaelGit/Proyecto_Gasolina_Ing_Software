function verificar_nombre(nombre_usuario){
    let el_nombre_es_valido = true
    if (nombre_usuario === "" || nombre_usuario === undefined){
        el_nombre_es_valido = false
    }
    return el_nombre_es_valido
}

export default verificar_nombre