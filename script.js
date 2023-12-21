function $(id) {
    return document.getElementById(id);
}
let count = $('count');
let list = $('list');
let classfy = document.querySelector('.classfy');
let flowerListItem = [
    {
        id: 1,
        dataname: 'f_01',
        name: '프리지아',
        price: '50000',
        image: 'image/프리지아_01.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple'],
            size: ['20cm'],
            season: ['spring', 'summer', 'fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
    {
        id: 2,
        dataname: 'f_02',
        name: '프리지아',
        price: '30000',
        image: 'image/프리지아_02.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple'],
            size: ['20cm'],
            season: ['spring', 'summer', 'fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
    {
        id: 3,
        dataname: 'f_03',
        name: '히야신스',
        price: '30000',
        image: 'image/프리지아_03.jpg',
        nature: {
            type: ['basket'],
            color: ['pinkpurple'],
            size: ['35cm'],
            season: ['spring', 'summer', 'fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
    {
        id: 4,
        dataname: 'f_04',
        name: '히야신스',
        price: '80000',
        image: 'image/프리지아_04.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple'],
            size: ['35cm'],
            season: ['spring', 'summer', 'fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
    {
        id: 5,
        dataname: 'f_05',
        name: '장미',
        price: '50000',
        image: 'image/프리지아_05.jpg',
        nature: {
            type: ['bunch'],
            color: ['pinkpurple', 'whitepurple'],
            size: ['35cm'],
            season: ['spring', 'summer', 'fall', 'winter'],
            description01: '핑크보라톤의 이쁘고 아기자기한 꽃 다발 입니다.',
            description02: '크기는 대략 20cm 되는 꽃 다발 입니다.'
        }
    },
]


// ===============================================================ITEM 정보
let productFilter = flowerListItem;
showProduct(productFilter);

function showProduct(productFilter) {
    count.innerText = productFilter.length;
    list.innerHTML =  '';
    productFilter.forEach(item => {
        
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        let newData = newItem;
        newData.dataset.name = item.dataname;

        let newImage = new Image();
        newImage.src = item.image;
        newData.appendChild(newImage);

        let newData01 = document.createElement('div')
        newData01.classList.add('title');
        newData01.innerHTML = item.name;
        newData.appendChild(newData01);

        let newData02 = document.createElement('div')
        newData02.classList.add('price');
        newData02.innerHTML = item.price;
        newData.appendChild(newData02);


        list.appendChild(newData);
    });
}

// ===================================================================FILTER
classfy.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valueClassfy = event.target.elements;
    // console.log(valueClassfy);
    productFilter = flowerListItem.filter(item => {

        if(valueClassfy.type.value !='') {
            if(item.nature.type != valueClassfy.type.value){
                return false;
            }
        }

        if(valueClassfy.flowercolor.value !='') {
            if(!item.nature.color.includes(valueClassfy.flowercolor.value)){
                return false;
            }
        }

        if(valueClassfy.price.value !='') {
            if(!item.price.includes(valueClassfy.price.value)){
                return false;
            }
        }     
        return true;
    })
    showProduct(productFilter);
    openPopupWindowActive();
})
// ============================================================POPUP WINDOW

makePopupWindow();
function makePopupWindow(){
    let previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML ='';
    productFilter.forEach(item => {

            let newData00 = document.createElement('div');
            newData00.classList.add('previewbox');
            let newData01 = newData00;
            newData01.dataset.target = item.dataname;

            let newData03 = document.createElement('div');
            newData03.classList.add('preview');
            newData01.appendChild(newData03);

            let newImage = new Image ();
            newImage.src = item.image;
            newData03.appendChild(newImage);
            
            let newData04 = document.createElement('div');
            newData04.classList.add('closebutton');
            newData04.innerHTML = "close";
            newData03.appendChild(newData04);

            let newData05 = document.createElement('br');
            newData01.appendChild(newData05);

            let newData06 = document.createElement('h2');
            newData06.innerHTML = item.name;
            newData01.appendChild(newData06);

            let newData07 = document.createElement('p');
            newData07.classList.add('flowersummary');
            newData07.innerHTML = item.nature.color + '의 예쁜 ' + item.price + '원대 ' + item.nature.type + ' 이예요!';
            newData01.appendChild(newData07);

            let newData08 = document.createElement('br');
            newData01.appendChild(newData08);

            let newData09 = document.createElement('p');
            newData09.classList.add('description');
            newData09.innerHTML = item.nature.description01;
            newData01.appendChild(newData09);

            previewContainer.appendChild(newData01);
        
    })
 }

// =====================================================OPENPOPUPWINDOWACTIV

openPopupWindowActive();
function openPopupWindowActive() {
    let previewContainer = document.getElementById('previewContainer');
    let flowerList = document.querySelectorAll('#list .item');
    let previewBox = document.querySelectorAll('.previewbox');

    flowerList.forEach(item => {
        item.onclick = () => {
            previewContainer.style.display = "flex";
            let name = item.getAttribute('data-name');
            previewBox.forEach(previewBox => {
                let target = previewBox.getAttribute('data-target');
                if(name == target) {
                    previewBox.classList.add('active');
                };
            });
        };
    });

}

// =======================================================CLOSE POPUPWINDOW

// closePopupWindow();
// function closePopupWindow() {
//     let previewContainer = document.getElementById('previewContainer');

let closeButton = document.querySelectorAll('.closebutton');

closeButton.forEach(item => {
    item.onclick =() => {
        previewContainer.style.display = "none";
        let previewBoxActive = document.querySelector('.previewbox.active');
        previewBoxActive.classList.remove('active');
    }
})


