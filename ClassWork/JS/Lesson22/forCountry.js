/**
 * Created by Andrey on 06-Feb-17.
 */

var CountrysH={};

function AddCountry(CountryName,CapitalName)
{
    CountrysH[CountryName]=CapitalName;
}

function DeleteCountry(CountryName)
{
    delete CountrysH[CountryName];
}

function GetCountryInfo(CountryName)
{
    if ( CountryName in CountrysH )
        return 'страна: ' + CountryName + ' столица: ' + CountrysH[CountryName] ;
    else
        return 'нет информации о стране ' + CountryName + '!' ;
}

function ListCountrys()
{
    var Res="";
    for ( var CN in CountrysH )
        Res+='<br>'+GetCountryInfo(CN);
    return Res;
}

AddCountry('Германия','Берлин');
AddCountry('Венгрия','Будапешт');
AddCountry('Франция','Париж');

console.log( "список стран:" + ListCountrys());