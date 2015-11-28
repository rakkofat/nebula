exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.eveningExerciseAnswers = {
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce( (prev, curr) => prev + curr );
  },

  remove : function(arr, item) {
    return _.without(arr, item);
  },

  reverseString : function(str) {
    return str.split('').reverse().join('');
  },

  longestSubString : function(str) {
    return _.max(str.split(' '), function(item) { return item.length; });
  },

  letterMoveForward : function(str) {
    return str.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode(c.charCodeAt(0)+1);
    }).replace(/{/g, "a").replace(/\[/g, "A");
  },

  capitalizeWords : function(str) {
    return _.map(str.split(' '), function(w) {
      return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
    }).join(' ');
  }
};
