/********************************************************
* pointTracker.js
* John Dean
*
* This file implements a Point class.
* It stores Point objects for the locations of the two
* most recent mouse clicks.
********************************************************/
class Point {
    constructor(x, y) {
	this.x = x;
	this.y = y;
	if (Point.count == undefined) {
	    Point.count = 1;
	}
	else if (Point.count == 1) {
	    Point.count = 2;
	}
    } // end constructor
    //****************************************************
    // Return the point in the format "(x, y)"
    value() {
	return "(" + this.x + ", " + this.y + ")";
    } // end value
    //****************************************************
    // Return a count for the number of Point objects
    static getCount() {
	return (Point.count == undefined) ? 0 : Point.count;
    } // end getcount
	
