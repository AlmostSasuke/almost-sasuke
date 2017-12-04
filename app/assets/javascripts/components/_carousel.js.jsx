var Carousel = createReactClass({
    render() {
        return (
            <section id="carouselsection">
                <div id="almostcarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#almostcarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#almostcarousel" data-slide-to="1"></li>
                        <li data-target="#almostcarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="/assets/index1.svg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/assets/index1.svg"  alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="/assets/index1.svg"  alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#almostcarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#almostcarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>
        )
    }
});