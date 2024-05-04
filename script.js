const dropArea = document.getElementById('drop_area');
const inputFile = document.getElementById('input_file');
const imgView = document.getElementById('img_view');

inputFile.addEventListener('change', uploadImage);

function uploadImage() { 
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.textContent = '';
    imgView.style.border = '';

}

dropArea.addEventListener('dragover', function(e){
   e.preventDefault(); 
});
dropArea.addEventListener('drop', function(e){
   e.preventDefault(); 
   inputFile.files = e.dataTransfer.files;
   uploadImage();
});
