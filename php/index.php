<!DOCTYPE html>
<html lang="en">
    <head>
        <title> Contoh Website PHP | Aldino M P </title>
        <meta charset="UTF-8">
        <meta name="description" content="Aldino M P">
        <link rel="stylesheet" href="index.css" type="text/css">
    </head>
    <body>
        <header>
            <h1 class="title"> WORKSHOP DESAIN WEB</h1>
            <h3 class="desc">Membuat Website Dengan PHP Untuk Pemula</h3>
            <nav id="navigation">
                <ul>
                    <li><a href="index.php?page=home">Home</a></li>
                    <li><a href="index.php?page=about">About</a></li>
                    <li><a href="index.php?page=contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div id="content">
            <?php
            if (isset($_GET{})) {
                $page = $_GET['page'];
                switch($page){
                    case 'home' :
                        include "home.php";
                        break;
                    case 'home' :
                        include "home.php";
                        break;
                    case 'home' :
                        include "home.php";
                        break;
                    }
                } else {
                    include "home.php";
            }
            ?>
        </div>
        <footer>&copy copyright Aldino M P 2025</footer>
    </body>
    </html>