const productCardCSS = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');

body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Alice', serif;
    background: #000; /* Background stays black */
}

.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 900px;
    height: 600px;
    background: #fff;
    margin: 20px;
}

.container .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #0074D9; /* Default secondary color */
    transition: .3s linear;
}

.container .imgBx:before {
    content: 'Web Design';
    position: absolute;
    top: 0px;
    left: 24px;
    color: #000;
    opacity: 0.2;
    font-size: 5em;
    font-weight: 800;
}

.container .imgBx img {
    position: relative;
    width: 400px;
    transition: .9s linear;
}

.container .details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
}

.container .details h2 {
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1em;
    color: #0074D9; /* Default secondary color */
}

.container .details h2 span {
    font-size: 0.4em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
}

.container .details p {
    max-width: 85%;
    margin-left: 15%;
    color: #333;
    font-size: 15px;
    margin-bottom: 36px;
}

.container .details h3 {
    margin: 0;
    padding: 0;
    font-size: 2.5em;
    color: #a2a2a2;
    float: left;
}

.container .details button {
    background: #0074D9; /* Default secondary color */
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 20px;
    margin-top: 5px;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 40px;
    float: right;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.container .details button:hover {
    background-color: #005bb5; /* Darker shade for attention */
    transform: scale(1.1); /* Slight scale effect */
}

.product-colors span {
    width: 26px;
    height: 26px;
    top: 7px;
    margin-right: 12px;
    left: 10px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    display: inline-block;
}

.theme1 {
    background: #001F3F;
}

.theme2 {
    background: #85144b;
}

.theme3 {
    background: #2ECC40;
}

.product-colors .active:after {
    content: "";
    width: 36px;
    height: 36px;
    border: 2px solid #000;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    left: -5px;
    top: -5px;
}

/* Responsive */
@media (max-width: 1080px) {
    .container {
        height: auto;
    }
    .container .imgBx {
        padding: 40px;
        box-sizing: border-box;
        width: 100% !important;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    .container .imgBx img {
        left: initial;
        max-width: 100%;
    }
    .details {
        width: 100% !important;
        height: auto;
        padding: 20px;
    }
    .container .details p {
        margin-left: 0;
        max-width: 100%;
    }
}

footer {
    position: fixed;
    right: 16px;
    bottom: 12px;
}

footer a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}
</style>
`;
