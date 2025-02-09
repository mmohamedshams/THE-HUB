window.onload = function() {
    setTimeout(function(){
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 2000);
};



gsap.timeline({ defaults: { ease: "power2.out" } })
.from('header', { opacity: 0, x: -100, duration: 1.5 })
.from('.main-content', { opacity: 0, y: 50, duration: 1 }, "-=1")
;

if (window.location.pathname === "/index.html") {
 
    document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="style.css">');
}

const menuToggle = document.getElementById('menu-toggle');
const slider = document.getElementById('slider');


function toggleSlider() {
  slider.classList.toggle('open');
}


function closeSlider() {
  slider.classList.remove('open');
}


menuToggle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  toggleSlider();
});


document.addEventListener('click', (event) => {
  
  if (!slider.contains(event.target) && !menuToggle.contains(event.target)) {
    closeSlider();
  }
});

    const imageElement = document.querySelector('.main-content img');
    const images = [
        'image/New Project (1).jpg',
        'image/New Project (3).jpg', 
        'image/New Project (4).jpg', 
    ];

    let currentIndex = 0;

   
    function changeImage() {
        
        anime({
            targets: imageElement,
            opacity: 0,
            duration: 600, 
            easing: 'linear',
            complete: function() {
                
                imageElement.src = images[currentIndex];

                
                anime({
                    targets: imageElement,
                    opacity: 1,
                    duration: 600, 
                    easing: 'linear',
                });

              
                currentIndex = (currentIndex + 1) % images.length;
            },
        });
    }

    
    changeImage();

    
    setInterval(changeImage, 7000);

   
    

    document.addEventListener('DOMContentLoaded', function() {
        const customizeLink = document.querySelector('.Customize');
        const popupBox = document.querySelector('.popup-box');
        const overlay = document.querySelector('.overlay1');
    
        customizeLink.addEventListener('click', function(e) {
            e.preventDefault();
            popupBox.style.display = 'block';
            overlay.style.display = 'block';
            setTimeout(function() {
                popupBox.style.opacity = '1';
                overlay.style.opacity = '1';
            }, 50);
        });
    
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                popupBox.style.opacity = '0';
                overlay.style.opacity = '0';
                setTimeout(function() {
                    popupBox.style.display = 'none';
                    overlay.style.display = 'none';
                }, 300);
            }
        });
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        const customizeLink = document.querySelector('.free_inspection');
        const popupBox = document.querySelector('.popup-box1');
        const overlay = document.querySelector('.overlay1');
    
        customizeLink.addEventListener('click', function(e) {
            e.preventDefault();
            popupBox.style.display = 'block';
            overlay.style.display = 'block';
            setTimeout(function() {
                popupBox.style.opacity = '1';
                overlay.style.opacity = '1';
            }, 50);
        });
    
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                popupBox.style.opacity = '0';
                overlay.style.opacity = '0';
                setTimeout(function() {
                    popupBox.style.display = 'none';
                    overlay.style.display = 'none';
                }, 300);
            }
        });
    });
    



    function redirectToAnotherPage() {
        
        window.location.href = "index.html";
    }
    
    document.addEventListener("DOMContentLoaded", function() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex'; 
    });
    

document.addEventListener('DOMContentLoaded', function() {
    const customizeLink = document.querySelector('.Customize');
    const popupBox = document.querySelector('.popup-box');
    const overlay = document.querySelector('.overlay1');

    customizeLink.addEventListener('click', function(e) {
        e.preventDefault();
        popupBox.style.display = 'block';
        overlay.style.display = 'block';
        setTimeout(function() {
            popupBox.style.opacity = '1';
            overlay.style.opacity = '1';
        }, 50);
    });

    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            popupBox.style.opacity = '0';
            overlay.style.opacity = '0';
            setTimeout(function() {
                popupBox.style.display = 'none';
                overlay.style.display = 'none';
            }, 300);
        }
    });
});


let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

const intervalId = setInterval(updateNumbers, 40);

