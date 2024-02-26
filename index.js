const pjson = require('./package.json');

itWorks = function() {
    
    const start = Date.now();

    try {

        return JSON.stringify({"itWorks": "Yes, it works!"
        , "package": pjson.name
        , "version": pjson.version
        });

    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'itWorks'
            , `${(end - start)}ms.`
            , error.message);

    }

}

isCodiceFiscale = function (codicefiscale)
{

    const start = Date.now();

    try {

        var result = false;

        if (codicefiscale.length != 16) {
            return result;
        }
    
        // calcolo cifra controllo
        const letteraControllo = (codicefiscale) => {  
            
            const dispariValore = [
                ['0', 1]
                , ['1', 0]
                , ['2', 5]
                , ['3', 7]
                , ['4', 9]
                , ['5', 13]	
                , ['6', 15]	
                , ['7', 17]	
                , ['8', 19]	
                , ['9', 21]	
                , ['A', 1]
                , ['B', 0]
                , ['C', 5]
                , ['D', 7]
                , ['E', 9]
                , ['F', 13]	
                , ['G', 15]	
                , ['H', 17]	
                , ['I', 19]	
                , ['J', 21]	
                , ['K', 2]
                , ['L', 4]
                , ['M', 18]	
                , ['N', 20]	
                , ['O', 11]
                , ['P', 3]
                , ['Q', 6]
                , ['R', 8]
                , ['S', 12]
                , ['T', 14]
                , ['U', 16]
                , ['V', 10]
                , ['W', 22]
                , ['X', 25]
                , ['Y', 24]
                , ['Z', 23]
            ];
        
            const pariValore = [
                ['0', 0]		
                , ['1', 1]		
                , ['2', 2]		
                , ['3', 3]		
                , ['4', 4]		
                , ['5', 5]		
                , ['6', 6]		
                , ['7', 7]		
                , ['8', 8]		
                , ['9', 9]		
                , ['A', 0]		
                , ['B', 1]		
                , ['C', 2]
                , ['D', 3]
                , ['E', 4]
                , ['F', 5]
                , ['G', 6]
                , ['H', 7]
                , ['I', 8]
                , ['J', 9]
                , ['K', 10]
                , ['L', 11]
                , ['M', 12]
                , ['N', 13]
                , ['O', 14]
                , ['P', 15]
                , ['Q', 16]
                , ['R', 17]
                , ['S', 18]
                , ['T', 19]
                , ['U', 20]
                , ['V', 21]
                , ['W', 22]
                , ['X', 23]
                , ['Y', 24]
                , ['Z', 25]
            ]
        
            const restoLettera = [
                [0, 'A']		
                , [1, 'B']		
                , [2, 'C']		
                , [3, 'D']		
                , [4, 'E']		
                , [5, 'F']		
                , [6, 'G']			
                , [7, 'H']			
                , [8, 'I']			
                , [9, 'J']			
                , [10, 'K']
                , [11, 'L']
                , [12, 'M']
                , [13, 'N']
                , [14, 'O']
                , [15, 'P']
                , [16, 'Q']
                , [17, 'R']
                , [18, 'S']
                , [19, 'T']
                , [20, 'U']
                , [21, 'V']
                , [22, 'W']
                , [23, 'X']
                , [24, 'Y']
                , [25, 'Z']
            ]
        
            let dispariNumero = [
                dispariValore.find((element) => element[0] === codicefiscale.at(0))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(2))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(4))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(6))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(8))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(10))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(12))[1]
                , dispariValore.find((element) => element[0] === codicefiscale.at(14))[1]
            ];
            
            let pariNumero = [
                pariValore.find((element) => element[0] === codicefiscale.at(1))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(3))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(5))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(7))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(9))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(11))[1]
                , pariValore.find((element) => element[0] === codicefiscale.at(13))[1]
            ];
    
            sumd = dispariNumero.reduce((a, b) => Number(a) + Number(b));
            
            sump = pariNumero.reduce((a, b) => Number(a) + Number(b));
    
            let restoNumero = [Math.floor((sumd + sump) / 26), (sumd + sump) % 26][1];
    
            let restoValore = restoLettera.find((element) => element[0] === restoNumero)[1]
    
            return restoValore;
        };
    
        const resultLetteraControllo = codicefiscale.at(15) === letteraControllo(codicefiscale) ? true : false;
    
        var valregex = /^(([a-z]|[A-Z]){6})(\d{2})([a-z]|[A-Z])(\d{2})([a-z]|[A-Z])(\d{3})([a-z]|[A-Z])$/;
        if(valregex.test(codicefiscale) && resultLetteraControllo)
        {
            result = true;
        }
        else
        {
            result = false;
        }
    
        return result;
    
    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'isCodiceFiscale'
            , `${(end - start)}ms.`
            , error.message);

    }

}

