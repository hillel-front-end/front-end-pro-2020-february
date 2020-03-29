var slider = (function initSlider(collection) {
        var counter = 0, max = collection.length - 1 || 0;

        function isFinish(counter) {
            return max < counter;
        }

        function isStart(counter) {
            return counter < 0;
        }

        function set(value) {
            if (value < 0 || value > max) {
                return null;
            }

            counter = value;
        }

        function getCurrentElement(counter) {
            return collection[counter];
        }

        function up() {
            ++counter;

            if (isFinish(counter)) {
                set(0);
            }

            return getCurrentElement(counter);
        }

        function down() {
            --counter;

            if (isStart(counter)) {
                set(max);
            }

            return getCurrentElement(counter);
        }

        return {
            up: up,
            down: down
        };
})(['pic1.jpg', 'pic2.jpg', 'pic3.jpg']);


console.log(slider, 'slider');

// console.log(slider.up());
// console.log(slider.up());
// console.log(slider.up());

// console.log(slider.down());
// console.log(slider.down());
// console.log(slider.down());


