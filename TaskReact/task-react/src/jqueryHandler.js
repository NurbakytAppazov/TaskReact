import $ from 'jquery'

export const tabToggle = (e) => {
   e.preventDefault();
   if(!$('#' + e.currentTarget.id).hasClass('act-tab')){
      $('.ques_block').removeClass('act-tab');
      $('#' + e.currentTarget.id).addClass('act-tab');

      $('.ques_title').next().slideUp(100)

      if($('#' + e.currentTarget.id).hasClass('act-tab')){
         $('#' + e.currentTarget.id).children('.ques_title').next().slideDown(100);
      }
      $('.result-item').removeClass('act-result');
      $('.result-item').eq($('#' + e.currentTarget.id).index()).addClass('act-result');
   }
}
export const burgerToggle = () => {
   $('.sidebar').toggleClass('toggled_sidebar')
   $('.logo').toggleClass('act_logo')
}

export const answerHandler = (prop) => {
   let actIndex = $('.act-result > .act-answer').index();
   $('.act-result > .act-answer').removeClass('.act-result > act-answer');
   if(prop === 'next'){
      $('.act-result > .answer').eq(actIndex + 1).addClass('.act-result > act-answer')
   }
   else{
      $('.act-result > .answer').eq(actIndex - 1).addClass('.act-result > act-answer')
   }
}