isIBAN = function(iban) {

    const start = Date.now();

    try {
        
        var result = false;

        var reg = /^IT\d{2}[ ][a-zA-Z]\d{3}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{3}|IT\d{2}[a-zA-Z]\d{22}$/;
    
        if (!reg.test(iban)) {
            result = false;
        } else {
            result = true;
        }

        return result;

    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'isIBAN'
            , `${(end - start)}ms.`
            , error.message);

    }

}

isPartitaIVA = function(partitIVA)
{

    const start = Date.now();

    try {

        var result = false;
    
        if (partitIVA.length != 11) {
            return result;
        }
    
        // calcolo cifra controllo
        const cifraControllo = (partitIVA) => {  
            let dispari = [
                partitIVA.at(0)
                , partitIVA.at(2)
                , partitIVA.at(4)
                , partitIVA.at(6)
                , partitIVA.at(8)
            ];
            
            let pari = [
                Number(partitIVA.at(1)) < 5 ? Number(partitIVA.at(1)) * 2 : (Number(partitIVA.at(1)) * 2) - 9
            , Number(partitIVA.at(3)) < 5 ? Number(partitIVA.at(3)) * 2 : (Number(partitIVA.at(3)) * 2) - 9
            , Number(partitIVA.at(5)) < 5 ? Number(partitIVA.at(5)) * 2 : (Number(partitIVA.at(5)) * 2) - 9
            , Number(partitIVA.at(7)) < 5 ? Number(partitIVA.at(7)) * 2 : (Number(partitIVA.at(7)) * 2) - 9
            , Number(partitIVA.at(9)) < 5 ? Number(partitIVA.at(9)) * 2 : (Number(partitIVA.at(9)) * 2) - 9
            ];
            
            sumd = dispari.reduce((a, b) => Number(a) + Number(b));
            
            sump = pari.reduce((a, b) => Number(a) + Number(b));
        
            let sumdpa = (Math.round(sumd + sump) / 10).toFixed(1).split('.');
        
            let controllo = sumdpa[1] > 0 ? 10 - sumdpa[1] : 0;
    
            return controllo;
        };
        
        const resultCifraControllo = Number(partitIVA.at(10)) === cifraControllo(partitIVA) ? true : false;
    
        const regexPartitaIVA = new RegExp(/[0-9]{11}/);
    
        if(regexPartitaIVA.test(partitIVA) && resultCifraControllo)
        {
            result = true;
        }
        else
        {
            result = false;
        }
    
        return result;
    
    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'isPartitaIVA'
            , `${(end - start)}ms.`
            , error.message);

    }

}

isTargaAuto = function (targa)
{

    const start = Date.now();

    try {

        var result = false;

        var valregex = /(?!EE)(?!Ee)(?!eE)(?!ee)[A-HJ-NPR-TV-Za-hj-npr-tv-z]{2}\d{3}[A-HJ-NPR-TV-Za-hj-npr-tv-z]{2}\b/;
        if(valregex.test(targa))
        {
            result = true;
        }
        else
        {
            result = false;
        }
    
        return result;
    
    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'isTargaAuto'
            , `${(end - start)}ms.`
            , error.message);

    }

}

isTargaMoto = function (targa)
{

    const start = Date.now();

    try {

        var result = false;

        var valregex = /^((?!EE)([A-Z]){2})(\d{5})$/;
        if(valregex.test(targa))
        {
            result = true;
        }
        else
        {
            result = false;
        }
    
        return result;
    
    } catch (error) {
        
        const end = Date.now();

        throw new valitalor_Error(
            'isTargaMoto'
            , `${(end - start)}ms.`
            , error.message);

    }

}

valitalor_Error = function(routine = "", executiontime = "", message = "") { 
    
    this.routine = routine;
    this.executiontime = executiontime; 
    this.message = message; 
    this.name = "valitalor_Error";

} 

valitalor_Error.prototype = Error.prototype;

module.exports = { itWorks, isCodiceFiscale, isIBAN, isPartitaIVA, isTargaAuto, isTargaMoto };