"use strict";
require('traceur-source-maps').install(require('traceur'));
var log = console.log;
var A = function A(x) {
  this.x = x;
};
($traceurRuntime.createClass)(A, {methodA: function() {
    log(this.x);
  }}, {});
var B = function B(x, y) {
  $traceurRuntime.superCall(this, $B.prototype, "constructor", [x]);
  this.y = y;
};
var $B = B;
($traceurRuntime.createClass)(B, {methodB: function() {
    log(this.y);
  }}, {}, A);
var a = new A(1);
a.methodA();
var b = new B(1, 2);
b.methodB();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaGVyaXRhbmNlX2NsYXNzLmVzNi5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8yIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci82IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUssQ0FBQSxHQUFFLEVBQUksQ0FBQSxPQUFNLElBQUk7QUNBL0UsQUFBSSxFQUFBLElEQ0osU0FBTSxFQUFBLENBQ1EsQ0FBQSxDQUFHO0FBQ2IsS0FBRyxFQUFFLEVBQUksRUFBQSxDQUFBO0FDSDJCLEFESXRDLENDSnNDO0FDQXhDLEFBQUMsZUFBYyxZQUFZLENBQUMsQUFBQyxLRk0zQixPQUFNLENBQU4sVUFBTyxBQUFDLENBQUU7QUFDUixNQUFFLEFBQUMsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxDQUFBO0VBQ1osTUVSbUY7QURBckYsQUFBSSxFQUFBLElEV0osU0FBTSxFQUFBLENBQ1EsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFHO0FHWnBCLEFIYUksZ0JHYlUsVUFBVSxBQUFDLHFDSGFmLENBQUEsRUdaMEMsQ0hZekM7QUFDUCxLQUFHLEVBQUUsRUFBSSxFQUFBLENBQUE7QUNkMkIsQURldEMsQ0Nmc0M7QUdBeEMsQUFBSSxFQUFBLE9BQW9DLENBQUE7QUNBeEMsQUFBQyxlQUFjLFlBQVksQ0FBQyxBQUFDLEtMaUIzQixPQUFNLENBQU4sVUFBTyxBQUFDLENBQUU7QUFDUixNQUFFLEFBQUMsQ0FBQyxJQUFHLEVBQUUsQ0FBQyxDQUFBO0VBQ1osTUFSYyxFQUFBLENLVndDO0VMcUJwRCxDQUFBLENBQUEsRUFBSSxJQUFJLEVBQUEsQUFBQyxDQUFDLENBQUEsQ0FBQztBQUNmLFFBQVEsQUFBQyxFQUFDLENBQUE7RUFFTixDQUFBLENBQUEsRUFBSSxJQUFJLEVBQUEsQUFBQyxDQUFDLENBQUEsQ0FBRyxFQUFBLENBQUM7QUFDbEIsUUFBUSxBQUFDLEVBQUMsQ0FBQTtBQUFBIiwiZmlsZSI6ImluaGVyaXRhbmNlX2NsYXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtsZXQgbG9nID0gY29uc29sZS5sb2dcbmNsYXNzIEEge1xuICBjb25zdHJ1Y3Rvcih4KSB7XG4gICAgdGhpcy54ID0geFxuICB9XG5cbiAgbWV0aG9kQSgpIHtcbiAgICBsb2codGhpcy54KVxuICB9XG59XG5cbmNsYXNzIEIgZXh0ZW5kcyBBIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHN1cGVyKHgpXG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgbWV0aG9kQigpIHtcbiAgICBsb2codGhpcy55KVxuICB9XG59XG5cbmxldCBhID0gbmV3IEEoMSlcbmEubWV0aG9kQSgpXG5cbmxldCBiID0gbmV3IEIoMSwgMilcbmIubWV0aG9kQigpIiwidmFyICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzEiLCIoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKSgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yKSIsIiR0cmFjZXVyUnVudGltZS5zdXBlckNhbGwoJF9fcGxhY2Vob2xkZXJfXzAsICRfX3BsYWNlaG9sZGVyX18xLCAkX19wbGFjZWhvbGRlcl9fMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIiwidmFyICRfX3BsYWNlaG9sZGVyX18wID0gJF9fcGxhY2Vob2xkZXJfXzEiLCIoJHRyYWNldXJSdW50aW1lLmNyZWF0ZUNsYXNzKSgkX19wbGFjZWhvbGRlcl9fMCwgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzMpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9