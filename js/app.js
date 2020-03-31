$(document).ready(function(){
  function Obj1(obj1){
    this.image_url = obj1.image_url;
    this.title = obj1.title;
    this.description = obj1.description;
    this.keyword = obj1.keyword;
    this.horns = obj1.horns;
    Obj1.call.push(this);

  }
  Obj1.all = [];

  Obj1.prototype.render = function(){
    let $obj1Clone = $('.imgs1').clone();
    $obj1Clone.find('h2').text(this.title);
    $obj1Clone.find('img').attr('src',this.image_url);
    $obj1Clone.find ('p').text(this.description);
    // $obj1Clone.find('h3').text(this.keyword);
    // $obj1Clone.find('h4').text(this.horns);
    $obj1Clone.removeClass('imgs1');
    $obj1Clone.attr('id',this.title);
    $('main section').append($obj1Clone);
    Obj1.prototype.render2 = function(){
      $('select').change(function(){

        if ($('select').val() === 'narwhal'){
          console.log(5);
        }
      });
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
  };
});
