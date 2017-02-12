/**
 * Created by Andrey on 12-Feb-17.
 */

function Import(name) {
    var link = document.querySelector('link[rel=import]');
    var content = link.import.querySelector(name);
    document.body.appendChild(content.cloneNode(true));
}