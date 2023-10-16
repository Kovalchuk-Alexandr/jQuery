$(document).ready(function(){
	// Получаем нынешний правый и левый активный блок
	var $arrayRight = $(".slider-right-feedbacks");
	var $arrayLeft = $(".slider-left-feedbacks");

	// Берем кнопки слайдера
	var $rightButton = $(".right-container:eq(0)");
	var $leftButton = $(".left-container:eq(0)");

	var $sliderContLeft = $(".slider-left-container:eq(0)");
	var $sliderContRight = $(".slider-right-container:eq(0)");

	// Получаем общий объект с переключателями (три квадратных кнопки по середине)
	var $tabMenu = $(".tabs");
	var indicator = 0; // Количество слайдов, изначально мы на нулевом
	var sliderStop = false;

	function addClass(param , numbs, end) {
		if(!sliderStop) {
			sliderStop = true; // Устанавливаем что слайдер в работе
			// Добавление различных стилей к различным блокам
			$sliderContRight.addClass("animation-rotates");
			$sliderContLeft.addClass("animation-rotates");
			$arrayRight.eq(param + numbs).addClass('animation-slide');
			$arrayLeft.eq(param + numbs).addClass('animation-slide');
			$tabMenu.eq(param + numbs).removeClass("click-tab");

			// Через 700 милисекунд устанавливаем нужные стили
			// Таким образом получается эффект анимации
			setTimeout(function(){
				$arrayRight.eq(param + numbs).addClass('disable');
				$arrayLeft.eq(param + numbs).addClass('disable');
				$arrayRight.eq(param + end).addClass('active');
				$arrayLeft.eq(param + end).addClass('active');
				$arrayRight.eq(param + end).removeClass('disable animation-slide animation-rotates');
				$arrayLeft.eq(param + end).removeClass('disable animation-slide animation-rotates');
				$sliderContRight.removeClass("animation-rotates");
				$sliderContLeft.removeClass("animation-rotates");
				$tabMenu.eq(param + end).addClass("click-tab");
				sliderStop = false;
			},700);
		}
	}

	function NewSlide(param) { // Функция для вызова следующего слайда
		if(!sliderStop) {
			if(param == $arrayLeft.length){
				addClass(indicator,-1, -$arrayLeft.length);
				indicator = 0;
			}else {addClass(indicator, -1, 0)}
		}
	}
	function PrevSlide(param) { // Функция для вызова предыдущего слайда
		if(param == -1) {
			addClass(indicator, 1, $arrayLeft.length);
			indicator = $arrayLeft.length-1;
		}else {addClass(indicator, 1, 0)}
	}

	// Функция для переключения слайдов по нажатию на табы (кнопки под блоками)
	function ResetSlider(params) {
			if(!sliderStop) {
				sliderStop = true; // Устанавливаем что слайдер в работе
				// Добавление различных стилей к различным блокам
				$sliderContRight.addClass("animation-rotates");
				$sliderContLeft.addClass("animation-rotates");
				$arrayRight.eq(indicator).addClass('animation-slide');
				$arrayLeft.eq(indicator).addClass('animation-slide');
				$tabMenu.eq(indicator).removeClass("click-tab");

				// Через 700 милисекунд устанавливаем нужные стили
				// Таким образом получается эффект анимации
				setTimeout(function(){
					$arrayRight.eq(indicator).addClass('disable');
					$arrayLeft.eq(indicator).addClass('disable');
					$arrayRight.eq(indicator).removeClass('active');
					$arrayLeft.eq(indicator).removeClass('active');
					$arrayRight.eq(params).addClass('active');
					$arrayLeft.eq(params).addClass('active');
					$arrayRight.eq(params).removeClass('disable animation-slide');
					$arrayLeft.eq(params).removeClass('disable animation-slide');
					$sliderContRight.removeClass("animation-rotates");
					$sliderContLeft.removeClass("animation-rotates");
					$tabMenu.eq(params).addClass("click-tab");
					sliderStop = false;
					indicator = params;
				},700);
			}
	}

	// Вызываем функцию переключения на нужный слайду
	// при нажатии на соответсвующую кнопку под слайдером (три мелких квадратика)
	$tabMenu.eq(0).on('click',function(){
		if(!sliderStop) // Если слайдер сейчас неактивный,
			ResetSlider(0); // то вызываем функцию для переключения слайда
	});

	// Аналогичные действия, но при нажатии на другие кнопки
	$tabMenu.eq(1).on('click',function(){
		if(!sliderStop)
			ResetSlider(1);
	});

	$tabMenu.eq(2).on('click',function(){
		if(!sliderStop)
			ResetSlider(2);
	});

	// Добавляем обработчик события при нажатии на кнопку вправо/влево
	$rightButton.on('click', function() {
		if(!sliderStop) {
			indicator++;
			NewSlide(indicator);
		}
	});

	$leftButton.on('click', function() {
		if(!sliderStop) {
			indicator--;
			PrevSlide(indicator);
		}
	});
})
