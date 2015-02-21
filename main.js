
(function() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.canvas.width = $(window).width();
	ctx.canvas.height = $(window).height();

	var fps = 60;
	var accelerate_simulation = 100; //number of days per second

	var zoom = 250;
	var ratio_star;
	var ratio_planet;
	var ratio_orbit;

	//kilometers
	var radius_sun;
	var radius_mercury;
	var radius_venus;
	var radius_earth;
	var radius_mars;
	var radius_jupiter;
	var radius_saturn;
	var radius_uranus;
	var radius_neptune;

	//average orbit radius in our solar system in astronomical units
	var radius_orbit_mercury;
	var radius_orbit_venus;
	var radius_orbit_earth;
	var radius_orbit_mars;
	var radius_orbit_jupiter;
	var radius_orbit_saturn;
	var radius_orbit_uranus;
	var radius_orbit_neptune;

	//orbital period duratation in days
	var period_mercury = 87.96926;
	var period_venus = 224.7008;
	var period_earth = 365.25636;
	var period_mars = 686.97959;
	var period_jupiter = 4332.8201;
	var period_saturn = 10755.699;
	var period_uranus = 30687.153;
	var period_neptune = 60190.03;

	//colors
	color_orbitpath = "white";
	color_sun = "#fff5f2";
	color_mercury = "#E5E5E5";
	color_venus = "#FFF5C3";
	color_earth = "#838ab6";
	color_mars = "#c0ac8b";
	color_jupiter = "#f0ecbd";
	color_saturn = "#dfe5b5";
	color_uranus = "#adc8d3";
	color_neptune = "#94aacf";

	var i = 0;
	/* bugged, zoom works, but accelerated fps each time interval kicks in
	setInterval(function () {
			zoom++;
			init();
	}, 1000);
	*/
	init();

	function init() {
			ratio_star = 10000 * (ctx.canvas.width / zoom);
			ratio_planet = 500 * (ctx.canvas.width / zoom);
			ratio_orbit = 300 / (ctx.canvas.width / zoom);

			//kilometers
			radius_sun = 695500 / ratio_star;
			radius_mercury = 2439.7 / ratio_planet;
			radius_venus = 6051.8 / ratio_planet;
			radius_earth = 6378.1 / ratio_planet;
			radius_mars = 3386 / ratio_planet;
			radius_jupiter = 69173 / ratio_planet;
			radius_saturn = 57316 / ratio_planet;
			radius_uranus = 25266 / ratio_planet;
			radius_neptune = 24553 / ratio_planet;

			//average orbit radius in our solar system in astronomical units
			radius_orbit_mercury = 0.39528297 * ratio_orbit;
			radius_orbit_venus = 0.7235 * ratio_orbit;
			radius_orbit_earth = 1.00000011 * ratio_orbit;
			radius_orbit_mars = 1.52366231 * ratio_orbit;
			radius_orbit_jupiter = 5.20336301 * ratio_orbit;
			radius_orbit_saturn = 9.53707032 * ratio_orbit;
			radius_orbit_uranus = 19.19126393 * ratio_orbit;
			radius_orbit_neptune = 30.06896348 * ratio_orbit;
			
			window.requestAnimationFrame(draw);
	}

	function draw() {
			setTimeout(function () {
					ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
					var time = new Date();

					//star sun
					ctx.save();
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_sun, 0, 2 * Math.PI);        
					ctx.fillStyle = color_sun;
					ctx.shadowBlur = 50; 
					ctx.shadowColor = "white";        
					ctx.fill();
					ctx.restore();

					//mercury orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_mercury, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet mercury
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_mercury) * (i / fps));
					ctx.arc(radius_orbit_mercury, 0, radius_mercury, 0, 2 * Math.PI);
					ctx.fillStyle = color_mercury;
					ctx.fill();
					ctx.restore();

					//venus orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_venus, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet venus
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_venus) * i / fps);
					ctx.arc(radius_orbit_venus, 0, radius_venus, 0, 2 * Math.PI);
					ctx.fillStyle = color_venus;
					ctx.fill();
					ctx.restore();

					//earth orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_earth, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet earth
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_earth) * i / fps);
					ctx.arc(radius_orbit_earth, 0, radius_earth, 0, 2 * Math.PI);
					ctx.fillStyle = color_earth;
					ctx.fill();
					ctx.restore();

					//mars orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_mars, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet mars
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_mars) * i / fps);
					ctx.arc(radius_orbit_mars, 0, radius_mars, 0, 2 * Math.PI);
					ctx.fillStyle = color_mars;
					ctx.fill();
					ctx.restore();

					//jupiter orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_jupiter, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet jupiter
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_jupiter) * i / fps);
					ctx.arc(radius_orbit_jupiter, 0, radius_jupiter, 0, 2 * Math.PI);
					ctx.fillStyle = color_jupiter;
					ctx.fill();
					ctx.restore();

					//saturn orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_saturn, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet saturn
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_saturn) * i / fps);
					ctx.arc(radius_orbit_saturn, 0, radius_saturn, 0, 2 * Math.PI);
					ctx.fillStyle = color_saturn;
					ctx.fill();
					ctx.restore();

					//uranus orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_uranus, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet uranus
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_uranus) * i / fps);
					ctx.arc(radius_orbit_uranus, 0, radius_uranus, 0, 2 * Math.PI);
					ctx.fillStyle = color_uranus;
					ctx.fill();
					ctx.restore();

					//neptune orbit path
					ctx.beginPath();
					ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius_orbit_neptune, 0, 2 * Math.PI);
					ctx.lineWidth = 0.2;
					ctx.strokeStyle = color_orbitpath;
					ctx.stroke();

					//planet neptune
					ctx.save();
					ctx.beginPath();
					ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2); //center anchor to the sun
					ctx.rotate(((2 * Math.PI) / period_neptune) * i / fps);
					ctx.arc(radius_orbit_neptune, 0, radius_neptune, 0, 2 * Math.PI);
					ctx.fillStyle = color_neptune;
					ctx.fill();
					ctx.restore();

					i += (accelerate_simulation);
					window.requestAnimationFrame(draw);
			}, 1000 / fps);
	}
})();

