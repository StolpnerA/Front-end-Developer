/**
 * Created by Andrey on 21-Feb-17.
 */

function door(height, width, locked) {
    this.height1=height;
    this.width1=width;
    this.locked1=locked;
    this.lock=function () {
        this.locked=true;
    };
    this.unlock=function () {
        this.locked=false;
    };
}
door.height=220;
console.log(door.height);
var backDoor = new door(250, 100, false);

backDoor.lock();


console.log(backDoor.height1);


/*
var Beatles=
    {
        name : 'Beatles',
        AlbumsCount : 12
    };

var Beatles2=Beatles;

console.log( Beatles2 );

Beatles2.name='The Beatles';
Beatles2.AlbumsCount++;

console.log( Beatles2 );
console.log( Beatles );
*/

/*
var BeatlesH=
    {
        name : 'Beatles',
        members : [ 'McCartney', 'Lennon', 'Harrison', 'Starr' ],
        albums:
            [
                { name : 'Please Please Me', year : 1963 },
                { name : 'With The Beatles', year : 1963 },
                { name : "A Hard Day's Night", year : 1964 }
            ]
    };

console.log( BeatlesH.albums[0] );
*/
/*
function Message(Txt,Options)
{
    Options=Options || {};
    var Header=Options.Header || 'ВНИМАНИЕ!';
    var Count=Options.Count || 1;

    console.log( Header );
    for ( var i=1; i<=Count; i++ )
        console.log( i+" "+Txt );
}

Message( 'Доброе утро!', { Header:'ИНФОРМАЦИЯ', Count:3 } );
Message( 'Добрый день!!', { Header:'ИНФОРМАЦИЯ' } );
Message( 'Добрый вечер!', { Count:2 } );
Message( 'Здравствуйте!', { } );
Message( 'До свидания!' );
*/

/*
var ValuesA=[55,77,55,66,77];
var UsedH={}; // ключ хэша - число, которое уже встречалось
for ( var i=0; i<ValuesA.length; i++ )
{
    var Value=ValuesA[i]; // очередное значение
    if ( Value in UsedH ) // встречалось ли оно?
        continue; // если да - всё, берём следующее
    UsedH[Value]=true; // если нет - запоминаем, что это значение уже встречалось
    console.log(Value); // выводим его в консоль
}
*/

/*var str=prompt('Напишите слово', 'иршыв'), arr=['а', 'о', 'у', 'э','ы' ,'я','ё','ю','е','и'], res=0;
for (var i=0; i<str.length; i++)
{
    for (var j=0; j<arr.length; j++)
    {
        res=(str[i]==arr[j])?res+=1:res+=0;
    }
}
console.log(res);*/