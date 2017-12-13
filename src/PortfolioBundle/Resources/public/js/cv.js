(function ($) {

    function dynamicChartPie(maitrise, chart) {
        var ctx = $(chart);
        var data = {
                labels: [
                    "Maitrisé",
                    "En apprentissage"
                ],
                datasets: [
                    {
                        data: [maitrise, 100-maitrise],
                        backgroundColor: [
                            "#36A2EB",
                            "#FF6384"

                        ],
                        hoverBackgroundColor: [
                            "#36A2EB",
                            "#FF6384"
                        ]
                    }]
            };
        var myPieChart = new Chart(ctx,{
            type: 'pie',
            data: data,
            options: {
                legend: {
                    onClick: null
                },
                responsive: true,
            }
        });
        $.chartLoaded=true;
    }

    function findAllPieCanvas() {
        $("#competences canvas").each(function(index, value) {
            var $this = $(this),
                maitrise = $this.data("maitrise"),
                id = $this.attr("id");
            dynamicChartPie(maitrise, "#" + id);
        })
    }

    function animateCompetencesWhenSeeIt () {
        var positionTopScroll = $(window).scrollTop(),
        endHeader = $('#experiences').height();

        if (endHeader < positionTopScroll && $.chartLoaded === false) {
            findAllPieCanvas();
        }
    }

    $(document).ready(function () {
        $.chartLoaded = false;
        animateCompetencesWhenSeeIt();
    });
    $(window).resize(function () {
        animateCompetencesWhenSeeIt();
    });
    $(window).scroll(function() {
        animateCompetencesWhenSeeIt();
    });
}(jQuery));

