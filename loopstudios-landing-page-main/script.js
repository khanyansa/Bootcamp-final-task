 const htmlContent = `
            <div class="hero">
                <header>
                    <img src="./images/logo.svg" alt="logo" class="logo">
                    <nav>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Products</a></li>
                            <li><a href="">Support</a></li>
                        </ul>
                    </nav>
                </header>
                <section class="hero-content">
                    <h1>IMMERSIVE <br>EXPERIENCES <br>THAT DELIVER</h1>
                </section>
            </div>
    
            <section class="main">
                <div class="wrap">
                    <div class="main-image">
                        <img src="./images/desktop/image-interactive.jpg" alt="interactive">
                    </div>
                    <div class="main-content">
                        <h2>THE LEADER IN <br> INTERACTIVE VR</h2>
                        <p>Founded in 2011, Loopstudios has been producing world-class <br> virtual reality projects for some of the best companies
                            around the <br>globe. Our award-winning creations have transformed <br>businesses through digital experiences that bind to
                            their brand.
                        </p>
                    </div>
                </div>
                <div class="grid-title">
                    <h2>OUR CREATIONS</h2>
                    <p><a href="">SEE ALL</a></p>
                </div>
                <div class="box-wrap">
                    <div class="box">
                        <img src="./images/desktop/image-deep-earth.jpg" alt="">
                        <h3>DEEP <br>EARTH</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-night-arcade.jpg" alt="">
                        <h3>NIGHT <br>ARCADE</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-soccer-team.jpg" alt="">
                        <h3>SOCCER <br>TEAM VR</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-grid.jpg" alt="">
                        <h3>THE <br>GRID</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-from-above.jpg" alt="">
                        <h3>FROM UP <br>ABOVE VR</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-pocket-borealis.jpg" alt="">
                        <h3>POCKET <br>BOREALIS</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-curiosity.jpg" alt="">
                        <h3>THE <br>CURIOSITY</h3>
                    </div>
                    <div class="box">
                        <img src="./images/desktop/image-fisheye.jpg" alt="">
                        <h3>MAKE IT <br>FISHEYE</h3>
                    </div>
                </div>
            </section>
    
            <footer>
                <div class="socials">
                    <img src="./images/logo.svg" alt="logo">
                    <ul>
                        <li><a href=""><img src="./images/icon-facebook.svg" alt=""></a></li>
                        <li><a href=""><img src="./images/icon-twitter.svg" alt=""></a></li>
                        <li><a href=""><img src="./images/icon-pinterest.svg" alt=""></a></li>
                        <li><a href=""><img src="./images/icon-instagram.svg" alt=""></a></li>
                    </ul>
                </div>
                <div class="quick-links">
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Events</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                    <p>&#169 2021 Loopstudios. All rights reserved. Coded by <a href="https://khanyazn.netlify.com">Nokukhanya</a></p>
                </div>
            </footer>
        `;

        // Render HTML content
        container.innerHTML = htmlContent;