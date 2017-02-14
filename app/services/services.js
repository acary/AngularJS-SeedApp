// SERVICES
myApp.service('nameService', function() {
    this.user = {
        name: 'Andrew',
    };
});

myApp.service('portalService', function() {
    this.content = {
        type: null,
        description: null,
    }
});