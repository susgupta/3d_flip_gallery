"use strict";

window.addEventListener('DOMContentLoaded', function () {
    var cube = document.querySelector('.cube');
    var imageButtons = document.querySelector('.image-buttons');

    var cubeImageClass = cube.classList[1];

    //add click events for image buttons
    imageButtons.addEventListener('click', function (e) {
        var targetNode = e.target.nodeName;
        var targetClass = e.target.className;

        //its input type and not the face image class (avoid double tap)
        if (targetNode === "INPUT" && targetClass !== cubeImageClass) {
            console.log("Show Image: ".concat(targetClass.charAt(11)));

            //swap the list of images to make sure target is now main image
            cube.classList.replace(cubeImageClass, targetClass);
            //in effect the js will just swap css class and css handle animation
            cubeImageClass = targetClass;
        }
    });
});