function updateNumbers() {
    document.getElementById('box1').innerHTML = `
        <div class="number">+${counter1}</div>
        <div class="description" id="Building_Number">Building Number</div>
    `;

    document.getElementById('box2').innerHTML = `
        <div class="number">+${counter2}</div>
        <div class="description" id="Units_Number">Units Number</div>
    `;

    document.getElementById('box3').innerHTML = `
        <div class="number">+${counter3}</div>
        <div class="description" id="Maintenance_Number">Maintenance Operations Number</div>
    `;

    if (counter1 < 1) {
        counter1++;
    }

    if (counter2 < 80) {
        counter2 += 2;
    }

    if (counter3 < 102) {
        counter3 += 4;
    }

    if (counter1 === 1 && counter2 === 80 && counter3 === 102) {
        clearInterval(intervalId);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numberbox');
    const section = document.querySelector('#numberworks'); 
    
    let isCountingStarted = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const speed = 6000; 
                const increment = target / speed;
                
                if(count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    };

    const checkScroll = () => {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionPosition < windowHeight && !isCountingStarted) {
            startCounting();
            isCountingStarted = true;
        }
    };

    window.addEventListener('scroll', checkScroll);
});


        const rotatingImageElement = document.getElementById('rotating-image');
        const rotatingImages = [
            'image/Electrical.jpg',
            'image/AC.jpg',
            'image/painting.jpg'
        ];
        
        let rotatingCurrentIndex = 0;
        
        function changeRotatingImage() {
            anime({
                targets: rotatingImageElement,
                opacity: 0,
                duration: 600, 
                easing: 'easeInOutQuad', 
                complete: function() {
                    rotatingImageElement.src = rotatingImages[rotatingCurrentIndex];
                    anime({
                        targets: rotatingImageElement,
                        opacity: 1,
                        duration: 600, 
                        easing: 'easeInOutQuad', 
                    });
                    rotatingCurrentIndex = (rotatingCurrentIndex + 1) % rotatingImages.length;
                },
            });
        }
        
        setInterval(changeRotatingImage, 10000);   
        

        

        document.addEventListener('DOMContentLoaded', function () {
            const services = document.querySelectorAll('.service-box');
            let currentService = 0;
        
            function showNextService() {
                services[currentService].classList.remove('active');
                currentService = (currentService + 1) % services.length;
                services[currentService].classList.add('active');
            }
        
            services[currentService].classList.add('active');
            setInterval(showNextService, 5000);
        });

        document.addEventListener('DOMContentLoaded', function() {
            let currentIndex = 0;
            const slider = document.querySelector('.image-slider');
            const totalImages = slider.children.length;
        
            function showNextImages() {
                currentIndex = (currentIndex + 1) % totalImages;
                const transformValue = -currentIndex * (100 / 5); 
                slider.style.transform = `translateX(${transformValue}%)`;
            }
        
            setInterval(showNextImages, 5000);
        });
        

        document.querySelectorAll('.items').forEach(function(ul) {
            ul.style.display = 'none';
        });
    
       
     // وظيفة لتحديث النص بناءً على لغة الصفحة
function updateButtonText(button, isExpanded) {
    const currentLanguage = document.documentElement.lang; // استعادة اللغة الحالية
    if (currentLanguage === 'ar') {
        button.textContent = isExpanded ? 'إخفاء التفاصيل' : 'عرض التفاصيل';
    } else {
        button.textContent = isExpanded ? 'HIDE DETAILS' : 'VIEW DETAILS';
    }
}

// إضافة حدث النقر لكل زر وتحديث النص بناءً على اللغة والحالة
document.querySelectorAll('.read-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
        var ul = this.previousElementSibling;
        var isExpanded = ul.style.display === 'none' || ul.style.display === '';
        ul.style.display = isExpanded ? 'block' : 'none';
        updateButtonText(this, isExpanded);
    });
});

// تحديث النصوص عند تغيير اللغة بواسطة المستخدم
function updateAllButtonsText() {
    document.querySelectorAll('.read-more-btn').forEach(function(button) {
        var ul = button.previousElementSibling;
        var isExpanded = ul.style.display === 'block';
        updateButtonText(button, isExpanded);
    });
}

// يجب استدعاء هذه الوظيفة عند تغيير اللغة في الموقع
function updateTextBasedOnLanguage() {
    const pageLanguage = document.documentElement.lang; // Assuming you set the page language attribute

    const totalPriceLabel = document.getElementById('Total_Price');
    if (pageLanguage === 'ar') {
        totalPriceLabel.innerHTML = 'المجموع الكلي: <span id="total-price">0</span> درهم/شهر';
    } else {
        totalPriceLabel.innerHTML = 'Total Price: <span id="total-price">0</span> AED/month';
    }
}

updateAllButtonsText();
updateTextBasedOnLanguage();

document.getElementById('package-select').addEventListener('change', function () {
    const selectedPackage = this.options[this.selectedIndex];
    const basePrice = parseInt(selectedPackage.getAttribute('data-price'));

    document.querySelector('.user-input').style.display = 'block';

    function calculateTotal() {
        const rooms = parseInt(document.getElementById('rooms').value) || 0;
        const acs = parseInt(document.getElementById('ac').value) || 0;
        const totalPrice = (rooms + acs) * basePrice;
        document.getElementById('total-price').innerText = totalPrice;

        if (totalPrice > 0) {
            document.getElementById('pay-button').style.display = 'block';
        }
    }

    document.getElementById('rooms').addEventListener('change', calculateTotal);
    document.getElementById('ac').addEventListener('change', calculateTotal);

    calculateTotal();
});

        
        
        document.getElementById('pay-button').addEventListener('click', function() {
            document.getElementById('payment-options').style.display = 'flex';
        });
        