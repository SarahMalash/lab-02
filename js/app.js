$(document).ready(function(){
  function Obj1(obj1){
    this.image_url = obj1.image_url;
    this.title = obj1.title;
    this.descreption = obj1.descreption;
    this.keyword = obj1.keyword;
    this.horns = obj1.horns;

  }
  Obj1.prototype.render = function(){
    let $obj1Clone = $('.imgs1').clone();
    $obj1Clone.find('h2').text(this.title);
    $obj1Clone.find('img').attr('src',this.image_url);
    $obj1Clone.find('p').text(this.descreption);
    $obj1Clone.find('p').text(this.keyword);
    $obj1Clone.find('p').text(this.horns);
    $obj1Clone.removeClass('imgs1');
    $obj1Clone.attr('id',this.title);
    $('main section').append($obj1Clone);


  };

  const readJason = () => {
    $.ajax('data/page-1.json',{method:'get', dataType: 'JSON'}) .then(data =>{
      data.forEach(obj1Item => {
        let obj1 = new Obj1(obj1Item)
        obj1.render();
      });
    });
  };
  readJason();
});
