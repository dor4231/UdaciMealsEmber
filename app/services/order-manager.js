import Service from '@ember/service';

export default Service.extend({
    selectedDay: 'Monday',
    menuSelection: {
        Monday: {},
        Tuesday: {},
        Wendesday: {},
        Thurstday: {},
        Friday: {}
    },
    setSelectedDay(day) {
        this.set('selectedDay', day);
    },

    chooseMenuOption(mealCategory, menuItemName) {
        this.set("menuSelection." + this.get(selectedDay) + "." + mealCategory, menuItemName);
    },
    removeMenuItem(day, mealCategory) {
        this.set("menuSelection." + day + "." + mealCategory, '');
    }
});
