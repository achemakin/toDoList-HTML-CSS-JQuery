$(document).ready(function(){

    // объявление переменных
    const caseEmptyEl = $('#js-case-empty'),
          caseUlEl = $('#js-case-ul'),
          caseFormEl = $('#js-form-input-case'), 
          headCaseEl = $('#js-head-case'),
          descriptionCaseEl = $('#js-description-head');

    // событие формы submit
    caseFormEl.on('submit', function(event) {
        event.preventDefault();
        
        //скрыть надпись Список пуст...
        caseEmptyEl.hide();
        
        //1
        const toHeadCase = headCaseEl.val(),
              toDescriptionCase = descriptionCaseEl.val(),
              sectAria = `sect${(~~(Math.random()*1e8)).toString(16)}`;
        
        //2
        const caseLi = `
            <li class="left-li js-case-item">
                <article class="left-articl">
                    <header class="left-header">
                        <h3 class="left-h3">${toHeadCase}</h3>
                
                        <button class="button-remove js-btn-remove" type="button" aria-label="Удалить дело"></button>

                        <button class="button-arrow js-btn-arrow" type="button" aria-label="Скрыть дело" aria-expanded="true" aria-controls="${sectAria}"></button>
                    </header>                                

                    <p class="left-p js-case-p" id="${sectAria}">${toDescriptionCase}</p>
                </article>
            </li>
        `;

        //3
        caseUlEl.append(caseLi);

        // сбросить данные формы
        this.reset();        
    });
     
    // Кнопка удаления новостей
    caseUlEl.on('click','.js-btn-remove', function(){
        $(this).parents('.js-case-item').remove();
        
        // если список пуст вернуть надпись Список пуст...
        if (!caseUlEl.children().length) {
            caseEmptyEl.show();
        };
    });
    
    // Кнопка сворачивания/разворачивания новостей
    caseUlEl.on('click','.js-btn-arrow', function() {
        const arrowEl = $(this).parents('.js-case-item').find('.js-case-p');
        
        if (arrowEl.is(':visible')) {            
            $(this)
               .attr({
                   'aria-expanded': 'false',
                   class: 'arrow-animation-right js-btn-arrow'
                });
        } else {
            $(this)
                .attr({
                    'aria-expanded': 'true',
                    class: 'arrow-animation-down js-btn-arrow'
                });
        };
        
        arrowEl.slideToggle();
    }); 
});