angular.module('App')
    .service('ColorList', function(){
        var colorList = [
            {
                name:'Negro 0',
                color:'#000000',
                valor:0
            },
            {
                name:'Marrón 1',
                color:'#663232',
                valor:1
            },
            {
                name:'Rojo 2',
                color:'#CC0000',
                valor:2
            },
            {
                name:'Naranja 3',
                color:'#D87347',
                valor:3
            },
            {
                name:'Amarillo 4',
                color:'#BAA44A',
                valor:4
            },
            {
                name:'Verde 5',
                color:'#7FAC8D',
                valor:5
            },
            {
                name:'Azul 6',
                color:'#0F5190',
                valor:6
            },
            {
                name:'Violeta 7',
                color:'#A09EE0',
                valor:7
            },
            {
                name:'Gris 8',
                color:'#7D7D7D',
                valor:8
            },
            {
                name:'Blanco 9',
                color:'#FFFFFF',
                valor:9
            }
        ];
        var multipliList = [
            {
                name:'Negro x 1',
                color:'#000000',
                valor:1
            },
            {
                name:'Marrón x10',
                color:'#663232',
                valor:10
            },
            {
                name:'Rojo x100',
                color:'#CC0000',
                valor:100
            },
            {
                name:'Naranja x1k',
                color:'#D87347',
                valor:1000
            },
            {
                name:'Amarillo x10k',
                color:'#BAA44A',
                valor:10000
            },
            {
                name:'Verde x100k',
                color:'#7FAC8D',
                valor:100000
            },
            {
                name:'Azul x1M',
                color:'#0F5190',
                valor:1000000
            },
            {
                name:'Violeta x10M',
                color:'#A09EE0',
                valor:10000000
            },
            {
                name:'Gris x100M',
                color:'#7D7D7D',
                valor:100000000
            },
            {
                name:'Blanco x1G',
                color:'#FFFFFF',
                valor:1000000000
            },
            {
                name:'Oro x0.1',
                color:'#C08327',
                valor:0.1
            },
            {
                name:'Plata x0.01',
                color:'#BFBEBF',
                valor:0.01
            }
        ]
        var toleranceList = [
            {
                name:'Marrón 1%',
                color:'#663232',
                valor:1
            },
            {
                name:'Rojo 2%',
                color:'#CC0000',
                valor:2
            },
            {
                name:'Verde 0.5%',
                color:'#7FAC8D',
                valor:0.5
            },
            {
                name:'Azul 0.25%',
                color:'#0F5190',
                valor:0.25
            },
            {
                name:'Violeta 0.1%',
                color:'#A09EE0',
                valor:0.1
            },
            {
                name:'Gris 0.05%',
                color:'#7D7D7D',
                valor:0.05
            },
            {
                name:'Oro 5%',
                color:'#C08327',
                valor:5
            },
            {
                name:'Plata 10%',
                color:'#BFBEBF',
                valor:10
            }
        ]
        return{
            getColorList: ()=>{
                return colorList;
            },
            getMultipliList: ()=>{
                return multipliList;
            },
            getToleranceList: ()=>{
                return toleranceList;
            }
        };
    });