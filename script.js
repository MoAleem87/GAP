function setup() {
    createCanvas(1920, 1080);
    noLoop();
}

function draw() {
    var test = text2Binary("A black box describes any part of your system you do not understand the inner workings of. For example, a library or perhaps a function that you have not written for yourself. Systematically take out each black box one-by-one and run your program. This will help to see if these parts of the program contain the error");
    var testArray = test.split("");
    //console.log(testArray);
    background('#ffffff');
    let x1 = 75;
    let y1 = 50;
    let x2 = 255;
    let x3 = 100;
    let y2 = 500;
    strokeWeight(5);
    rect(0, 0, 1920, 1080);

    strokeWeight(2);
    //for (var k = 0; k < 1920; k = k + 1) {
    //    for (var l = 0; l < 1920; l = l + 25) {
    //        stroke(random() * x2, random() * x2, random() * x2);
    //        line(l, k, 1920, k);
    //        x1 = (random() * 50);
    //    }
    //}
    //for (var i = 5; i < 1920; i = i + y1) {
    //    for (var j = 0; j < 500; j = j + 20) {
    //        stroke('black');
    //        line(i, j, i, 1080);
    //        y1 = (random() * 50);
    //    }
    //}

    //=================================================================================================================================================//

    //for (var k = 0; k < 1920; k = k + y1) {
    //    for (var l = 0; l < 1920; l = l + 20) {
    //        stroke('black');
    //        line(l, k, k, 1920);
    //        if (random() > 0.5) {
    //            stroke(random() * x2, random() * x2, random() * x2);
    //            line(l, k, k, 1920);
    //        }
    //        y1 = (random() * 50);
    //    }
    //}

    //=================================================================================================================================================//

    for (var i = 0; i < 1921; i = i + 1) {
        for (var j = 0; j < 1921; j = j + 1) {
            var value = Math.random() * 0xFF | 0;
            var grayscale = (value << 16) | (value << 8) | value;
            var color = '#' + grayscale.toString(16);

            stroke(color);
            line(i, j, i+1, j+1);
        }
    }

    for (var i = 0; i < 1920; i = i + 50) {
        for (var j = 0; j < 1920; j = j + 40) {
            if (random() < 0.5) {
                strokeWeight(3);
                stroke("black");
                line(i, j, i + 75, j + 100);
            }
            else {
                stroke("black");
                strokeWeight(random() * 10);
                line(i, j, i, j);
            }
        }
    }
    for (var i = 0; i < 1920; i = i + 50) {
        for (var j = 0; j < 1920; j = j + 40) {
            if (random() < 0.5) {
                strokeWeight(3);
                stroke("black");
                line(i + 50, j, i, j + 100);
            }
            else {
                strokeWeight(random() * 15);
                stroke(random() * x2, random() * x2, random() * x2)
                line(i, j, i, j);
            }
        }
    }

    testArray.forEach(forTest);

}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join('');
}

function forTest(item) {
    console.log(item);
}