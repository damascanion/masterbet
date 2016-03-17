app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Awesome';
	$scope.title2 = 'Bet';
	$scope.products = [{
		job_title: 'Bet365 £200 Bonus + £50 Mobile',
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/bet365.png',
		job_type: "Full_time",
		category: "Sportbook",
		link: "https://www.bet365.com/home/FlashGen4/WebConsoleApp.asp?&cb=1032541990"
	},
	{
		job_title: 'Coral bet 5 get a 20 free bet', 
		job_info: "Coral",
		Promocode: "F20",
		pubdate: "January 26", 
		cover: 'images/coral.jpg',
		job_type: "Full_time",
		category: "Sportbook"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/medium.jpg',
		job_type: "Full_time",
		category: "Sportbook"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/twitter.jpg',
		job_type: "freelance",
		category: "Casino"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/product_hunt.jpg',
		job_type: "freelance",
		category: "Casino"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/soundcloud.jpg',
		job_type: "contract",
		category: "Poker"
	},
		{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/product_hunt.jpg',
		job_type: "part_time",
		category: "HorceRacing"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/soundcloud.jpg',
		job_type: "contract",
		category: "Poker"
	},
		{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/product_hunt.jpg',
		job_type: "part_time",
		category: "HorceRacing"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/soundcloud.jpg',
		job_type: "contract",
		category: "Poker"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/bet365.png',
		job_type: "part_time",
		category: "Casino"
	},
	{
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/survey_monkey.jpg',
		job_type: "part_time",
		category: "HorceRacing"
	}];
	$scope.add = function () {
		$scope.products.push({
			job_title: 'Bet365 £200 Bonus + £50 Mobile', 
			job_info: "Test365",
			Promocode: "F200",
			pubdate: "January 25", 
			cover: 'images/survey_monkey.jpg',
			job_type: "part_time",
			category: "HorceRacing"
		},
    {
		job_title: 'Bet365 £200 Bonus + £50 Mobile', 
		job_info: "Bet365",
		Promocode: "F200",
		pubdate: "January 24", 
		cover: 'images/bet365.png',
		job_type: "freelance",
		category: "Sportbook"
	  }

		);
	};
	this.tab = 1;
	this.select = function(setTab) {
		this.tab = setTab;
	}
}]);