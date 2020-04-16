function Slider(count) {
    //LE = {_count: undefined}
    var _count = count; // private

    function sendAjax() {
        var response = [];

        return response;
    }

    this.pictures = sendAjax();

    this.getCount = function() { // getter
        return _count;
    }

    this.setCount = function(value) { //setter
        if (!isNaN(value) && value <= _count) {
            _count = value;
        }
    }

}



var slider = new Slider(100);

console.log(slider.getCount());


console.log(slider.setCount(10));

console.log(slider.getCount());