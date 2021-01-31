angular.module('App')
    .controller('SelectController', ['$scope', '$location', function(s,l){
        s.linesNumber = [
            {
                nombre:'Cuatro bandas',
                valor:4
            }, 
            {
                nombre:'Cinco bandas',
                valor:5
            }
        ];
        s.bands;
        s.chance = ()=>{
            console.log(s.bands.nombre);
            if(s.bands.valor == 4) l.path('/')
            else l.path('/five')
           
        };
    }]);