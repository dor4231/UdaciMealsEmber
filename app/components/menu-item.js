import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
    orderManager: inject.service('order-manager'),
    tagName: 'li',
    classNames: ['menu-item'],
    mealCategory: 'breakfast',
    actions: {
        changeCategory(category) {
            this.set('mealCategory', category)
        },
        chooseItem(menuItemName) {
            this.get('orderManager').chooseMenuItem(this.get('mealCategory'), menuItemName)
    }
}
});
