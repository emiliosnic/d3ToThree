
/**
 *   File: 
 *         views/circle.js
 * 	
 * 	 Description:
 * 	       <TODO> 
 */

VIEW.circle = function() {  
	
	this.type = 'circle';
	this.meshes = []; 

	this.load = function(data){

		var that = this;
	
		data.forEach(function (item) {
			var radius  = item.r.baseVal.value,
				offsetX = item.cx.baseVal.value,
				offsetY = item.cy.baseVal.value,
				color   = COLORS.HEX(item.style.cssText.slice(6));

			var x = UNITS.normalizeH(offsetX) + _this.model.canvas.offsetLeft;
				y = UNITS.normalizeV(offsetY) - _this.model.canvas.offsetTop;

			if (_this.config['3D']){
				that.meshes.push(
					GEOMETRIES.Sphere({ radius: radius, color: color, x: x, y: y, z: 0})
				);

			} else {
				that.meshes.push(
					GEOMETRIES.Circle({ radius: radius, color: color, x: x, y: y, z: 0})
				);

			}
		});
	}
}