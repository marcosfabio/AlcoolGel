
window.onload = function(){
    document.getElementById('inpINPM').value = 70
    document.getElementById('inpGLEstoque').value = 96
    document.getElementById('inpEspessante').value = 5
    document.getElementById('inpAlcalinizante').value = 0.5
    document.getElementById('inpGlicerina').value = 2
    document.getElementById('inpPropilenoglicol').value = 1
    document.getElementById('inpMassaTotal').value = 100
    mudaValor()
    document.getElementById('inpMassaTotal').focus()
}


function mudaValor() {
    let INPM = Number(document.getElementById('inpINPM').value)
    let GLEstoque = Number(document.getElementById('inpGLEstoque').value)
    let Espessante = Number(document.getElementById('inpEspessante').value)
    let Alcalinizante = Number(document.getElementById('inpAlcalinizante').value)
    let Glicerina = Number(document.getElementById('inpGlicerina').value)
    let Propilenoglicol = Number(document.getElementById('inpPropilenoglicol').value)

    let MassaTotal = Number(document.getElementById('inpMassaTotal').value)

    let MassaEtanol = INPM * MassaTotal /100
    document.getElementById('inpMassaEtanol').value = MassaEtanol

    let MassaEspessante = Espessante * MassaTotal /100
    document.getElementById('inpMassaEspessante').value = MassaEspessante

    let MassaAlcalinizante = Alcalinizante * MassaTotal /100
    document.getElementById('inpMassaAlcalinizante').value = MassaAlcalinizante
    
    let MassaGlicerina = Glicerina * MassaTotal /100
    document.getElementById('inpMassaGlicerina').value = MassaGlicerina
    
    let MassaPropilenoglicol = Propilenoglicol * MassaTotal /100
    document.getElementById('inpMassaPropilenoglicol').value = MassaPropilenoglicol
    
    let VolumeSolucaoEstoque = ((MassaEtanol * 100 ) / (GLEstoque*0.789)).toFixed(2)
    document.getElementById('inpVolumeSolucaoEstoque').value = VolumeSolucaoEstoque
    
    let MassaAguaEstoque = (VolumeSolucaoEstoque - ((VolumeSolucaoEstoque * GLEstoque)/100)).toFixed(2)
    document.getElementById('inpMassaAguaEstoque').value = MassaAguaEstoque

    let MassaAguaAlcalinizante = 9 * (Alcalinizante * MassaTotal /100)
    document.getElementById('inpMassaAguaAlcalinizante').value = MassaAguaAlcalinizante

    MassaAguaAdicional = (MassaTotal - MassaPropilenoglicol -  MassaGlicerina - MassaEtanol - MassaAguaEstoque - MassaAguaAlcalinizante -MassaEspessante -MassaAlcalinizante).toFixed(2)
    document.getElementById('inpMassaAguaAdicional').value = MassaAguaAdicional
}