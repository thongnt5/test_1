const colorBox = document.getElementById('colorBox');
const randomButton = document.getElementById('randomButton');
const copyButton = document.getElementById('copyButton'); 
const gradientInput = document.getElementById('gradientInput');

//Xây dựng trang web pick mã màu ngẫu nhiên khi bấm nút
function generateRandomColor(){
    const letters = '1234556789ABCDEF'; 
    let color = '#';

    for(let i = 0 ; i< 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

function updateColor(){
    const randomColor = generateRandomColor();
    colorBox.style.backgroundColor = randomColor;
    gradientInput.value = randomColor;
}

//Hiện mã màu hex, cho phép người dùng bấm nút copy để copy mã

function copyHex(){
    const colorHex = colorBox.style.backgroundColor;
    const textarea = document.createElement('textarea');
    textarea.value = colorHex;

    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Mã màu đã được copy:' + colorHex);
}

randomButton.addEventListener('click',updateColor);
copyButton.addEventListener('click',copyHex);

/*- Cho phép chọn màu gradient
- Background trang web sẽ thay đổi màu tương ứng với mã màu đã chọn.*/

gradientInput.addEventListener('input',() =>{
    colorBox.style.backgroundColor = gradientInput.value;
});

updateColor();