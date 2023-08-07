const findButton = document.getElementById("findButton");
const resultDiv = document.getElementById("result");

findButton.addEventListener('click', function () {

    const numberA = parseInt(document.getElementById('numberA').value);
    const numberB = parseInt(document.getElementById('numberB').value);

    if (!isNaN(numberA) && !isNaN(numberB)) {

        resultDiv.innerHTML = '<strong> Các số chính phương trong khoảng ' + numberA + ' đến ' + numberB + ':</strong><br>';

        for (let num = numberA; num <= numberB; num++) {
            if (isSquareNumber(num)) {
                resultDiv.innerHTML += num + ',';

            }
        }
        resultDiv.innerHTML = resultDiv.innerHTML.slice(0, -1);
    } else {
        resultDiv.innerHTML = '<strong> Vui lòng nhập đúng giá trị cho a và b.</strong><br>';
    }

});

function isSquareNumber(num) {
    return Math.sqrt(num) % 1 === 0;
}