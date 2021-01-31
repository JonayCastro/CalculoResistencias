angular.module('App')
    .controller('FourBandsController', ['$scope', 'ColorList', function(s, c){
        s.listColors = c.getColorList();
        s.listMultipli = c.getMultipliList();
        s.listTolerance = c.getToleranceList();

        s.band1 = null;
        s.band2 = null;
        s.band3 = null;
        s.band4 = null;

        s.selectColor = (e)=>{
            if(e == 1)color = s.band1.color;
            else if(e == 2) color = s.band2.color;
            else if(e == 3) color = s.band3.color;
            else if(e == 4) color = s.band4.color;

            if(s.band1 != null && s.band2 != null && s.band3 != null && s.band4 != null){
                let valor = s.band1.valor.toString()+s.band2.valor.toString();
                let total = valor *  s.band3.valor;
                let valueResistor = document.getElementById('valueResistor');
                valueResistor.innerText = total;
                let tolerancValue = document.getElementById('toleranceValue');
                tolerancValue.innerText = s.band4.valor+'%';
            }
        };
    }]);