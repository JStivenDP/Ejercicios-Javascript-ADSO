function buscarCapital(pais) {
    let mapaCapitales = new Map();
    mapaCapitales.set("peru", "lima");
    mapaCapitales.set("venezuela", "caracas");
    mapaCapitales.set("portugal", "lisboa");
    mapaCapitales.set("suecia", "estocolmo");
    mapaCapitales.set("finlandia", "helsinki");
    mapaCapitales.set("ucrania", "kiev");
    mapaCapitales.set("turquia", "ankara");
    mapaCapitales.set("grecia", "atenas");
    mapaCapitales.set("corea del sur", "seul");
    mapaCapitales.set("nigeria", "abuya");
    return mapaCapitales.get(pais);
}
console.log(buscarCapital("peru"));
console.log(buscarCapital("grecia"));
console.log(buscarCapital("nigeria"));