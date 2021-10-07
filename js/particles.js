$("#tsparticles")
	.particles()
	.init({
		fpsLimit: 60,
		particles: {
			number: {
				value: 85,
				density: {
					enable: true,
					value_area: 800,
				},
			},
			color: {
				value: "#ffffff",
			},
			shape: {
				type: "circle",
				stroke: {
					width: 0,
					color: "#000000",
				},
				polygon: {
					nb_sides: 5,
				},
				image: {
					src: "images/github.svg",
					width: 100,
					height: 100,
				},
			},
			opacity: {
				value: 1,
				random: false,
				anim: {
					enable: false,
					speed: 1,
					opacity_min: 0.1,
					sync: false,
				},
			},
			size: {
				value: 30,
				random: true,
				anim: {
					enable: false,
					speed: 40,
					size_min: 0.1,
					sync: false,
				},
			},
			line_linked: {
				enable: true,
				distance: 140, //150,
				color: "#ffffff",
				opacity: 1,
				width: 1,
			},
			move: {
				enable: true,
				speed: 2,
				direction: "none",
				random: false,
				straight: false,
				out_mode: "out",
				attract: {
					enable: false,
					rotateX: 600,
					rotateY: 1200,
				},
			},
		},
		interactivity: {
			detect_on: "canvas",
			events: {
				onHover: {
					enable: false, //true
					mode: "bubble",
					parallax: {
						enable: false,
						force: 60,
						smooth: 10,
					},
				},
				onClick: {
					enable: true,
					mode: "repulse",
				},
				resize: true,
			},
			modes: {
				grab: {
					distance: 400,
					lineLinked: {
						opacity: 1,
					},
				},
				bubble: {
					distance: 400,
					size: 100,
					duration: 2,
					opacity: 1,
					speed: 3,
				},
				repulse: {
					distance: 200,
				},
				push: {
					particles_nb: 4,
				},
				remove: {
					particles_nb: 2,
				},
			},
		},
		backgroundMask: {
			enable: true,
			cover: {
				value: {
					r: 14,
					g: 69,
					b: 113,
				},
			},
		},
		retina_detect: true,
		background: {
			image:
				"url('https://user-images.githubusercontent.com/47064842/115163503-70442a80-a077-11eb-8e62-1cc4d0c9ba5e.jpg')",
			position: "cover",
		},
	});
