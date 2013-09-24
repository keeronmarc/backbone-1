
// extend creates a new constructor and creates a constructor with all properties
// make a PersonView constructor
PersonView = Backbone.View.extend({
	className: 'cool',
// events object - only within the current instance is created
// only binds it in one place, and when delete one instance, unbinds it
	events: {
		"click #delete"	: "delete", 
		"click #edit"	: "edit",
		"click #save"	: "save",
		"click #cancel"	: "cancel"
	},
	// event is object, frist string property name, target is .delete, and value is "destroy"
	// for every event there will be a method name on the side
	initialize: function() {
		// console.log("I was born!!")
		// console.log('this is', this)

// joined a model and a view in this line
		$('.hero-unit').append(this.el)
		this.render();
	},
	// initialize will run as soon as the constructor is created, new instance of class is made 

// Every single backbone view creates a DOM element for itself, but it does not inject that DOM element into
// the page(unless you ask it to). 
// Name of DOM element it creates is this.el
// this.el because backbone knows what element is, stores reference to it, always remembers it
// View can then destroy it

	delete: function() {
		this.remove()
	},

	edit: function() {
		console.log('you clicked me')
		var cancelSaveBtn = _.template($('#save-cancel-btns').text())
		$(this.el).html('<input value="'+ this.model.get('name')+'"/>').append(cancelSaveBtn);
	},

	save: function() {
		var myName = $(this.el).find('input').val()
		this.model.set('name', myName)
		this.render();
	},

	cancel: function() {
		this.render()
	},

	render: function() {
		var btns = _.template($('#edit-delete-btns').text())
		$(this.el).text(this.model.get('name')).append(btns)	
	}

})

// Person model with save destroy, all the parse.object stuff came with, create instance in console. and told the instance the model was mason, and it knows how to use the model 
// run something through this consturctor, get person object, pass a reference to person view 
// and pass into 

Person =  Backbone.Model.extend({
	initialize: function () {
		// console.log("Hello, i\'m", this.get('name'))		
	}
})

// made a constructor with our data, with the Person. Constriuctor able to pass in an onject literal, setup attributes, as soon as person initialize ran, save somthing, 

// create new instance of Person 
var arrayOfNames = ['keeron', 'jake', 'joe', 'lars','mason'];

function namesArray(arrayOfNames) {
	arrayOfNames.forEach(function (names) {
		names = new Person({name: names})
		view = new PersonView({model: names})
	})
}

namesArray(arrayOfNames);

// key = new Person({name: 'keeron thandy'})
// view = new PersonView({model: key})
// create new instance of PersonView


//this.el - shell that gets injected into the DOM, 

// Come up with View COnstructor
// Model constructor
// create multiple instances of model, create multiple instances of view with model instances set as model
// hook up edit function, save it and re-render it
