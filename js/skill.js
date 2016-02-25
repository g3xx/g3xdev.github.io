var doughnutData = [
			{
				value: 7.00,
				color: "#2196F3",
				label: "JS"
			},

			{
				value: 6.50,
				color: "#E91C63",
				label: "PHP"
			},

			{
				value: 1.09,
				color: "#4CAF50",
				label: "CSS"
			},

			{
				value: 1.71,
				color: "#FFC107",
				label: "HTML"
			},

			{
				value: 1.64,
				color: "#4051B5",
				label: "Node"
			},

			{
				value: 1.00,
				color: "#607D8B",
				label: "Delphi"
			}

		];

  window.onload = function(){
     var ctx = document.getElementById("chart-area").getContext("2d");
     window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {animation:false});
  };
