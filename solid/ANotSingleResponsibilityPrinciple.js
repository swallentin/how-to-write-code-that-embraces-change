// The SRP recommends breaking classes into smaller, beahvior-specific classes, 
// each having just one reason to change. 
// Such classes tend to be highly cohesive and loosely coupled. 
// In a sense, SRP is cohesion defined from the point of view of the users.

var Reporter = function () {
	
};

Reporter.prototype.generateIncomeReports = function() {};
Reporter.prototype.generatePaymentsReports = function() {};
Reporter.prototype.computeBalance = function() {};
Reporter.prototype.printReport = function() {};