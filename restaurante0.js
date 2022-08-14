let valores = [
    v1 = Number(prompt("cantidad de almuerzos")),
    v2 = Number(prompt("cantidad de jugos")),
    v3 = Number(prompt("cantidad gaseosas")),
    v4 = Number(prompt("cantidad desayunos completos"))
]

const vtb = (v1 * (12000)) + (v2 * (3000)) + (v3 * (2500)) + (v4 * (8000))
//const vt = vtb * (19 / 100) + vtb
//const vrd = vt * (19 / 100) + vt


//docuemnt.write("cantidad de almuerzos es :" + v1+ "<br>")

document.write("ALMUERZOS PEDIDOS: " + v1 + "<br>")
document.write("DESAYUNOS PEDIDOS: " + v4 + "<br>")
document.write("JUGOS PEDIDOS: "  + v2 + "<br>")
document.write("GASEOSAS PEDIDAS: " + v3 + "<br>")
document.write(" EL VALOR TOTAL  A PAGAR:" + vtb + "<br>")