// SERVICES
myApp.service('nameService', function() {
    this.user = {
        name: 'Your full name',
    };
});

myApp.service('portalService', function() {
    this.content = {
        type: null,
        description: '',
    }
});