import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return Ember.$.get( '/menu/' + params.menu_item + '.json' );
    }
});