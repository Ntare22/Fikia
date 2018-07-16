import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { Users } from './db/collections.js';
import './main.html';

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        //  Accounts.createUser({
        //     email: email,
        //     password: password
        // });

         console.log(email);
         console.log(password);
         //Users.insert({ email: email, password:password});
         Router.route('/home');
 
    }
});
