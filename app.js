$(document).ready(function() {
    $('#getUsers').on('click', function() {
        return $.ajax({
            url: 'http://reqr.es/api/users?page=1',
            method: 'GET',
            success: function(data) {
                console.log(data)
        }
        });
    });

});